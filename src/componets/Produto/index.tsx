import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import nookies from 'nookies';

import { Container, Content } from './styles';

import Produtos from '../../model/Produtos';

const dataProdutos = Produtos.get();

// import imageNote from '../../assets/imagesNotebook/note01.png';
interface ListaProduto {
  id: string;
  imagemProduto: string;
  descricao: string;
  qtde: string;
  preco: string;
}

export function Produto() {
  const [quantidade, setQuantidade] = useState('');
  const [listaAtualizada, setListaAtualizada] = useState<ListaProduto[]>([]);
  const [listaTemporaria, setListaTemporaria] = useState<ListaProduto[]>([]);

  const history = useHistory();

  // carrega lista que está no localStorage, qdo atualiza a página
  useEffect(() => {
    // carregarLista();
    const listaLocalStorage = JSON.parse(
      localStorage.getItem('listaProduto') || '[]',
    );

    // atualiza listaAtualizada com o que tem no localStorage
    setListaAtualizada(listaLocalStorage);
  }, []);

  // salvar produtos no local Storage
  function addProduto(produto: ListaProduto) {
    if (quantidade.length >= 1){
      const cookies = nookies.get();
      const user = cookies.User;

      if ( user !== undefined) {
        const listaProduto = {
          id: produto.id,
          imagemProduto: produto.imagemProduto,
          descricao: produto.descricao,
          qtde: quantidade,
          preco: produto.preco,
        };
    
        const lista = [...listaAtualizada, listaProduto];
    
        // atualiza a lista no localStorage
        localStorage.setItem('listaProduto', JSON.stringify(lista));
        setListaAtualizada(lista);

        history.push('/carrinho');
      } else {
        // para salavar o que o usuário quer colocar no carrinho, qdo não estiver logado
        const listaProduto = {
          id: produto.id,
          imagemProduto: produto.imagemProduto,
          descricao: produto.descricao,
          qtde: quantidade,
          preco: produto.preco,
        };
    
        const lista = [...listaTemporaria, listaProduto];
    
        // atualiza a lista no localStorage
        localStorage.setItem('listaTemporaria', JSON.stringify(lista));
        setListaTemporaria(lista);
        history.push('/simple-login');
      }    

      // history.push('/carrinho');
      // history.push('/simple-login');
    } else {
      alert('Entre com a quantidade!');
    }
    
  }  

  return (
    <Container>
      <div className="topo">
        <h1>Produtos</h1>
        <Link to="/carrinho">Ir para o carrinho</Link>
      </div>

      <Content>
        {dataProdutos.map((produto, index) => {
          return(
            <div key={index}>
              <img src={produto.imagemProduto} alt="" />
              <div className="desc">
                <p>{produto.descricao}</p>
                <p>R$ {produto.preco}</p>
                <span>Quantidade: </span>
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  onChange={event => setQuantidade(event.target.value)}
                />
                <button type="button" onClick={() => addProduto(produto)}>Add à Lista</button>  
              </div>
              
            </div>
          )
        })}       
        
      </Content>

    </Container>
  )
}

// qdo add um mesmo produto, está criando outra linha de produto e não só alterando a qtde