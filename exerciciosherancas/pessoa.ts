export class Pessoa {
    constructor(protected name:string, protected surname:string, protected cpf:string) {}

    boasVindas():string {
        return `Bem vindo ao Programa!`  
    }
}

