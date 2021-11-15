import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SwallUtil} from '../../../shared/util/SwallUtil';
import {ActivatedRoute} from '@angular/router';
import {Produto} from "../../../shared/models";
import {ProdutoService} from "../../../shared/services/produto-service";

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {
  formProduto: FormGroup;
  cdiMask: any = "000";
  precoMask: any = "99.99";


  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idRota = this.route.snapshot.params.id;
    if (!idRota) {
      this.createForm(new Produto());
    } else {
      this.produtoService.buscarPorId(idRota).subscribe(resultado => {
        this.createForm(resultado)
      });
    }
  }

  createForm(produto: Produto): void {
    this.formProduto = new FormGroup({
      nome: new FormControl(produto.nome),
      valorVenda: new FormControl(produto.valorVenda),
      fornecedor: new FormControl(produto.fornecedor),
      id: new FormControl(produto.id),
      valorCusto: new FormControl(produto.valorCusto),
      quantidade: new FormControl(produto.quantidade)
    });
  }

  salvar(): void {
    const produto = this.formProduto.value;
    this.produtoService.salvar(produto).subscribe(() => SwallUtil.mensagemSucesso("Deu Certo!!!"),
          error => SwallUtil.mensagemError("Deu errado besta!"));
  }

}




