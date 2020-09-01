import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IImageProps {
  url: string;
}

export const Container = styled(Link)`
  display: flex;
  height: 700px;
  width: 500px;

  background: #f0f0f5;
  text-decoration: none;

  transition: transform 0.2s;
  border-radius: 2px;
  padding: 2px;

  cursor: pointer;

  &:hover {
    transform: scale(1.1, 1.1);
    padding: 10px;
    box-shadow: 5px 10px 8px #888888;
  }

  @media (max-width: 1016px) {
    display: block;
    height: 350px;
    width: 250px;

    & + a {
      margin-top: 40px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;

  img {
    height: auto;
    max-height: 600px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div {
    height: auto;
    background: #f0f0f5;
    padding: 10px;
    text-align: center;

    strong {
      font-size: 30px;
      color: #3d3d4d;
    }

    p {
      font-size: 15px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  @media (max-width: 1016px) {
    img {
      max-height: 300px;
    }

    div {
      max-height: 500px;
      padding: 2px;

      strong {
        font-size: 15px;
      }

      p {
        font-size: 10px;
      }
    }
  }
`;
