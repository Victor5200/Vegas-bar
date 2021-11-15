import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SwallUtil} from '../../../shared/util/SwallUtil';
import {ActivatedRoute} from '@angular/router';
import {Membro} from "../../../shared/models";
import {MembroService} from "../../../shared/services/membro-service";

@Component({
  selector: 'app-cadastro-membros',
  templateUrl: './cadastro-membros.component.html',
  styleUrls: ['./cadastro-membros.component.scss']
})
export class CadastroMembrosComponent implements OnInit {
  formMembros: FormGroup;
  telMask: any = "(00) 00000-0000";
  cpfMask: any = "000.000.000-00";

  constructor(private membroService: MembroService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idRoute = this.route.snapshot.params.id;
    if (!idRoute) {
      this.createForm(new Membro());
    } else {
      this.membroService.buscarPorId(idRoute).subscribe(resultado => this.createForm(resultado));
    }

  }

  createForm(membros: Membro): void {
    this.formMembros = new FormGroup({
      nome: new FormControl(membros.nome),
      cpf: new FormControl(membros.cpf),
      telefone: new FormControl(membros.telefone),
      inadiplencia: new FormControl(membros.inadiplencia),
      relevancia: new FormControl(membros.relevancia ? membros.relevancia : 'Hangaround'),
    });
  };

  isActive(s: string) {
    return this.formMembros.value.relevancia === s;
  }

  salvar() {
    const membros = this.formMembros.value;
    this.membroService.salvar(membros).subscribe(resultado => {
      SwallUtil.mensagemSucesso("Aiii Até que vc n e tão burro, deu certo!");
      this.limpar()
    }, erro => {
      SwallUtil.mensagemError("Erro Trouxa faz de novo ai burrão");
    });
  }

  limpar() {
    this.formMembros.reset()
  }

  mudarRelevancia(parametroRelevancia: string) {
    this.formMembros.patchValue({
      relevancia: parametroRelevancia
    })
  }
}
