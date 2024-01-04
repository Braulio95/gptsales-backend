/* eslint-disable prettier/prettier */
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    author: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    isbn: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    sypnosis: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    cover: string;
}