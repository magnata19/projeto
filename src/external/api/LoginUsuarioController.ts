import LoginUsuario from "@/core/usuario/service/LoginUsuario";
import { Express, Request, Response } from "express";

export default class LoginUsuarioController {
  constructor(
    private servidor: Express,
    private casoDeUso: LoginUsuario
  ) {
    servidor.post('/api/usuarios/login', async (req: Request, res: Response) => {
      try {
        const resposta = await casoDeUso.executar({
          email: req.body.email,
          senha: req.body.senha
        })
        res.status(200).send(resposta)
      } catch (err: any) {
        res.status(400).send(err.message)
      }
    })
  }
}