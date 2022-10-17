import React from 'react'
import { NavLink } from 'react-router-dom'



export const BarraDeNavegacion = () => {
  return (
    <div className='navigation-bar' >
     
        <NavLink className='nav-link'  to='/home'>Home</NavLink>
        <NavLink className='nav-link'  to='/home/createPokemon'>Crear Pokemon</NavLink>
        <NavLink className='nav-link'  to='/'>Landing page</NavLink>
       
    </div>
  )
}
