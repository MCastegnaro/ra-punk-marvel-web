import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type NavButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const NavButton: React.FC<NavButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default NavButton;
