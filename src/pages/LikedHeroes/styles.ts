import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  height: 64px;
  width: 100px;
  border: 0;
  background-color: #1b1a1c;
  color: #f0f0f5;
  transition: background-color 0.2s;

  &:hover {
    background: #f0f0f5;
    color: #06304e;
  }
`;
