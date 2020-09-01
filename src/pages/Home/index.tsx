import React from 'react';

import { Container, Content } from './styles';

import vingadoresImg from '../../assets/vingadores.jpg';
import brejaImg from '../../assets/breja.jpg';
import CardImageLink from '../../components/CardImageLink';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <CardImageLink
          urlImage={vingadoresImg}
          title="Heróis"
          description="Venha descobrir mundo dos heróis da marvel"
          alt="HeróisMarvel"
          to="heroes"
        />
        <CardImageLink
          urlImage={brejaImg}
          title="Cervejas"
          description="Venha descobrir o mundo das cervejas"
          alt="Cervejas"
          to="beers"
        />
      </Content>
    </Container>
  );
};

export default Home;
