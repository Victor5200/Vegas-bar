import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploComponent } from './exemplo/exemplo.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { LoginComponent } from './components/login/login.component';
import { CaixaComponent } from './components/caixa/caixa.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploComponent,
    CadastroProdutoComponent,
    LoginComponent,
    CaixaComponent,
    HeaderComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
