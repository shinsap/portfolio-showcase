# Rescue Cat Card v4

## 概要

Rescue Cat Cardは、飼い主が事故や災害などで対応できない状況でも、第三者がNFC/QRカードを読み取り、猫の保護に必要な情報へアクセスできるようにするローンチ済みのサービスです。

## 担当範囲

- プロダクト企画
- 要件整理
- UI / ユーザーフロー設計
- フロントエンド実装
- Supabase / Cloudflare構成の検討
- GitHub repositoryとworkflowの整理
- staging/test運用設計

## 技術スタック

- React
- TypeScript
- Supabase
- Cloudflare Pages/Workers
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

- AI支援開発と人間による運用判断の組み合わせ
- stagingを使った検証フロー
- repository security hygiene
- 古いrepoやcredential痕跡の整理
