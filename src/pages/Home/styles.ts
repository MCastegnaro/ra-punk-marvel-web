import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh; /* Ocupa 100% do display-port*/

  display: flex; /* Deixa um conteudo ao lado do outro*/
  align-items: stretch; /* Estica o maximo que der */
`;

export const Content = styled.div`
  display: flex;

  flex: 1;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1016px) {
    flex-direction: column;
    justify-content: center;
  }
`;
