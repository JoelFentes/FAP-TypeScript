export interface IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    cpf?: string;
}

export class ClienteFisico implements IPessoa  {
    constructor(public nome:string, public sobrenome:string, public idade:number, public cpf: string){}

    exibirCPF():void{
        console.log(this.cpf);       
    }

    exibirNome():void{
        console.log(`Meu nome é ${this.nome} de ${this.sobrenome}`);
        
    }
}

export class ClienteJuridico implements IPessoa  {
    constructor(public nome:string, public sobrenome:string, public idade:number, public cnpj: string){}

    exibirCNPJ():void{
        console.log(this.cnpj);       
    }

    exibirNome():void{
        console.log(`Meu nome é ${this.nome} de ${this.sobrenome}`);
        
    }
}