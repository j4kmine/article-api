import { Injectable } from '@nestjs/common';
import { Article } from './dto/article.entity';
import {InjectRepository} from "@nestjs/typeorm";
import { Repository } from 'typeorm';
@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article) private readonly articleRepository: Repository<Article>
    ) {
    }

    async all(): Promise<Article[]> {
        return this.articleRepository.find();
    }

    async queryBuilder(alias: string) {
        return this.articleRepository.createQueryBuilder(alias);
    }
}
