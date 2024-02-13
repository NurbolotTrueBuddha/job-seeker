import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: +process.env.PORT,
  app: {
    http: { port: +process.env.HTTP_PORT },
  },
  swagger: {
    prefix: process.env.SWAGGER_PREFIX,
    url: process.env.SWAGGER_URL,
  },
  database: {
    pg: {
      type: process.env.DATABASE_DRIVER,
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE,
      password: process.env.DATABASE_PASSWORD,
      synchronize: true,
      logger: true,
      entities: ['dist/**/*.entity{.ts,.js}', 'dist/**/*.orm{.ts,.js}'],
      migrationsTableName: 'migrations_history',
      migrations: ['dist/migrations/*{.js,.ts}'],
      migrationsRun: true,
      cli: {
        migrationsDir: 'migrations',
      },
      
    },
  },
}));
