import { InjectRepository } from "@nestjs/typeorm";
import { Seeder } from "nestjs-seeder";
import { Repository } from "typeorm";
import { categories } from "../dto/category.data";
import { Category } from "../dto/category.entity";

export class CategorySeeder implements Seeder {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
    ) {
    }

    drop(): Promise<any> {
        return this.categoryRepository.delete({});
    }

    seed(): Promise<any> {
     

        return this.categoryRepository.insert(categories);
    }

}