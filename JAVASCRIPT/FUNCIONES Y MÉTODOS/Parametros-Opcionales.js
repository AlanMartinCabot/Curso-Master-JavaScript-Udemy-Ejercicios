'use strict'

function calculadora(numero1, numero2, mostrar = false){
	if(mostrar == false){
		console.log("Suma: " + (numero1+numero2));
		console.log("Resta: " + (numero1-numero2));
		console.log("Multiplicación: " + (numero1*numero2));
		console.log("División: " + (numero1/numero2));
		console.log("************************");
	} else{
		document.write("Suma: " + (numero1+numero2)+"<br>");
		document.write("Resta: " + (numero1-numero2)+"<br>");
		document.write("Multiplicación: " + (numero1*numero2)+"<br>");
		document.write("División: " + (numero1/numero2)+"<br>");
		document.write("************************"+"<br>");
	}	
}

calculadora(1, 4);
calculadora(2, 5, true);
calculadora(4, 5, true);
