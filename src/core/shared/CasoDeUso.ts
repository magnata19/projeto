export default interface CasoDeUso<E, S> { //E significa entrada e S significa saída
  executar(entrada: E): Promise<S>;
}