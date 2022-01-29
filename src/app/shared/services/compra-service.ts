import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Membro, Produto} from "../models";

@Injectable({
  providedIn: 'root',
})

export class CompraService {

  api = `${environment.baseUrl}/compras`

  constructor(protected http: HttpClient) {
  }

  salvar(obj: any) {
    return this.http.post<Produto>(this.api, obj)
  }

  buscarTodas(){
    return this.http.get<Produto[]>(this.api);
  }

  buscarPorId(id){
    return this.http.get<Produto>(this.api + '/' + id);
  }

  deletar(id) {
    return this.http.delete(this.api + '/' + id);
  }
}
