import React, { useRef, useCallback, useState, useEffect } from 'react';
import { FiHeart, FiChevronLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import Input from '../../components/shared/Input';
import NavButton from '../../components/shared/NavButton';
import beersApi from '../../services/beersApi';
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
  const formRef = useRef<FormHandles>(null);
  const [beers, setBeers] = useState<IBeer[]>([]);
  const [findBeer, setFindBeer] = useState('');
  const { t } = useTranslation();
  const { addToast } = useToast();
  const TOKEN_BEERSLIKED = '@RAchallenge:beersliked';

  const [likedBeers] = useState<IBeer[]>(() => {
    const getLikedBeers = localStorage.getItem(TOKEN_BEERSLIKED);

    if (getLikedBeers) {
      return JSON.parse(getLikedBeers) as IBeer[];
    }

    return [] as IBeer[];
  });

  const listAll = useCallback(async () => {
    await beersApi.get(`beers`).then(response => {
      setBeers(response.data);
    });
  }, []);

  const listByGreaterEBC = useCallback(async () => {
    await beersApi.get(`beers?ebc_gt=20`).then(response => {
      setBeers(response.data);
    });
  }, []);
  const listByLessEBC = useCallback(async () => {
    await beersApi.get(`beers?ebc_lt=20`).then(response => {
      setBeers(response.data);
    });
  }, []);
  const listByGreaterIBU = useCallback(async () => {
    await beersApi.get(`beers?ibu_gt=40`).then(response => {
      setBeers(response.data);
    });
  }, []);
  const listByLessIBU = useCallback(async () => {
    await beersApi.get(`beers?ibu_lt=40`).then(response => {
      setBeers(response.data);
    });
  }, []);

  const listByGreaterABV = useCallback(async () => {
    await beersApi.get(`beers?abv_gt=4`).then(response => {
      setBeers(response.data);
    });
  }, []);
  const listByLessABV = useCallback(async () => {
    await beersApi.get(`beers?abv_lt=4`).then(response => {
      setBeers(response.data);
    });
  }, []);

  useEffect(() => {
    listAll();
  }, [listAll]);

  const navMenu: INavMenu[] = [
    {
      title: 'list_all',
      func: listAll,
    },
    {
      title: 'darker',
      func: listByGreaterEBC,
    },
    {
      title: 'clearer',
      func: listByLessEBC,
    },
    {
      title: 'bitter',
      func: listByGreaterIBU,
    },
    {
      title: 'smooth',
      func: listByLessIBU,
    },
    {
      title: 'high_alcohol_content',
      func: listByGreaterABV,
    },
    {
      title: 'low_alcohol_content',
      func: listByLessABV,
    },
  ];

  const handleSubmit = useCallback(async () => {
    try {
      const response = await beersApi.get<IBeer[]>(
        `beers?beer_name=${findBeer}`,
      );
      const beer = response.data as IBeer[];

      setBeers(beer);
      setFindBeer('');
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao buscar a cerveja',
      });
    }
  }, [addToast, findBeer]);

  const handleGiveLike = useCallback(
    async (beer: IBeer) => {
      const findIndexBeer = likedBeers.findIndex(
        indexBeer => indexBeer.id === beer.id,
      );

      if (findIndexBeer >= 0) {
        likedBeers.splice(findIndexBeer, 1);
        addToast({
          type: 'info',
          title: 'Item removido',
        });
      } else {
        likedBeers.push(beer);
        addToast({
          type: 'success',
          title: 'Item adicionado',
        });
      }

      localStorage.setItem(TOKEN_BEERSLIKED, JSON.stringify(likedBeers));
    },

    [addToast, likedBeers],
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
