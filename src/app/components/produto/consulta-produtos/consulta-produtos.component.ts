import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SwallUtil} from '../../../shared/util/SwallUtil';
import {Produto} from "../../../shared/models";
import {ProdutoService} from "../../../shared/services/produto-service";

@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.scss']
})
export class ConsultaProdutosComponent implements OnInit {
  formConsultaProdutos: FormGroup;
  retornoApi: Produto[];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
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
    this.produtoService.buscarTodas().subscribe(resultado => {
      this.retornoApi = resultado;
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
