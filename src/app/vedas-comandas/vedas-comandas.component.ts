import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {VendasComandas} from './VendasComandas';

@Component({
  selector: 'app-vedas-comandas',
  templateUrl: './vedas-comandas.component.html',
  styleUrls: ['./vedas-comandas.component.scss']
})
export class VedasComandasComponent implements OnInit {
  formVendascomandas: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.creatForm(new VendasComandas());
  }
creatForm(vendasComandas: VendasComandas ): void{
    this.formVendascomandas = new FormGroup({
      NomeCandidatos: new FormControl(vendasComandas),
      CodigodoProduto: new FormControl(vendasComandas),
      NomedoProduto: new FormControl(vendasComandas),
      valor: new FormControl(vendasComandas),
      quantidade: new FormControl(vendasComandas)
    });
}
}
