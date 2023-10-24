import * as readline from 'readline-sync';


/* 


//1.
class Pessoa {
    nome:string;
    idade:number;
    email:string;

    constructor(nome:string, idade:number, email:string){
        this.nome = nome
        this.idade = idade
        this.email = email
    }

}

//2.
class Aluno extends Pessoa {
    matricula:number 

    constructor(nome:string, idade:number, email:string, matricula:number){
        super(nome, idade, email);
        this.matricula = matricula
    }
}

//3.

class Retangulo {
    altura:number
    base:number
    
    constructor(altura:number, base:number){
        this.altura = altura
        this.base = base
    }

    area():void {
        console.log(this.base * this.altura);       
    }

    perimetro():void {
        console.log((this.base*2) + (this.altura*2));    
    }
}

const ret1 = new Retangulo(2, 4);

ret1.area()
ret1.perimetro()

//4.

class Circulo {
    raio:number
    
    
    constructor(raio:number ){
        this.raio = raio

    }

    area():void {
        console.log((3.14) * (this.raio**2));       
    }

    circunf():void {
        console.log((this.raio) * (3.14*2));    
    }
}

const circ1 = new Circulo(5);

circ1.area();
circ1.circunf();

//5.

class ContaBancaria {
    saldo:number
    numConta:number 
    deposito:number 
    saque:number 
    
    constructor(saldo:number,numConta:number, deposito:number, saque:number){
        this.saldo = saldo
        this.numConta = numConta
        this.deposito = deposito
        this.saque = saque
    }

    depositar(){
        this.saldo = this.saldo + this.deposito
        console.log(`Seu novo saldo: ${this.saldo}`);
        
    }

    sacar(){
        this.saldo = this.saldo - this.saque
        console.log(`Seu novo saldo: ${this.saldo}`);
        if (this.saldo < 0) {
            console.log(`Não é possivel realizar a operação, sem saldo suficiente.`);
        }
    }
    
    verfSaldo(){
        console.log(this.saldo);
        
    }
}



const contaJoaozinho = new ContaBancaria(100.00, 1, 50.00, 25.00);

contaJoaozinho.depositar()
contaJoaozinho.sacar()
contaJoaozinho.verfSaldo()



//01. | 2

class Produto {
    nome:string;
    preco:number;
    quantidade:number;

    constructor(nome:string, preco:number, quantidade:number){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    valorTotal(){
        console.log(`Esse é o valor total de ${this.nome}: R$${this.preco * this.quantidade}`);
        
    }
}


const arroz = new Produto("arroz", 5.25, 7);

arroz.valorTotal()

//02 | 2

class Triangulo {
    l1:number;
    l2:number;
    l3:number;

    constructor(l1:number, l2:number, l3:number){
        this.l1 = l1
        this.l2 = l2
        this.l3 = l3
    }

    verfTriangulo(){
        if (this.l1 + this.l2 > this.l3 && this.l2 + this.l3 > this.l1 && this.l3 + this.l1 > this.l2) {
            console.log(`O triangulo é valido`);
        }
        else {
            console.log(`O triangulo não é valido`);
            
        }
    }
}

const tr1 = new Triangulo(5, 10, 9);

tr1.verfTriangulo()

//03 | 02

class Livro {
    titulo:string
    autor:string
    anoPubli:string

    constructor(titulo:string, autor:string, anoPubli:string){
        this.titulo = titulo
        this.autor = autor
        this.anoPubli = anoPubli
    }

    exibirInfo(){
        console.log(`Aqui está seu livro:\nTitulo - ${this.titulo}\nAutor - ${this.autor}\nAno - ${this.anoPubli}`);
    }
}

const livro1 = new Livro("As cronicas de titio", "oliver silva", "05/10/2023");

livro1.exibirInfo()

//04. | 02

class Agenda {
    nome:string
    numero:number

    constructor(nome:string, numero:number){
        this.nome = nome
        this.numero = numero
    }

    
    public set novoNome(novoNome:string) {
        this.nome = novoNome;
    }

    public set novoNumero(novoNumero:number) {
        this.numero = novoNumero;
    }
    
}


const agendaa = new Agenda("Joel", 1234);
console.log(agendaa);
agendaa.novoNome = "Fulano"
agendaa.novoNumero = 4321
console.log(agendaa);

//05. | 02


class Carro {
    marca: string;   
    modelo: string;
    ano: number;
 
    constructor(marca: string, modelo: string, ano: number) { 
        this.marca = marca;
        this.modelo = modelo;  
        this.ano = ano;
    
}

    acelerar(): void {
        console.log("Acelerando o carro...");
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022);

class CarroEsportivo extends Carro {
    constructor(marca: string, modelo: string, ano: number){      
        super(marca, modelo, ano)
    }

    freiar(){
        console.log("Freiando o carro...");
    }

    abrirProtetorSolar(){
        console.log("abrindo protetor solar");
        
    }

}

const meuCarroEsportivo = new CarroEsportivo("Hyundai", "HB20", 2023);

meuCarroEsportivo.freiar()
meuCarroEsportivo.abrirProtetorSolar()

//Desafio 01 

class Invoice {
    numItemFaturado:number
    descricaoItem:string
    quantidadeComprada:number
    precoUnidade:number

    constructor(numItemFaturado:number, descricaoItem:string, quantidadeComprada:number, precoUnidade:number){
        this.numItemFaturado = numItemFaturado
        this.descricaoItem = descricaoItem
        this.quantidadeComprada = quantidadeComprada
        this.precoUnidade = precoUnidade


    }

    if (condition) {
        
    }
}*/

