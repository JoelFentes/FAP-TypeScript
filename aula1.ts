/* let number: number = 10;
let nullS: null | string = null;
let boolean: boolean = true;
let array: string[] = ["Pelé", "Messi", "Maradona", "CR7"];
let object: object = {
    nome: "Joel",
    idade: 18,
    CPF: 1234
}

console.log(number);
console.log(nullS);
console.log(boolean);
console.log(array);
console.log(object); 
*/

//Principais métodos number

/* let num1: number = 1.07653
let numS: string = "5.21"


//toFixed():
//Formata um número com uma quantidade específica de casas decimais.
console.log(num1.toFixed(3));

//toPrecision():
//Formata um número com um certo número total de dígitos significativos.
console.log(num1.toPrecision(2));

//toString(): 
//Converte um número em uma representação de string.
console.log(num1.toString());

//parseInt(): 
//Converte uma string em um número inteiro, desconsiderando parte decimal.
console.log(parseInt(numS));

//parseFloat(): 
//Converte uma string em um número de ponto flutuante (com parte decimal).
console.log(parseFloat(numS));

//isNaN(): 
//Verifica se um valor não é um número (NaN).
if (isNaN(num1) == true) {
    console.log(`Não é um número`);
    
} else {
    console.log(`É um número`);
} 
*/

//Principais métodos string
/* 
let str1: string = "Joel"
let str2: string = "Tchowww                "
let str3: string = str2.trim()

//trim(): 
//Remove os espaços em branco no início e no final da string.
console.log(str2.trim());

//charAt(): 
//Retorna o caractere na posição especificada dentro da string.
console.log(str1.charAt(0));

//concat(): 
//Concatena uma ou mais strings para formar uma nova string.
console.log(str3.concat(str1));

//indexOf(): 
//Retorna a posição da primeira ocorrência de um determinado caractere ou substring dentro da string.
console.log(str1.indexOf("l"));


//slice(): 
//Retorna uma parte da string, começando na posição especificada até a posição final
console.log(str1.slice(0,2));

//substring(): 
//Retorna uma parte da string, entre as posições especificadas, sem incluir a posição final.
console.log(str1.substring(2));


//Principais métodos Array

let arrayNomes: string[] = ["Pelé", "Messi", "Maradona", "CR7"];
let craques: string[] = ["Tchow"]

//push(): Adiciona um ou mais elementos ao final do array.
arrayNomes.push("Neymar")
console.log(arrayNomes);

//pop(): Remove e retorna o último elemento do array.
arrayNomes.pop()
console.log(arrayNomes);

//shift(): Remove e retorna o primeiro elemento do array.
arrayNomes.shift()
console.log(arrayNomes);

//unshift(): Adiciona um ou mais elementos no início do array.
arrayNomes.unshift("Ribamar")
console.log(arrayNomes);

//concat(): Combina dois ou mais arrays, criando um novo array resultante.
console.log(arrayNomes.concat(craques));

//join(): Converte todos os elementos do array em uma única string, separados por um delimitador.
console.log(arrayNomes.join());

//slice(): Retorna uma cópia de parte do array, definida por índices de início e fim.
console.log(arrayNomes.slice(0,1));

//splice(): Altera o conteúdo do array, adicionando, removendo ou substituindo elementos.
console.log(arrayNomes.splice(2,3));

//indexOf(): Retorna o índice da primeira ocorrência de um elemento no array.
console.log(arrayNomes.indexOf("Messi"));

*/


let arrayN: number[] = [10, 20, 30];

arrayN.forEach((value, index, array) => {
    array[index] = value * 2;
});



enum DiasDaSemana {
    SegundaFeira,
    TercaFeira,
    QuartaFeira,
    QuintaFeira,
    SextaFeira,
    Sabado,
    Domingo
}

enum AgentesVava {
    Controlador,
    Duelista,
    Sentinela,
    Iniciador
}


let year:number = 101

function solution(year: number): void{
   let century:number = (year / 100)
   
   if (!(century % 1 === 0)){
      century = Math.ceil(century)
   }

   
}

solution(year)