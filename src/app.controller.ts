import { Controller, Get } from '@nestjs/common';
import { CadastrarCliente } from './CadastrarCliente';
import { Cliente } from './Cliente';


@Controller()
export class AppController {


  @Get()
  main(): string {

const cadastrarCliente = new CadastrarCliente();

const cliente1 = new Cliente('12345678', 'Gaby Santos', new Date('2006-10-24'), 80);
const cliente2 = new Cliente('87654321', 'Clara Santos', new Date('2010-07-03'), 95);

cadastrarCliente.adicionarCliente(cliente1);
cadastrarCliente.adicionarCliente(cliente2);

const clientes = cadastrarCliente.listarClientes();

    return "Hello world";
  }
}