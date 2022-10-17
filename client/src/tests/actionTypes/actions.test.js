
const tipos = require('../../actionTypes/actionsTypes');

describe('Pruebas sobre las actions', () => { 
    test('Debe regresar los siguientes Types', () => { 
        expect(tipos).toEqual( {
            ALPHABETIC_ORDER: 'ALPHABETIC_ORDER',
            ATTACK_ORDER: 'ATTACK_ORDER',
            CREATE_POKEMON: 'CREATE_POKEMON',
            FILTER_POKE_API: 'FILTER_POKE_API',
            FILTER_POKE_DB: 'FILTER_POKE_DB',
            GET_ALL_POKEMON: 'GET_ALL_POKEMON',
            GET_BY_NAME: 'GET_BY_NAME',
            GET_DETAILS_POKEMON: 'GET_DETAILS_POKEMON',
            BRING_ALL : 'BRING_ALL'
          })
     })
 })