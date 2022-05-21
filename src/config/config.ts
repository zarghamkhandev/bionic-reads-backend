export const config = () => ({
  port: parseInt(process.env.PORT!, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migration/**/*.js'],
    migrationsTableName: 'custom_migration_table',
    cli: {
      migrationsDir: 'src/migration',
    },
    migrationsRun: true,
  },
});
