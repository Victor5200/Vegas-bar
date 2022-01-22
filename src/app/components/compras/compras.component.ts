import {Component, OnInit} from '@angular/core';
import {Produto} from '../../shared/models';
import {ProdutoService} from '../../shared/services/produto-service';
import {SwallUtil} from '../../shared/util/SwallUtil';
import {FormControl, FormGroup} from '@angular/forms';
import {CompraService} from '../../shared/services/compra-service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  retornoApi: Produto[];
  formProduto: FormGroup;

  constructor(private compraService: CompraService,
              private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.buscar();
    this.createForm();

  }

  createForm(): void {
    this.formProduto = new FormGroup({
      quantidadeProduto: new FormControl(null),
      produto: new FormControl(null)
    });

  }

  buscar(): void {
    this.produtoService.buscarTodas().subscribe(resultado => {
      this.retornoApi = resultado;
    });
  }

  salvar(): void {
    const compra = this.formProduto.value;
    this.compraService.salvar(compra).subscribe(() => SwallUtil.mensagemSucesso('Deu Certo!!!'),
      error => SwallUtil.mensagemError('Deu errado besta!'));

  }
}
