import { Switch, Route } from 'react-router-dom';

import { Produto } from '../pages/Produto';
import { CarrinhoProduto } from '../pages/CarrinhoProduto';
import { SignIn } from '../pages/SignIn';
import { CadstroUsuario } from '../pages/CadastroUsuario';
import { CompraFinalizada } from '../pages/CompraFinalizada';

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