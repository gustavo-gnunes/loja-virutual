// Dados de todos as produtos

import imageNote01 from '../assets/imagesNotebook/note01.png';
import imageNote02 from '../assets/imagesNotebook/note02.png';
import imageNote03 from '../assets/imagesNotebook/note03.png';
import imageNote04 from '../assets/imagesNotebook/note04.png';
import imageNote05 from '../assets/imagesNotebook/note05.png';
import imageNote06 from '../assets/imagesNotebook/note06.png';
import imageNote07 from '../assets/imagesNotebook/note07.png';
import imageNote08 from '../assets/imagesNotebook/note08.png';
import imageNote09 from '../assets/imagesNotebook/note09.png';
import imageNote10 from '../assets/imagesNotebook/note10.png';

const data = [
  {
    id: '1',
    imagemProduto: imageNote01,
    descricao: 'Notebook Multilaser',
    qtde: '0',
    preco: '1300,57',
  },
  {
    id: '2',
    imagemProduto: imageNote02,
    descricao: 'Notebook HP Store Brasil',
    qtde: '0',
    preco: '2900,00',
  },
  {
    id: '3',
    imagemProduto: imageNote03,
    descricao: 'Notebook Dell Inspiration 15 3000',
    qtde: '0',
    preco: '3800,00',
  },
  {
    id: '4',
    imagemProduto: imageNote04,
    descricao: 'Notebook Lenovo Ultrafino',
    qtde: '0',
    preco: '3200,00',
  },
  {
    id: '5',
    imagemProduto: imageNote05,
    descricao: 'Notebook LG',
    qtde: '0',
    preco: '7600,00',
  },
  {
    id: '6',
    imagemProduto: imageNote06,
    descricao: 'Notebook Apple MacBook Air',
    qtde: '0',
    preco: '7300,00',
  },
  {
    id: '7',
    imagemProduto: imageNote07,
    descricao: 'Notebook Gamer Acer Nitro 5',
    qtde: '0',
    preco: '4849,00',
  },
  {
    id: '8',
    imagemProduto: imageNote08,
    descricao: 'Notebook Compaq Presario 420',
    qtde: '0',
    preco: '1662,49',
  },
  {
    id: '9',
    imagemProduto: imageNote09,
    descricao: 'Notebook Samsung',
    qtde: '0',
    preco: '2211,60',
  },
  {
    id: '10',
    imagemProduto: imageNote10,
    descricao: 'Notebook Lenovo Celeron',
    qtde: '0',
    preco: '2277,72',
  },
];

const Produtos = {
  get() {
    return data;
  },
};

export default Produtos;