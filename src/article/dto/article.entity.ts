import { randomInt } from "crypto";
import { Factory } from "nestjs-seeder";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Factory(faker => faker.lorem.words(2))
    @Column()
    title: string;

    @Factory(faker => faker.lorem.words(8))
    @Column({ nullable: true })
    description: string;

    @Factory(faker => faker.internet.url())
    @Column({ nullable: true })
    link: string;

    @Factory(faker => faker.image.imageUrl())
    @Column({ nullable: true })
    image: string;
   
    @Factory(faker => faker.random.arrayElement([
        'ph',
        'us',
        'gb',
        'ca',
        'fr',
        'au',
        'ar',
        'id'
      ]))
    @Column()
    country: string;


    @Factory(faker => faker.random.arrayElement([
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology'
      ]))
    @Column()
    category: string;

}