import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

export default class EspacoCriptoSenha implements ProvedorCriptografia {
  criptografar(senha: string): string {
    return senha.split("").join(" ");
  }

  compararSenha(senha: string, senhaCripto: string): boolean {
    return this.criptografar(senha) === senhaCripto;
  }
}