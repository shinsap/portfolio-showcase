# Nortelia LP

## 概要

Nortelia LPは、合同会社ノルテリアの公式コーポレートサイトです。

日本語版は国内向けの事業・サービス・自社プロダクトをまとめた構成です。英語版は日本語版の全翻訳ではなく、Norteliaを **small product studio / practical software builder** として紹介するため、プロダクト開発・業務ツール・AI支援開発を中心に再構成しています。

サイト内には、補聴器でんち帳や電池あった？などのアプリLPも含まれています。

## 公開URL

- 日本語: https://nortelia.co.jp
- 英語: https://nortelia.co.jp/en/
- BQmenu英語事例: https://nortelia.co.jp/en/works/bqmenu/

## 担当範囲

- 情報設計・ページ構成
- ビジュアル方向性の整理
- フロントエンド実装
- コピー・コンテンツ整理
- Product Showcase設計
- 日本語／英語サイト構成
- SEO、構造化データ、canonical、sitemap、hreflang設計
- Web3Formsを使った日英共通Contact導線
- Product case studyの構成
- build check / secret scanを含むデプロイ運用

## 英語版 Phase 1

英語版は、日本語サイトをそのまま翻訳するのではなく、海外から見たときに意味のあるプロダクト開発情報を選択して構成しました。

英語トップの構成:

- Hero
- Built by Nortelia
- What We Do
- Products
- How We Work
- About
- Contact

英語版では、RepoBD、BQmenu、Portion Weight Match、Pack Optimizer、Rescue Pet Cardを紹介しています。

英語で利用可能なプロダクトと、日本語UIまたは日本市場向け運用のプロダクトを明示的に分け、海外提供済みと誤認されないようにしています。

### BQmenu事例

BQmenu英語事例では、実際のホテルからの相談を起点に、単発の受託システムではなく、他ホテルにも展開可能なB2B SaaSとして設計した経緯を説明しています。

BQmenu本体がすでに多言語対応・海外展開済みであるとは記載していません。

## Built by Nortelia

トップ付近に、自社開発プロダクトを視覚的に見せる **Built by Nortelia** Showcaseを実装しています。

- 実際のプロダクト画像を使った横スクロールカード
- デスクトップ自動スクロール
- drag操作
- モバイルswipe
- native link
- pause / resume
- reduced-motion対応
- 詳細Product一覧は別セクションとして維持

## 日英共通Contact

日本語 `/contact/` と英語 `/en/contact/` では、同じWeb3Forms componentを共有しています。

フォームUIは日英併記です。

- お名前 / Name
- メールアドレス / Email
- お問い合わせ種別 / Topic
- お問い合わせ内容 / Message
- 送信する / Send

Web3Forms Free planを利用し、Access KeyはCloudflare Pagesの環境変数で管理しています。

公開サイト上には受信先メールアドレスを直接表示せず、`mailto:`、構造化データ、メール復元JavaScriptにも残さない構成です。

日本語・英語の両方で本番送信を行い、受信とWeb3Forms Submissionsへの記録まで確認しています。

## SEO / AIO

主な実装:

- ページ固有title / description
- canonical
- robots metadata
- OGP / Twitter Card
- sitemap
- 対応する日本語／英語ページ間の相互hreflang
- Organization / WebSite / WebPage structured data
- BQmenu英語事例のSoftwareApplication schema
- Product説明、言語・市場状況、内部リンクの明示

AI検索専用の特殊な仕組みを増やすのではなく、通常のSEO、正確な構造化データ、人間が読める意味情報を整える方針です。

## 技術スタック

- Astro
- TypeScript
- Tailwind CSS
- @astrojs/sitemap
- Cloudflare Pages
- Web3Forms
- GitHub Actions build check
- Gitleaks workflow

## 伝えられること

- コーポレートサイト／LPの設計と実装
- 自社プロダクトを軸にした企業サイトの見せ方
- 選択的な多言語情報設計
- Product Showcaseのインタラクション設計
- PC／モバイル双方の操作設計
- 静的サイトでの日英共通フォーム実装
- SEO／構造化データ設計
- 実顧客の相談を起点としたcase study設計
- LP内にProduct／サービス導線を組み込む設計
- CI/CDとrepo hygiene

## ポートフォリオ用途

実際に運用しているコーポレートサイト、自社プロダクト群、英語対応、事例ページ、問い合わせ運用、デプロイ構成まで一つの公開URLで確認でき、privateなプロダクト内部を見せずに実装・運用範囲を示せるプロジェクトです。
