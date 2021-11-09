import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {VendasComandas} from './VendasComandas';
import {Membro} from '../components/cadastro-membros/membro';
import {HttpClient} from '@angular/common/http';
import {Produto} from '../components/cadastro-produto/produto';

@Component({
  selector: 'app-vedas-comandas',
  templateUrl: './vedas-comandas.component.html',
  styleUrls: ['./vedas-comandas.component.scss']
})
export class VedasComandasComponent implements OnInit {
  formVendascomandas: FormGroup;
  readonly apiUrl: string = 'http://localhost:8080/api/membro';
  consultaMembros: Membro[];
  readonly apiProduto: string = 'http://localhost:8080/api/produtos';
  produtoSelecionado: Produto;


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.creatForm(new VendasComandas());
    this.buscar();
  }

  creatForm(vendasComandas: VendasComandas): void {
    this.formVendascomandas = new FormGroup({
      idVenda: new FormControl(null),
      data: new FormControl(null),
      valorTotal: new FormControl(null),
      descricao: new FormControl(null),
      pago: new FormControl(null),
      // itens: new FormArray(null),
      // membro: new FormGroup(null),

      nomeProduto: new FormControl(null),
      quantidadeProduto: new FormControl(null),
      codigoProduto: new FormControl(null),
      valor: new FormControl(null),
    });

  }
  buscar(): void {
    this.http.get<Membro[]>(this.apiUrl).subscribe(resultado => {
      this.consultaMembros = resultado;
    });

  }


  buscarProduto(): void {
    const form = this.formVendascomandas.value;
    this.http.get<Produto>(this.apiProduto + '/' + form.codigoProduto).subscribe(resultado => {
      this.formVendascomandas.patchValue({
        nomeProduto: resultado.nome,
        valor: resultado.valorVenda
      })
    });
  }

}
