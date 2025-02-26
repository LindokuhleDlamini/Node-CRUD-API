import { UserRepository } from '../repositories/userRepository';
import repo from '../repositories/repositoryFactory'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserDocument } from '../models/user';
import { RootService } from './rootService';

export class UserService extends RootService<UserDocument>{
  userRepository: UserRepository;

  constructor() {
    super('user')
    this.userRepository = this.repository as UserRepository;
  }

  async registerUser(email: string, password: string, name: string): Promise<UserDocument> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const User =  {
      name,
      email,
      password: hashedPassword
    };
    return this.save(User);
  }


  async loginUser(email: string, password: string): Promise<string> {
    
    const user = await this.getOneByQuery({ email }, { email: 1, password: 1 });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return token;
  }

}