import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  formProduto: FormGroup;

  @Input()
  retornoApi: Produto[];

  @Output() eventEmitter = new EventEmitter<any>();

  constructor(private compraService: CompraService) {
  }

  ngOnInit(): void {
    this.formProduto = new FormGroup({
      quantidade: new FormControl(null),
      produto: new FormControl(null)
    });
  }

  salvar(): void {
    const compra = this.formProduto.value;
    debugger
    this.compraService.salvar(compra).subscribe(() => {
        this.formProduto.reset();
        this.eventEmitter.emit();
        SwallUtil.mensagemSucesso('Deu Certo!!!')
      },error => {
        console.log(error)
        SwallUtil.mensagemError('Deu errado besta!')
      });
  }
}
