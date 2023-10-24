import { Pessoa } from "./pessoa";
import { Usuario } from "./usuario";

function main() {
    const pessoa = new Pessoa("Joel", "Fentes", "1234");
   console.log(pessoa.boasVindas());
  

    const usuario = new Usuario("Rameh", "Louco", "54321", "Snalt","ramehreidelas1234@gmail.com","rameh1234" );
    console.log(usuario.boasVindas());
    console.log(usuario.exibirInfoUsuario())
}

main()