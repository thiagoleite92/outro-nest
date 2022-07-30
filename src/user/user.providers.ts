import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';

export const UserProviders = [
  {
    provide: 'user_repository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
