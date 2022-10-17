import React from 'react'
import { NavLink } from 'react-router-dom';
import imge from '../../images/turma-pokemon-png.png'
import PropTypes from 'prop-types'; 
export const PokeCard = ({name,strength,img,id,type}) => {
  return  (
    <div className='card-image-container' >
        <h2>{name[0].toUpperCase()}{name.substring(1)}</h2>
          <NavLink to={'/home/' +id} >  <img src= {img || imge} className='card-image' alt={`Imagen de ${name}`} /></NavLink> 
        
           <h2>Fuerza</h2>
           <p>{strength}</p>
           <h2>Tipo</h2>
           
            {
              type?.map((type,i)=>(
                <p key={type[i]} >{type[0].toUpperCase()}{type.substring(1)}</p>
              ))
            }
                
    </div>
  )
}
PokeCard.propTypes = {
  name: PropTypes.string.isRequired,
}