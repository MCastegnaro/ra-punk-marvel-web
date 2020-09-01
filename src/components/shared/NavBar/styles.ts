import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 280px;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 10px 0 10px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 60px;

    transition: background-color 0.2s;
    &:hover {
      background: #f0f0f5;
      color: #06304e;
    }

    color: #f0f0f5;
    text-decoration: none;
  }
`;
