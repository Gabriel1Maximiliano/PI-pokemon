import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonByName } from '../../actions/actions';
import './searchBar.css'


export const SearchBar = ({setState,setcurrentPage}) => {

  const dispatch = useDispatch()
  let initialInput = {buscado:''}

  const [input, setInput] = useState(initialInput);



  const handleSearch = (e) => {
   

      setInput({
        buscado: e.target.value
      });
   

  }
  const validate = (input) => {
   
    let errors={};

    if(input.buscado.trim().length===0){
      errors.name='Ingrese Pokemon'
    }
    if((input.buscado.trim().length >= 1)){
      let regexName = /[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü]/;
      if(!regexName.test(input.buscado))
     errors.name='Caracter inválido'
      
    }
    return errors
  }
  const handleSubmit = (e) => {
  
    e.preventDefault();
    const validar = validate(input)

   
   if(Object.values(validar).length === 1){
     
     alert(Object.values(validar));
    
   }else{

    dispatch(getPokemonByName(input.buscado))
  setState(`${input.buscado}`)
  setcurrentPage(1)
  
   
    }
   
   

  }
      
  
    return (
      <div className='search-bar' >
        
        <input  className='input-search-bar' type='text'  placeholder='Buscar' required
          onChange={(e) => handleSearch(e)}></input>
  
  
        <button className='btn-search-bar' type="submit" onClick={(e) => handleSubmit(e)}>BUSCAR</button>
  
      </div>
    )
  }
