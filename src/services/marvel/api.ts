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
const PUBLIC_KEY = 'a360c798f1e967103f1db0187292c228';
const PRIVATE_KEY = 'eb3ce4e371a8fcb4b864e6132e80bdf22608460c';

const api = axios.create({
  baseURL: URL_BASE,
});

function getHashUrl(): string {
  const md5Hash = md5.create();
  const timestamp = Number(new Date());

  md5Hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

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
  return api.get(`characters?&comics=${id}&${hashUrl}`).then(response => {
    return response.data.data.results;
  });
}

export default api;
