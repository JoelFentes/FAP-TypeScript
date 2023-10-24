import * as rl from "readline-sync";


//Diluição de Medicamentos

let ConcAmpolaMed:number = rl.question("Digite a concentração da ampola: (em mg) ")
let VolAmpolaMed:number = rl.question("Digite o volume da ampola: (em ml) ")
let ConcAmpolaPresc:number = rl.question("Digite a concentração prescrita: (em mg) ")
let VolDiluidoMed:number


function calculoDiluicao(VolAmpolaMed:number,ConcAmpolaMed:number,ConcAmpolaPresc:number) {
    let ConcAmpolaMedn:number = Number(ConcAmpolaMed)
    let ConcAmpolaPrescn:number = Number(ConcAmpolaPresc)
    let VolAmpolaMedn:number = Number(VolAmpolaMed)

    VolDiluidoMed = ((VolAmpolaMedn * ConcAmpolaPrescn) / ConcAmpolaMedn)
    console.log(`${VolDiluidoMed} ml`);
    
    
}

calculoDiluicao(VolAmpolaMed,ConcAmpolaMed,ConcAmpolaPresc)


// Tranformação de soro

let soroFisiologico:number = 50