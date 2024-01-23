import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { Catalog } from '@domain/entities/catalog.entity';

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

    public async getCatalogsByMerchant(merchantId: string) {
      try {
        return await this.catalogModel.find({
          merchant: merchantId
        });
      } catch (error) {
        throw new Error(error);
      }
    }
    
    public async getCatalogCategoriesWithItems(catalogId: string) {
      try {
        return this.catalogModel.aggregate([
          {
            $match: {
              _id: new ObjectId(catalogId),
            },
          },
          {
            $lookup: {
              from: "categories",
              localField: "_id",
              foreignField: "catalog",
              as: "categories",
            },
          },
          {
            $unwind: {
              path: "$categories",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $lookup: {
              from: "items",
              localField: "categories._id",
              foreignField: "category",
              as: "categories.items",
            },
          },
          {
            $group: {
              _id: "$_id",
              name: { $first: "$name" },
              description: { $first: "$description" },
              merchant: { $first: "$merchant" },
              is_active: { $first: "$is_active" },
              created_at: { $first: "$created_at" },
              updated_at: { $first: "$updated_at" },
              categories: {
                $push: {
                  _id: "$categories._id",
                  name: "$categories.name",
                  description: "$categories.description",
                  is_active: "$categories.is_active",
                  catalog: "$catalog",
                  created_at: "$categories.created_at",
                  updated_at: "$categories.updated_at",
                  items: "$categories.items",
                },
              },
            },
          },
        ])
        .exec();
      } catch (error) {
        throw new Error(`Not possible to aggregate catalog with category and its items: ${error}`)
      }
    }
}
