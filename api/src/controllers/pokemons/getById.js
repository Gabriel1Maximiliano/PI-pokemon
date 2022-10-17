
const axios = require('axios');
const { Pokemon, Type } = require('../../db');



const getById = async (id) => {

    let containsCharacter = id;

    let found = containsCharacter.includes('-')
    try {
        if (found) {
            const dBpokemons = await Pokemon.findAll({
                where: {
                    id: id,
                },
                include: {
                    model: Type,
                },
            });


            return dBpokemons.map(pokemon => {
                return {
                    id      : pokemon.id,
                    name    : pokemon.name,
                    hp      : pokemon.hp,
                    strength: pokemon.strength,
                    defense : pokemon.defense,
                    speed   : pokemon.speed,
                    height  : pokemon.height,
                    weight  : pokemon.weight,
                    img     : pokemon.img,
                    type    : pokemon.types.map(type => type.name)
                }
            });
        } else {

            const apiPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            let array = [];
            let aux;
            array.push(apiPokemons.data);
            aux = array.map(pokemon => {
                return {
                    id: pokemon.id,
                    name: pokemon.forms[0].name,
                    img: pokemon.sprites.other.home.front_default,
                    hp: pokemon.stats[0].base_stat,
                    strength: pokemon.stats[1].base_stat,
                    defense: pokemon.stats[2].base_stat,
                    speed: pokemon.stats[5].base_stat,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    type: pokemon.types.map((el) => el.type.name),
                }
            })
            return aux;

        }
    } catch (error) {
        return 'Pokemon no encontrado';
    }

}
module.exports = getById;
