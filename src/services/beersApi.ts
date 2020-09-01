import axios from 'axios';

const beersAPI = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
});

export default beersAPI;
