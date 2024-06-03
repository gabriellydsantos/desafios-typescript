import { Cliente } from './Cliente';

export class BancoDados {
  private clientes: Cliente[] = [];

  public cadastrarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  public listarClientes(): Cliente[] {
    return this.clientes;
  }
}

