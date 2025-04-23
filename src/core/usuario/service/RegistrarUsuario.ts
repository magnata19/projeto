import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/Id";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
  async executar(usuario: Usuario): Promise<void> {
    const senhaCriptografada = usuario.senha.split("").reverse().join('');
    const repositorio = new RepositorioUsuarioEmMemoria();

    const usuarioExistente = await repositorio.buscarPorEmail(usuario.email);
    if (usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE);

    const novoUsuario: Usuario = {
      id: Id.gerar(),
      nome: usuario.nome,
      email: usuario.email,
      senha: senhaCriptografada
    }

    await repositorio.inserir(novoUsuario);

    console.log(`\n${JSON.stringify(novoUsuario)}`);
  }
} 