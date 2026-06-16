# ポートフォリオ・ショーケース

GitHub: https://github.com/shinsap

English version: [../README.md](../README.md)

このリポジトリは、公開可能な範囲で開発実績をまとめたポートフォリオです。実運用中・開発中のリポジトリは、クライアント情報、運用設定、未公開のプロダクトコードを含むため、多くをprivateで管理しています。

ここでは、公開して問題ない範囲で、企画概要、担当範囲、技術スタック、開発プロセス、AI活用、運用・セキュリティ整理の実績をまとめています。

## プロフィール

小規模から中規模のWebプロダクト、業務支援ツール、LP、デモアプリを、企画から実装・運用整理まで行っています。北海道札幌市を拠点に、AI支援開発を活用しながらプロトタイピング、local-firstアプリ、管理ツール、サービス導線の実装に取り組んでいます。

## こんな依頼に対応できます

スキルの抽象的な列挙ではなく、実際に自社プロダクトで解決してきた課題の類型です。

- **従業員5〜30名の中小企業・個人事業主**で、手作業で行っている日常業務をWebツールに置き換えたい
- **LP＋決済フロー**を小予算・短期間で立ち上げたい（WordPress不要）
- **介護・医療・福祉分野**など、スタッフがスマホからログインなしで使える共有ツールが必要
- **農水産加工など業界特有の計算・最適化**を自動化したい（小規模すぎて既製ソフトが合わない）
- **SEOコンテンツサイト＋アプリへの誘導導線**として、検索からサービスへつなぐファネルを作りたい

すべての自社プロダクトは実際の課題から生まれ、業務フローに合わせて設計し、現在も本番運用中です。

## 開発スタイル

- まずプロダクトの目的とユーザーフローを整理する
- AIツールで実装速度を上げつつ、設計・セキュリティ・repo整理・デプロイ判断は人間が確認する
- 開発本線、staging/test、archive済みrepoを分けて管理する
- secretをソースコードに入れず、Actions、webhooks、deploy keys、外部サービス連携を定期的に確認する

## 主なプロジェクト

| Project | Type | Status | Public URL | Stack | 解決した課題 |
|---|---|---|---|---|---|
| [Rescue Cat Card v4](projects/rescuecat-v4.md) | 緊急時ペット保護サービス | ローンチ済み / 稼働中 | [App](https://app.rescuecat.jp/) | React, React Router v7, TypeScript, Vite, Tailwind CSS, Supabase, Stripe, Cloudflare Pages/Workers | 飼い主が倒れた時に第三者が猫の情報を知る手段がなかった → NFC/QRカード＋Stripe＋Supabase |
| [Rescue Cat Card LP](projects/rescuecat-lp.md) | ランディングページ | 稼働中 | [LP](https://rescuecat.jp/) | Astro, TypeScript, Tailwind CSS, Cloudflare Pages, Stripe Payment Link | 抽象的な価値を持つサービスをストーリーで伝えStripe購入に誘導するLP |
| [Nortelia LP](projects/nortelia-lp.md) | コーポレートサイト | 稼働中 | [LP](https://nortelia.co.jp) | Astro, TypeScript, Tailwind CSS, Cloudflare Pages | 補聴器でんち帳LPとSEOコンテンツツールを内包するブランドサイト |
| [電池あった？](projects/denchi-atta.md) | 家庭向け電池記録PWA | 稼働中 | [LP](https://nortelia.co.jp/apps/battery/) / [App](https://app.nortelia.co.jp/) | React, TypeScript, Vite, Dexie, Firebase, PWA | どの機器にどの電池か毎回わからない → ログイン不要PWAで家族間同期 |
| [補聴器でんち帳](projects/denchichou.md) | 介護業界向け補聴器電池記録PWA | 稼働中 | [LP](https://nortelia.co.jp/apps/denchichou/) / [App](https://denchichou.nortelia.co.jp/) | React, TypeScript, Vite, Dexie, Firebase, PWA | 介護スタッフが利用者ごとの電池サイズを毎回確認・引き継ぎ断絶 → 名前検索＋スタッフ同期コード |
| [Pack Optimizer](projects/pack-optimizer.md) | 最適化ツール | 稼働中 | [App](https://pack-optimizer.vercel.app/) | Next.js, React, TypeScript, Tailwind CSS, Vercel | 水産加工業者が定量パック組み合わせを手計算 → アルゴリズムで自動最適化 |
| [BQ Menu](projects/bq-menu.md) | ホテル宴会場向け省力化システム | 稼働中 / 非公開デモ | 非公開デモ | React, TypeScript, Vite, Tailwind CSS, Supabase, Vercel | QRでPDFメニューを表示、宴会場ごとの時間設定・急なメニュー変更に対応 |
| [Shinkyu](projects/shinkyu.md) | 営業支援ツール | 稼働中 / 非公開運用 | private運用 | Next.js, React, TypeScript, Supabase, Anthropic SDK, Cloudflare Pages | 鍼灸治療院向けAI支援営業ツール |

## AIツール活用

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
