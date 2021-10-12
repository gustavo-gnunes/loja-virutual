import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import nookies from 'nookies';

import { Container, Content, Resumo } from './styles';

interface ListaProduto {
  id: string;
  imagemProduto: string;
  descricao: string;
  qtde: string;
  preco: string;
} 

export function CarrinhoProduto() {
  const [listaAtualizada, setListaAtualizada] = useState<ListaProduto[]>([]);
  const [listaTemporaria, setListaTemporaria] = useState<ListaProduto[]>([]);
  // const [teste, setTeste] = useState('');

  const history = useHistory();

  var qtdeTotal = 0;
  var precoTotal = 0.0;

  // carrega lista que está no localStorage, qdo atualiza a página
  useEffect(() => {
    const cookies = nookies.get();
    const user = cookies.User;

    if ( user !== undefined) {
      carregarLista();
    } else {
      history.push('/simple-login');
    }
  }, []);

  // carregar lista que está no localStorage
  function carregarLista() {
    // lista temporaria
    const listaTemporariaLocalStorage = JSON.parse(
      localStorage.getItem('listaTemporaria') || '[]',
    );

    // atualiza setListaTemporaria com o que tem no localStorage
    setListaTemporaria(listaTemporariaLocalStorage);
    // -- fim listaTemporaria


    const listaLocalStorage = JSON.parse(
      localStorage.getItem('listaProduto') || '[]',
    );

    const lista = [...listaLocalStorage, ...listaTemporariaLocalStorage];
    // console.log(lista)

    localStorage.setItem('listaProduto', JSON.stringify(lista));
    // atualiza listaAtualizada com o que tem no localStorage
    setListaAtualizada(lista);

    localStorage.removeItem('listaTemporaria');
    setListaTemporaria([]);
    
  }

  function deleteProduto(index: number) {
    listaAtualizada.splice(index, 1);

    localStorage.setItem('listaProduto', JSON.stringify(listaAtualizada));
    setListaAtualizada(listaAtualizada);

    carregarLista();
  }

  function decrementar(produto: ListaProduto, index: number) {
    const qtde = parseInt(produto.qtde);
    if (qtde > 1) {
      const lista = listaAtualizada.slice();
      lista[index].id = produto.id;
      lista[index].imagemProduto = produto.imagemProduto;
      lista[index].descricao = produto.descricao;
      lista[index].qtde = (qtde-1).toString();
      lista[index].preco = produto.preco; 

      localStorage.setItem('listaProduto', JSON.stringify(lista));

      qtdeTotal = qtdeTotal - 1;
      precoTotal = precoTotal - parseFloat(produto.preco);
      // setTeste(qtdeTotal.toString());
      // console.log(qtdeTotal)

      carregarLista();
    }
  }

  function incrementar(produto: ListaProduto, index: number) {
    const qtde = parseInt(produto.qtde);
    if (qtde >= 1) {
      const lista = listaAtualizada.slice();
      lista[index].id = produto.id;
      lista[index].imagemProduto = produto.imagemProduto;
      lista[index].descricao = produto.descricao;
      lista[index].qtde = (qtde+1).toString();
      lista[index].preco = produto.preco; 

      localStorage.setItem('listaProduto', JSON.stringify(lista));

      qtdeTotal = qtdeTotal + 1;
      precoTotal = precoTotal + parseFloat(produto.preco);
      // setTeste(qtdeTotal.toString());
      // console.log(qtdeTotal)

      carregarLista();
    }
  }

  function addCarrinho() {
    const todosProdutos = {
      ...listaAtualizada,
      qtdeTotal,
      precoTotal,
    }

    localStorage.setItem('listaCarrinho', JSON.stringify(todosProdutos));
    console.log(todosProdutos)

    // history.push('/login');
  }

  return (
    <Container>
      <Content>
        <div>
          <h2>Meu carrinho</h2>

          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Qtde.</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody>
              {listaAtualizada.map((produto, index) => {
                const qtde = parseInt(produto.qtde);
                const preco = parseFloat(produto.preco.replace(",", "."));
                const precoTot = (preco * qtde).toFixed(2);

                qtdeTotal = qtdeTotal + qtde;
                precoTotal = (precoTotal + (preco * qtde));
                
                // setQtdeTotal(...qtdeTotal + qtde);
                // setQtdeTotal(qtdeTotal + qtde);
                // setPrecoTotal(precoTotal + precoTot);

                return (
                  <tr key={index}>
                    <td>{produto.descricao}</td>
                    <td>{precoTot}</td>
                    <td>{produto.qtde}</td>
                    <td>
                      <button onClick={() => decrementar(produto, index)}>-</button>
                    </td>
                    <td>
                      <button onClick={() => incrementar(produto, index)}>+</button>
                    </td>
                    <td>
                      <button type="button" onClick={() => deleteProduto(index)}>
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </Content>

      <Resumo>
        <h2>Resumo do pedido</h2>

        <p>{qtdeTotal} produtos</p>

        <div>
          <p>Total</p>
          <p>R$: {precoTotal.toFixed(2)}</p>
        </div>

        <button type="button" onClick={addCarrinho}>Finaizar Compra</button>

        <Link to="/">Adicionar + produtos</Link>
        
      </Resumo>

      
      
    </Container>
  )
}

// não está atualizando de forma automática o resumo do pedido (a qtde e o valor total)