import {
 
  FILTER_POKE_DB,
  ATTACK_ORDER,
  GET_ALL_POKEMON,
  GET_DETAILS_POKEMON,
  ALPHABETIC_ORDER,
  GET_BY_NAME,
  CREATE_POKEMON,
  BRING_ALL} from '../actionTypes/index';

const initialState = {
    allPokemons:[],
    pokemonDetails:[],
    auxAllPokemons:[],
    aux2AllPokemons:[]
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_ALL_POKEMON:
    return{
      ...state,
      allPokemons:payload,
      auxAllPokemons:payload,
      aux2AllPokemons:payload
    }
    case GET_BY_NAME:
      
      return{
         ...state,
         allPokemons: payload
      }
      case GET_DETAILS_POKEMON:
       
      return{
        ...state,
        pokemonDetails:payload[0]
      }
      case CREATE_POKEMON:
        return{
          ...state
        }
        case ALPHABETIC_ORDER:
          
      let alphabeticOrder;
     
      if(payload ==='z-a'){
       
        alphabeticOrder= state.auxAllPokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        })
      }
      else{
        alphabeticOrder= state.auxAllPokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        })
      }
  
          return{
            ...state,
            allPokemons:alphabeticOrder
          }

          case  ATTACK_ORDER:

            
            let strengthSortArray;
           
            if(payload ==='des'){
              
              strengthSortArray=state.allPokemons.sort(function (a, b) {
                if (a.strength > b.strength) {
                  return -1;
                }
                if (b.strenght > a.strength) {
                  return 1;
                }
                return 0;
              })
            }
           
            else{
              strengthSortArray=state.allPokemons.sort(function (a, b) {
              
                if (a.strength > b.strength) {
                  return 1;
                }
                if (b.strength > a.strength) {
                  return -1;       
                }
                return 0;
              })
              
            }
    
            return{
              ...state,
              allPokemons:strengthSortArray
            }
            case FILTER_POKE_DB:
              let filteredPoke=state.auxAllPokemons;
              let filtroAuxiliar = state.aux2AllPokemons;
              
             console.log('entre con un valor'+payload)//
             
               let resp = payload ==='api'?  filteredPoke.filter(p=> !p.createdInDb ):payload ==='all'? state.allPokemons :filtroAuxiliar.filter(p=>p.createdInDb);
               
            return { 
               ...state,
               allPokemons: resp
            }
            case  BRING_ALL:
              return  {
                ...state,
                allPokemons: payload
              }
  default:
    return state
  }
}
export default  reducer;