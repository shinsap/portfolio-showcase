# Shinya Sato｜プロダクト開発ポートフォリオ

**業務課題を整理し、要件定義・技術設計・AIを活用した開発・公開後の運用まで取り組んでいます。**

北海道札幌市を拠点に、合同会社ノルテリアを運営しています。BtoB営業、新規事業、水産・食品分野での経験をもとに、現場の業務や事業上の制約をWebアプリや業務支援ツールの仕様へ落とし込んでいます。

開発では、提供範囲、データの扱い、運用負荷、検証結果を踏まえて設計を判断します。Claude CodeやCodexを実装・レビューに活用し、プロダクトの方向性、要件の採否、受け入れ基準を自分で定めています。

[GitHub](https://github.com/shinsap) · [Nortelia](https://nortelia.co.jp/) · [English](../README.md)

最終更新：2026-11-08

## 代表プロジェクト

### 1. BQmenu｜現場の業務相談をマルチテナントSaaSへ

ホテル宴会場のメニューPDFを、固定QRから指定日時に表示するB2B SaaS。現場の相談を、会場モデル、公開時間、テナント分離、PDF管理の要件へ整理しました。

- **設計：** 物理区画と結合会場のモデル、PostgreSQL RLS、サーバー側のPDF検証。
- **変更・復旧：** 内部IDを公開しない要件に合わせてPDF配信方式を変更。本番の削除失敗は追加マイグレーションで修正し、失敗中2件の再試行と再登録まで確認。
- **担当：** 要件・データモデル・受け入れ基準の整理、AI開発の進行、指摘への対応判断、導入・運用手順。

**状態：** MVP完成・本番稼働、初号顧客の導入決定。
**技術：** React / TypeScript / Supabase / PostgreSQL / Cloudflare

[詳細](projects/bq-menu.md) · [製品サイト](https://bqmenu.com)

### 2. Rescue Pet Card｜物理カードとWebサービスの継続運用

緊急時にNFC・QRカードからペットの保護情報を確認するサービス。認証・ペット情報・決済・公開画面を組み合わせています。

- **設計：** 猫犬の共通・固有データの分離、本人限定の購入前プレビュー、サーバー側の購入プラン判定。
- **変更・改善：** リブランド後も発行済みカードのURLを維持。計測情報の不備で購入を止めないよう、任意の計測情報と購入必須情報を分離した修正を実施。
- **担当：** 企画、要件・購入フローの整理、AI開発の進行、認可・購入フローの確認、継続運用。

**状態：** 公開・運用中。計測関連修正の本番反映状況は詳細に区別して記載。
**技術：** React / TypeScript / Supabase / Stripe / Cloudflare

[詳細](projects/rescuecat-v4.md) · [製品サイト](https://rescuepet.jp/)

### 3. Portion Weight Match｜食品加工の課題を整数最適化へ

重量の異なる切り身を組み合わせ、最低重量を満たすパックを作るブラウザ完結型ツール。CSV入力からExcel作業指示書の出力まで対応しています。

- **設計：** パック数を最大化し、その条件下で余剰重量を最小化。業務データは外部送信せず、計算はWeb Workerで実行。
- **設計変更：** 逐次方式の反例を受けて厳密DPへ変更。その後、HiGHS・WebAssemblyを用いた列生成・MIPへ段階的に発展。未確認の結果を「最適解」としない判定条件を検証。
- **担当：** 業務課題、目的関数、入力制約、単位処理の要件設計と検証結果に基づく再設計判断。

**状態：** 公開・運用中。ソースコード非公開。
**技術：** Next.js / TypeScript / HiGHS・WebAssembly / Web Workers / Vitest / Playwright

[詳細](projects/portion-weight-match.md) · [アプリ](https://portion-weight-match.vercel.app/)

### 4. RepoBD｜開発中の失敗を用途を絞ったOSSへ

APIキーを誤ったリポジトリへ設定した経験を起点にしたCLI。暗号化したキーの一回限りの受け渡しと、取得前のGit origin照合を組み合わせています。

- **設計：** クライアント側暗号化、短い有効期限、限定した `.env` 書き込み。保護対象と対象外を要件で明示。
- **失敗時の扱い：** 書き込み確認後に使用済み処理を行い、その通信が失敗した際はファイルを再度書き換えず、回数を限定して再試行。
- **担当：** 課題・保護範囲・脅威モデルの策定、AI実装と独立レビューの進行、修正・公開判断。

**状態：** v0.1.1公開、MITライセンス。
**技術：** TypeScript / Node.js / Cloudflare Workers / D1 / AES-256-GCM

[詳細](projects/repobd.md) · [公開コード](https://github.com/repobd/repobd) · [製品サイト](https://repobd.com)

## 技術と設計判断

| 領域 | 使用技術・取り組み | 主な事例 |
|---|---|---|
| Webアプリ・PWA | TypeScript、React、Next.js、Vite、Service Worker | Rescue Pet Card、Hit & Lock |
| データ・認可 | Supabase、PostgreSQL、RLS、サーバー側検証 | BQmenu、Rescue Pet Card |
| 計算・ブラウザ処理 | 整数最適化、WebAssembly、Web Workers | Portion Weight Match |
| AI機能 | 決定論的ルールと生成AIの分離、APIキーのサーバー側管理 | 外注前ナビ |
| 品質・復旧 | Vitest、Playwright、境界値・回帰テスト、更新失敗・復旧の確認 | Portion Weight Match、Vulneramigo |
| 公開・計測 | Cloudflare、Vercel、GitHub Actions、GA4、GSC | プロダクト・LP各案件 |
| メディア処理 | Python、Playwright、FFmpeg、地理データ・音声合成 | 方位当てクイズ、WobblyMaps |

## AIを活用した開発

| 役割 | 主な担当 |
|---|---|
| 私 | 課題整理、提供範囲、設計判断、受け入れ基準、指摘への対応判断、実機・業務視点の確認 |
| Claude Codeなどの実装AI | 合意した要件に沿ったコード・テスト・文書の作成と修正 |
| CodexなどのレビューAI | 要件と差分の照合、不具合や認可・データ処理上の懸念の指摘 |

指摘は、影響・成立条件・利用者の操作・修正コスト・運用負荷を踏まえて判断します。AIレビュー自体も、実測結果や追加検証によって再評価します。コードをAIが作成した範囲と、自分が定義・判断した範囲を各事例で説明します。

Hit & Lockでは、対象の機能追加に限り、事前に定めたテスト・レビュー条件で自動マージと本番確認を行う実験も実施しました。全案件共通のリリース方式ではありません。

[開発・検証フロー](code-samples/ai-workflow-example.md)

## その他の開発実績

| 案件 | 内容・技術的な特徴 |
|---|---|
| [Vulneramigo](projects/vulneramigo.md) | URLの公開設定と収録済み脆弱性情報を確認。非技術者と制作会社双方へレポートを提供。実配信で発見したキャッシュ不具合の回帰テストも実施 |
| [Hokkaidoku](projects/hokkaidoku.md) | Web Workerによる問題生成、理由付きヒント、オフライン対応。テスト版公開中 |
| [Hit & Lock](projects/hit-and-lock.md) | TypeScript製PWA。ゲームロジックとUIの分離、単体・E2Eテスト、モバイル表示改善、AI開発運用の実験 |
| [外注前ナビ](projects/gaichu.md) | JSONルールで診断し、生成AIは説明の整形に限定。AI停止時にも診断は継続 |
| [Pack Optimizer](projects/pack-optimizer.md) | 固定個数パックの組み合わせ計算。[ソースコード公開](https://github.com/shinsap/pack-optimizer) |
| [Shinkyu](projects/shinkyu.md) | 鍼灸治療院向け営業支援ツール。非公開運用 |

## 小規模PWA・用途別プロトタイピング

公開中の小規模PWAとして、導入体験とlocal-first構成を試した案件です。Vercelが配信・デプロイ、Firebaseが同期、Dexie／IndexedDBが端末内保存を担います。

- [電池あった？](projects/denchi-atta.md)：家庭の機器・電池情報の記録と共有。
- [補聴器でんち帳](projects/denchichou.md)：利用者名での検索とスタッフ間共有、型番検索LPからの導線。

## Webサイト・LP・計測基盤

サイト制作に加え、検索流入から問い合わせまでを確認するためのGA4・Google Search Console（GSC）の設定・連携も扱います。案件ごとの設定・動作確認範囲と、成果改善の実績を分けて記載しています。

[Nortelia](projects/nortelia-lp.md) · [BQmenu LP](projects/bqmenu-lp.md) · [Rescue Pet Card LP](projects/rescuecat-lp.md) · [計測の担当範囲・確認状況](projects/measurement.md)

## 動画生成・メディア処理の技術実験

Pythonとブラウザ描画を組み合わせ、データから映像・音声・カバーを生成するローカル制作パイプラインです。動画作成テストとして制作し、TikTok等へ投稿しています。

- [方位当てクイズ](projects/houi-atequiz.md)：JSON → 地図・方位図 → ナレーション・合成音 → ショート動画。[TikTok](https://www.tiktok.com/@houiatejp)
- [WobblyMaps](projects/wobblymaps.md)：GeoJSON → 形状処理・転がり表現 → 接地音と投稿先別動画。[TikTok](https://www.tiktok.com/@wobblymaps)

## 過去の生成AIコンテンツ制作

[Suno楽曲制作](projects/suno-music.md)：Sunoによる楽曲生成、AIによるサムネイル制作、YouTube公開とDistroKid経由の音楽配信。ソフトウェア開発とは別の制作実験です。

## ソースコードと詳細確認

公開コードは[RepoBD](https://github.com/repobd/repobd)と[Pack Optimizer](https://github.com/shinsap/pack-optimizer)から確認できます。その他の多くの案件は事業・クライアント・運用情報の扱いから非公開です。動画2件はローカル管理でGitHubリポジトリはありません。

各詳細ページには公開可能な設計判断・担当範囲・検証結果をまとめています。基本的な型・表示処理の[補助サンプル](code-samples/frontend-component-example.tsx)と[入力検証例](code-samples/api-boundary-example.ts)は、実案件のコードや品質を証明するものではありません。

## 連絡先

業務理解・要件定義・AI活用を含むプロダクト開発について、採用・協業・開発のご相談をお受けしています。

[Nortelia お問い合わせフォーム](https://nortelia.co.jp/contact/)
