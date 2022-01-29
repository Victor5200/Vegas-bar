import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExemploComponent} from './exemplo/exemplo.component';

import {ReactiveFormsModule} from '@angular/forms';
import {CadastroProdutoComponent} from './components/produto/cadastro-produto/cadastro-produto.component';
import {LoginComponent} from './components/login/login.component';
import {CaixaComponent} from './components/caixa/caixa.component';
import {HeaderComponent} from './shared/header/header.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {CadastroMembrosComponent} from './components/membro/cadastro-membros/cadastro-membros.component';
import {VedasComandasComponent} from './components/vendas/vedas-comanda/vedas-comandas.component';
import {ConsultaProdutosComponent} from './components/produto/consulta-produtos/consulta-produtos.component';
import {ConsultaMembrosComponent} from './components/membro/consulta-membros/consulta-membros.component';
import {RelatorioVendasComponent} from './components/vendas/relatorio-vendas/relatorio-vendas.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {ConsultaVendaComponent} from './components/vendas/consulta-venda/consulta-venda.component';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {JwtInterceptor} from "./interceptor/jwt.interceptor";
import {ComprasComponent} from "./components/compras/compras.component";

registerLocaleData(localePt);

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
    VedasComandasComponent,
    RelatorioVendasComponent,
    ConsultaProdutosComponent,
    ConsultaMembrosComponent,
    ConsultaVendaComponent,
    ComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'pt-BR'
  }, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
