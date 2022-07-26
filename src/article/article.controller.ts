import { Controller, Get, Query, Req } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) {
    }

  
    @Get('/')
    async article(@Query() query) {
        const builder = await this.articleService.queryBuilder('article');

        if (query.q) {
            builder.where("article.title LIKE :s OR article.description LIKE :s", {s: `%${query.q}%`})
        }
       
        if (query.category) {
            builder.where("article.category = :s", {s: `${query.category}`})
        }
        if (query.country) {
            builder.where("article.country = :s", {s: `${query.country}`})
        }

        const page: number = parseInt(query.page as any) || 1;
        const perPage = parseInt(query.perpage as any) || 10;
        const total = await builder.getCount();

        builder.offset((page - 1) * perPage).limit(perPage);

        return {
            data: await builder.getMany(),
            total,
            page,
            last_page: Math.ceil(total / perPage)
        };


    }
}
