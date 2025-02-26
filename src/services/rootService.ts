import RepositoryFactory from '../repositories/repositoryFactory'
import { Document } from 'mongoose';
import { BaseRepository } from '../repositories/baseRepository';

export class RootService<T extends Document> {
    repository: BaseRepository<T>

  constructor(model: string) {
    this.repository = RepositoryFactory.repositories[model];
  }

  async save(newModel: Partial<T>) {
    return this.repository.create(newModel);
  }

  async getAll(projections?: object): Promise<Array<T>> {
    return this.repository.findAll(projections);
  }

  async getOneById(id: string, projections?: object) {
    return this.repository.findById(id, projections);
  }

  async getOneByQuery(query: object, projections?: object) {
    return this.repository.findOneByQuery(query, projections);
  }

  async getManyByQuery(query: object, projections?: object) {
    return this.repository.findManyByQuery(query, projections);
  }

  async updateOneById(id: string, update: Partial<T>) {
    const query = {
        '_id': id
    }

    return this.repository.updateOne(query, update);
  }

  async updateMany(query: object, update: Partial<T>) {
    return this.repository.updateMany(query, update);
  }

  async deleteOneById(id: string){
    const query = {
        '_id': id
    };

    return this.repository.deleteOne(query);
  }

  async deleteManyByQuery(query: object){
    return this.repository.deleteOne(query);
  }
}