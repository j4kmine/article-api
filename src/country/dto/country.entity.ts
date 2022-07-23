import { Column, Entity, PrimaryColumn } from "typeorm";
import { Countrys } from "./country.interface";

@Entity()
export class Country implements Countrys {
   
    @Column()
    name: string;

    @PrimaryColumn()
    code: string;


}