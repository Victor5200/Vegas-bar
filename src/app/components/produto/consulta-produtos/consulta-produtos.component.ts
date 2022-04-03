import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SwallUtil} from '../../../shared/util/SwallUtil';
import {Produto} from "../../../shared/models";
import {ProdutoService} from "../../../shared/services/produto-service";
import {MembroService} from "../../../shared/services/membro-service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.scss']
})
export class ConsultaProdutosComponent implements OnInit {
  formConsultaProdutos: FormGroup;
  retornoApi: Produto[];

  constructor(private produtoService: ProdutoService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.createForm();
    this.buscar();
  }

  createForm(): void {
    this.formConsultaProdutos = new FormGroup({
      id: new FormControl(null),
      nomeProduto: new FormControl(null)
    });

  }

  buscar(): void {
    this.spinner.show();
    this.produtoService.buscarTodas().subscribe(resultado => {
      this.retornoApi = resultado;
      this.spinner.hide();
    });
  }

  deletarProduto(id: number): void {
    this.produtoService.deletar(id).subscribe(resultado => {
      SwallUtil.mensagemSucesso("Deletado com sucesso bundão!!! ");
      this.buscar();
    });
  }

  limpar(): void {
    this.formConsultaProdutos.reset();
  }

}
