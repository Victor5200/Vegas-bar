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
  quantidade:number
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

export class User {
  constructor(id?: string, name?: string, password?: string) {
    this.id = id;
    this.name = name;
    this.password = password;
  }

  public id: string;
  public name: string;
  public password: string;

}
