import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

export class Cliente {
  public rg: string;
  public nome: string;
  public dataNascimento: Date;
  public pontuacao: number;
  public favoritos: string[] = [];

  constructor(rg: string, nome: string, dataNascimento: Date) {
    this.rg = rg;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.pontuacao = 0;
  }

  public adicionarFavorito(produto: string) {
    this.favoritos.push(produto);
  }

  public removerFavorito(produto: string) {
    const indice = this.favoritos.indexOf(produto);
    if (indice!== -1) {
      this.favoritos.splice(indice, 1);
    }
  }

  public listarFavoritos() {
    return this.favoritos;
  }

  public finalizarPedido(produtos: string[], cupom?: string) {
    let total = 0;
    for (const produto of produtos) {
      total += Produto.preco(produto);
    }
    let desconto = 0;

    if (cupom) {
      if (cupom === "CUPOM15") {
        desconto = total * 0.15;
      } else if (cupom === "CUPOMBO") {
        desconto = total * 0.30;
      }
    }

    const valorFinal = total - desconto;
    const pedido = new Pedido(this, produtos, valorFinal, desconto);
    this.pontuacao += 100;
    return pedido;
  }
}