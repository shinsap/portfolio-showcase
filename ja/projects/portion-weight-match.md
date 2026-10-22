# 切り身重量合わせ / Portion Weight Match

## 概要

切り身重量合わせは、1個ずつ重量が異なる切り身などを、指定した最低パック重量以上になるように組み合わせるブラウザ完結型の最適化ツールです。

もともとは水産加工現場を想定して設計しましたが、個体重量にばらつきがあり、固定個数ではなくパック全体の重量を基準にまとめる商材にも利用できます。

本番版では、日本向けとUS向けを明確に分離しています。

- 日本向け：g固定で入力・計算
- US向け：切り身重量はoz固定、パック最低重量はlbで入力

CSVデータ、最適化計算、Excel生成はすべてブラウザ内で完結し、バックエンド、DB、アカウント登録、業務データのアップロードを必要としません。

## 課題

鮭などの切り身は1切れごとの重量が一定ではありません。そのため「1パック2,000g以上」「1パック4.5lb以上」のような条件でまとめる場合、在庫している重量帯と数量の組み合わせ自体が最適化問題になります。

人間が見て作りやすい組み合わせを順番に作っていっても、それが在庫全体として最も効率的とは限りません。途中で使う重量を誤ると、最終的に作れるパック数が減ったり、全体の余剰重量（giveaway）が増えたりします。

必要なのは「条件を満たす1パックを作る」ことではなく、在庫全体を見た最適化です。

**対象ユーザーと応用：** 不定貫商材をパック総重量でまとめる中小規模の水産加工業者・食品加工業者。「手元のデータをCSVで読み込み、ブラウザ内で計算し、現場で使えるExcel作業指示書として出力する」という仕組みは、現在手作業で行っている他の現場固有の計算・計画業務にも応用できます。

## 本番設計

利用者は、重量区分と在庫数を記録したCSVを読み込み、1パックあたりの最低重量を入力して計算を実行します。

結果には以下を表示します。

- 確認できた最大パック数
- 各パックで使用する重量区分と数量
- 各パックの総重量と余剰重量
- 残在庫
- Excel作業指示書の出力

最適化の専門知識を持つ人ではなく、実際の製造・加工現場で使う人を想定し、単一用途のシンプルなUIにしています。

## 最適化ロジック

目的関数は辞書式です。

1. 最低重量を満たすパック数を最大化する
2. 最大パック数を固定したうえで、使用総重量を最小化し、総余剰重量を最小化する

本番optimizerはHiGHSをWebAssemblyで実行し、整数最適化を中心に、pattern / Column Generation系の経路とcompact MIPを入力に応じて利用する構成です。

重要な設計原則はfail-closedです。設定された計算上限内で最適性を確認できなかった場合、「おそらく良い組み合わせ」をOptimalとして返しません。結果を返さず、最適解を確認できなかったことを明示します。

これはMVP初期から大きく変更した点です。初期の逐次・greedy的な方法では、一見妥当でも在庫全体では劣る組み合わせになる反例が見つかり、全体最適化を前提とする構成へ作り直しました。

## US向けのnative重量処理

USページは、日本向けのg計算を単純にoz表示へ変換したものではありません。

USの切り身重量は最初から `0.01 oz` を1とする整数tickへ正規化し、lbの最低重量は `1 lb = 16 oz` として正確に変換します。US入力をgへ変換する経路はありません。

これにより、oz→g変換による不要な小数精度や状態空間の増大を避けつつ、JP/USで単位に依存しないoptimizer coreを共有しています。

CSV形式はJP/USとも `weights,stock` で共通のため、CSV自体には単位情報がありません。そのため画面上で「g用CSVをUSへ」「oz用CSVをJPへ」誤投入しないよう明示的に注意表示しています。

## 入力上限と計算安全性

本番の運用ポリシーは以下です。

- 最大50重量区分まで受理
- 安定した計算のため25区分以下を推奨
- 26〜50区分はwarningを表示するが計算可能
- 51区分以上は計算前に拒否

ただし、計算難易度は重量区分数だけでは決まりません。重量の分布、在庫数、最低パック重量と1個あたり重量の関係も組み合わせ問題の規模に影響します。

そのため25/50という数字は「必ず解ける境界」ではなく、実運用上のガードレールとして扱っています。複雑な入力が計算上限に達した場合は、未証明の結果を返さず安全に停止します。

## プライバシー / セキュリティ

アプリは意図的にbrowser-only構成にしています。

- バックエンドAPIなし
- DBなし
- 認証なし
- CSV / 在庫データのアップロードなし
- 業務データを送るanalytics / telemetryなし
- CSV内容、ファイル名、計算結果の永続保存なし

CSV入力では、不正形式、非安全な数値、overflow、過剰な重量区分、制御文字、計算資源上限などを検証しています。最適化はWeb Worker内で実行し、wall-clock budgetを超えた場合はWorkerを停止してfail-closedします。

Excelはブラウザ内で独自のOOXML/ZIP writerを使って生成し、XML escapingとspreadsheet formula injection対策を実装しています。

本番では、MIME sniffing防止、Referrer Policy、framing防止、未使用ブラウザ権限の制限などのsecurity headerも追加しています。

## 検証

本番リリース前には以下を確認しました。

- production-like inventoryを使ったregression fixture
- US 17重量区分のexact fixture
- Chromium production E2E
- WebKit production E2E
- Firefox basic compatibility
- CSV境界値 / overflow test
- XLSX生成test
- browser-only / US no-gramsのarchitecture test
- security final review
- Human Preview acceptance

USの代表fixtureでは、17重量区分・366 pieces・最低4.5lbに対して、30 packs / excess 0 / 残在庫保存をexact resultとして確認しています。

## 公開URL

- App: https://portion-weight-match.vercel.app/
- GitHub: https://github.com/shinsap/portion-weight-match

## 担当範囲

- プロダクト企画・現場フロー整理
- 要件定義・最適化目的関数の設計
- browser-onlyアーキテクチャ設計
- JP / USの単位境界設計
- CSV validation / 運用上限設計
- HiGHS / WebAssemblyを利用した厳密最適化設計
- Excel作業指示書の出力設計
- privacy / security boundary設計
- Human acceptance test
- AI実装 + 独立レビューを分離した開発運用
- Vercel本番デプロイ・repo governance

## 技術スタック

- Next.js
- React
- TypeScript
- HiGHS / WebAssembly
- Web Workers
- JSZip / OOXML
- Vitest
- Playwright
- Vercel

## このプロジェクトで示せること

- 実際の食品加工現場の課題を、厳密最適化を使ったプロダクトへ落とし込む設計
- greedy / 局所最適の限界を反例から見つけ、全体最適化へ再設計するプロセス
- 単位固有のnormalizationと共有optimizer coreを分離するアーキテクチャ
- 計算困難な入力に対して未証明解を返さないfail-closed設計
- 業務データを外部へ送らないbrowser-only設計
- CSV入力 → 最適化 → Excel作業指示書までを1つの軽量Webツールへ統合するUX
- regression fixture、独立AI review、browser E2E、security review、Human Previewを使い、MVPを本番リリースまで仕上げる開発プロセス
