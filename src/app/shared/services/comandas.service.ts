import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {VendasComandas} from "../models";

@Injectable({
  providedIn: 'root',
})

export class ComandasService {

  api = `${environment.baseUrl}/vendas`

  constructor(protected http: HttpClient) {
  }

  salvar(obj: any) {
    return this.http.post<VendasComandas>(this.api, obj)
  }

  buscarTodas(){
    return this.http.get<VendasComandas[]>(this.api);
  }

  buscarPorId(id){
    return this.http.get<VendasComandas>(this.api + '/' + id);
  }

  deletar(id) {
    return this.http.delete(this.api + '/' + id);
  }

  buscarTodasComandasAbertas(){
    return this.http.get<VendasComandas[]>(this.api + '/daylist');
  }

  buscarComandasAbertaMembro(id){
    return this.http.get<VendasComandas>(this.api + '/membro/' + id);
  }

}
