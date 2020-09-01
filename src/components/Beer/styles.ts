import styled from 'styled-components';

export const Container = styled.div`
  justify-self: center;

  max-height: 310px;

  background: transparent;
  border-radius: 2px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1, 1.1);
    background: #f0f0f5;

    color: #06304e;
  }

  img {
    max-width: 100%;
    height: 200px;
  }

  strong {
    font-size: 16px;
  }

  p {
    font-size: 10px;
    margin-top: 5px;
  }

  button {
    background-color: transparent;
    border: 0;
    margin: 10px;
    svg {
      &:hover {
        color: #c90d0d;
      }
    }
  }
`;
