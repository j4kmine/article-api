import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article/dto/article.entity';
import { CountryModule } from './country/country.module';
import { Country } from './country/dto/country.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/dto/category.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'library',
    entities: [Article,Country,Category],
    synchronize: true
  }),ArticleModule, CountryModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
