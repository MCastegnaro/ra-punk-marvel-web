import React from 'react';
import { Container, Content } from './styles';

interface ICardImageLinkProps {
  urlImage: string;
  title: string;
  description: string;
  alt: string;
  to: string;
}

const CardImageLink: React.FC<ICardImageLinkProps> = ({
  urlImage,
  title,
  description,
  alt,
  to,
}) => {
  return (
    <Container to={to}>
      <Content>
        <img src={urlImage} alt={alt} />
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
      </Content>
    </Container>
  );
};

export default CardImageLink;
