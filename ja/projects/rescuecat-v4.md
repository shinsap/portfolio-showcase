# Rescue Cat Card v4

## 概要

Rescue Cat Cardは、飼い主が事故や災害などで対応できない状況でも、第三者がNFC/QRカードを読み取り、猫の保護に必要な情報へアクセスできるようにするローンチ済みのサービスです。

## 課題 → 解決

**課題：** 飼い主が急病・事故・災害で倒れた際、残された猫の情報（預け先・食事内容・持病・緊急連絡先）を第三者が知る手段がなかった。

**解決：** NFC/QRカードをスキャンするだけで猫のプロフィールが開く仕組みを構築。カードはStripeで購入し、Supabaseで管理するWebアプリと連動。スキャン表示はアカウント不要で誰でも確認できる設計にした。

**対象ユーザー：** 一人暮らしの猫の飼い主、高齢の飼い主、もしもの時に備えておきたいすべての飼い主。

## 公開URL

- App: https://app.rescuecat.jp/

## 担当範囲

- プロダクト企画
- 要件整理
- UI / ユーザーフロー設計
- フロントエンド実装
- Supabase / Stripe / Cloudflare構成の検討
- GitHub repositoryとworkflowの整理
- staging/test運用設計

## 技術スタック

- React
- React Router v7
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Stripe
- Cloudflare Pages/Workers
- Wrangler
- GitHub Actions

## 開発運用

稼働中の本線とstaging/testを分けて運用しています。

- `rescuecat-v4`: ローンチ済みの稼働本線
- `rescuecat-v4-staging`: staging / 本番反映前テスト

大きな変更はstagingで検証してから、稼働本線へ反映する運用です。

## セキュリティ・保守対応

リポジトリ棚卸しでは以下を実施しました。

- 古いv1/v2/v3系repoのarchive
- 古いGitHub Actionsの無効化
- Actions secrets名の確認
- webhooks、deploy keys、GitHub Pages設定の確認
- v3用Supabase projectが単独かつpause中であることの確認

## 伝えられること

- 物理カード（NFC）＋デジタルサービス（Stripe購入→Supabaseプロフィール→スキャン表示）の一貫した設計
- AI支援開発と人間による運用判断の組み合わせ
- stagingを使った検証フロー
- repository security hygiene
- 古いrepoやcredential痕跡の整理
