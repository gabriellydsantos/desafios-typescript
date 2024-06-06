import { Controller, Get } from '@nestjs/common';
import { BancoDeDados } from './BancoDeDados';
import { Cliente } from './Cliente';
import { Pedido } from './Pedido';
import { Produto } from './Produto';

@Controller()
export class AppController {
  private bancoDeDados: BancoDeDados;
  private cliente: Cliente;

  constructor() {
    this.bancoDeDados = new BancoDeDados();
    this.cliente = new Cliente("123456789", "Gabrielly dos Santos", new Date("2006-10-24"));
    this.bancoDeDados.cadastrarCliente(this.cliente);
  }

  @Get()
  main(): string {
    // Adicionar favoritos
    this.cliente.adicionarFavorito("Produto A");
    this.cliente.adicionarFavorito("Produto B");

    console.log("Favoritos:");
    console.log(this.cliente.listarFavoritos());

    this.cliente.removerFavorito("Produto A");

    console.log("Favoritos após remoção:");
    console.log(this.cliente.listarFavoritos());

    console.log("Removidos:");
    console.log(this.cliente.listarFavoritos());

    const produtos = ["Produto A", "Produto C"];
    const cupom = "CUPOM30";
    const pedido = this.cliente.finalizarPedido(produtos, cupom);

    pedido.imprimirPedido();

    console.log("Clientes cadastrados:");
    this.bancoDeDados.listarClientes().forEach((cliente) => console.log(cliente.nome));

    const pedidoConsultado = this.bancoDeDados.consultarPedido("123456789");
    pedidoConsultado.imprimirPedido();

    return "Hello world";
  }
}