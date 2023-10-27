import { Carro, Moto } from "./automovel";
import { ClienteFisico, ClienteJuridico } from "./pessoa";

function main() {
    const pessoaComum = new ClienteFisico("Joaozinho", "Oliviera", 18, "12345-67");
    pessoaComum.exibirCPF()
    pessoaComum.exibirNome()

    const pessoaJuridica = new ClienteJuridico("Joel", "Fentes", 21, "76543-21123");
    pessoaJuridica.exibirCNPJ()
    pessoaJuridica.exibirNome()


    const toyotaPrius = new Carro("Prius", 2023, "Toyota", 0, true);
    toyotaPrius.exibirModeloCarro()
    toyotaPrius.arCon()

    const suzuki1300HR = new Moto("Suzuki GSX 1300R", 2023 ,"Hayabusa", 20, true);
    suzuki1300HR.exibirModeloMoto()
    suzuki1300HR.darGrau()
}

main()