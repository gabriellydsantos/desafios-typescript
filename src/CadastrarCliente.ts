import { Cliente } from './Cliente';

export class CadastrarCliente {
  private clientes: Cliente[] = [];

  adicionarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  listarClientes(): Cliente[] {
    return this.clientes;
  }
}
