import React from 'react';
import { Container } from './styles';

interface IBeerInfoProps {
  ebc: number;
  ibu: number;
  abv: number;
}

const InfoBeer: React.FC<IBeerInfoProps> = ({ ibu, ebc, abv }) => {
  return (
    <Container>
      <p>
        Cor:
        {ebc}
      </p>
      <p>
        Amargura:
        {ibu}
      </p>
      <p>
        Teor:
        {abv}
      </p>
    </Container>
  );
};

export default InfoBeer;
