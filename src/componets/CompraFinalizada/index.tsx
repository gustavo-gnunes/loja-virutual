import React, { useState, useEffect } from "react";

import {
  Container,
  Resumo,
  Content,
  ContentUser,
  ContentProduto,
} from "./styles";

interface ListaProduto {
  id: string;
  imagemProduto: string;
  descricao: string;
  qtde: string;
  preco: string;
}

interface ListaProdutoIndex {
  id: string;
  imagemProduto: string;
  descricao: string;
  qtde: string;
  preco: string;
}

interface ListaUsuario {
  id: string;
  nome: string;
  cpf: string;
  cidade: string;
  email: string;
  senha: string;
}

interface ListaPedidos {
  id: string;
  nome: string;
  cpf: string;
  cidade: string;
  email: string;
  senha: string;
  produto: {
    id: string;
    imagemProduto: string;
    descricao: string;
    qtde: string;
    preco: string;
  };
  idPedido: string;
  totalQtde: string;
  totalPreco: string;
  index: number;
}

export function CompraFinalizada() {
  const [pedidos, setPedidos] = useState<ListaPedidos[]>([]);
  const [produtos, setProdutos] = useState<ListaProduto[]>([]);
  const [listaProdutos, setListaProdutos] = useState<ListaProduto[]>([]);
  const [usuarios, setUsuarios] = useState<ListaUsuario[]>([]);
  const [listaUsuarios, setListaUsuarios] = useState<ListaUsuario[]>([]);

  const [pesquisaUsuario, setPesquisaUsuario] = useState("");
  const [pesquisaCPF, setPesquisaCPF] = useState("");
  const [pesquisaCidade, setPesquisaCidade] = useState("");

  useEffect(() => {
    const listaPedidosConcluidosLocalStorage = JSON.parse(
      localStorage.getItem("PedidosConcluidos") || "[]"
    );
    setPedidos(listaPedidosConcluidosLocalStorage);

    // localStorage.removeItem('listaCarrinho');
    localStorage.removeItem("listaProduto");
    // localStorage.removeItem('Pedidos');
  }, []);

  function mostrarPedido(produto: ListaPedidos, index: number) {
    const getUsuario = {
      id: produto.id,
      nome: produto.nome,
      cpf: produto.cpf,
      cidade: produto.cidade,
      email: produto.email,
      senha: produto.senha,
    };

    const user = [getUsuario];
    setListaUsuarios(user);

    const listaPedidosLocalStorage = JSON.parse(
      localStorage.getItem("Produtos") || "[]"
    );
    setListaProdutos(listaPedidosLocalStorage[produto.index]);

    console.log(index);
    console.log(produto.index);
  }

  function buscarPorUsuario() {
    const listaPedidosConcluidosLocalStorage = JSON.parse(
      localStorage.getItem("PedidosConcluidos") || "[]"
    );
    const todosPedidos = [...listaPedidosConcluidosLocalStorage];

    if (pesquisaUsuario !== "") {
      const pesqPorUsaurio = todosPedidos.filter(
        (pedido) => pedido.nome === pesquisaUsuario
      );
      setPedidos(pesqPorUsaurio);
    } else {
      setPedidos(todosPedidos);
    }

    setListaProdutos([]);
    setListaUsuarios([]);
    setPesquisaUsuario('');
  }

  function buscarPorCPF() {
    const listaPedidosConcluidosLocalStorage = JSON.parse(
      localStorage.getItem("PedidosConcluidos") || "[]"
    );
    const todosPedidos = [...listaPedidosConcluidosLocalStorage];

    if (pesquisaCPF !== "") {
      const pesqPorCPF = todosPedidos.filter(
        (pedido) => pedido.cpf === pesquisaCPF
      );
      setPedidos(pesqPorCPF);
    } else {
      setPedidos(todosPedidos);
    }

    setListaProdutos([]);
    setListaUsuarios([]);
    setPesquisaCPF('');
  }

  function buscarPorCidade() {
    const listaPedidosConcluidosLocalStorage = JSON.parse(
      localStorage.getItem("PedidosConcluidos") || "[]"
    );
    const todosPedidos = [...listaPedidosConcluidosLocalStorage];

    if (pesquisaCidade !== "") {
      const pesqPorCidade = todosPedidos.filter(
        (pedido) => pedido.cidade === pesquisaCidade
      );
      setPedidos(pesqPorCidade);
    } else {
      setPedidos(todosPedidos);
    }

    setListaProdutos([]);
    setListaUsuarios([]);
    setPesquisaCidade('');
  }

  return (
    <Container>
      <h2>Pedido Concluído</h2>
      <h3>Pesquisar: </h3>
      <div className="pesquisar">
        <div className="pesquisar-nome">
          <input
            type='text'
            placeholder='Nome do usuário'
            onChange={(event) => setPesquisaUsuario(event.target.value)}
            value={pesquisaUsuario}
          />
          <button type='button' onClick={buscarPorUsuario}>
            Buscar
          </button>
        </div>

        <div className="pesquisar-cpf">
          <input
            type='text'
            placeholder='CPF do usuário'
            onChange={(event) => setPesquisaCPF(event.target.value)}
            value={pesquisaCPF}
          />
          <button type='button' onClick={buscarPorCPF}>
            Buscar
          </button>
        </div>

        <div className="pesquisar-cidade">
          <input
            type='text'
            placeholder='Cidade do usuário'
            onChange={(event) => setPesquisaCidade(event.target.value)}
            value={pesquisaCidade}
          />
          <button type='button' onClick={buscarPorCidade}>
            Buscar
          </button>
        </div>
      </div>

      <Resumo>
        {pedidos.map((produto, index) => {
          return (
            <div key={index} className='resumo-container'>
              <h3>número do pedido</h3>
              <div className='resumo-content'>
                <div>
                  <p>{produto.idPedido}</p>
                  <p>Quantidade de Produtos: {produto.totalQtde}</p>
                  <p>Total R$: {parseFloat(produto.totalPreco).toFixed(2)}</p>
                </div>

                <button
                  type='button'
                  onClick={() => mostrarPedido(produto, index)}
                >
                  Mostrar Pedido
                </button>
              </div>
            </div>
          );
        })}
      </Resumo>

      <Content>
        <ContentUser>
          {listaUsuarios.map((usuario, index) => {
            return (
              <div key={index}>
                <h3>{usuario.nome}</h3>
                <p>{usuario.cpf}</p>
                <p>{usuario.cidade}</p>
                <p>{usuario.email}</p>
              </div>
            );
          })}
        </ContentUser>

        <ContentProduto>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Qtde.</th>
                </tr>
              </thead>

              <tbody>
                {listaProdutos.map((produto, index) => {
                  // console.log('Descricao', produto.descricao)
                  // console.log('Produto', produto)
                  const qtde = parseInt(produto.qtde);
                  const preco = parseFloat(produto.preco.replace(",", "."));
                  const precoTot = (preco * qtde).toFixed(2);
                  // console.log(listaProdutos)
                  return (
                    <tr key={index}>
                      <td>{produto.descricao}</td>
                      <td>{precoTot}</td>
                      <td>{produto.qtde}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ContentProduto>
      </Content>
    </Container>
  );
}
