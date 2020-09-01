import React, { ButtonHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from './styles';

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SearchButton: React.FC<SearchButtonProps> = ({ ...rest }) => (
  <Container type="submit" {...rest}>
    <FiSearch size={20} />
  </Container>
);

export default SearchButton;
