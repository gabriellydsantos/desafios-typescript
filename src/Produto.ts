export class Produto {
    public static preco(produto: string) {
      // Simula preços de produtos
      switch (produto) {
        case "Produto A":
          return 100;
        case "Produto B":
          return 200;
        case "Produto C":
          return 300;
        default:
          return 0;
      }
    }
  }