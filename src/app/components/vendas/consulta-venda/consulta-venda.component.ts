import {Component, OnInit} from '@angular/core';
import {SwallUtil} from '../../../shared/util/SwallUtil';
import {VendasComandas} from "../../../shared/models";
import {ComandasService} from "../../../shared/services/comandas.service";

@Component({
  selector: 'app-consulta-venda',
  templateUrl: './consulta-venda.component.html',
  styleUrls: ['./consulta-venda.component.scss']
})
export class ConsultaVendaComponent implements OnInit {
  listaComanda: VendasComandas[];
  listaComandaMembros: VendasComandas[];

  constructor(private comandaService: ComandasService) {
  }

  ngOnInit(): void {
    this.buscarVenda();
  }

  buscarVenda(): void {
    this.comandaService.buscarTodas().subscribe(resultado => {
      this.listaComandaMembros = resultado.filter(x => x.membro);
      this.listaComanda = resultado.filter(x =>!x.membro);
    });
  }

  deletarVenda(id: number): void {
    this.comandaService.deletar(id).subscribe(resultado => {
      SwallUtil.mensagemSucesso('Deleta não pow, Gasta essa Grana ai!!! ');
      this.buscarVenda();
    });
  }

  pagarVenda(vendasComandas: VendasComandas): void {
    vendasComandas.pago = true;
    this.comandaService.salvar(vendasComandas).subscribe(resultado => {
      SwallUtil.mensagemSucesso('Pago');


    });
  }
}
