import { User, UserDocument } from '../models/user';
import { BaseRepository } from './baseRepository';

export class UserRepository extends BaseRepository<UserDocument> {
  constructor() {
    super(User);
  }
}
