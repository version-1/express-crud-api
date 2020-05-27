# express-crud（作成中）

## 概要

こちらのリポジトリではExpressでブログ投稿APIを作成することで、認証・認可とユーザ作成、ブログのCRUD APIを実装していきます。

## デモ

デモは [Heroku](https://www.heroku.com) に上がっています。

demo: [Demo](https://express-crud-sample.herokuapp.com/)

※しばらく誰もアクセスしていないとサーバが休眠状態になってしまうので、最初のアクセスではしばらく待ちが発生するかもしれません

## 課題で身に着けること

- データベースの基本
- TypeScriptの基本
- MVC(Model View Controller)
- SQLでのCRUD
- ORMの基礎
- ORMでのCRUD
- API(Passport)を使用した認証・認可
- Expressを利用したWeb APIの実装

## 課題の進め方

### 0. 実装に必要な概念を学ぶ

#### Docker

コンテナ仮想化技術をメインでは学びませんがMySQLを使用する際に使うので概要だけでもさらうようにしておいてください。

#### データベース(MySQL)の基本

これまでデータベースを触ったことがない人、Wikiの内容を初めてみる方は課題前に必ずチュートリアルを終わらせてから課題に入ってください。

- [MySQLチュートリアル](https://github.com/version-1/express-crud/wiki/MySQL%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)

#### ORM(オブジェクトリレーショナルマッッピング)

- [もっとORMを使えるようになりたいので、見直してみた](https://qiita.com/niisan-tokyo/items/156eb35c6eeaf07b9b65)
- [オブジェクト関係マッピング](https://qiita.com/yk-nakamura/items/acd071f16cda844579b9)
- [Node.JSのSequelize ORM入門](https://qiita.com/markusveeyola/items/64875c9507d5fa32884e)
- [Sequelize公式](https://sequelize.org/v5/manual/getting-started.html)

#### MVCとは

- [MVCモデルとは！概念やそのメリットをわかりやすく解説！](https://www.geekly.co.jp/column/cat-technology/1911_040/)

#### Webアプリケーションフレームワーク

- [フレームワークとは？今更聞けないWebフレームワークを始めから丁寧に](https://blog.codecamp.jp/web_framework)
- [Webフレームワークとは何か](https://postd.cc/what-is-a-web-framework/)
- [Express.js公式ドキュメント](https://expressjs.com/ja/)

#### WebAPIでの認証・認可

- [Express+Passportで簡単に認証機能を実現](https://qiita.com/papi_tokei/items/9b852774114ebc7a6255)
- [Passport.js の基本的な利用方法 (Node.js & Express)](https://qiita.com/tuneyukkie/items/b1bc2a26cfb7c480e56b)
- [Passport](http://www.passportjs.org/docs/)


### 1. 課題用リポジトリの作成

フォークでなく個人のアカウントにリポジトリ を作成してください。
課題はdevelopブランチで開発を進め、最後完成した後にmasterへのプルリクエストを作成してコードレビューをうけるようにしてください。


### 2. 実装

下記順番に実装を行うようお願いします。

#### ステップ1 Express+TypeScript環境の構築


#####  チェックリスト

#### ステップ2 Sequerizeの導入

[API仕様書](https://github.com/version-1/express-crud/wiki/API%E4%BB%95%E6%A7%98%E6%9B%B8) を元にモデルの作成


#####  チェックリスト

- [ ] DB接続の確認
- [ ] 全モデルの作成
- [ ] マイグレーションの作成
- [ ] シードの作成（Categoriesテーブルだけ）

#### ステップ4 認証/認可の実装

`/auth` 配下のエンドポイントの実装

[API仕様書](https://github.com/version-1/express-crud/wiki/API%E4%BB%95%E6%A7%98%E6%9B%B8)

#####  チェックリスト

- [ ] /auth/signupでユーザ登録ができること
- [ ] /auth/loginでログインができること(jwtが返却されること）
- [ ] /userでユーザ情報が取得できること



#### ステップ4 その他のエンドポイントの実装

仕様書にあるその他のエンドポイントの実装

[API仕様書](https://github.com/version-1/express-crud/wiki/API%E4%BB%95%E6%A7%98%E6%9B%B8)

- [ ] 仕様書通りに実装されていること

### 3. HerokuにAPIをデプロイ

HerokuにAPIをデプロイして公開します。
手順はWikiを参照してください。

[Herokuへのデプロイ手順](https://github.com/version-1/express-crud/wiki/Heroku%E3%81%B8%E3%81%AE%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4)

