import {DataFactory, Seeder} from "nestjs-seeder";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Country } from "../dto/country.entity";
import { countries } from "../dto/country.data";


export class CountrySeeder implements Seeder {
    constructor(
        @InjectRepository(Country) private readonly countryRepository: Repository<Country>
    ) {
    }

    drop(): Promise<any> {
        return this.countryRepository.delete({});
    }

    seed(): Promise<any> {
     

        return this.countryRepository.insert(countries);
    }

}