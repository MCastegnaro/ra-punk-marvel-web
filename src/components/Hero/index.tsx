import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

interface IHeroProps {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
}

const Hero: React.FC<IHeroProps> = ({
  children,
  name,
  thumbnail,
  description,
}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      <strong>{name}</strong>
      {description ? <p>{description}</p> : <p>{t('no_description')}</p>}
      {children}
    </Container>
  );
};

export default Hero;
