import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";

export class BancoDeDados {
  private clientes: Cliente[] = [];

  public cadastrarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  public listarClientes() {
    return this.clientes;
  }

  public consultarPedido(id: string) {
    // Simula consulta ao banco de dados
    const pedido = new Pedido(
      new Cliente("123456789", "Gabrielly dos Santos", new Date("2006-10-24")),
      ["Produto A", "Produto B"],
      300,
      45
    );
    return pedido;
  }
}