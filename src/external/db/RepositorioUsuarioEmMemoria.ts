import Usuario from "../../core/usuario/model/Usuario";

export default class RepositorioUsuarioEmMemoria {

  private static readonly items: Usuario[] = [];

  async inserir(usuario: Usuario): Promise<any> {
    const usuarios = RepositorioUsuarioEmMemoria.items
    const usuarioExistente = await this.buscarPorEmail(usuario.email);
    if (usuarioExistente) return
    return usuarios.push(usuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const usuario = RepositorioUsuarioEmMemoria.items;
    return usuario.find(u => u.email === email) ?? null;
  }
}