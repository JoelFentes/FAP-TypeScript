//Agregação

import { Carros } from "./carros";



export class Concessionaria {
    private carrosNovos: Array<string>

    addCarroNovo(carro){
        this.carrosNovos.push
    }
}




function main() {
    const cons = new Concessionaria();
    const carro1 = new Carros("GTR", "Supra", "1994");
    const carro2 = new Carros("RTG", "Supra", "2023");
    cons.addCarroNovo(carro1)
    cons.addCarroNovo(carro2)
    console.log(cons);
    
    
    
}

main()
