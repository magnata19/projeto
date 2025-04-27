import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import { Express } from "express";

export default class RegistrarUsuarioController {
  constructor(servidor: Express, registrarUsuario: RegistrarUsuario) {
    servidor.post('/api/usuarios/registrar', async (req, res) => {
      try {
        await registrarUsuario.executar({
          nome: req.body.nome,
          email: req.body.email,
          senha: req.body.senha
        })
        res.status(201).send()
      } catch (err: any) {
        res.status(400).send(err.message)
      }
    })
  }

}