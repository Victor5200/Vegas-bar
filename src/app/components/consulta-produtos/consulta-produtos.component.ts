import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {ConsultaProdutos} from './consulta-produtos';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';
import {SwallUtil} from '../../shared/util/SwallUtil';
import {error} from 'protractor';
import {Produto} from '../cadastro-produto/produto';


@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.scss']
})
export class ConsultaProdutosComponent implements OnInit {
  formConsultaProdutos: FormGroup;
  readonly apiURl: string = 'http://localhost:8080/api/produtos';
  retornoApi: Produto[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.createForm(new ConsultaProdutos());
    this.buscar();
  }

  createForm(consultaProdutos: ConsultaProdutos): void {
    this.formConsultaProdutos = new FormGroup({
      idProduto: new FormControl(consultaProdutos.idProduto),
      nomeProduto: new FormControl(consultaProdutos.nomeProduto)
    });

  }

  buscar(): void {
    this.http.get<Produto[]>(this.apiURl).subscribe(resultado => {
      this.retornoApi = resultado;
    });
  }

  deletarProduto(idProduto: number): void {
    this.http.delete(this.apiURl + '/' + idProduto).subscribe(resultado =>{
      SwallUtil.mensagemSucesso( "Deletado com sucesso bundão!!! ");
      this.buscar();
    });
  }

limpar(): void{
    this.formConsultaProdutos.reset();
}

}
