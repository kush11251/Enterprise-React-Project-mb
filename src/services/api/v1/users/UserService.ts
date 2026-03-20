/** @author Staff Software Engineer */
import axios from 'axios';

class UserService {
  private apiEndpoint: string;

  constructor() {
    this.apiEndpoint = 'https://api.example.com/v1/users';
  }

  async getUsers(): Promise<any[]> {
    const response = await axios.get(this.apiEndpoint);
    return response.data;
  }
}

export { UserService };