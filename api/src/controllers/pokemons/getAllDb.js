const { Pokemon, Type } = require('../../db');

 const getAllDb = async () => {

    const resp = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
       
    });   
 
    const data = resp.map(pokemon => {
        //console.log(pokemon.types.map(obj=>obj.dataValues.name))
        //console.log(pokemon)
        return {
            id: pokemon.id,
            name: pokemon.name,
            hp: pokemon.hp,   
            strength: pokemon.strength,    
            speed: pokemon.speed, 
            height: pokemon.height,    
            weight: pokemon.weight,
            img: pokemon.img,
            type: pokemon.types.map(obj=>obj.dataValues.name),
            createdInDb: pokemon.createdInDatBase
        }
    }) 

return data; 

}
module.exports = getAllDb;