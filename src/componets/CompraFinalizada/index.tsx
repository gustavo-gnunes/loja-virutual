import React, { useState, useEffect } from 'react';

import { Container, Resumo, Content, ContentUser, ContentProduto } from './styles';

interface ListaProduto {
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

interface ListaCarrinho {
  id: string;
  totalQtde: string;
  totalPreco: string;
}

interface ListaPedido {
  usuario: {
    id: string;
    nome: string;
    cpf: string;
    cidade: string;
    email: string;
    senha: string;
  };
  produto: {
    id: string;
    imagemProduto: string;
    descricao: string;
    qtde: string;
    preco: string;
  };
  pedido: {
    id: string;
    totalQtde: string;
    totalPreco: string;
  }
}

export function CompraFinalizada() {
  const [pedido, setPedido] = useState<ListaPedido[]>([]);

  const [listaProduto, setListaProduto] = useState<ListaProduto[]>([]);
  const [listaUsuarios, setListaUsuarios] = useState<ListaUsuario[]>([]);
  const [listaCarrinho, setListaCarrinho] = useState<ListaCarrinho[]>([]);

  useEffect(() => {
    // const listaProdutoLocalStorage = JSON.parse(
    //   localStorage.getItem('listaProduto') || '[]',
    // );
    // setListaProduto(listaProdutoLocalStorage);

    // const listaUsuarioLocalStorage = JSON.parse(
    //   localStorage.getItem('CadastroUsuario') || '[]',
    // );
    // setListaUsuarios(listaUsuarioLocalStorage);

    const listaCarrinhoLocalStorage = JSON.parse(
      localStorage.getItem('listaCarrinho') || '[]',
    );
    setListaCarrinho(listaCarrinhoLocalStorage);


      
    // const lista = {
    //   produto:listaProdutoLocalStorage, 
    //   usuario:listaUsuarioLocalStorage, 
    //   pedido:listaCarrinhoLocalStorage
    // }
    // const listaAtualizada = [...pedido, lista]
    //   // const lista = [listaProdutoLocalStorage, listaUsuarioLocalStorage, listaCarrinhoLocalStorage]

    //   localStorage.setItem('PedidosFinalizados', JSON.stringify(listaAtualizada));
    //   setPedido(listaAtualizada)
  }, [])

  function mostrarPedido() {
    const listaProdutoLocalStorage = JSON.parse(
      localStorage.getItem('listaProduto') || '[]',
    );
    setListaProduto(listaProdutoLocalStorage);

    const listaUsuarioLocalStorage = JSON.parse(
      localStorage.getItem('CadastroUsuario') || '[]',
    );
    setListaUsuarios(listaUsuarioLocalStorage);
  }

  return (
    <Container>
      <h2>Pedido Concluído</h2>
      
      <Resumo>
        {listaCarrinho.map((produto, index) => {
          return (
            <div key={index} className="resumo-container">
              <h3>número do pedido</h3>
              <div className="resumo-content">
                <div>
                  <p>{produto.id}</p>
                  <p>Quantidade de Produtos: {produto.totalQtde}</p>
                  <p>Total R$: {produto.totalPreco}</p>
                </div>
                
                <button type="button" onClick={mostrarPedido}>Mostrar Pedido</button>
              </div>
            </div>            
          )
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
            )
          })} 
        </ContentUser>
          
        <ContentProduto>
          <div>
            {/* <h2>Meu carrinho</h2> */}

            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Qtde.</th>
                </tr>
              </thead>

              <tbody>
                {listaProduto.map((produto, index) => {
                  const qtde = parseInt(produto.qtde);
                  const preco = parseFloat(produto.preco.replace(",", "."));
                  const precoTot = (preco * qtde).toFixed(2);

                  // qtdeTotal = qtdeTotal + qtde;
                  // precoTotal = (precoTotal + (preco * qtde));
                  
                  // setQtdeTotal(...qtdeTotal + qtde);
                  // setQtdeTotal(qtdeTotal + qtde);
                  // setPrecoTotal(precoTotal + precoTot);

                  return (
                    <tr key={index}>
                      <td>{produto.descricao}</td>
                      <td>{precoTot}</td>
                      <td>{produto.qtde}</td>
                    </tr>
                  )
                })}
                
              </tbody>
            </table>
          </div>
        </ContentProduto>
      </Content>
      
    </Container>
  )
}