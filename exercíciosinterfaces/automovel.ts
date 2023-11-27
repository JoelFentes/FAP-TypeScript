/* export interface IAutomovel {
    modelo: string;
    ano: number;
    marca: string;
    km: number;
}

interface ICarro extends IAutomovel {
    arCondicionado: boolean;
}

interface IMoto extends IAutomovel {
    grau: boolean;
}


export class Carro implements ICarro  {
    constructor(public modelo:string, public ano:number, public marca:string, public km: number, public arCondicionado: boolean){}

    exibirModeloCarro():void{
        console.log(`${this.marca} ${this.modelo}`);       
    }

    arCon():void{
        if (this.arCondicionado === true) {
            console.log(`O ${this.marca} ${this.modelo}, tem ar-condicionado.`);
        }
    }
}

export class Moto implements IMoto {
    constructor(public modelo:string, public ano:number, public marca:string, public km: number, public grau: boolean){}

    darGrau():void{
        if (this.grau === true) {
            console.log(`Dando Grau!!`);
        }
    }

    exibirModeloMoto():void{
        console.log(`${this.marca} ${this.modelo}`);       
    }
} */

export interface Engine {
    start(): void;
    stop(): void;
}

export class Car {
    constructor(private engine:Engine){}

    startCar(){
        this.engine.start();
    }

    stopCar(){
        this.engine.stop()
    }
}

export class GasolineEngine implements Engine {
    start(): void {
        console.log(`Motor a gasolina ligado`);
    }

    stop(): void {
        console.log(`Motor a gasolina desligado`); 
    }
}

export class AlcoholEngine implements Engine {
    start(): void {
        console.log(`Motor a álcool ligado`);
    }

    stop(): void {
        console.log(`Motor a álcool desligado`); 
    }
}


const car = new Car(new GasolineEngine());
const carA = new Car(new AlcoholEngine());

car.startCar()
car.stopCar()
carA.startCar()
carA.stopCar()