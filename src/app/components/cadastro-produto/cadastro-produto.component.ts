import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Produto} from './produto';
import {HttpClient} from '@angular/common/http';
import {SwallUtil} from '../../shared/util/SwallUtil';
import {switchAll} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {
  formProduto: FormGroup;
  readonly apiURL: string = 'http://localhost:8080/api/produtos';
  cdiMask: any = "000";
  precoMask: any ="00.00";


  constructor(private http: HttpClient, private  route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idRota = this.route.snapshot.params.id;
    if (!idRota){
      this.createForm(new Produto());
    } else{

      this.http.get<Produto>(this.apiURL + '/' + idRota).subscribe( resultado =>{
        this.createForm(resultado)
      });
    }

  }

  createForm(produto: Produto): void {
    this.formProduto = new FormGroup({
      nome: new FormControl(produto.nome),
      valorVenda: new FormControl(produto.valorVenda),
      fornecedor: new FormControl(produto.fornecedor),
      idProduto: new FormControl(produto.idProduto),
      valorCusto: new FormControl(produto.valorCusto),
      quantidade: new FormControl(produto.quantidade)
    });
  }

  salvar(): void {
    const produto = this.formProduto.value;
    this.http.post(this.apiURL, produto)
      .subscribe(() => SwallUtil.mensagemSucesso("Deu Certo!!!"),
    error => SwallUtil.mensagemError("Deu errado besta!"));
  }

}




