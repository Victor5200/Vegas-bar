import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {SwallUtil} from '../../../shared/util/SwallUtil';
import {ActivatedRoute} from '@angular/router';
import {Membro, Produto, VendasComandas} from "../../../shared/models";
import {ComandasService} from "../../../shared/services/comandas.service";
import {MembroService} from "../../../shared/services/membro-service";
import {ProdutoService} from "../../../shared/services/produto-service";

@Component({
  selector: 'app-vedas-comandas',
  templateUrl: './vedas-comandas.component.html',
  styleUrls: ['./vedas-comandas.component.scss']
})
export class VedasComandasComponent implements OnInit {
  formVendascomandas: FormGroup;
  consultaMembros: Membro[];
  produtoSelecionado: Produto;
  comandasAbertas: VendasComandas[];

  constructor(private comandaService: ComandasService,
              private membroService: MembroService,
              private produtoService: ProdutoService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idRota = this.route.snapshot.params.id;

    if (!idRota) {
      this.creatForm(new VendasComandas(), false);
    } else {
      this.comandaService.buscarPorId(idRota).subscribe(res => {
        this.populaFormComRetornoBackend(res, !res.membro);
      });
    }

    this.buscar();
    this.comanda();
  }

  compareFn(m1: any, m2: any): boolean {
    return m1 && m2 ? m1.id === m2.id : m1 === m2;
  }

  creatForm(vendasComandas: VendasComandas, isComanda): void {
    this.formVendascomandas = new FormGroup({
      id: new FormControl(vendasComandas.id),
      data: new FormControl(vendasComandas.data),
      valorTotal: new FormControl(vendasComandas.valorTotal),
      descricao: new FormControl(vendasComandas.descricao),
      pago: new FormControl(vendasComandas.pago),
      itens: new FormArray([]),
      membro: new FormControl(vendasComandas.membro),

      // atributos de controle da tela
      nomeProduto: new FormControl(null),
      comandaSelecionada: new FormControl(null),
      quantidadeProduto: new FormControl(null),
      codigoProduto: new FormControl(null),
      valor: new FormControl(null),
      tipoVenda: new FormControl(isComanda ? "comanda" : "membro")
    });

    this.executaValuChangeMembro();
  }

  private executaValuChangeMembro() {
    this.formVendascomandas.get('membro').valueChanges.subscribe(value => {
      this.comandaService.buscarComandasAbertaMembro(value.id).subscribe(res => {
        if (res) {
          this.populaFormComRetornoBackend(res, false);
        } else {
          (this.formVendascomandas.get('itens') as FormArray).clear();
          this.formVendascomandas.patchValue({
            id: null
          });
        }
      });
    });
  }

  private populaFormComRetornoBackend(res: VendasComandas, isComanda) {
    this.creatForm(res, isComanda);

    const itens = this.formVendascomandas.get('itens') as FormArray;
    res.itens.forEach(item => {
      itens.push(new FormGroup({
        id: new FormControl(item.id),
        produto: new FormControl(item.produto),
        quantidade: new FormControl(item.quantidade),
        valor: new FormControl(item.quantidade * item.produto.valorVenda),
      }));
    });
  }

  buscar(): void {
    this.membroService.buscarTodas().subscribe(resultado => {
      this.consultaMembros = resultado;
    });

  }

  buscarProduto(): void {
    const form = this.formVendascomandas.value;
    this.produtoService.buscarPorId(form.codigoProduto).subscribe(resultado => {
      this.formVendascomandas.patchValue({
        nomeProduto: resultado.nome,
        valor: resultado.valorVenda
      });
      this.produtoSelecionado = resultado;
    });
  }

  retornaListaItens(): any[] {
    const itens = this.formVendascomandas.value.itens;
    return itens;
  }

  adicionarIten(): void {
    const itens = this.formVendascomandas.get('itens') as FormArray;
    itens.push(new FormGroup({
      produto: new FormControl(this.produtoSelecionado),
      quantidade: new FormControl(this.formVendascomandas.get('quantidadeProduto').value),
      valor: new FormControl(this.formVendascomandas.get('quantidadeProduto').value * this.produtoSelecionado.valorVenda),
    }));

    this.formVendascomandas.patchValue({
      nomeProduto: null,
      quantidadeProduto: null,
      codigoProduto: null,
      valor: null,
    });

    this.produtoSelecionado = null;
    this.salvarComanda();

  }

  somar(): number {
    const itens = this.formVendascomandas.get('itens').value;
    if (itens.length > 0) {
      return itens.map(x => x.valor).reduce((y, x) => y + x);
    }
    return 0;
  }

  salvarComanda(): void {
    const vendasComandas = this.formVendascomandas.value;
    vendasComandas.valorTotal = this.somar();
    this.comandaService.salvar(vendasComandas).subscribe(resultado => {
      SwallUtil.mensagemSucesso('Comanda Salva Lindão!!');
      this.populaFormComRetornoBackend(resultado, !resultado.membro);
    }, error => {
      SwallUtil.mensagemError(error);
    });
  }

  comanda(): void {
    this.comandaService.buscarTodasComandasAbertas().subscribe(resultado => {
      this.comandasAbertas = resultado;
    });
  }


  preencheComandaSelecionada() {
    const vendasComandas = this.formVendascomandas.get('comandaSelecionada').value;
    this.formVendascomandas.patchValue({
      id: vendasComandas.id,
      data: vendasComandas.data,
      valorTotal: vendasComandas.valorTotal,
      descricao: vendasComandas.descricao,
      pago: vendasComandas.pago,
    });

    const itens = this.formVendascomandas.get('itens') as FormArray;
    vendasComandas.itens.forEach(item => {
      itens.push(new FormGroup({
        id: new FormControl(item.id),
        produto: new FormControl(item.produto),
        quantidade: new FormControl(item.quantidade),
        valor: new FormControl(item.quantidade * item.produto.valorVenda),
      }));
    });
  }

  limparForm(isComanda) {
    this.creatForm(new VendasComandas(), isComanda)

    if (isComanda) {
      this.comanda()
    }
  }

  removerItem(idItem: any) {
    let itens = this.formVendascomandas.get('itens') as FormArray;
    itens.removeAt(idItem);
  }

  pagarVenda(): void {
    const vendasComandas = this.formVendascomandas.value;
    vendasComandas.valorTotal = this.somar();
    vendasComandas.pago = true;
    this.comandaService.salvar(vendasComandas).subscribe(resultado => {
      SwallUtil.mensagemSucesso('Pago');
    });
  }
}
