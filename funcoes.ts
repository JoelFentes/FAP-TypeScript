/* //Funções sem parametros e sem retornos

function funcaoSPSR():void {
    console.log("Tchowwwww");
    
} 
funcaoSPSR();


//Funções com parametros e sem retornos 

function funcaoCPSR(nome:string):void {
    console.log(`Olá, ${nome}`);
    
}
funcaoCPSR("Joel")

//Funções sem parametros e com retorno

function funcaoSPCR():number {
    return 2 + 2
    
}
 
let valor:number = funcaoSPCR()
console.log(valor);

//Funções com parametros e com retorno



function funcaoCPCR(n1:number, n2:number):number {
 return n1 * n2;
}

let result = funcaoCPCR(4,3)
console.log(result); */

/* //1.

function saudacao():void {
    console.log("Olá, Mundo!");
}

saudacao()

//2.

function dobrar(numero:number):void {
    console.log(numero*2);

}

dobrar(10)

//3.

function mostrarNumeros(inicio:number, fim:number):void {
   for (let i = inicio; i <= fim; i++) {
     console.log(i);
   }
}

mostrarNumeros(1, 10)

//4.

function verificarPar(numPar:number):void {
    if (numPar % 2 === 0) {
       console.log("Esse número é par");
    } else {
       console.log("Esse número é impar");
    }
    
 }
 
verificarPar(7)

//5.

let frutas: Array<string> = ["Arroz", "Feijão", "Mandioca", "Cuscuz"]

function imprimirLista(frutas:Array<string>):void {
   for (let i = 0; i < frutas.length; i++) {
      console.log(frutas[i]);
    } 
}

imprimirLista(frutas)

//6.

let numMedia: Array<number> = [5, 7]

function calcularMedia(numMedia:Array<number>):void {
   let soma = numMedia[0] + numMedia[1]
   let media = soma/2
   console.log(`O aluno obteve média: ${media}`);
}

calcularMedia(numMedia)

//7.

let numMaior:Array<number> = [1, 5, 21, 67, 2, 8, 5]

function maiorNum(numMaior:Array<number>) {
   let maior = Math.max.apply(null, numMaior);
   console.log(maior);
}

maiorNum(numMaior)


//8. 

const variacoes:string = "aeioàèìòùáéíóúãõäëüö"

function contarVogais(texto: string):void {
    texto = texto.toLowerCase();
  
    let contadorVogais = 0;
  
    for (let i = 0; i < texto.length; i++) {
      const char = texto.charAt(i);
      // Verifica se o caractere atual é uma vogal
      if (variacoes.indexOf(char) != -1) {
        contadorVogais++;
      }
    }
  
    console.log(contadorVogais);
       
}

let texto:string = "ABCdEaaeoi"

contarVogais(texto)

//9. */

/* function imprimirTabuada(num:number):void {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
        
    }
}

imprimirTabuada(10)*/