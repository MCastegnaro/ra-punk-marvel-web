import axios from 'axios';
import md5 from 'js-md5';

interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const URL_BASE = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

const api = axios.create({
  baseURL: URL_BASE,
});

function getHashUrl(): string {
  const md5Hash = md5.create();
  const timestamp = Number(new Date());

  md5Hash.update(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);

  return `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash.hex()}`;
}

export async function listHeros(): Promise<ICharacter[]> {
  const hashUrl = getHashUrl();
  const limit = 40;
  const series = 16450;

  return api
    .get(`characters?series=${series}&limit=${limit}&${hashUrl}`)
    .then(response => {
      return response.data.data.results;
    });
}

export async function listByComics(id: number): Promise<ICharacter[]> {
  const hashUrl = getHashUrl();
  return api.get(`characters?comics=${id}&${hashUrl}`).then(response => {
    return response.data.data.results;
  });
}

export async function findByName(nome: string): Promise<ICharacter[]> {
  const hashUrl = getHashUrl();
  return api.get(`characters?name=${nome}&${hashUrl}`).then(response => {
    return response.data.data.results;
  });
}

export default api;
