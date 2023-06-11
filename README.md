# POSSE_website

![POSSE _ クイズ](https://github.com/Seiya-Tagami/POSSE_website/assets/107479598/bccb9cd6-ee3b-4d86-b251-fb2d9271cba2)

## 言語・環境

### フロントエンド

- Vue3 (Composition API)
- sass
- TypeScript
- vite

### バックエンド

- Express
- TypeScript
- mysql
- docker

## 設計（予定）

### フロントエンド

- SPA で構築する
- Repository Factory Pattern を採用してみる  
  @see https://qiita.com/07JP27/items/0923cbe3b6435c19d761  
  @see https://tech.forstartups.com/entry/2021/07/27/194946

### バックエンド

- Rest での API 開発

### プロジェクトの始め方

### web

```sh
$ cd web
```

パッケージのインストール

```sh
$ npm i
```

フロントエンドサーバーの起動

```sh
$ npm run dev
```

### service

```sh
$ cd service
```

パッケージのインストール

```sh
$ npm i
```

バックエンドサーバーの起動

- ターミナルを２つ開いて、それぞれコマンドを実行する

```sh
$ npm run watch
```

```sh
$ npm run dev
```

mysql の起動

```sh
$ docker compose up -d
```
