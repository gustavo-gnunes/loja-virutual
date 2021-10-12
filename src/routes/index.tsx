import { Switch, Route } from 'react-router-dom';

import { Produto } from '../componets/Produto';
import { CarrinhoProduto } from '../componets/CarrinhoProduto';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Produto} />
      <Route path="/carrinho" exact component={CarrinhoProduto} />
    </Switch>
  );
}