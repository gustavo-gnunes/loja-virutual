import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// para utilizar todas as propriedades do ButtonHTMLAttributes
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// children: é o conteúdo que vai ser passado qdo usar este componete. Ex: Cadastrar
// rest: todas propriedades que existe dentro de um botão
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}