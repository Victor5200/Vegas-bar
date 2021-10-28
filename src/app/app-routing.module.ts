import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExemploComponent} from './exemplo/exemplo.component';

import {CadastroEstoqueComponent} from './components/cadastro-estoque/cadastro-estoque.component';

import {LoginComponent} from './components/login/login.component';
import {VedasComandasComponent} from './vedas-comandas/vedas-comandas.component';
import {CadastroProdutoComponent} from './components/cadastro-produto/cadastro-produto.component';
import {CadastroMembrosComponent} from './components/cadastro-membros/cadastro-membros.component';
import {ConsultaProdutosComponent} from './components/consulta-produtos/consulta-produtos.component';
import {ConsultaMembrosComponent} from './components/consulta-membros/consulta-membros.component';


const routes: Routes = [
  {path: '', component: ExemploComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-membros', component: CadastroMembrosComponent},
  {path: 'cadastro-estoque', component: CadastroEstoqueComponent},
  {path: 'vendas-comandas', component: VedasComandasComponent},
  {path: 'consulta-produtos', component: ConsultaProdutosComponent},
  {path: 'consulta-membros', component: ConsultaMembrosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
