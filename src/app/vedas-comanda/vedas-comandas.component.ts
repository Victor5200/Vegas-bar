import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {VendasComandas} from './VendasComandas';
import {Membro} from '../components/cadastro-membros/membro';
import {HttpClient} from '@angular/common/http';
import {Produto} from '../components/cadastro-produto/produto';
import {SwallUtil} from '../shared/util/SwallUtil';
import {ActivatedRoute} from '@angular/router';
import {switchAll} from 'rxjs/operators';

@Component({
  selector: 'app-vedas-comandas',
  templateUrl: './vedas-comandas.component.html',
  styleUrls: ['./vedas-comandas.component.scss']
})
export class VedasComandasComponent implements OnInit {
  formVendascomandas: FormGroup;
  readonly apiUrl: string = 'http://localhost:8080/api/membro';
  consultaMembros: Membro[];
  readonly apiProduto: string = 'http://localhost:8080/api/produtos';
  produtoSelecionado: Produto;
  readonly apiVendas: string = 'http://localhost:8080/api/vendas';
  comandasAbertas: VendasComandas[];
  readonly apiComanda : string = 'http://localhost:8080/api/vendas/daylist';



  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idRota = this.route.snapshot.params.id;

    if (!idRota) {
      this.creatForm(new VendasComandas());
    } else {
      this.http.get<VendasComandas>(this.apiVendas + '/' + idRota).subscribe(res => {
        this.populaFormComRetornoBackend(res);
      });
    }


    // this.preencheComandaSelecionada() nao precisa, isso eh no change do select
    this.buscar();
    this.comanda();
  }

  compareFn(m1: Membro, m2: Membro): boolean {
    return m1 && m2 ? m1.id === m2.id : m1 === m2;
  }

  creatForm(vendasComandas: VendasComandas): void {
    this.formVendascomandas = new FormGroup({
      idVenda: new FormControl(vendasComandas.idVenda),
      data: new FormControl(vendasComandas.data),
      valorTotal: new FormControl(vendasComandas.valorTotal),
      descricao: new FormControl(vendasComandas.descricao),
      pago: new FormControl(vendasComandas.pago),
      itens: new FormArray([]),
      membro: new FormControl(vendasComandas.membro),


      // atributos de controle da tela
      nomeProduto: new FormControl(null),
      quantidadeProduto: new FormControl(null),
      codigoProduto: new FormControl(null),
      valor: new FormControl(null),
      tipoVenda: new FormControl(null)
    });

    this.formVendascomandas.get('membro').valueChanges.subscribe(value => {
      this.http.get<VendasComandas>(this.apiVendas + '/membro/' + value.id).subscribe(res => {
        if (res) {
          this.populaFormComRetornoBackend(res);
        } else {
          (this.formVendascomandas.get('itens') as FormArray).clear();
          this.formVendascomandas.patchValue({
            idVenda: null
          });
        }
      });
    });
  }

  private populaFormComRetornoBackend(res: VendasComandas) {
    this.creatForm(res);

    const itens = this.formVendascomandas.get('itens') as FormArray;
    res.itens.forEach(item => {
      itens.push(new FormGroup({
        produto: new FormControl(item.produto),
        quantidade: new FormControl(item.quantidade),
        valor: new FormControl(item.quantidade * item.produto.valorVenda),
      }));
    });

  }

  buscar(): void {
    this.http.get<Membro[]>(this.apiUrl).subscribe(resultado => {
      this.consultaMembros = resultado;
    });

  }


  buscarProduto(): void {
    const form = this.formVendascomandas.value;
    this.http.get<Produto>(this.apiProduto + '/' + form.codigoProduto).subscribe(resultado => {
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
    this.http.post<VendasComandas>(this.apiVendas, vendasComandas).subscribe(resultado => {
      SwallUtil.mensagemSucesso('Comanda Salva Lindão!!');
      this.populaFormComRetornoBackend(resultado);
    });
  }

  comanda(): void{

    this.http.get<VendasComandas[]>(this.apiComanda).subscribe(resultado => {
      this.comandasAbertas = resultado;
    });
  }


  preencheComandaSelecionada() {
    this.populaFormComRetornoBackend(null);
  }
}
