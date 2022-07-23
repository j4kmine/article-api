import { Column, Entity, PrimaryColumn } from "typeorm";
import { Categories } from "./category.interface";

@Entity()
export class Category implements Categories {
   
    @Column()
    category: string;

    @PrimaryColumn()
    value: string;


}