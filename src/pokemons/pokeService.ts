import { writeFile } from "fs/promises"
declare const fetch:any

export class pokeServices {
    public async writePokemonList() {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0').then((result: any) => result.json())
        await writeFile('./src/pokemons/files/pokemonList.json', JSON.stringify(result.results, null,2))
        return "Foiii"
    }
}
