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
import {AuthGuard} from "./interceptor/auth.guard";
import {ComprasComponent} from "./components/compras/compras.component";


const routes: Routes = [
  {path: '', component: ExemploComponent, canActivate: [AuthGuard] },
  {path: 'cadastro-produto', component: CadastroProdutoComponent, canActivate: [AuthGuard]},
  {path: 'cadastro-produto/:id', component: CadastroProdutoComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-membros', component: CadastroMembrosComponent, canActivate: [AuthGuard]},
  {path: 'cadastro-membros/:id', component: CadastroMembrosComponent, canActivate: [AuthGuard]},
  {path: 'vendas-comandas', component: VedasComandasComponent, canActivate: [AuthGuard]},
  {path: 'vendas-comandas/:id', component: VedasComandasComponent, canActivate: [AuthGuard]},
  {path: 'consulta-produtos', component: ConsultaProdutosComponent, canActivate: [AuthGuard]},
  {path: 'relatorio-vendas', component: RelatorioVendasComponent, canActivate: [AuthGuard]},
  {path: 'consulta-membros', component: ConsultaMembrosComponent, canActivate: [AuthGuard]},
  {path: 'consulta-venda', component: ConsultaVendaComponent, canActivate: [AuthGuard]},
  {path: 'cadastrar-compra', component: ComprasComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
