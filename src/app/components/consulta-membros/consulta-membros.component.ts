import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ConsultaMembros} from './consulta-membros';


@Component({
  selector: 'app-consulta-membros',
  templateUrl: './consulta-membros.component.html',
  styleUrls: ['./consulta-membros.component.scss']
})
export class ConsultaMembrosComponent implements OnInit {
  formConsultaMembros: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
    this.createForm(new ConsultaMembros());
  }


  createForm(consultarMembros: ConsultaMembros): void {
    this.formConsultaMembros = new FormGroup({
      nomeMembro: new FormControl(consultarMembros.nomeMembro)
    });
  }

  isActive(prospect: string) {

  }
}

