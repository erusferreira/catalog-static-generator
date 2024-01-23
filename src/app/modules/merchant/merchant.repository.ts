import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Merchant } from 'domain/entities/merchant.entity';

export class MerchantRepository {
    constructor(@InjectModel(Merchant.name) private readonly merchantModel: Model<Merchant>) {}

    public async getMerchants(): Promise<Merchant[]> {
      try {
        const Merchants = await this.merchantModel.find();
        console.log('##### Merchants #####', Merchants);
        return Merchants;
      } catch (error) {
        throw new Error(error);
      }
    }
}