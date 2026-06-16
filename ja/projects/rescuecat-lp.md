# Rescue Cat Card LP

## 概要

Rescue Cat Card LPは、Rescue Cat Cardの公開向けランディングページです。万が一の時にペットの情報を第三者が確認できるようにするサービスの考え方、利用シーン、登録導線を伝える役割を持っています。

## 課題 → 解決

**課題：** Rescue Cat Cardは実際の問題を解決するが、「もし自分が倒れたら猫はどうなる？」というシナリオは普段考えない。価値が抽象的なため、訪問者が直感的に必要性を感じにくく、登録に踏み切れないケースが多い。

**解決：** 最悪のシナリオから始まるストーリー型のLPを設計。カードをスキャンするとどう表示されるか、誰が何を確認できるかを具体的に伝え、Stripeの購入フローへ最短で誘導する導線を作った。

**目的：** 検索・SNS・口コミで訪問したアカウントを持たないユーザーをStripe購入まで一気通貫で案内する。

## 公開URL

- LP: https://rescuecat.jp/

## 担当範囲

- LP構成設計
- サービス説明とユーザーフロー整理
- ストーリー型のセクション・コピー設計
- 登録・利用開始導線の設計
- Stripe Payment Link連携
- 公開向けコンテンツ確認

## 技術スタック

- Astro
- TypeScript
- Tailwind CSS
- Cloudflare Pages
- Stripe Payment Link
- Claude Code / Cursor

## Rescue Cat Card v4との関係

Rescue Cat Card v4は、認証・ユーザー情報管理・QR/カード関連導線・Supabase・Cloudflare運用を含むローンチ済みのサービスアプリです。

Rescue Cat Card LPは、その前段にある認知・説明・導線のレイヤーです。初めて見るユーザーにサービスの目的を伝え、Stripe購入を経てアプリ利用へつなぐ役割を担っています。

## 伝えられること

- 抽象的な価値を持つサービスのストーリー型LP設計
- Stripe連携を含むconversion導線設計
- アプリ本体とマーケティング面の切り分け
- Cloudflare Pagesでの静的サイトデプロイ
