import axios from 'axios';

const marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

export default marvelAPI;
