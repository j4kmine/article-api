import {seeder} from "nestjs-seeder";
import {TypeOrmModule} from "@nestjs/typeorm";
import { Article } from "./article/dto/article.entity";
import { ArticleSeeder } from "./article/seeder/article.seeder";
import { Country } from "./country/dto/country.entity";
import { CountrySeeder } from "./country/seeder/country.seeder";
import { Category } from "./category/dto/category.entity";
import { CategorySeeder } from "./category/seeder/category.seeder";



seeder({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'library',
            entities: [Article,Country,Category],
            synchronize: true,
            dropSchema: true
        }),
        TypeOrmModule.forFeature([Article,Country,Category])
    ]
}).run([ArticleSeeder,CountrySeeder,CategorySeeder])