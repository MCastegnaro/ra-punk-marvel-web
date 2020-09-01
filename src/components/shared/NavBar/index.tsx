import React from 'react';
import { Container, NavItems } from './styles';

interface INavMenu {
  title: string;
  func(): Promise<void>;
}

interface INavBarProps {
  menus: INavMenu[];
}

const NavBar: React.FC = ({ children }) => {
  return (
    <Container>
      <NavItems>{children}</NavItems>
    </Container>
  );
};

export default NavBar;
