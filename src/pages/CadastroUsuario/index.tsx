import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Button } from "../../componets/Button";

import { Container, Content } from './styles';

interface ListaUsuario {
  id: string;
  nome: string;
  cpf: string;
  cidade: string;
  email: string;
  senha: string
} 

export function CadstroUsuario() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [todosUsuarios, setTodosUsuarios] = useState<ListaUsuario[]>([]);

  const history = useHistory();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (
      nome.trim() === '' ||
      cpf.trim() === '' ||
      cidade.trim() === '' ||
      email.trim() === '' ||
      senha.trim() === ''
    ) {
      alert('Digite todos os campos obrigatórios!');
      return;
    }

    const listaCadstroUsuario = {
      id: uuid(),
      nome: nome,
      cpf: cpf,
      cidade: cidade,
      email: email,
      senha: senha,
    }

    const usuarios = [...todosUsuarios, listaCadstroUsuario];

    localStorage.setItem('CadastroUsuario', JSON.stringify(usuarios));
    setTodosUsuarios(usuarios);

    history.push('/simple-login');
  }

  return (
    <Container>
      <h2>Cadastro de Usuário</h2>

      <Content>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nome Completo*" 
            onChange={event => setNome(event.target.value)}
            value={nome}
          />
          <input 
            type="text" 
            placeholder="CPF*" 
            onChange={event => setCpf(event.target.value)}
            value={cpf}
          />
          <input 
            type="text" 
            placeholder="Cidade*"
            onChange={event => setCidade(event.target.value)}
            value={cidade}
          />
          <input 
            type="email" 
            placeholder="E-mail *"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <input 
            type="password" 
            placeholder="Senha*"
            onChange={event => setSenha(event.target.value)}
            value={senha}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>
        
      </Content>
    </Container>
  )
}