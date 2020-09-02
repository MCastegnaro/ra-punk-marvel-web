import axios from 'axios';

interface IBeer {
  id: number;
  name: string;
  image_url: string;
  tagline: string;
  ebc: number;
  ibu: number;
  abv: number;
  liked: false;
}

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
});

export async function listAll(): Promise<IBeer[]> {
  return api.get(`beers`).then(response => {
    return response.data;
  });
}

export async function listByGreaterEBC(): Promise<IBeer[]> {
  return api.get(`beers?ebc_gt=20`).then(response => {
    return response.data as IBeer[];
  });
}

export async function listByLessEBC(): Promise<IBeer[]> {
  return api.get(`beers?ebc_lt=20`).then(response => {
    return response.data;
  });
}

export async function listByGreaterIBU(): Promise<IBeer[]> {
  return api.get(`beers?ibu_gt=40`).then(response => {
    return response.data;
  });
}

export async function listByLessIBU(): Promise<IBeer[]> {
  return api.get(`beers?ibu_lt=40`).then(response => {
    return response.data;
  });
}
export async function listByGreaterABV(): Promise<IBeer[]> {
  return api.get(`beers?abv_gt=4`).then(response => {
    return response.data;
  });
}

export async function listByLessABV(): Promise<IBeer[]> {
  return api.get(`beers?abv_lt=4`).then(response => {
    return response.data;
  });
}

export default api;
