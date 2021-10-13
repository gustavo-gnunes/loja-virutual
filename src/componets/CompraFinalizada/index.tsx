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
  },
  produto: {
    id: string;
    imagemProduto: string;
    descricao: string;
    qtde: string;
    preco: string;
  },
  pedido: {
    id: string;
    totalQtde: string;
    totalPreco: string;
  },
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

    console.log(listaCarrinhoLocalStorage)

  

      // const listaProdutoLocalStorage = JSON.parse(
      //   localStorage.getItem('listaProduto') || '[]',
      // );
      // setListaProduto(listaProdutoLocalStorage);
  
      // const listaUsuarioLocalStorage = JSON.parse(
      //   localStorage.getItem('CadastroUsuario') || '[]',
      // );
      // setListaUsuarios(listaUsuarioLocalStorage);
  
      // const lista = {
      //   usuario: {...listaUsuarioLocalStorage}, 
      //   produto: {...listaProdutoLocalStorage},
      //   pedido: {...listaCarrinhoLocalStorage},
      
      // }
      // // console.log(lista)
      // const listaAtualizada = [...pedido, lista];
      // // const lista = [listaProdutoLocalStorage, listaUsuarioLocalStorage, listaCarrinhoLocalStorage]
      // // console.log(listaAtualizada)
      // localStorage.setItem('PedidosFinalizados', JSON.stringify(listaAtualizada));
      // // setPedido(listaAtualizada)
  
      // const listaLocalStorage = JSON.parse(
      //   localStorage.getItem('PedidosFinalizados') || '[]',
      // );
      // setPedido(listaLocalStorage);
      // console.log(listaLocalStorage);
      // console.log(pedido);
      
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

    const lista = {
      usuario: {...listaUsuarioLocalStorage}, 
      produto: {...listaProdutoLocalStorage},
      pedido: {...listaCarrinho},
    
    }
    // console.log(lista)
    const listaAtualizada = [...pedido, lista];
    // const lista = [listaProdutoLocalStorage, listaUsuarioLocalStorage, listaCarrinhoLocalStorage]
    // console.log(listaAtualizada)
    localStorage.setItem('PedidosFinalizados', JSON.stringify(listaAtualizada));
    // setPedido(listaAtualizada)

    const listaLocalStorage = JSON.parse(
      localStorage.getItem('PedidosFinalizados') || '[]',
    );
    setPedido(listaLocalStorage);
    console.log(listaLocalStorage);




    // console.log('Pedido',pedido)

    // const lista = {}
    // const listaAtualizada = [...listaUsuarios];
    // setListaUsuarios(listaAtualizada);

    // console.log(listaAtualizada)
  }

  return (
    <Container>
      <h2>Pedido Concluído</h2>
      
      {/* <Resumo>
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
      </Resumo> */}

      <Resumo>
        {/* {listaCarrinho.map((produto, index) => {
          return ( */}
            <div className="resumo-container">
              <h3>número do pedido</h3>
              <div className="resumo-content">
                <div>
                  {/* <p>{listaCarrinho}</p> */}
                  {/* <p>Quantidade de Produtos: {produto.totalQtde}</p>
                  <p>Total R$: {produto.totalPreco}</p> */}
                </div>
                
                <button type="button" onClick={mostrarPedido}>Mostrar Pedido</button>
              </div>
            </div>            
          {/* )
        })}        */}
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

      {/* testando */}
      <div>
        {pedido.map((lista, index) => {
          console.log('Lista', lista.usuario);
          return (
            <div key={index}>
              <h3>Foi {lista.produto.descricao}</h3>
            </div>
            
          )
        })}
      </div>
      
    </Container>
  )
}