export interface ICarros {
    modelo: string;
    ano: string;
    marca: string;
}

export class Carros implements ICarros{
    constructor (public modelo:string, public ano:string, public marca:string, ){}

    exibirCarro():void{
        console.log(`${this.modelo} ${this.marca} , ${this.ano} `);
    }

    VrumVrum():void {
        console.log(`${this.modelo} faz Vrum Vrum!`)
    }

}

