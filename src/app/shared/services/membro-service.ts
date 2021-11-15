import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Membro, VendasComandas} from "../models";

@Injectable({
  providedIn: 'root',
})

export class MembroService {

  api = `${environment.baseUrl}/membro`

  constructor(protected http: HttpClient) {
  }

  salvar(obj: any) {
    return this.http.post<Membro>(this.api, obj)
  }

  buscarTodas(){
    return this.http.get<Membro[]>(this.api);
  }

  buscarPorId(id){
    return this.http.get<Membro>(this.api + '/' + id);
  }

  deletar(id) {
    return this.http.delete(this.api + '/' + id);
  }

}
