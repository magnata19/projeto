import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
  TerminalUtil.titulo("Registrar Usuario");
  const nome = await TerminalUtil.campoRequerido("\nNome do Usuario: ", 'Davidson');
  const email = await TerminalUtil.campoRequerido("\nEmail do Usuario: ", 'davidson@email.com');
  const senha = await TerminalUtil.campoRequerido("\nSenha do Usuario: ", '123456');

  const usuario: Usuario = { nome, email, senha };

  await new RegistrarUsuario().executar(usuario);

  TerminalUtil.sucesso("Usuário registrado com sucesso!")
  await TerminalUtil.esperarEnter();

  try {
    await new RegistrarUsuario().executar(usuario);
  } catch (err: any) {
    TerminalUtil.erro(err.message)
  } finally {
    await TerminalUtil.esperarEnter();
  }
}