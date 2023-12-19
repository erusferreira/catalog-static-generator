import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Manufacturer } from '../../../domain/entities/manufacturer.entity';

export class ManufacturerRepository {
    constructor(@InjectModel(Manufacturer.name) private readonly manufacturerModel: Model<Manufacturer>) {}

    public async getManufacturers(): Promise<Manufacturer[]> {
      try {
        const Manufacturers = await this.manufacturerModel.find();
        console.log('##### Manufacturers #####', Manufacturers);
        return Manufacturers;
      } catch (error) {
        throw new Error(error);
      }
    }
}