import React, { useRef, useCallback, useState, useEffect } from 'react';
import { FiHeart, FiChevronLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import Input from '../../components/shared/Input';
import NavButton from '../../components/shared/NavButton';
import api, {
  listByGreaterEBC,
  listAll,
  listByLessEBC,
  listByGreaterIBU,
  listByLessIBU,
  listByGreaterABV,
  listByLessABV,
} from '../../services/punk/api';
import Beer from '../../components/Beer';
import BeerInfo from '../../components/Beer/BeerInfo';
import Header from '../../components/shared/Header';
import Section from '../../components/shared/Section';
import NavBar from '../../components/shared/NavBar';
import Arcicle from '../../components/shared/Arcicle';
import SearchButton from '../../components/shared/SearchButton';
import { useToast } from '../../hooks/toast';

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

interface INavMenu {
  title: string;
  func(): Promise<void>;
}

const Beers: React.FC = () => {
  const TOKEN_BEERSLIKED = '@RAchallenge:beersliked';
  const formRef = useRef<FormHandles>(null);
  const { t } = useTranslation();
  const { addToast } = useToast();

  const [beers, setBeers] = useState<IBeer[]>([]);
  const [findBeer, setFindBeer] = useState('');
  const [likedBeers] = useState<IBeer[]>(() => {
    const getLikedBeers = localStorage.getItem(TOKEN_BEERSLIKED);

    if (getLikedBeers) {
      return JSON.parse(getLikedBeers) as IBeer[];
    }

    return [] as IBeer[];
  });

  const list = useCallback(async () => {
    await listAll().then(res => setBeers(res as IBeer[]));
  }, []);

  const greaterEBC = useCallback(async () => {
    await listByGreaterEBC().then(res => setBeers(res as IBeer[]));
  }, []);

  const lessEBC = useCallback(async () => {
    await listByLessEBC().then(res => setBeers(res as IBeer[]));
  }, []);

  const greaterIBU = useCallback(async () => {
    await listByGreaterIBU().then(res => setBeers(res as IBeer[]));
  }, []);

  const lessIBU = useCallback(async () => {
    await listByLessIBU().then(res => setBeers(res as IBeer[]));
  }, []);

  const greaterABV = useCallback(async () => {
    await listByGreaterABV().then(res => setBeers(res as IBeer[]));
  }, []);

  const lessABV = useCallback(async () => {
    await listByLessABV().then(res => setBeers(res as IBeer[]));
  }, []);

  useEffect(() => {
    list();
  }, [list]);

  const navMenu: INavMenu[] = [
    {
      title: 'list_all',
      func: list,
    },
    {
      title: 'darker',
      func: greaterEBC,
    },
    {
      title: 'clearer',
      func: lessEBC,
    },
    {
      title: 'bitter',
      func: greaterIBU,
    },
    {
      title: 'smooth',
      func: lessIBU,
    },
    {
      title: 'high_alcohol_content',
      func: greaterABV,
    },
    {
      title: 'low_alcohol_content',
      func: lessABV,
    },
  ];

  const handleSubmit = useCallback(async () => {
    try {
      const response = await api.get<IBeer[]>(`beers?beer_name=${findBeer}`);
      const beer = response.data as IBeer[];

      setBeers(beer);
      setFindBeer('');
    } catch (error) {
      addToast({
        type: 'error',
        title: t('error_find_beer'),
        description: t('error_not_find_beer_desc'),
      });
    }
  }, [addToast, findBeer, t]);

  const handleGiveLike = useCallback(
    async (beer: IBeer) => {
      const findIndexBeer = likedBeers.findIndex(
        indexBeer => indexBeer.id === beer.id,
      );

      if (findIndexBeer >= 0) {
        likedBeers.splice(findIndexBeer, 1);
        addToast({
          type: 'info',
          title: t('item_removed'),
          description: t('item_removed_desc'),
        });
      } else {
        likedBeers.push(beer);
        addToast({
          type: 'success',
          title: t('item_added'),
          description: t('item_added_desc'),
        });
      }

      localStorage.setItem(TOKEN_BEERSLIKED, JSON.stringify(likedBeers));
    },

    [addToast, likedBeers, t],
  );

  return (
    <Container>
      <p />
      <Header title={t('punk_api')}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            value={findBeer}
            onChange={e => setFindBeer(e.target.value)}
            name="beerName"
            type="text"
            placeholder={t('find_by_name')}
          />

          <SearchButton />
        </Form>
      </Header>

      <Section>
        <NavBar>
          <Link to="/">
            <FiChevronLeft size={20} />
            {t('back')}
          </Link>

          {navMenu.map(menu => (
            <NavButton key={menu.title} onClick={() => menu.func()}>
              {t(menu.title)}
            </NavButton>
          ))}

          <Link to="/liked-beers">{t('my_favorites')}</Link>
        </NavBar>

        <Arcicle>
          {beers.length > 0 ? '' : t('loading')}
          {beers.map(beer => (
            <Beer
              key={beer.id}
              name={beer.name}
              image_url={beer.image_url}
              tagline={beer.tagline}
            >
              <BeerInfo ebc={beer.ebc} ibu={beer.ibu} abv={beer.abv} />
              <button type="button" onClick={() => handleGiveLike(beer)}>
                <FiHeart size={20} />
              </button>
            </Beer>
          ))}
        </Arcicle>
      </Section>
    </Container>
  );
};

export default Beers;
