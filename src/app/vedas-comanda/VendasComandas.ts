import {Produto} from '../components/cadastro-produto/produto';
import {Membro} from '../components/cadastro-membros/membro';

export class VendasComandas {
  idVenda: number;
  data: Date;
  itens: ItemVenda[];
  valorTotal: number;
  descricao: string;
  pago: boolean;
  membro: Membro;
}

export class ItemVenda {
  id: number;
  produto: Produto;
  valor: number;
  quantidade: number;
}


