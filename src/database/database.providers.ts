import { User } from 'src/user/entity/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'thiago159',
        database: 'nest-api',
        entities: ['./dist/**/*.entity.js'],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
