import {Produto} from '../components/cadastro-produto/produto';
import {Membro} from '../components/cadastro-membros/membro';

export class VendasComandas {
  idVenda: number;
  data: Date;
  itens: Produto[];
  valorTotal: number;
  descricao: string;
  pago: boolean;
  membro: Membro;
}



