/* testing */
var x1 = 44;
var x2 = 22;
var x3 = x1 % x2;
console.log(x3)

/* 1.Funcion del numero mayor */
function mayor(a, b) {
    if (a > b) {
        return a + mayor_texto + b;
    } else {
        return b + mayor_texto + b;
    }

}
var mayor_texto = " es mayor que "
console.log(mayor(88, 4))

/* 2.Funcion datos */
function datos(x) {
    if (x % 2 === 0) {
        var dividir2 = "Es par, ";
    } else {
        var dividir2 = "Es impar, ";
    }
    if (x % 3 === 0) {
        var dividir3 = "Es divisible por 3, ";
    } else {
        var dividir3 = "No es divisible por 3, ";
    }
    if (x % 5 === 0) {
        var dividir5 = "Es divisible por 5, ";
    } else {
        var dividir5 = "No es divisible por 5, ";
    }
    if (x % 7 === 0) {
        return dividir2 + dividir3 + dividir5, +"Es divisible por 7.";
    } else {
        return dividir2 + dividir3 + dividir5 + "No es divisible por 7.";
    }
}
console.log(datos(1240))

/* 3.Suma valores del array */
function sumavalores(arr) {
    var resultado = 0;
    for (i = 0; i < arr.length; i++)
        resultado = resultado + (arr[i]);
    if (i === arr.length) {
        console.log(resultado);
    }
}

sumavalores([1, 3, 9, 2, 3]);

/* 4.Factorial */
function factorial(x) {
    if (x%x===0) {
        console.log(resultado);
    }
    var resultado = 1;
    for (i = x; i !== 0; i--)
        resultado = resultado * i;
  
}

factorial(10);

/* 5.Encontrar numeros primos */

function encontrar_a_primo (num) {
    let noprimo= " no es primo";
    let siprimo= " si es primo";
    let encendido= true;
      for (i = 2; i < num && encendido; i++) {
      if (num%i===0){
       console.log(num+noprimo);
        encendido = false;
      }
  }
        if (encendido===true) {
      console.log(num+siprimo);
  
  }
      
  }
  encontrar_a_primo (11);

  function esprimo(x) {
    let primo=true;
    for (let i=2; i<x; i++){
      if(x%i===0){
        primo = false;
      }
    }
    return primo;
  }
  /* 6.Fibonacci*/
  function fibonacci (x) {
    let inicial = [1,1];
  for (let i=2; i < x; i++) {
   let nuevo= (inicial[inicial.length-2])+(inicial[inicial.length-1]);
    inicial.push(nuevo);
  }
    return inicial;
  }
  /* 7. Primo Cifras */
  function esprimo(num) {
    let primo=true;
    for (let i=2; i<num; i++){
      if(num%i===0){
        primo = false;
      }
    }
    return primo;
  }

  function Cprimo (x) {
    let primero = 10**(x-1);
    while (!esprimo(primero)){
      primero++;
    }
    return primero
  }

 // 8. Capitaliza
 function capitaliza (palabra) {
  return palabra.toUpperCase()[0]+palabra.slice(1).toLowerCase();
}

console.log(capitaliza("barcelona"));
console.log(capitaliza("PARIS"));

// 9. Palabra X

function infoPalabra (PalabraX) {
  let NumeroLetras = PalabraX.length;
  console.log("Esta palabra tiene "+NumeroLetras+" letras.");
  if (NumeroLetras%2==0) {
    console.log(NumeroLetras+" es un numero par.");
  }else{
    console.log(NumeroLetras+" es un numero impar.");
  }
    
  let Vocales = 0;
  let Consonantes =0;

  //loop para recorrer todo el string
  for (var i = 0; i <= PalabraX.length - 1; i++) {

  //if para contar vocales y consonantes
    if (PalabraX.charAt(i) == "a" || PalabraX.charAt(i) == "e" || PalabraX.charAt(i) == "i" ||
       PalabraX.charAt(i) == "o" || PalabraX.charAt(i) == "u") {
      Vocales += 1;
    }
    if  (PalabraX.charAt(i) == "b" || PalabraX.charAt(i) == "r" || PalabraX.charAt(i) == "c" ||
        PalabraX.charAt(i) == "l" || PalabraX.charAt(i) == "n") {
         Consonantes += 1;
    }
  }
 console.log("Esta palabra tiene "+Vocales+" vocales.")+console.log("Esta palabra tiene "+Consonantes+" consonantes.");
}
  
  
  console.log(infoPalabra("barcelona"));

// alternativa para vocales y consonantes con regex
function ContarLetras(palabra) {
  let Vocales = palabra.match(/[aeiou]/gi);
  let Consonantes = palabra.match(/[qwrtypsdfghjklñÇzxcvbnm]/gi);
  // Vocales contendra un array con todos los "matches" con la palabra
  console.log (Vocales);
  // la expresion regex es /[aeiou]/gi
  // /g hace que busque todo el string, en vez de terminar con el primer "match"
  // /i hace que no distinga entre mayusculas o minusculas
  console.log (Vocales === null ? 0 : "Tiene "+Vocales.length+" vocales");
  console.log (Consonantes === null ? 0 : "Tiene "+Consonantes.length+" consonantes");
}
//  se cumple variable === a null (no hay ninguna) ? (condicional) entonces muestra 0
// : (else) texto+numerodeX+texto

console.log(ContarLetras("barcelona"))

//10. ¿Que dia de la semana es?
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
     day = "Martes";
    break;
  case 3:
    day = "Miercoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case 6:
    day = "Sabado";
}
  console.log("Hoy es "+day)

//11. ¿Cuantos dias faltan para navidad?

function DiasXmas () {
  let msFechaActual = new Date().getTime();
  //console.log(msFechaActual);
  let msProximoXmas = new Date(2019,11,25).getTime();
   //En JS los meses van de 0-11, Date(año,mes,dia)
  //console.log(msProximoXmas);
  let msPorDia = 24 * 60 * 60 * 1000 ;
  let DiasQueFaltan = (msProximoXmas-msFechaActual)/msPorDia;
  console.log("Faltan "+Math.trunc(DiasQueFaltan)+" dias para Navidad.");
  //Math.trunc() devuelve solo la parte entera de un numero
  }
  
  console.log(DiasXmas());

//12. Analiza el array
function analiza (arr) {
  let SumaTotalArr = 0;
for (i=0; i < arr.length; i++) {
 SumaTotalArr = SumaTotalArr+arr[i];
}
 console.log(`La suma de los ${arr.length} numeros es `+SumaTotalArr);
 //  console.log(i); =4 el condicional de for y el i++
 //se ejecutan despues de la linea de abajo
 function comparar (a,b){
   return a - b;
 }
arr = arr.sort(comparar);
  let NumeroMayor = (arr[arr.length-1]);
  let NumeroMenor = (arr[0]);
  console.log("El numero mayor es "+NumeroMayor);
  console.log("El numero menor es "+NumeroMenor);

}

console.log(analiza([2,4,8,-2]));