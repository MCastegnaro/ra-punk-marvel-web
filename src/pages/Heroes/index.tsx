import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiHeart } from 'react-icons/fi';
import { Container } from './styles';
import Header from '../../components/shared/Header';
import Input from '../../components/shared/Input';
import SearchButton from '../../components/shared/SearchButton';
import { useToast } from '../../hooks/toast';

import { listHeros, listByComics, findByName } from '../../services/marvel/api';
import Section from '../../components/shared/Section';
import NavBar from '../../components/shared/NavBar';
import NavButton from '../../components/shared/NavButton';
import Arcicle from '../../components/shared/Arcicle';
import Hero from '../../components/Hero';

interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface INavMenu {
  title: string;
  func(): Promise<void>;
}

const Heroes: React.FC = () => {
  const TOKEN_MARVEL_LIKED = '@RAchallenge:marvelliked';
  const formRef = useRef<FormHandles>(null);
  const { t } = useTranslation();
  const { addToast } = useToast();

  const [heroes, setHeroes] = useState<ICharacter[]>([]);
  const [findHero, setFindHero] = useState('');
  const [likedHeroes] = useState<ICharacter[]>(() => {
    const getlikedHeroes = localStorage.getItem(TOKEN_MARVEL_LIKED);

    if (getlikedHeroes) {
      return JSON.parse(getlikedHeroes) as ICharacter[];
    }

    return [] as ICharacter[];
  });

  const list = useCallback(async () => {
    await listHeros().then(res => setHeroes(res as ICharacter[]));
  }, []);

  const ultimanteXMAN = useCallback(async () => {
    await listByComics(1158).then(res => setHeroes(res as ICharacter[]));
  }, []);

  const spiderManUniverse = useCallback(async () => {
    await listByComics(6181).then(res => setHeroes(res as ICharacter[]));
  }, []);

  const ageOfApoca = useCallback(async () => {
    await listByComics(1886).then(res => setHeroes(res as ICharacter[]));
  }, []);

  useEffect(() => {
    list();
  }, [list]);

  const navMenu: INavMenu[] = [
    {
      title: 'classics',
      func: list,
    },
    {
      title: 'ultimante_xman',
      func: ultimanteXMAN,
    },

    {
      title: 'ultimante_spider_man',
      func: spiderManUniverse,
    },

    {
      title: 'age_of_apocalypse',
      func: ageOfApoca,
    },
  ];

  const handleSubmit = useCallback(async () => {
    try {
      await findByName(findHero).then(res => setHeroes(res as ICharacter[]));
      setFindHero('');
    } catch (error) {
      addToast({
        type: 'error',
        title: t('error_find_hero'),
        description: t('error_not_find_hero_desc'),
      });
    }
  }, [addToast, findHero, t]);

  const handleGiveLike = useCallback(
    async (hero: ICharacter) => {
      const findIndexHero = likedHeroes.findIndex(
        indexHero => indexHero.id === hero.id,
      );

      if (findIndexHero >= 0) {
        likedHeroes.splice(findIndexHero, 1);
        addToast({
          type: 'info',
          title: t('item_removed'),
          description: t('item_removed_desc'),
        });
      } else {
        likedHeroes.push(hero);
        addToast({
          type: 'success',
          title: t('item_added'),
          description: t('item_added_desc'),
        });
      }

      localStorage.setItem(TOKEN_MARVEL_LIKED, JSON.stringify(likedHeroes));
    },

    [addToast, likedHeroes, t],
  );

  return (
    <Container>
      <Header title="MARVEL API">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            value={findHero}
            onChange={e => setFindHero(e.target.value)}
            name="heroName"
            type="text"
            placeholder="Buscar por nome"
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

          <Link to="/liked-heroes">{t('my_favorites')}</Link>
        </NavBar>

        <Arcicle>
          {heroes.length > 0 ? '' : t('loading')}
          {heroes.map(hero => (
            <Hero
              key={hero.id}
              name={hero.name}
              thumbnail={hero.thumbnail}
              description={hero.description}
            >
              <button type="button" onClick={() => handleGiveLike(hero)}>
                <FiHeart size={20} />
              </button>
            </Hero>
          ))}
        </Arcicle>
      </Section>
    </Container>
  );
};

export default Heroes;
