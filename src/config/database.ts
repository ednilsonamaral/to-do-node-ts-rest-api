import 'dotenv/config';
import { DataSource } from 'typeorm';

const connection = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['src/entities/**/*.entity.ts'],
    migrations: ['src/migrations/**/*.ts'],
    migrationsTableName: "TypeORM_Migrations_Metadata",
    logging: false,
    synchronize: true
});

connection
    .initialize()
    .then(() => {
        console.log('💾 Database has been started'); 
    })
    .catch((err) => {
        console.error('⛔ Error during database initialization: ', err);
    });

export default connection;
