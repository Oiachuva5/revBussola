import { pokeServices } from "./pokeService";
import { Request, Response} from "express"


class controller{
    public async writePokemonList(req: Request, res: Response){
        await new pokeServices().writePokemonList()
        return res.status(200).json('foi')
    }
}


export default new controller()