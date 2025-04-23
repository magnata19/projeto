import registrarUsuario from "../usuario/registrarUsuario";
import TerminalUtil from "../util/TerminalUtil";

export default async function menuUsuario() {
  TerminalUtil.titulo("Menu Usuario")

  const [indice] = await TerminalUtil.menu([
    "1. Registrar Usuario",
    "Sair"]);
  switch (indice) {
    case 0:
      await registrarUsuario();
      break
    default:
      return;

  }

  menuUsuario()
}