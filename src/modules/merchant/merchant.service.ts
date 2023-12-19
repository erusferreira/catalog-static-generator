import { Injectable } from "@nestjs/common";

import { Merchant } from '../../entities/merchant.entity';
import { MerchantRepository } from "../../repositories/merchant.repository";

@Injectable()
export class MerchantService {

  constructor(
    private merchantRepository: MerchantRepository
  ) {}

  public async findAll(): Promise<Merchant[]> {
    return await this.merchantRepository.getMerchants();
  }
}
