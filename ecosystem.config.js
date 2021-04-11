module.exports = {
  apps: [{
    name: 'development',         // 開発環境
    script: './dist/bundle.js',
    instances: 1,
    autorestart: true,
    watch: ['dist'],             // distディレクトリの変更を監視して再起動させる
    env: {
      NODE_ENV: 'development'
    },
  },
  {
    name: 'production',          // 本番環境
    script: './dist/bundle.js',
    instances: 1,
    autorestart: true,
    watch: false,                // ファイル変更の監視は不要
    max_memory_restart: '800M',　// メモリ800Mで再起動させる
    env: {
      NODE_ENV: 'production'
    }
  }]
};