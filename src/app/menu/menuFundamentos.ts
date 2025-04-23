import { terminal } from "terminal-kit"
import TerminalUtil from "../util/TerminalUtil"
import { polimorfismo } from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";

export const menuFundamentos = async () => {
  TerminalUtil.titulo("Fundamentos")

  const [indice] = await TerminalUtil.menu([
    "1. Polimorfismo",
    "2. DIP",
    "Voltar"
  ]);
  switch (indice) {
    case 0:
      await polimorfismo();
      break
    case 1:
      await dip();
      break
    default: return
  }

  await menuFundamentos()
}