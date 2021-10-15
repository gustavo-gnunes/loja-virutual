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
}

export function CompraFinalizada() {
  const [pedidos, setPedidos] = useState<ListaPedidos[]>([]);
  const [produtos, setProdutos] = useState<ListaProduto[]>([]);
  const [listaProdutos, setListaProdutos] = useState<ListaProduto[]>([]);
  const [usuarios, setUsuarios] = useState<ListaUsuario[]>([]);
  const [listaUsuarios, setListaUsuarios] = useState<ListaUsuario[]>([]);

  useEffect(() => {
    const listaPedidosConcluidosLocalStorage = JSON.parse(
      localStorage.getItem('PedidosConcluidos') || '[]',
    );
    setPedidos(listaPedidosConcluidosLocalStorage);

    const listaCarrinhoLocalStorage = JSON.parse(
      localStorage.getItem('listaCarrinho') || '[]',
    );
    // setListaCarrinho(listaCarrinhoLocalStorage);

    const listaProdutoLocalStorage = JSON.parse(
      localStorage.getItem('listaProduto') || '[]',
    );
    // setListaProduto(listaProdutoLocalStorage);
    
    localStorage.setItem('Pedidos', JSON.stringify(listaProdutoLocalStorage));
    setProdutos(listaProdutoLocalStorage);

    const listaUsuarioLocalStorage = JSON.parse(
      localStorage.getItem('CadastroUsuario') || '[]',
    );
    setUsuarios(listaUsuarioLocalStorage);
    
    
    const carrinho = listaCarrinhoLocalStorage[0];
    const usuario = listaUsuarioLocalStorage[0];
    const produtos = listaProdutoLocalStorage;

    console.log('Errooouuu', carrinho)

    const lista = {...carrinho, ...usuario, produtos}
    // const lista = {...carrinho, ...usuario}

    const listaAtualizada = [...listaPedidosConcluidosLocalStorage, lista];
    localStorage.setItem('PedidosConcluidos', JSON.stringify(listaAtualizada));
    setPedidos(listaAtualizada);

    console.log('Teeeeee', lista)
    // if (listaPedidosConcluidosLocalStorage.length >= 1){
    //   const listaAtualizada = [...listaPedidosConcluidosLocalStorage, lista];
    //   localStorage.setItem('PedidosConcluidos', JSON.stringify(listaAtualizada));
    //   setPedidos(listaAtualizada);
    // } else {
    //   const listaAtualizada = [lista];
    //   localStorage.setItem('PedidosConcluidos', JSON.stringify(listaAtualizada));
    //   setPedidos(listaAtualizada);
    // }
    

    // localStorage.removeItem('listaCarrinho');
    localStorage.removeItem('listaProduto');
    localStorage.removeItem('Pedidos');
      
  }, [])

  function mostrarPedido(produto: ListaPedidos, index: number) {
    setListaProdutos(produtos);
    setListaUsuarios(usuarios);
  }

  return (
    <Container>
      <h2>Pedido Concluído</h2>

      <Resumo>
        {pedidos.map((produto, index) => {
          console.log('Produtos',produto)
          return ( 
            <div key={index} className="resumo-container">
              <h3>número do pedido</h3>
              <div className="resumo-content">
                <div>
                  <p>{produto.idPedido}</p>
                  <p>Quantidade de Produtos: {produto.totalQtde}</p>
                  <p>Total R$: {parseFloat(produto.totalPreco).toFixed(2)}</p>
                </div>
                
                <button type="button" onClick={() => mostrarPedido(produto, index)}>Mostrar Pedido</button>
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
                {listaProdutos.map((produto, index) => {
                  const qtde = parseInt(produto.qtde);
                  const preco = parseFloat(produto.preco.replace(",", "."));
                  const precoTot = (preco * qtde).toFixed(2);

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