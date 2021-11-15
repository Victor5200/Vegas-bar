export class Membro {
  id: number;
  nome: string;
  cpf: number;
  telefone: number;
  relevancia: string;
  inadiplencia: string;
}

export class Produto {
  nome: string  ;
  valorVenda: number ;
  fornecedor: string;
  id: number;
  valorCusto: number;
  quantidade:string
}


export class VendasComandas {
  id: number;
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

