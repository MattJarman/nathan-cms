const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
      },
      options: {
        useNullAsDefault: true,
        ssl: false,
      },
    },
  },
});
