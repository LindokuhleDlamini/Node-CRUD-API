import { UserRepository } from './userRepository';

export default class RepositoryFactory {
    static readonly repositories = {
        user : new UserRepository()
    }
}
