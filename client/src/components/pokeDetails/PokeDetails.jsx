import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getPokemonDetail } from '../../actions/actions';
import '../../index.css'
import { BarraDeNavegacion } from '../navegacion/BarraDeNavegacion';
import imge from '../../images/turma-pokemon-png.png'


export const PokeDetails = () => {

  
  
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const details = useSelector((state) => state.pokemonDetails)

  useEffect(() => {

      
    dispatch(getPokemonDetail(id));

  }, [dispatch,id])

  
  
  return (

   <div className='pokedetails' >
     <div className='detail-boton' >
      <BarraDeNavegacion  />
      </div>
     
      
      
       <div className='prueba' > 
        <h1>NOMBRE : {details.name ? `${details.name[0].toUpperCase()}${details.name.substring(1)}`: ''}</h1>
        <div className='contenedor-details' >
        <div className='imagen-detalle' >
        <img  src={details.img || imge } alt={details.name} width='150px' height='150px'  style={{
          backgroundColor:'yellow',
          borderRadius:'50%',
          justifyContent:'center'
        }} ></img>
       </div>
    
       <div className='poke-data' >
        <p>FUERZA {details.strength}</p>
        <p>VELOCIDAD {details.speed}</p>
        <p>DEFENSA {details.defense}</p>
        <p>ALTURA {details.height}</p>
        <p>PESO {details.weight}</p>
        <p>Número de Pokemon {details.id} </p>
       <h3>Tipo de Pokemon</h3>
       <ul>
             {
        details.type?.map(el => (
         <Link  to= '/detalleDe'> <ul key={el} >{el[0].toUpperCase()}{el.substring(1)}</ul></Link>
        ))
      }
      </ul>
       </div>
  </div>
  </div>
    </div>




  )
}
