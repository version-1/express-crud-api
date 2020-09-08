# Express-crud

## 概要

こちらのリポジトリではExpressでブログ投稿APIを作成することで、認証・認可とユーザ作成、ブログのCRUD APIを実装していきます。

## デモ

デモは [Heroku](https://www.heroku.com) に上がっています。

demo: [Demo](https://express-crud-sample.herokuapp.com/)

1. 下記エンドポイントにPOSTリクエストを行いユーザを作成

url: https://express-crud-sample.herokuapp.com/auth/signup
```json
{
  "user":  {
    "loginId": "[login ID]",
    "name": "[name]",
    "iconUrl": "[icon url]",
    "password": "[password]"
  }
}
```

2. 下記エンドポイントで1.の認証情報を使って認証。
url: https://express-crud-sample.herokuapp.com/auth/login
```
{
    "loginId": "[login ID]",
    "password": "[password]"
}
```

3. 2で受け取ったjwtをHttpヘッダに含めてその他のエンドポイントにリクエスト
→ 下記仕様書にあるエンドポイントでリクエストを試せます。

- [API仕様書](https://github.com/version-1/express-crud/wiki/API%E4%BB%95%E6%A7%98%E6%9B%B8)

※しばらく誰もアクセスしていないとサーバが休眠状態になってしまうので、最初のアクセスではしばらく待ちが発生するかもしれません

## 課題で身に着けること

- データベースの基本
- TypeScriptの基本
- MVC(Model View Controller)
- SQLでのCRUD
- ORMの基礎
- ORMでのCRUD
- マイグレーションとシード
- API(Passport)を使用した認証・認可
- Expressを利用したWeb APIの実装

## 課題の進め方


### 0. 実装に必要な概念を学ぶ

#### Docker

コンテナ仮想化技術をメインでは学びませんがMySQLを使用する際に使うので概要だけでもさらうようにしておいてください。

[Docker ドキュメント（公式](https://docs.docker.com/get-started/overview/)
[Dockerとは何かを入門者向けに解説！基本コマンドも](https://udemy.benesse.co.jp/development/web/docker.html)

#### データベース(MySQL)の基本

- [「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典-リレーショナルデータベース (RDB)](https://wa3.i-3-i.info/word11770.html) 
- [【初心者向け】MySQLでできることや使い方の基本について](https://www.atoone.co.jp/column/10114/)
- [SQL素人でも分かるテーブル結合(inner joinとouter join)](https://qiita.com/naoki_mochizuki/items/3fda1ad6594c11d7b43c)
- [「トランザクション」とは何か？を超わかりやすく語ってみた！](https://qiita.com/zd6ir7/items/6568b6c3efc5d6a13865)

**これまでデータベースを触ったことがない方は下記チュートリアルを終わらせてから課題に入ってください。↓↓↓↓↓**

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
- [Express のインストール - Express.js](https://expressjs.com/ja/starter/installing.html)

#### WebAPIでの認証・認可

- [Express+Passportで簡単に認証機能を実現](https://qiita.com/papi_tokei/items/9b852774114ebc7a6255)
- [Passport.js の基本的な利用方法 (Node.js & Express)](https://qiita.com/tuneyukkie/items/b1bc2a26cfb7c480e56b)
- [Passport](http://www.passportjs.org/docs/)

#### TypeScript

- [TypeScript公式](https://www.typescriptlang.org/docs/home.html)
- [TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/)
- [TypeScript入門者がハマりがちな記法(文法)の呼び方と簡易解説まとめ](https://qiita.com/gutchom/items/bb740deb3100684b82a6)
- [https://qiita.com/Nossa/items/726cc3e67527e896ed1e](https://qiita.com/Nossa/items/726cc3e67527e896ed1e)
- [TypeScriptで始めるNode.js入門](https://ics.media/entry/4682/)
- [TypescriptでExpressを設定する](https://qiita.com/kubocchi/items/0e9bf6ee9eab98905d77)


### 1. 課題用リポジトリの作成

フォークでなく個人のアカウントにリポジトリ を作成してください。
課題はdevelopブランチで開発を進め、最後完成した後にmasterへのプルリクエストを作成してコードレビューをうけるようにしてください。


### 2. 実装

下記順番に実装を行うようお願いします。

※MySQLをさわったことのない方はチュートリアルをすませてから課題にはいってください。
- [MySQLチュートリアル](https://github.com/version-1/express-crud/wiki/MySQL%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)

#### ステップ1 Express+TypeScript環境の構築

#####  チェックリスト

- [ ] typescriptのインストール
- [ ] expressのインストール
- [ ] expressサーバが起動すること
- [ ] ルートのエンドポイントが `{"message":"ok"}` のjsonを返却すること

#### ステップ2 Sequerizeの導入

[テーブル定義書](https://github.com/version-1/ws-0700-express-crud/wiki/%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E5%AE%9A%E7%BE%A9%E6%9B%B8) を元にモデルの作成


#####  チェックリスト

- [ ] DB接続の確認
- [ ] 全モデルの作成
- [ ] マイグレーションの作成
- [ ] シードの作成（Categoriesテーブルだけ）

#### ステップ3 認証/認可の実装

`/auth` 配下のエンドポイントの実装

[API仕様書](https://github.com/version-1/express-crud/wiki/API%E4%BB%95%E6%A7%98%E6%9B%B8)

#####  チェックリスト

- [ ] `/auth/signup`でユーザ登録ができること
- [ ] `/auth/login`でログインができること(jwtが返却されること）
- [ ] `/user`でユーザ情報が取得できること

#### ステップ4 その他のエンドポイントの実装

仕様書にあるその他のエンドポイントの実装

[API仕様書](https://github.com/version-1/express-crud/wiki/API%E4%BB%95%E6%A7%98%E6%9B%B8)

- [ ] 仕様書通りに実装されていること

### 3. HerokuにAPIをデプロイ

HerokuにAPIをデプロイして公開します。
手順はWikiを参照してください。

[Herokuへのデプロイ手順](https://github.com/version-1/express-crud/wiki/Heroku%E3%81%B8%E3%81%AE%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4)

## 補足事項

### データベースのGUIツールについて

データベースを使うにはチュートリアルはコマンドライン上でやって欲しいですが、普段はGUIから操作することが多いです。
インストールしておくことを強くおすすめします。

- https://www.sequelpro.com/
- https://tableplus.com/

### HTTPクライアントツールについて

APIをテストするにあたってHTTPリクエストを送る必要があります。curlのような温かみのあるツールを使っても良いですが、
今時のChromeからリクエストを送れるツールを使うのも良いかと思います。

- [curlコマンドでapiを叩く](https://qiita.com/bunty/items/758425773b2239feb9a7)
- [【Chrome】ブラウザから簡単にREST APIを叩く方法【Talend API Tester（旧 Restlet Client）】](https://katblog.manadream.net/index.php/2019/02/11/rest-api-from-restlet-client/)
