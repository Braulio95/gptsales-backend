/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Book } from './book.entity';
import { BookDto } from './dto/Book.dto';
import { BOOK_REPOSITORY } from '../../core/constants';

@Injectable()
export class BooksService {
    constructor(@Inject(BOOK_REPOSITORY) private readonly bookRepository: typeof Book) { }

    async create(book: BookDto): Promise<Book> {
        return await this.bookRepository.create<Book>({ ...book });
    }

    async findAll(): Promise<Book[]> {
        return await this.bookRepository.findAll<Book>();
    }

    async findOne(id): Promise<Book> {
        return await this.bookRepository.findOne({
            where: { id },
        });
    }

    async delete(id) {
        return await this.bookRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedPost]] = await this.bookRepository.update({ ...data }, { where: { id }, returning: true });

        return { numberOfAffectedRows, updatedPost };
    }
}
