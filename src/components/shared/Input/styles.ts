import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 2px solid #1b1a1c;
    background-color: #1b1a1c;

    color: #f0f0f5;

    &::placeholder {
      color: #a8a8b3;
    }

    ${props =>
    props.isFocused &&
    css`
        color: #f0f0f5;
        border-color: #f0f0f5;
      `}
  }
`;
