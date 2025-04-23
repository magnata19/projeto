import Carro from "./Carro";

export default function corrida(carro: Carro, logger: (str: string) => void) {

  Array.from({ length: 10 }).forEach(() => {
    logger(`\nAcelerando: ${carro.velocidadeAtual}`)
    carro.acelerar()
  })

  Array.from({ length: 10 }).forEach(() => {
    logger(`\nFreando: ${carro.velocidadeAtual}`)
    carro.frear()
  })
} 