import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExemploComponent} from './exemplo/exemplo.component';

import {CadastroEstoqueComponent} from './components/cadastro-estoque/cadastro-estoque.component';

import {LoginComponent} from './components/login/login.component';
import {VedasComandasComponent} from './vedas-comanda/vedas-comandas.component';
import {CadastroProdutoComponent} from './components/cadastro-produto/cadastro-produto.component';
import {CadastroMembrosComponent} from './components/cadastro-membros/cadastro-membros.component';
import {ConsultaProdutosComponent} from './components/consulta-produtos/consulta-produtos.component';
import {ConsultaMembrosComponent} from './components/consulta-membros/consulta-membros.component';
import {RelatorioVendasComponent} from './components/relatorio-vendas/relatorio-vendas.component';
import * as path from 'path';
import {ConsultaVendaComponent} from './components/consulta-venda/consulta-venda.component';


const routes: Routes = [
  {path: '', component: ExemploComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'cadastro-produto/:id', component: CadastroProdutoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-membros', component: CadastroMembrosComponent},
  {path: 'cadastro-membros/:id', component: CadastroMembrosComponent},
  {path: 'cadastro-estoque', component: CadastroEstoqueComponent},
  {path: 'vendas-comandas', component: VedasComandasComponent},
  {path: 'vendas-comandas/:id', component: VedasComandasComponent},
  {path: 'consulta-produtos', component: ConsultaProdutosComponent},
  {path: 'relatorio-vendas', component: RelatorioVendasComponent},
  {path: 'consulta-membros', component: ConsultaMembrosComponent},
  {path: 'consulta-venda', component: ConsultaVendaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
