import { Switch, Route } from 'react-router-dom';

import { Produto } from '../componets/Produto';
import { CarrinhoProduto } from '../componets/CarrinhoProduto';
import { SignIn } from '../componets/SignIn';
import { CadstroUsuario } from '../componets/CadastroUsuario';
import { CompraFinalizada } from '../componets/CompraFinalizada';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Produto} />
      <Route path="/carrinho" exact component={CarrinhoProduto} />
      <Route path="/simple-login" exact component={SignIn} />
      <Route path="/cadastro-usuario" exact component={CadstroUsuario} />
      <Route path="/compra-finalizada" exact component={CompraFinalizada} />
    </Switch>
  );
}