# ポートフォリオ・ショーケース

GitHub: https://github.com/shinsap

English version: [../README.md](../README.md)

このリポジトリは、公開可能な範囲で開発実績をまとめたポートフォリオです。実運用中・開発中のリポジトリは、クライアント情報、運用設定、未公開のプロダクトコードを含むため、多くをprivateで管理しています。

ここでは、公開して問題ない範囲で、企画概要、担当範囲、技術スタック、開発プロセス、AI活用、運用・セキュリティ整理の実績をまとめています。

## プロフィール

小規模から中規模のWebプロダクト、業務支援ツール、LP、デモアプリを、企画から実装・運用整理まで行っています。個人でAI支援開発を活用しながら、プロトタイピング、local-firstアプリ、管理ツール、サービス導線の実装に取り組んでいます。

## 開発スタイル

- まずプロダクトの目的とユーザーフローを整理する
- AIツールで実装速度を上げつつ、設計・セキュリティ・repo整理・デプロイ判断は人間が確認する
- 開発本線、staging/test、archive済みrepoを分けて管理する
- secretをソースコードに入れず、Actions、webhooks、deploy keys、外部サービス連携を定期的に確認する

## 主なプロジェクト

| Project | Type | Status | Public URL | Stack | Notes |
|---|---|---|---|---|---|
| [Rescue Cat Card v4](projects/rescuecat-v4.md) | 緊急時ペット保護サービス | ローンチ済み / 稼働中 | [App](https://app.rescuecat.jp/) | React, React Router v7, TypeScript, Vite, Tailwind CSS, Supabase, Stripe, Cloudflare Pages/Workers | 飼い主が事故や災害などで対応できない状況でも、第三者がNFC/QRカードから猫の保護情報へアクセスできるサービス |
| [Rescue Cat Card LP](projects/rescuecat-lp.md) | ランディングページ | 稼働中 | [LP](https://rescuecat.jp/) | Modern frontend, Cloudflare/Vercel向けデプロイ | Rescue Cat Cardの認知・説明・導線を担う公開ページ |
| [Nortelia LP](projects/nortelia-lp.md) | ランディングページ | 稼働中 | [LP](https://nortelia.co.jp) | Astro, Tailwind CSS | 公開向けのブランド/サービスページ。補聴器でんち帳LPも内包 |
| [電池あった？](projects/denchi-atta.md) | 家庭向け電池記録PWA | 開発中 | [LP](https://nortelia.co.jp/apps/battery/) / [App](https://app.nortelia.co.jp/) | React, TypeScript, Vite, React Router, Dexie, Firebase, PWA | 個人・家庭内の電池を記録し、交換時にどの電池を使うか確認するアプリ |
| [BQ Menu](projects/bq-menu.md) | ホテル宴会場向け省力化システム | 稼働中 / クローズドデモ | クローズドデモ | React, TypeScript, Vite, Tailwind CSS, Supabase, Vercel | QRを読み込むと宴会・イベント用PDFメニューが表示され、宴会場ごとの時間設定や急なメニュー変更にも対応できるシステム |
| [補聴器でんち帳](projects/denchichou.md) | 介護業界向け補聴器電池記録PWA | 開発中 | [LP](https://nortelia.co.jp/apps/denchichou/) / [App](https://denchichou.nortelia.co.jp/) | React, TypeScript, Vite, React Router, Dexie, Firebase, PWA | 施設利用者等の補聴器電池を記録し、検索LPからアプリへつなぐ導線を持つ |
| [Shinkyu](projects/shinkyu.md) | 営業支援ツール | 稼働中 | private運用 | Next.js, React, TypeScript, Supabase, Anthropic SDK, Cloudflare Pages | 鍼灸治療院向け営業ツール |
| [Pack Optimizer](projects/pack-optimizer.md) | 最適化ツール | 稼働中/public | [App](https://pack-optimizer.vercel.app/) | Next.js, React, TypeScript, Tailwind CSS, Vercel | 不定貫商材の固定個数パック作成を支援するpublic repo |

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
