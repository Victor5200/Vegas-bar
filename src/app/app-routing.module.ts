import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExemploComponent} from './exemplo/exemplo.component';
import {LoginComponent} from './components/login/login.component';
import {VedasComandasComponent} from './components/vendas/vedas-comanda/vedas-comandas.component';
import {CadastroProdutoComponent} from './components/produto/cadastro-produto/cadastro-produto.component';
import {CadastroMembrosComponent} from './components/membro/cadastro-membros/cadastro-membros.component';
import {ConsultaProdutosComponent} from './components/produto/consulta-produtos/consulta-produtos.component';
import {ConsultaMembrosComponent} from './components/membro/consulta-membros/consulta-membros.component';
import {RelatorioVendasComponent} from './components/vendas/relatorio-vendas/relatorio-vendas.component';
import {ConsultaVendaComponent} from './components/vendas/consulta-venda/consulta-venda.component';


const routes: Routes = [
  {path: '', component: ExemploComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'cadastro-produto/:id', component: CadastroProdutoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-membros', component: CadastroMembrosComponent},
  {path: 'cadastro-membros/:id', component: CadastroMembrosComponent},
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
