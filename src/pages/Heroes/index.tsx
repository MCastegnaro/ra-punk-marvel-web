import React, { useState, useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container } from './styles';
import Header from '../../components/shared/Header';
import Input from '../../components/shared/Input';
import SearchButton from '../../components/shared/SearchButton';

const Heroes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const [heroes, setHeroes] = useState([]);
  const [findHero, setFindHero] = useState('');

  const handleSubmit = useCallback(async () => {
    console.log(findHero);
  }, [findHero]);

  return (
    <Container>
      <Header title="MARVEL API">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            value={findHero}
            onChange={e => setFindHero(e.target.value)}
            name="heroName"
            type="text"
            placeholder="Buscar por nome"
          />

          <SearchButton />
        </Form>
      </Header>
    </Container>
  );
};

export default Heroes;
