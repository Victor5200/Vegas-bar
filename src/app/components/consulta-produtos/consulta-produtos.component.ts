import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {ConsultaProdutos} from './consulta-produtos';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.scss']
})
export class ConsultaProdutosComponent implements OnInit {
  formConsultaProdutos: FormGroup;
  readonly apiURl: string = 'http//localhost:8080/api/produtos';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.createForm(new ConsultaProdutos());
  }

  createForm(consultaProdutos: ConsultaProdutos): void {
    this.formConsultaProdutos = new FormGroup({
      CodigoProduto: new FormControl(consultaProdutos.CodigoProduto),
      NomeProduto: new FormControl(consultaProdutos.NomeProduto)
    });

    function buscar() {
      this.http.get(this.apiURL);
    }


  }


}
