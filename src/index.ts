import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import RepositorioUsuarioEmMemoria from './external/db/RepositorioUsuarioEmMemoria';
import SenhaCripto from './external/auth/SenhaCripto';
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario';
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController';
import LoginUsuario from './core/usuario/service/LoginUsuario';
import LoginUsuarioController from './external/api/LoginUsuarioController';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // isso faz com que o express entenda o body da requisição caso seja um form

app.listen(PORT, () => {
  console.log("server on! 🔥")
})

// rotas abertas
const repositorio = new RepositorioUsuarioEmMemoria();
const cripto = new SenhaCripto();

const registrarUsuario = new RegistrarUsuario(repositorio, cripto);
const loginUsuario = new LoginUsuario(cripto, repositorio);

new RegistrarUsuarioController(app, registrarUsuario);
new LoginUsuarioController(app, loginUsuario);