import { v4 as uuidv4 } from 'uuid';
import { Cliente } from './Cliente';

export class Pedido {
  public id: string;
  public cliente: Cliente;
  public produtos: string[];
  public total: number;
  public desconto: number;

  constructor(cliente: Cliente, produtos: string[], total: number, desconto: number) {
    this.id = uuidv4();
    this.cliente = cliente;
    this.produtos = produtos;
    this.total = total;
    this.desconto = desconto;
  }

  public imprimirPedido() {
    console.log(`Pedido #${this.id}`);
    console.log(`Cliente: ${this.cliente.nome}`);
    console.log(`Produtos:`);
    this.produtos.forEach((produto) => console.log(`- ${produto} - `));
    console.log(`Total: R$ ${this.total.toFixed(2)}`);
    console.log(`Desconto: R$ ${this.desconto.toFixed(2)}`);
    console.log(`Total com desconto: R$ ${(this.total - this.desconto).toFixed(2)}`);

}
}