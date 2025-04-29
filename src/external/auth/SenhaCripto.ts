import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";
import bcrypt from "bcrypt"
export default class SenhaCripto implements ProvedorCriptografia {
  criptografar(senha: string): string {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(senha, salt
    );
  }

  compararSenha(senha: string, senhaCripto: string): boolean {
    return bcrypt.compareSync(senha, senhaCripto);
  }

}