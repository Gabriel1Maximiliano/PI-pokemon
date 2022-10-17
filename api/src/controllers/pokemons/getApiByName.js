
const axios = require('axios');
const { Type, Pokemon ,Op} = require('../../db')

const getApiByName = async (name) => {
try{
    const nombreDb = await Pokemon.findOne({
      where: {
            name: name
        },
        include: {
            model: Type
        },
        });
    
    if (nombreDb) {
       let aux = [];
       aux.push(nombreDb)
        return aux;
    }
    const pokemonApiQuery = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (pokemonApiQuery.data) {
        let r = pokemonApiQuery.data;
        let pokeName = {
          name: name, 
          id: r.id,
          img: r.sprites.front_default,
          hp: r.stats[0].base_stat,
          strength: r.stats[1].base_stat,
          defense: r.stats[2].base_stat,
          speed: r.stats[5].base_stat,
          height: r.height,
          weight: r.weight,
          type: r.types.map((el) => el.type.name),
        };



        let aux =[];
        aux.push(pokeName)
        return aux;


    }
}catch(error){
    return [{ name: `No se encontro el pokemon ${name}` }];
    }





};
module.exports = getApiByName;