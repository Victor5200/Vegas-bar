import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RelatorioVendas} from './relatorio-vendas';
import {VendasComandas} from '../../vedas-comanda/VendasComandas';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-relatorio-vendas',
  templateUrl: './relatorio-vendas.component.html',
  styleUrls: ['./relatorio-vendas.component.scss']

})
export class RelatorioVendasComponent implements OnInit {
  formRelatorio: FormGroup;
  listaComanda: VendasComandas[];
  readonly vendaUrl: string = 'http://localhost:8080/api/vendas';


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.creatrelatorio(new RelatorioVendas());
    this.buscarVenda()
  }

  creatrelatorio(relatorioVendas: RelatorioVendas): void {
    this.formRelatorio = new FormGroup({
      membroComandas: new FormControl(relatorioVendas.membroComanda)
    });
  }
  buscarVenda(): void {
    this.http.get<VendasComandas[]>(this.vendaUrl).subscribe(resultado => {
      this.listaComanda = resultado;

    });
  }
  somar(): number {
    return this.listaComanda.map(x => Number(x.valorTotal)).reduce((y, x) => y + x);
  }
}


