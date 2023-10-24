import { Pessoa } from "./pessoa";

export class Usuario extends Pessoa{
    constructor(protected name:string, protected surname:string, protected cpf:string, protected username:string, protected email:string, protected password:string) {
        super(name,surname,cpf)
    }

    boasVindas(): string {
        return `Bem Vindo ${this.name}!`
    }
    exibirInfoUsuario():string {
        return  this.boasVindas() + `\nAqui estão algumas informações do Usuário:\nNick: ${this.username}\nEmail: ${this.email}\nSenha: ${this.password}\nNome: ${this.name}\nSobrenome: ${this.surname}`
    }
}