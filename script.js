function converter(){
  var dolar = parseFloat(document.getElementById("entrada").value);
  document.getElementById("saida").value = (dolar*5.53).toFixed(2);
}

function limpar(){
 document.getElementById("entrada").value = null;
 document.getElementById("saida").value = null;
}








//codigo antigo que exibia com alert ....
/*var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.76
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)*/
//Revisão
//variaveis var int- float - string
//alert - joga info na tela
//parseInt e float 
//promt - traz campo pro user digitar na tela