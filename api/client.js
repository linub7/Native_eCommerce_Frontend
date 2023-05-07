import axios from 'axios';
import { SERVER_URL } from '@env';

const client = axios.create({
  baseURL: `${SERVER_URL}/api/v1`,
});

export default client;
