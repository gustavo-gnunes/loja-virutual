import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ListaUsuario {
  id: string;
  nome: string;
  cpf: string;
  cidade: string;
  email: string;
  senha: string
} 

export function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [listaAtualizada, setListaAtualizada] = useState<ListaUsuario[]>([]);

  // carrega lista que está no localStorage, qdo atualiza a página
  useEffect(() => {
    carregarLista();
  }, []);

  // carregar lista que está no localStorage
  function carregarLista() {
    const listaLocalStorage = JSON.parse(
      localStorage.getItem('CadastroUsuario') || '[]',
    );

    // atualiza listaAtualizada com o que tem no localStorage
    setListaAtualizada(listaLocalStorage);
  }

  

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (listaAtualizada.length !== 0) {
      console.log('tem usuario cadastrado')
    } else (
      alert('Usuário não tem cadastro!')
    )
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Faça o seu login</h2>

        <input type="email" placeholder="Ex. nome@gmail.com" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Continuar</button>
        <Link to="/cadastro-usuario">Cadastre-se</Link>
      </form>

      </Container>
  )
  
}