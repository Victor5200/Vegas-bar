import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExemploComponent} from './exemplo/exemplo.component';

import {ReactiveFormsModule} from '@angular/forms';
import {CadastroProdutoComponent} from './components/cadastro-produto/cadastro-produto.component';
import {CadastroEstoqueComponent} from './components/cadastro-estoque/cadastro-estoque.component';
import {LoginComponent} from './components/login/login.component';
import {CaixaComponent} from './components/caixa/caixa.component';
import {HeaderComponent} from './shared/header/header.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {CadastroMembrosComponent} from './components/cadastro-membros/cadastro-membros.component';
import { VedasComandasComponent } from './vedas-comanda/vedas-comandas.component';
import { ConsultaProdutosComponent } from './components/consulta-produtos/consulta-produtos.component';
import { ConsultaMembrosComponent } from './components/consulta-membros/consulta-membros.component';
import { RelatorioVendasComponent } from './components/relatorio-vendas/relatorio-vendas.component';
import {HttpClientModule} from '@angular/common/http';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import { ConsultaVendaComponent } from './components/consulta-venda/consulta-venda.component';


const maskConfig: Partial<IConfig> = {
  validation: false
};

@NgModule({
  declarations: [
    AppComponent,
    ExemploComponent,
    CadastroProdutoComponent,
    CadastroMembrosComponent,
    LoginComponent,
    CaixaComponent,
    HeaderComponent,
    NavbarComponent,
    CadastroEstoqueComponent,
    VedasComandasComponent,
    RelatorioVendasComponent,
    ConsultaProdutosComponent,
    ConsultaMembrosComponent,
    ConsultaVendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
