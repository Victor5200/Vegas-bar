import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploComponent } from './exemplo/exemplo.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroMembrosComponent } from './cadastro-membros/cadastro-membros.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploComponent,
    CadastroProdutoComponent,
    CadastroMembrosComponent
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
