import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RelatorioVendas} from './relatorio-vendas';


@Component({
  selector: 'app-relatorio-vendas',
  templateUrl: './relatorio-vendas.component.html',
  styleUrls: ['./relatorio-vendas.component.scss']
})
export class RelatorioVendasComponent implements OnInit {
  formRelatorio: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.creatrelatorio(new RelatorioVendas());
  }

  creatrelatorio(relatorioVendas: RelatorioVendas): void {
    this.formRelatorio = new FormGroup({
      membroComandas: new FormControl(relatorioVendas.membroComanda)
    });
  }
}


