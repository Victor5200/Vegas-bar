import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Produto} from './produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {
  formProduto: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm(new Produto());
  }

  createForm(produto: Produto): void {
    this.formProduto = new FormGroup({
      nome: new FormControl(produto.nome),
      valorVenda: new FormControl(produto.valorVenda),
      fornecedor: new FormControl(produto.fornecedor),
      codigoInterno: new FormControl(produto.codigoInterno),
      precoCusto: new FormControl(produto.precoCusto),
      quantidade: new FormControl(produto.quantidade)
    });
  }
}




