import {
    FILTER_POKE_DB,
    ATTACK_ORDER,
    GET_ALL_POKEMON,
    GET_DETAILS_POKEMON,
    ALPHABETIC_ORDER,
    GET_BY_NAME,
    CREATE_POKEMON,
    BRING_ALL
} from '../actionTypes/index';

import axios from 'axios';


export const getAllPokemons =  () =>async(dispatch) =>  {
     try{

         const resp = await axios.get('http://localhost:3001/api/pokemon');
          //console.log(resp.data.response)
         dispatch({
             type: GET_ALL_POKEMON, 
             payload:resp.data
         })
        
     }catch(error){
          console.log('hay error')
     }
}
export const  getPokemonByName = (buscado) => async(dispatch) =>{

    try {
        const resp = await axios.get(`http://localhost:3001/api/pokemon?name=${buscado}`);

        dispatch({
           type: GET_BY_NAME,
           payload:resp.data
        })
    } catch (error) {
        console.log(error)
    }
    

} 

export const getPokemonDetail = (id) => async(dispatch) =>{
    try {
        const resp = await axios.get(`http://localhost:3001/api/pokemon/${id}`);

        dispatch({
            type:GET_DETAILS_POKEMON,
            payload:resp.data
        })
    } catch (error) {
        console.log('error')
    }
   
}
export const createPokemon = (pokemon) => async(dispatch) =>{
 console.log(pokemon)
 try {
    const resp = await axios.post('http://localhost:3001/api/pokemon',pokemon);
  
    dispatch({
        type: CREATE_POKEMON,
        payload: resp.data
    })
 } catch (error) {
    console.log(error)
 }
    
} 

export const getOrderByAttack = (attack) => {

 return{
    type:ATTACK_ORDER, 
    payload:attack
 }
    
} 
export const getAlphabeticOrder = (order) => {
    console.log('en dispatch')
    return{
        type:ALPHABETIC_ORDER,
        payload:order
    }
}
export const getFilterApi = (order) => {
    
      return{
        type:FILTER_POKE_DB,
        payload:order
      }

}

export const bringAll = () => async(dispatch)=>{
    try{

        const resp = await axios.get('http://localhost:3001/api/pokemon');
         //console.log(resp.data.response)
        dispatch({
            type: BRING_ALL,
            payload:resp.data
        })
       
    }catch(error){
         console.log('hay error en bring all ')
    }
    }
