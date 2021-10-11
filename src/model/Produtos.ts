// Dados de todos as produtos

import imageNote01 from '../assets/imagesNotebook/note01.png';
import imageNote02 from '../assets/imagesNotebook/note02.png';
import imageNote03 from '../assets/imagesNotebook/note03.png';
import imageNote04 from '../assets/imagesNotebook/note04.png';
import imageNote05 from '../assets/imagesNotebook/note05.png';
import imageNote06 from '../assets/imagesNotebook/note06.png';

const data = [
  {
    id: '1',
    imagemProduto: imageNote01,
    descricao: 'Notebook Multilaser',
    preco: '1300,00',
  },
  {
    id: '2',
    imagemProduto: imageNote02,
    descricao: 'Notebook HP Store Brasil',
    preco: '2900,00',
  },
  {
    id: '3',
    imagemProduto: imageNote03,
    descricao: 'Notebook Dell Inspiration 15 3000',
    preco: '3800,00',
  },
  {
    id: '4',
    imagemProduto: imageNote04,
    descricao: 'Notebook Lenovo Ultrafino',
    preco: '3200,00',
  },
  {
    id: '5',
    imagemProduto: imageNote05,
    descricao: 'Notebook LG',
    preco: '7600,00',
  },
  {
    id: '6',
    imagemProduto: imageNote06,
    descricao: 'Notebook Apple MacBook Air',
    preco: '7300,00',
  },
];

const Produtos = {
  get() {
    return data;
  },
};

export default Produtos;