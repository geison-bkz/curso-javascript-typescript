import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { Container } from '../../styles/GlobalStyles';
import { Tittle, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/action';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
  }

  return (
    <Container>
      <Tittle>
        Login
        <small>Oie</small>
      </Tittle>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
