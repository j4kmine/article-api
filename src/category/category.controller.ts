import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {
    }
    @Get('/')
    async country() {
        return this.categoryService.all();
    }
}
