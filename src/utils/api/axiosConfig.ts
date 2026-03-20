/** @author Staff Software Engineer */
import axios from 'axios';

const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(apiConfig);

export default instance;