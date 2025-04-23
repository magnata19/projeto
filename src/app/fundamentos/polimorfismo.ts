import Carro from "@/core/fundamentos/Carro";
import TerminalUtil from "../util/TerminalUtil"
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";
import { terminal } from "terminal-kit";

export const polimorfismo = async () => {
  TerminalUtil.titulo("Polimorfismo");
  const [tipoDeCarro] = await TerminalUtil.selecao("Tipo de carro?", ["Ferrari", "Fusca"]);

  const carro: Carro = tipoDeCarro === 0 ? new Ferrari() : new Fusca();

  while (true) {
    TerminalUtil.exibirChaveValor("Velocidade máxima: ", `${carro.velocidadeMaxima} km/h`)
    TerminalUtil.exibirChaveValor("Velocidade atual: ", `${carro.velocidadeAtual} km/h`)

    const [opcao] = await TerminalUtil.selecao("Qual opção ?", ["Acelerar", "Frear"]);
    opcao === 0 ? carro.acelerar() : carro.frear()
    const continuar = await TerminalUtil.confirmacao("Deseja continuar?");
    if (!continuar) return;
  }
}