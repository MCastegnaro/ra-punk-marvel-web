import styled from 'styled-components';

export const Container = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    margin: 20px 10px 0 0;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f5;

  text-shadow: 1px 2px 4px #f0f0f5;

  margin-top: 20px;
  margin-left: 30px;
  line-height: 56px;
`;
