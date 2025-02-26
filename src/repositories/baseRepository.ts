import { Document, Model, UpdateWriteOpResult } from 'mongoose';

export abstract class BaseRepository<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(item: Partial<T>): Promise<T> {
    return this.model.create(item);
  }

  async findById(id: string, projections?: object): Promise<T | null> {
    return this.model.findById(id, projections).exec();
  }

  async findOneByQuery(query: object, projections?: object): Promise<T | null> {
    return this.model.findOne(query, projections).exec();
  }

  async findManyByQuery(query: object, projections?: object): Promise<Array<T> | null> {
    return this.model.find(query, projections).exec();
  }

  async findAll(projections?: object): Promise<Array<T>> {
    return this.model.find({}, projections).exec();
  }

  async updateOne(query: object, item: Partial<T>): Promise<boolean> {
    const result = await this.model.updateOne(query, item, { new: true }).exec();
    return !!result;
  }

  async updateMany(query: object, item: Partial<T>): Promise<boolean> {
    const result = await this.model.updateMany(query, item, { new: true }).exec();
    return !!result;
  }

  async deleteOne(query: object): Promise<boolean> {
    const result = await this.model.deleteOne(query).exec();
    return !!result;
  }

  async deleteMany(query: object): Promise<boolean> {
    const result = await this.model.deleteMany(query).exec();
    return !!result;
  }
}