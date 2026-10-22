# ポートフォリオ・ショーケース

GitHub: https://github.com/shinsap

English version: [../README.md](../README.md)

このリポジトリは、公開可能な範囲で開発実績をまとめたポートフォリオです。実運用中・開発中のリポジトリは、クライアント情報、運用設定、未公開のプロダクトコードを含むため、多くをprivateで管理しています。

ここでは、公開して問題ない範囲で、企画概要、担当範囲、技術スタック、開発プロセス、AI活用、運用・セキュリティ整理の実績をまとめています。

## プロフィール

北海道札幌市を拠点とする独立系の開発者として、小規模から中規模のWebプロダクトや業務支援ツールを、企画・設計・実装・公開・運用まで一貫して手がけています。開発のご相談・制作のご依頼は、合同会社ノルテリア（Nortelia）を通じてお受けしています。まず業務の流れと困りごとを確認し、本当に必要な機能に絞って、Webアプリ・PWA・管理画面・LP・自動化ツールとして形にします。開発にはAI支援も取り入れ、費用と期間を抑えながら、公開後も使い続けられる仕組みづくりを重視しています。

## こんな依頼に対応できます

スキルの抽象的な列挙ではなく、実際に自社プロダクトで解決してきた課題の類型です。

- **従業員5〜30名の中小企業・個人事業主**で、手作業で行っている日常業務をWebツールに置き換えたい
- **LP＋決済フロー**を小予算・短期間で立ち上げたい（WordPress不要）
- **介護・医療・福祉分野**など、スタッフがスマホからログインなしで使える共有ツールが必要
- **農水産加工など業界特有の計算・最適化**を自動化したい（小規模すぎて既製ソフトが合わない）
- **ホテル・会場運営など**、一般的なパッケージ製品では対応しにくい現場の業務課題をシステム化したい（例：宴会場ごとのメニュー表示）
- **SEOコンテンツサイト＋アプリへの誘導導線**として、検索からサービスへつなぐファネルを作りたい

すべての自社プロダクトは実際の課題から生まれ、業務フローに合わせて設計し、現在も本番運用中です。

## 対応範囲

構想段階から公開後の運用まで、一貫して対応できます。

- **企画：** 課題と現在の業務の流れを整理し、何を作るべきか・作らなくてよいかを判断する
- **設計：** 要件定義、ユーザーフロー、データ構造、画面設計
- **開発：** Webアプリ、PWA、管理画面、LP、決済導線、自動化ツール
- **公開：** デプロイ、ドメイン設定、アクセス計測、問い合わせフォーム
- **運用：** 保守、依存関係の更新、公開後の機能改善

小規模な案件も歓迎します。「この手作業を1つなくしたい」といった相談から始めるのが、結果的に効果的なことも多いです。

## 開発スタイル

- 技術選定の前に、業務課題と現在の業務フローを確認し、目的とユーザーフローを整理する
- 必要な機能に絞り、課題の大きさに見合った費用と期間で作る
- AI支援開発は手段として活用し、独立したレビュー工程と組み合わせる。設計・セキュリティ・リリースの判断は人間が行う
- 開発本線、staging/test、archive済みrepoを分けて管理し、変更はstagingで検証してからproductionへ反映する
- productionへの変更は明示的な承認を経てのみ行い、通常の開発作業のついでに本番を変更しない
- 公開後も保守を続ける。依存関係や実行環境の更新（稼働中プロジェクトの依存関係に対する定期的なセキュリティ確認を含む）は、変更の影響範囲を評価したうえで反映する
- secretをソースコードに入れず、Actions、webhooks、deploy keys、外部サービス連携を定期的に確認する
- AI検索・生成AI経由のDiscoverabilityを意識し、schema.org / JSON-LD、robots.txt、sitemap、canonical、AI crawler対応、プロダクト/企業情報のmachine-readableな明示化を実装する

## 主なプロジェクト

| Project | Type | Status | Public URL | Stack | 解決した課題 |
|---|---|---|---|---|---|
| [BQmenu](projects/bq-menu.md) | ホテル宴会場向けB2B SaaS | MVP完成 / production稼働・初号顧客導入決定 | [App](https://app.bqmenu.com)（スタッフログイン制） | React, TypeScript, Vite, Tailwind CSS, Supabase, PostgreSQL, Cloudflare Pages / Workers | 実際のホテル現場からの業務相談を起点に、特定ホテル専用ではなくマルチテナントSaaSとして開発。固定QR・会場/時間重複チェック・自動公開タイミングで紙メニューの差し替えや会場案内の手間を軽減 |
| [切り身重量合わせ / Portion Weight Match](projects/portion-weight-match.md) | 水産・食品加工向け最適化ツール | 稼働中 | [App](https://portion-weight-match.vercel.app/) / [GitHub](https://github.com/shinsap/portion-weight-match) | Next.js, React, TypeScript, HiGHS/WASM, XLSX, Vercel | 不定貫の切り身などを最低パック重量以上になるよう組み合わせる作業を自動化。条件を満たすパック数を最大化し、総余剰重量を最小化してExcel作業指示書までブラウザ内で出力 |
| [Rescue Pet Card](projects/rescuecat-v4.md)（旧Rescue Cat Card v4） | 緊急時ペット保護サービス | ローンチ済み / 稼働中 | [App](https://app.rescuepet.jp/) | React, React Router v7, TypeScript, Vite, Tailwind CSS, Supabase, Stripe, Cloudflare Pages/Workers | 飼い主が倒れた時に第三者が猫・犬の情報を知る手段がなかった → NFC/QRカード＋Stripe＋Supabase。2026年7月に猫専用から猫犬両対応へリブランドし、購入前プレビュー方式へフロー刷新 |
| [RepoBD](../projects/repobd.md) | 開発者向けsecret transport CLI / OSS | v0.1.1公開中 | [Site](https://repobd.com) / [GitHub](https://github.com/repobd/repobd) | TypeScript, Node.js, Cloudflare Workers, D1, AES-256-GCM | API key/tokenにはrepoの文脈がない → 一回限りの暗号化deliveryを意図したcanonical Git originにbindし、wrong-repo pullをsecret取得前に拒否。同一repo内のbranch、environment、credential用途、受信者の違いは判定対象外 |
| [Vulneramigo（ヴァルネラミーゴ）](projects/vulneramigo.md) | Web制作会社・中小企業向け脆弱性情報レポートツール | 開発中 / 公開準備中 | 未公開 | React, TypeScript, Vite, PWA, Cloudflare Workers | PHP・Node.js・Oracle Javaの脆弱性情報は専門的で非技術者に説明しにくい → 入力したバージョンを公式情報に基づく収録済み情報と照合し、担当者向けの平易な説明と制作会社向け技術情報をレポート化（日英西対応、印刷・PDF保存、ブラウザ内処理） |
| [Rescue Pet Card LP](projects/rescuecat-lp.md)（旧Rescue Cat Card LP） | ランディングページ | 稼働中 | [LP](https://rescuepet.jp/) | Astro, TypeScript, Tailwind CSS, Cloudflare Pages | 抽象的な価値を持つサービスをストーリーで伝え、Stripe直接購入ではなくアプリの無料プレビュー登録へ誘導するLP |
| [Nortelia LP](projects/nortelia-lp.md) | コーポレートサイト | 稼働中 | [LP](https://nortelia.co.jp) | Astro, TypeScript, Tailwind CSS, Cloudflare Pages | 自社開発アプリを紹介し、補聴器電池検索LPとSEOコンテンツツールを内包するコーポレートサイト |
| [電池あった？](projects/denchi-atta.md) | 家庭向け電池記録PWA | 稼働中 | [LP](https://nortelia.co.jp/apps/battery/) / [App](https://app.nortelia.co.jp/) | React, TypeScript, Vite, Dexie, Firebase, PWA | どの機器にどの電池か毎回わからない → ログイン不要PWAで家族間同期 |
| [補聴器でんち帳](projects/denchichou.md) | 介護業界向け補聴器電池記録PWA | 稼働中 | [LP](https://nortelia.co.jp/apps/denchichou/) / [App](https://denchichou.nortelia.co.jp/) | React, TypeScript, Vite, Dexie, Firebase, PWA | 介護スタッフが利用者ごとの電池サイズを毎回確認・引き継ぎ断絶 → 名前検索＋スタッフ同期コード |
| [Pack Optimizer](projects/pack-optimizer.md) | 最適化ツール | 稼働中 | [App](https://pack-optimizer.vercel.app/) | Next.js, React, TypeScript, Tailwind CSS, Vercel | 水産加工業者が定量パック組み合わせを手計算 → アルゴリズムで自動最適化 |
| [BQmenu LP](projects/bqmenu-lp.md) | ランディングページ / Go-to-Market | production稼働 | [LP](https://bqmenu.com) | Vite, React, TypeScript, Tailwind CSS, Cloudflare Pages | Source of Truthに基づき製品仕様・営業表現・パートナー資料を一致させ続けるプロセスで開発。GA4によるリード計測をproduction環境で確認済み |
| [Shinkyu](projects/shinkyu.md) | 営業支援ツール | 稼働中 / 非公開運用 | private運用 | Next.js, React, TypeScript, Supabase, Anthropic SDK, Cloudflare Pages | 鍼灸治療院向けAI支援営業ツール |
| [外注前ナビ](projects/gaichu.md) | 中小企業向け外注前診断ツール | 稼働中 | [App](https://gaichu.nortelia.co.jp) | Astro, React, TypeScript, Tailwind CSS v4, Cloudflare Pages, Cloudflare Pages Functions, Gemini 2.5 Flash-Lite, Turnstile, Zod | 「作らない・内製する・外注する」をQ&A形式で整理する診断サービス。診断ロジックはクライアント完結、AIは出力整形のみ |

## AIツール活用

AIは開発を効率化するための手段であり、それ自体が提供価値ではありません。費用と期間を抑えるために活用し、お客様にとって大切な「業務に合っていて、公開後も保守できる仕組み」を届けることを重視しています。

AIツールは主に以下に使っています。

- 要件分解
- プロトタイプ作成
- コンポーネント実装
- リファクタリング補助
- ドキュメント作成
- セキュリティ・リポジトリ棚卸し
- デプロイやworkflowの確認

AIの出力はそのまま採用せず、プロダクトの目的、データの扱い、運用上の制約、セキュリティ面を確認してから取り込んでいます。

## 公開用コードサンプル

- [AI支援開発ワークフロー例](code-samples/ai-workflow-example.md)
- [フロントエンドコンポーネント例](code-samples/frontend-component-example.tsx)
- [API境界設計例](code-samples/api-boundary-example.ts)

これらは公開用に簡略化・サニタイズしたサンプルです。production codeそのものではなく、実装スタイルや設計判断を示すためのものです。

## private repo運用について

多くのrepoは以下の理由でprivate管理しています。

- 開発中のプロダクト
- クライアント・パートナーに関わる情報
- 運用・デプロイ設定
- 未公開の実装詳細
- secretや外部サービス連携の安全管理

必要に応じて、共有可能な範囲のファイル、スクリーンショット、画面共有、またはサニタイズ済みrepoで詳細を説明できます。

## お問い合わせ

開発のご相談・制作のご依頼は、[nortelia.co.jp/contact](https://nortelia.co.jp/contact/) のお問い合わせフォームからご連絡ください。
