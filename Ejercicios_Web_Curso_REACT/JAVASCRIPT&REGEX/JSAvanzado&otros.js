// Clases y herencia
class figura {
    constructor (x,y) {
      this.x = x;
      this.y = y;
    }
  }
  
  class rectangulo extends figura {
    constructor (x, y, lado1, lado2,){
   // llamamos con super al constructor de figura
      super (x,y)
      this.lado1 = lado1;
      this.lado2 = lado2;
    }
    // "function" no se escribe 
    //y va dentro de la class a la que pertenece
    area() {
     return "El area del rectangulo es "+this.lado1*this.lado2;
    }
  }
  
  class triangulo extends figura {
    constructor (x,y,base,altura){
      super(x,y);
      this.base = base;
      this.altura = altura;
    }
    area (){
      return "La base del triangulo es "+this.base*this.altura/2;
    }
  }
  
  class cuadrado extends rectangulo {
    constructor (x,y,lado1){
      super(x,y,lado1,lado1);
      this.lado1= lado1;
    }
     area() {
     return "El area del cuadrado es "+this.lado1*this.lado1; 
  }
  }
  let r1= new rectangulo(0,0,10,6);
  console.log (r1, r1.area());
  let t1= new triangulo(0,0,5,9);
  console.log (t1, t1.area());
  let c1= new cuadrado(0,0,5);
  console.log (c1, c1.area());

// Utilizando el Spacing
letras = ["a", "b", "c"];
numeros = [1,2,3];

mix1 = [...letras, ...numeros];
mix2 = [letras,numeros]
console.log(mix1);
console.log(mix2);

nuevaLetra = "d";

letras = [...letras, nuevaLetra];

console.log (letras);
  
  
  
  
  