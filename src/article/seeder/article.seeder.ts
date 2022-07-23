import {DataFactory, Seeder} from "nestjs-seeder";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Article } from "../dto/article.entity";

export class ArticleSeeder implements Seeder {
    constructor(
        @InjectRepository(Article) private readonly articleRepository: Repository<Article>
    ) {
    }

    drop(): Promise<any> {
        return this.articleRepository.delete({});
    }

    seed(): Promise<any> {
        const articles = DataFactory.createForClass(Article).generate(50);

        return this.articleRepository.insert(articles);
    }

}