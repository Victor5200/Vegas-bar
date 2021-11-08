import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ConsultaMembros} from './consulta-membros';
import {Membro} from '../cadastro-membros/membro';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-consulta-membros',
  templateUrl: './consulta-membros.component.html',
  styleUrls: ['./consulta-membros.component.scss']
})
export class ConsultaMembrosComponent implements OnInit {
  formConsultaMembros: FormGroup;
  readonly apiUrl: string = 'http://localhost:8080/api/membro';
   consultaMembros: Membro[];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.createForm(new ConsultaMembros());
    this.buscar();
  }


  createForm(consultarMembros: ConsultaMembros): void {
    this.formConsultaMembros = new FormGroup({
      nomeMembro: new FormControl(consultarMembros.nomeMembro),
      relevancia: new FormControl(null),
    });
  }

  isActive(prospect: string) {

  }

  buscar(): void {
    this.http.get<Membro[]>(this.apiUrl).subscribe(resultado => {
      this.consultaMembros = resultado;
    });
  }
}
