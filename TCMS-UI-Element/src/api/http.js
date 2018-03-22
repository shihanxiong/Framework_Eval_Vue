import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    // Authorization: 'Bearer {token}',
    // 'Access-Control-Allow-Origin': '*',
  },
});

export default HTTP;
