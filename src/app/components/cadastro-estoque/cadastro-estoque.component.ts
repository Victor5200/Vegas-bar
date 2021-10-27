import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Estoque} from './cadastro';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.scss']
})
export class CadastroEstoqueComponent implements OnInit {
  formEstoque: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Estoque());
  }

  createForm(estoque: Estoque): void {
    this.formEstoque = new FormGroup({
      codigo: new FormControl(estoque.codigo),
      produto: new FormControl(estoque.produto),
      quantidade: new FormControl(estoque.quantidade)

    });
  }
  }


