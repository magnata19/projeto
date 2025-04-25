//na arq. hexagonal, esta interface é a porta de entrada para o provedor de criptografia
// e o provedor de criptografia é a implementação que vai fazer a criptografia
export default interface ProvedorCriptografia {
  criptografar(senha: string): string;
}