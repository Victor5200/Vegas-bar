import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SwallUtil} from '../../../shared/util/SwallUtil';
import {Membro} from "../../../shared/models";
import {MembroService} from "../../../shared/services/membro-service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-consulta-membros',
  templateUrl: './consulta-membros.component.html',
  styleUrls: ['./consulta-membros.component.scss']
})
export class ConsultaMembrosComponent implements OnInit {
  formConsultaMembros: FormGroup;
  consultaMembros: Membro[];

  constructor(private membroService: MembroService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.createForm();
    this.buscar();
  }

  createForm(): void {
    this.formConsultaMembros = new FormGroup({
      nomeMembro: new FormControl(null),
      relevancia: new FormControl(null),
    });
  }

  buscar(): void {
    this.membroService.buscarTodas().subscribe(resultado => {
      this.consultaMembros = resultado;
      this.spinner.hide();
    });
  }

  deletarMembro(id: number): void {
    this.spinner.show();
    this.membroService.deletar(id).subscribe(resultado => {
      SwallUtil.mensagemSucesso(" Desonra para a Familia");
      this.buscar()
    })
  }

  limpar(): void {
    this.formConsultaMembros.reset();
  }

}
