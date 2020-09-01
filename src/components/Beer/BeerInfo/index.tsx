import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

interface IBeerInfoProps {
  ebc: number;
  ibu: number;
  abv: number;
}

const InfoBeer: React.FC<IBeerInfoProps> = ({ ibu, ebc, abv }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <p>
        {t('color')}
        {ebc}
      </p>
      <p>
        {t('bitterness')}
        {ibu}
      </p>
      <p>
        {t('alcohol_content')}
        {abv}
      </p>
    </Container>
  );
};

export default InfoBeer;
