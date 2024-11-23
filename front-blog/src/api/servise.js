import axios from 'axios';

export default axios.create({
  baseURL: 'https://6741bb86e4647499008e9e35.mockapi.io/api/v1/',
  headers: {'Content-Type': 'application/json'}
});