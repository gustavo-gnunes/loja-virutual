import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

import Produtos from '../../model/Produtos';

const dataProdutos = Produtos.get();

// import imageNote from '../../assets/imagesNotebook/note01.png';
interface ListaProduto {
  id: string;
  imagemProduto: string;
  descricao: string;
  // qtde: string;
  preco: string;
}

export function Produto() {
  const [quantidade, setQuantidade] = useState('');
  const [listaAtualizada, setListaAtualizada] = useState<ListaProduto[]>([]);

  // carrega lista que está no localStorage, qdo atualiza a página
  useEffect(() => {
    carregarLista();
  }, []);

  // carregar lista que está no localStorage
  function carregarLista() {
    const listaLocalStorage = JSON.parse(
      localStorage.getItem('listaProduto') || '[]',
    );

    // atualiza listaAtualizada com o que tem no localStorage
    setListaAtualizada(listaLocalStorage);
  }

  // salvar produtos no local Storage
  function addProduto(produto: ListaProduto) {
    // console.log('entrou', produto.descricao);
    console.log(quantidade);

    if (quantidade.length >= 1){
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
    } else {
      alert('Entre com a quantidade!');
    }
    
  }

  return (
    <Container>
      <h1>Produtos</h1>

      <Content>
        {dataProdutos.map(produto => {
          return(
            <div key={produto.id}>
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