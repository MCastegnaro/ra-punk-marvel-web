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

import api, { listAll } from '../../services/marvel/api';
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

  // const [likedBeers] = useState<IBeer[]>(() => {
  //   const getLikedBeers = localStorage.getItem(TOKEN_BEERSLIKED);

  //   if (getLikedBeers) {
  //     return JSON.parse(getLikedBeers) as IBeer[];
  //   }

  //   return [] as IBeer[];
  // });

  const list = useCallback(async () => {
    await listAll().then(res => setHeroes(res as ICharacter[]));
  }, []);

  useEffect(() => {
    list();
  }, [list]);

  const navMenu: INavMenu[] = [
    {
      title: 'list_all',
      func: list,
    },
  ];

  const handleSubmit = useCallback(async () => {
    console.log(findHero);
  }, [findHero]);

  const handleGiveLike = useCallback(async () => {
    console.log(findHero);
  }, [findHero]);

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
              <button type="button" onClick={() => handleGiveLike()}>
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
