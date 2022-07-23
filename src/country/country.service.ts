import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './dto/country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country) private readonly countryRepository: Repository<Country>
    ) {
    }

    async all(): Promise<any[]> {
        return this.countryRepository.find()
    }

}

