import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";
import e from "express";
import Erros from "@/core/shared/Erros";
import ProvedorCriptografia from "./ProvedorCriptografia";

export interface LoginEntrada {
  email: string;
  senha: string;
}

export interface LoginSaida {
  usuario: Usuario;
  token: string;
}

export default class LoginUsuario implements CasoDeUso<LoginEntrada, LoginSaida> {

  constructor(
    private provedorCripto: ProvedorCriptografia,
    private repositorio: RepositorioUsuario,
  ) { }

  async executar(entrada: LoginEntrada): Promise<LoginSaida> {
    const usuarioExistente = await this.repositorio.buscarPorEmail(entrada.email);
    if (!usuarioExistente) {
      throw new Error(Erros.USUARIO_NAO_EXISTE)
    }

    const mesmaSenha = this.provedorCripto.compararSenha(entrada.senha, usuarioExistente.senha!);
    if (!mesmaSenha) {
      throw new Error(Erros.SENHA_INCORRETA)
    }

    return { usuario: { ...usuarioExistente, senha: undefined }, token: '' }
  }

}