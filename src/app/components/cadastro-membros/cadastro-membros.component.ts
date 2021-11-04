import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Membro} from './membro';
import {HttpClient} from '@angular/common/http';
import {SwallUtil} from '../../shared/util/SwallUtil';

@Component({
  selector: 'app-cadastro-membros',
  templateUrl: './cadastro-membros.component.html',
  styleUrls: ['./cadastro-membros.component.scss']
})
export class CadastroMembrosComponent implements OnInit {


  formMembros: FormGroup;

  readonly apiURL: string = 'http://localhost:8080/api/membro';
  telMask: any = "(00)00000-0000";
  cpfMask: any ="000.000.000-00";

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
      relevancia: new FormControl('Fullpatch'),
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
          SwallUtil.mensagemSucesso("Aiii Até que vc n e tão burro, deu certo!");
          this.limpar()
        },
        erro => {
          SwallUtil.mensagemError("Erro Trouxa faz de novo ai burrão");
        }
      );
  }

  limpar(){
    this.formMembros.reset()
  }

  mudarRelevancia(parametroRelevancia: string) {
    this.formMembros.patchValue({
      relevancia: parametroRelevancia
    })
  }
}
