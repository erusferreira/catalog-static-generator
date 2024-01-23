import { Injectable } from "@nestjs/common";

import { Item } from 'domain/entities/item.entity';
import { ItemRepository } from "./item.repository";

@Injectable()
export class ItemService {

  constructor(
    private itemRepository: ItemRepository
  ) {}

  public async findAll(): Promise<Item[]> {
    return await this.itemRepository.getItems();
  }
}
