/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Book } from 'src/modules/books/book.entity';
//import { IDatabaseConfigAttributes } from './interfaces/dbConfig.interface'

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config: any;
        switch (process.env.NODE_ENV) {
            case DEVELOPMENT:
                config = databaseConfig.development;
                break;
            case TEST:
                config = databaseConfig.test;
                break;
            case PRODUCTION:
                config = databaseConfig.production;
                break;
            default:
                config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User, Book]);
        await sequelize.sync();
        return sequelize;
    },
}];