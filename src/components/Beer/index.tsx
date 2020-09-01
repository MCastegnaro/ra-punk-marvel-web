import React from 'react';
import { Container } from './styles';

interface IBeerProps {
  name: string;
  image_url: string;
  tagline: string;
}

const Beer: React.FC<IBeerProps> = ({ children, name, image_url, tagline }) => {
  return (
    <Container>
      <img src={image_url} alt={name} />
      <strong>{name}</strong>
      <p>{tagline}</p>
      {children}
    </Container>
  );
};

export default Beer;
