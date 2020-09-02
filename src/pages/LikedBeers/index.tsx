import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, RouteChildrenProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import Arcicle from '../../components/shared/Arcicle';
import Beer from '../../components/Beer';
import BeerInfo from '../../components/Beer/BeerInfo';
import Header from '../../components/shared/Header';
import Section from '../../components/shared/Section';
import NavBar from '../../components/shared/NavBar';

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

const LikedBeers: React.FC<RouteChildrenProps> = () => {
  const { t } = useTranslation();
  const [data] = useState<IBeer[]>(() => {
    const beers = localStorage.getItem('@RAchallenge:beersliked');

    if (beers) {
      console.log(JSON.parse(beers));
      return JSON.parse(beers);
    }

    return [] as IBeer[];
  });

  return (
    <Container>
      <Header title={t('favorite_beers')} />

      <Section>
        <NavBar>
          <Link to="/beers">
            <FiChevronLeft size={20} />
            {t('back')}
          </Link>
        </NavBar>

        <Arcicle>
          {data.map(beer => (
            <Beer
              key={beer.id}
              name={beer.name}
              image_url={beer.image_url}
              tagline={beer.tagline}
            >
              <BeerInfo ebc={beer.ebc} ibu={beer.ibu} abv={beer.abv} />
            </Beer>
          ))}
        </Arcicle>
      </Section>
    </Container>
  );
};

export default LikedBeers;
