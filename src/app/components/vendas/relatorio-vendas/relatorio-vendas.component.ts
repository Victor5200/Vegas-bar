import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {VendasComandas} from "../../../shared/models";
import {ComandasService} from "../../../shared/services/comandas.service";


@Component({
  selector: 'app-relatorio-vendas',
  templateUrl: './relatorio-vendas.component.html',
  styleUrls: ['./relatorio-vendas.component.scss']

})
export class RelatorioVendasComponent implements OnInit {
  formRelatorio: FormGroup;
  listaComanda: VendasComandas[];

  constructor(private comandaService: ComandasService) {
  }

  ngOnInit(): void {
    this.creatrelatorio();
    this.buscarVenda()
  }

  creatrelatorio(): void {
    this.formRelatorio = new FormGroup({
      membroComandas: new FormControl(null)
    });
  }

  buscarVenda(): void {
    this.comandaService.buscarTodas().subscribe(resultado => {
      this.listaComanda = resultado;

    });
  }

  somar(): number {
    return this.listaComanda.map(x => Number(x.valorTotal)).reduce((y, x) => y + x);
  }
}


