import React from 'react'
import { NavLink } from 'react-router-dom'

export const LandinPage = () => {
  return (
    <div className='landing-container' >
      <div className='landing-title' >
      <h1 id='h1-bienvenida' >Bienvenidos a mi página de Pokemon</h1>
      </div>
      
       <NavLink className='nav-link-landing' to='/home'>
        <button className='btn-landing'>Ingresar</button>
      </NavLink> 
     
    </div>
  )
}
