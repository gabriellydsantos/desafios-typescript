import { Controller, Get } from '@nestjs/common';
import { BancoDados } from './BancoDados';
import { Cliente } from './Cliente';



@Controller()
export class AppController {


  @Get()
  main(): string {
  
    
    const bancoDeDados = new BancoDados();
    
    const cliente1 = new Cliente("123456789", "Gabrielly Dos Santos", new Date("2006-10-24"), 100);
    bancoDeDados.cadastrarCliente(cliente1);
    
    const cliente2 = new Cliente("987654321", "Maria Clara dos Santos", new Date("2010-03-07"), 200);
    bancoDeDados.cadastrarCliente(cliente2);
    
    const clientes = bancoDeDados.listarClientes();
    console.log(clientes);
  
    return "Hello world";
  }
}