import { Router, response } from "express";
import controller from "./pokemons/controller";

const routes = Router()

routes.get('/ola', controller.writePokemonList)




export default routes