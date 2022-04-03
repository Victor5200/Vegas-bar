import {Component, OnInit} from '@angular/core';
import {SwallUtil} from '../../../shared/util/SwallUtil';
import {VendasComandas} from "../../../shared/models";
import {ComandasService} from "../../../shared/services/comandas.service";
import _ from 'lodash'
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-consulta-venda',
  templateUrl: './consulta-venda.component.html',
  styleUrls: ['./consulta-venda.component.scss']
})
export class ConsultaVendaComponent implements OnInit {
  listaComanda: any[];
  listaComandaMembros: any[];

  constructor(private comandaService: ComandasService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.buscarVenda();
  }

  buscarVenda(): void {
    this.comandaService.buscarTodas().subscribe(resultado => {
      this.listaComandaMembros = this.listGroupByMonth(resultado.filter(x => x.membro));
      this.listaComanda = this.listGroupByMonth(resultado.filter(x => !x.membro));
      this.spinner.hide();
    });
  }

  private listGroupByMonth(listaMembro) {
    let groups = listaMembro.reduce(function (grouper, o) {
      let month = new Date(o.data).getMonth();
      (grouper[month]) ? grouper[month].list.push(o) : grouper[month] = {group: month, list: [o]};
      return grouper;
    }, {});


    let returno = Object.keys(groups).map(function (k) {
      return groups[k];
    });

    returno.reverse();

    return returno;
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
