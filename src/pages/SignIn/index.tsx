import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import nookies from 'nookies';

import { Button } from "../../componets/Button";

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

  const [todosUsuarios, setTodosUsuarios] = useState<ListaUsuario[]>([]);

  const history = useHistory();

  // carrega lista que está no localStorage, qdo atualiza a página
  useEffect(() => {
    carregarLista();
  }, []);

  // carregar lista que está no localStorage
  function carregarLista() {
    const listaLocalStorage = JSON.parse(
      localStorage.getItem('CadastroUsuario') || '[]',
    );

    // atualiza setTodosUsuarios com o que tem no localStorage
    setTodosUsuarios(listaLocalStorage);
  }  

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (
      email.trim() === '' ||
      senha.trim() === ''
    ) {
      alert('Digite todos os campos obrigatórios!');
      return;
    }

    if (setTodosUsuarios.length !== 0) {
      const achou = todosUsuarios.find(usuario => usuario.email === email)

      if (achou?.email === email && achou?.senha === senha) {
        const user = email;

        nookies.set(null, 'User', user, {
          path: '/',
          maxAge: 86400
        })
        
        history.push('/carrinho');
      } else {
        alert('Email ou senha incorreto!');
      }
      
    } else (
      alert('Usuário não tem cadastro!')
    )
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Faça o seu login</h2>

        <input 
          type="email" 
          placeholder="Ex. nome@gmail.com *" 
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        <input 
          type="password" 
          placeholder="Senha *" 
          onChange={event => setSenha(event.target.value)}
          value={senha}
        />

        <Button type="submit">
          Continuar
        </Button>
 
        <Link to="/cadastro-usuario">Cadastre-se</Link>
      </form>

      </Container>
  )
  
}