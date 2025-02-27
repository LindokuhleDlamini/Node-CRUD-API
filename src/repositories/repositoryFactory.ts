import { UserRepository } from './userRepository';

export default class RepositoryFactory {
    static readonly repositories: Record<string, any> = {
        'user' : new UserRepository()
    }
}
