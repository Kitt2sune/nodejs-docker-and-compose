export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    host: process.env.POSTGRES_HOST || 'postgres',
    port: parseInt(process.env.POSTGRES_HOST, 10) || 5432,
    username: process.env.POSTGRES_USER || 'Kris',
    password: process.env.POSTGRES_PASSWORD || '123987456',
    database: process.env.POSTGRES_DB || 'kupipodaridaiy',
  },
  JWT_SECRET: process.env.JWT_SECRET || 'some-secret-key',
});
