import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Membro} from './membro';

@Component({
  selector: 'app-cadastro-membros',
  templateUrl: './cadastro-membros.component.html',
  styleUrls: ['./cadastro-membros.component.scss']
})
export class CadastroMembrosComponent implements OnInit {
  formMembros: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Membro());
  }

  createForm(membros: Membro): void {
    this.formMembros = new FormGroup({
      nome: new FormControl(membros.nome),
      cpf: new FormControl(membros.cpf),
      telefone: new FormControl(membros.telefone),


    });
  }
}
