import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Catalog } from '../entities/catalog.entity';

export class CatalogRepository {
    constructor(@InjectModel(Catalog.name) private readonly catalogModel: Model<Catalog>) {}

    public async getCatalogs(): Promise<Catalog[]> {
      try {
        const catalogs = await this.catalogModel.find();
        console.log('##### catalogs #####', catalogs);
        return catalogs;
      } catch (error) {
        throw new Error(error);
      }
    }
}