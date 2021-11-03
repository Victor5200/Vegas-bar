import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Membro} from './membro';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cadastro-membros',
  templateUrl: './cadastro-membros.component.html',
  styleUrls: ['./cadastro-membros.component.scss']
})
export class CadastroMembrosComponent implements OnInit {


  formMembros: FormGroup;

  readonly apiURL: string = 'http://localhost:8080/api/membro';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.createForm(new Membro());
  };

  createForm(membros: Membro): void {
    this.formMembros = new FormGroup({
      nome: new FormControl(membros.nome),
      cpf: new FormControl(membros.cpf),
      telefone: new FormControl(membros.telefone),
      inadiplencia: new FormControl(membros.inadiplencia),
      relevancia: new FormControl(!membros.relevancia ? 'Fullpatch' : membros.relevancia),
    });
  };

  isActive(s: string) {
    return this.formMembros.value.relevancia === s;
  }

  salvar() {
    const membros = this.formMembros.value;
    this.http.post (this.apiURL, membros)
      .subscribe(
        resultado => {
          console.log(resultado)
        },
        erro => {
          if(erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }
}
