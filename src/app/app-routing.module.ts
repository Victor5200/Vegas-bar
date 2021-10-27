import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExemploComponent} from './exemplo/exemplo.component';
import {CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';
import {CadastroEstoqueComponent} from './cadastro-estoque/cadastro-estoque.component';
import {CadastroMembrosComponent} from './cadastro-membros/cadastro-membros.component';
import {LoginComponent} from './components/login/login.component';
import {VedasComandasComponent} from './vedas-comandas/vedas-comandas.component';
import {ConsultaProdutosComponent} from './consulta-produtos/consulta-produtos.component';


const routes: Routes = [
  {path: '', component: ExemploComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'cadastro-membros', component: CadastroMembrosComponent},
  {path: 'cadastro-estoque', component: CadastroEstoqueComponent},
  {path: 'vendas-comandas',  component: VedasComandasComponent},
  {path: 'consulta-produtos', component: ConsultaProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule {
}
