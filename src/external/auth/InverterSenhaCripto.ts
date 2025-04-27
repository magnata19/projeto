//esse arquivo é um exemplo de implementação de um provedor de criptografia
import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

export default class InverterSenhaCripto implements ProvedorCriptografia {
  criptografar(senha: string): string {
    return senha.split("").reverse().join('');
  }
}