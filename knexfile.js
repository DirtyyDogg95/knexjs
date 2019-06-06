module.exports = {
  client: 'mysql',
  connection: {
    user: 'rbreddels',
    password: 'Habbo!995',
    database: 'porno'
  },
  migrations: {
    directory: __dirname + '/db/migrations'
  },
  seeds: {
    directory: __dirname + '/db/seeds/test'
  }
}