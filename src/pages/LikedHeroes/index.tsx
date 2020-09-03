import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, RouteChildrenProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import Arcicle from '../../components/shared/Arcicle';
import Header from '../../components/shared/Header';
import Section from '../../components/shared/Section';
import NavBar from '../../components/shared/NavBar';
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
const LikedHeroes: React.FC<RouteChildrenProps> = () => {
  const { t } = useTranslation();
  const [data] = useState<ICharacter[]>(() => {
    const heroes = localStorage.getItem('@RAchallenge:marvelliked');

    if (heroes) {
      return JSON.parse(heroes);
    }

    return [] as ICharacter[];
  });

  return (
    <Container>
      <Header title={t('favorite_heroes')} />

      <Section>
        <NavBar>
          <Link to="/heroes">
            <FiChevronLeft size={20} />
            {t('back')}
          </Link>
        </NavBar>

        <Arcicle>
          {data.map(hero => (
            <Hero
              key={hero.id}
              name={hero.name}
              thumbnail={hero.thumbnail}
              description={hero.description}
            />
          ))}
        </Arcicle>
      </Section>
    </Container>
  );
};

export default LikedHeroes;
