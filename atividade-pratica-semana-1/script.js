// Selecionar todos elementos da classe 'produto_preco'
var array_preco = document.getElementsByClassName('produto_preco');

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
var soma = 0;
for (preco of array_preco) {
  soma += parseFloat(preco.innerText);
}

// Escrever no conteúdo da página o valor da soma 
document.write(`Total: R$ ${soma.toFixed(2)}`);
