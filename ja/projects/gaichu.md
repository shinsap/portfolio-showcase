# 外注前ナビ

## 概要

外注前ナビは、中小企業の経営者・担当者が「作らない・内製する・外注する」を整理するための診断サービスです。カテゴリを選んでいくつかの質問に答えると、推奨アプローチと根拠が返ってきます。

このサービスが解決しようとしている問題は、現場によく起きる構造的な課題です。多くの場合、何が必要かを整理する前に外注先へ相談してしまったり、既存のSaaSで代替できるにもかかわらず新規開発を検討してしまったりします。外注前ナビは、お金をかける前にその整理を済ませるための手段として設計しています。

## 公開URL

- App: https://gaichu.nortelia.co.jp

## 担当範囲

- プロダクト企画・問題設定
- 診断フローと質問設計
- スコアリングルール・レッドフラグシステムの設計
- Cloudflare Pages + Pages Functionsのデプロイ構成
- AI統合設計（コスト制御・Turnstile保護）
- リリース前セキュリティ確認とシークレット管理

## 技術スタック

- Astro（static output）
- React（islandsアーキテクチャ）
- TypeScript
- Tailwind CSS v4
- Cloudflare Pages
- Cloudflare Pages Functions
- Gemini 2.5 Flash-Lite
- Cloudflare Turnstile
- Zod
- Vitest

## アーキテクチャ上の判断

- **診断ロジックはクライアント完結。** スコアリングエンジン（`evaluate.ts`, `diagnose.ts`）はブラウザ上で動作し、サーバーを経由しない。サーバーエンドポイント（`/api/report`）はGemini APIキーの秘匿とTurnstileトークン検証のためだけに存在する。
- **AIは整形のみ。** 最終判定・レッドフラグ・スコアはすべてJSONルールが決定する。GeminiはそのルールによるResultを受け取り、短い説明コメントを整形するだけ。
- **`severity: stop` は不変ルール。** レッドフラグで `severity: stop` が発火した場合、スコアに関わらず結果を `stop_and_organize` に強制上書きする。この挙動は変更禁止。
- **緊急停止スイッチ。** Cloudflare Pages環境変数に `AI_DISABLED=true` を設定すると、Gemini呼び出しを即座に無効化できる。ルール診断はそのまま動作し続ける。

## 伝えられること

- 中小企業向け意思決定支援の診断プロダクト設計
- 条件DSL（JSON駆動・ロジックのハードコードなし）によるクライアント側ルールエンジン
- AIによる出力整形と決定論的ビジネスロジックの分離
- コスト制御を意識したAI統合（トークン上限・thinking budget=0）
- Cloudflare Pages FunctionsによるAPIシークレット分離
- リリース前セキュリティチェックリスト運用（シークレット監査・Turnstile検証・緊急停止確認）
