import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VendasComandas} from '../../vedas-comandas/VendasComandas';

@Component({
  selector: 'app-consulta-venda',
  templateUrl: './consulta-venda.component.html',
  styleUrls: ['./consulta-venda.component.scss']
})
export class ConsultaVendaComponent implements OnInit {
  formVendas: any;
  telMask: any;
  cpfMask: any;
  consultaVenda: any;
  formConsultaVenda: any;
  readonly vendaUrl: string = 'http://localhost:8080/api/vendas';
  listaComanda: VendasComandas[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.buscarVenda();
  }



  buscarVenda(): void {
    this.http.get<VendasComandas[]>(this.vendaUrl).subscribe(resultado => {
      this.listaComanda = resultado;

    });
  }
}
