# desafios-typescript
Você deverá desenvolver um sistema simples, porém, que realiza todo o fluxo de cadastro de clientes e compra de um produto.

Simule alguns produtos que tenham em lojas como Amazon ou Mercado livre

1 - O sistema deverá gerenciar um cliente que é armazenado no banco de dados fake (use uma lista pra isso). Isso inclui as operações de cadastro e listagem dos clientes cadastrados.

Os dados necessários para cadastro do cliente são: RG, nome, data de nascimento, pontuação.

2 - Quando o cliente finaliza o pedido de uma compra a pontuação é acrescida em 100 pontos.
A
3 - O cliente pode adicionar um item nos favoritos (use uma lista pra isso).

4 - O cliente pode remover dos favoritos.

5 - O cliente pode listar todos os items dos favoritos.

6 - ⁠O cliente pode adicionar vários itens dos Favoritos.

7 - O cliente pode finalizar o pediddo, entao deve imprimir todos os itens e o totalda compra
	* O pedido deve ter um número randomico (use a biblioteca UUID do nodeJs pra gerar números aleatórios)

8 - Se o cliente ao finalizar o pedido tiver um cupom de desconto ele ganha um desconto ex: 
	*CUPOM15 ganha 15% do valor total da compra
	*CUPOMBO ganha 30% do valor total da compra

9 - Deve permitir bloquear um usuário, caso esteja bloqueado nao poderá realizar nenhum pedido

10 - Deve permitir consultar um pedido pelo número que devera ter a visualização dos dados do cliente e do pedido
