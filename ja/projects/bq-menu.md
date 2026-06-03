# BQ Menu

## 概要

BQ Menuは、ホテル宴会場向けの省力化システムです。利用者やスタッフがQRを読み込むと、宴会・イベント用のPDFメニューが表示される仕組みです。

各宴会場ごとの時間設定を行うことが可能で、シンプルなUIにより、現場での急なメニュー変更にも対応できます。紙メニューの準備や現場での説明負担を減らすことを目的にしており、現在は営業先デモ用途のクローズド環境として運用しています。

## 担当範囲

- デモフロー設計
- QRメニュー導線設計
- PDFメニュー表示フロー設計
- 宴会場ごとの時間設定設計
- UI実装
- Vercel向けデプロイ設定
- security headers / routing設定
- CI / gitleaks workflowの整備

## 技術スタック

- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Vercel
- GitHub Actions
- QR / PDF menu display flow

## 伝えられること

- ホテル宴会場の現場業務を意識した設計
- QR読み込みによるPDFメニュー表示導線
- 宴会場ごとの時間設定
- 急なメニュー変更に対応しやすいシンプルなUI
- 省力化を目的にした業務支援ツール設計
- 軽量なデプロイ構成
- security headersの設定
- CI checkの整備
