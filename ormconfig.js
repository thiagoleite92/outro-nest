module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: '-03:00',
  entities: ['./dist/**/*.entity.js'],
  migrations: ['./dist/**/*.migrations.js'],
  cli: {
    migrationsDir: './src/migrations',
  },
};
