


const axios = require('axios');

const { Pokemon, Type } = require('../../db'); 

const getTypes = async () => {
    try {
        let found = await Type.findAll({
            includes: { model: Pokemon }
        })
        if (found.length > 0) {
            return found;
        } else {
            const pokeTypes = await axios.get('https://pokeapi.co/api/v2/type');
            let loadDataBase = pokeTypes.data.results;

            
            await Type.bulkCreate(
                loadDataBase.map(type => {
                    return {

                        name: type.name
                    }
                })
            )
            found = await Type.findAll({
                includes: { model: Pokemon }
            })
            if (found.length > 0) {
                return found
            }

        }

    } catch (error) {
        console.log(error);
    }

}
module.exports = getTypes;
