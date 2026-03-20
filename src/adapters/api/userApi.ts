/** @author Staff Software Engineer */
import axios from 'axios';
import { UserService } from '../services/api/v1/users';

class UserApi {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers(): Promise<any[]> {
    return this.userService.getUsers();
  }
}

export { UserApi };