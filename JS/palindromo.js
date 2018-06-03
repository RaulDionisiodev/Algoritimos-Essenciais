
function palindrome(){

   var palavra;
   
  var str = document.getElementById("str").value; // Atriubui a variável str o valor digitado no input
 
  str = str.replace(/[\W\_]/ig, ""); // Tira os espaços vazios da frase
  palavra = str.toLowerCase(); // Converte para letras minúsculas
  var array = palavra.split(''); // Transforma string em array
  var tamanho = array.length; // Pega o tamanho do array

  for(var x = tamanho;  tamanho == x  ; x-=2){ // 'for' até o array ter tamanho 0

    if(array[0] != array[tamanho - 1]) { // Compara a primeira e a última letra do array

         document.getElementById("resposta").innerHTML = "Não é Palímdromo"; // Insere na tag de id "resposta" o texto "Não é palíndromo"
         document.getElementById("resposta").style.color ="red"; //Coloca a fonte em cor vermelha
         event.preventDefault();      
         break;

    }else{

     array.pop(); // Tira o ultimo ítem do array
     array.shift(); // Tira o primeiro ítem do array
     tamanho = array.length; // Recalcula o tamanho do array


    } 
   }


    if(tamanho <= 2 ){ // Verifica se o tamanho da string é menor ou igual a 2
                                       
      document.getElementById("resposta").innerHTML = "É Palímdromo"; // Insere na tag de id "resposta" o texto "Não é palíndromo"
      document.getElementById("resposta").style.color ="blue"; // Coloca a fonte em cor vermelha
      event.preventDefault();   
        
        
 
    }
  
}



