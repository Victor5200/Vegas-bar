import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExemploComponent} from "./exemplo/exemplo.component";
import {CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  { path: "", component: ExemploComponent},
  { path: "cadastro-produto", component: CadastroProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
