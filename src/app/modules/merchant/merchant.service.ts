import { Injectable } from "@nestjs/common";

import { Merchant } from 'domain/entities/merchant.entity';
import { MerchantRepository } from "./merchant.repository";

@Injectable()
export class MerchantService {

  constructor(
    private merchantRepository: MerchantRepository
  ) {}

  public async findAll(): Promise<Merchant[]> {
    return await this.merchantRepository.getMerchants();
  }
}
