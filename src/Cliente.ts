export class Cliente {
    public rg: string;
    public nome: string;
    public dataNascimento: Date;
    public pontuacao: number;
  
    constructor(rg: string, nome: string, dataNascimento: Date, pontuacao: number) {
      this.rg = rg;
      this.nome = nome;
      this.dataNascimento = dataNascimento;
      this.pontuacao = pontuacao;
    }
  }