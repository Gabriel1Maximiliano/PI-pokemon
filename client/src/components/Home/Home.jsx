import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bringAll, getAllPokemons, getAlphabeticOrder, getFilterApi, getOrderByAttack } from '../../actions/actions';
import { Pagination } from '../../pagination/pagination';
import { BarraDeNavegacion } from '../navegacion/BarraDeNavegacion';
import { PokeCard } from '../pokeCard/PokeCard';
import { SearchBar } from '../searchBar/SearchBar';


export const Home = () => {

  const [state, setState] = useState('')
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());

  }, [dispatch]);

  const data = useSelector(valor => valor.allPokemons);


console.log(data)
  const [currentPage, setcurrentPage] = useState(1);
  const [amountPokesForPage, setamountPokesForPage] = useState(12);
  const lastIndex = (currentPage * amountPokesForPage); // 
  const firstIndex = Math.abs((amountPokesForPage - lastIndex))//10
  const frontPokemons = data[0] && data.slice(firstIndex, lastIndex);
  const paginated = (pageNumbers) => {
    setcurrentPage(pageNumbers);
    setamountPokesForPage(12);
    
  }

  const handleAttackSorting = (e) => {

    dispatch(getOrderByAttack(e.target.value));
    setState(e.target.value);
    setcurrentPage(1)
  }
  const handleFilterData = (e) => {
    if (e.target.value === 'all') {
   
      dispatch(getAllPokemons());
     
      setState(`${e.target.value}`);
      setcurrentPage(1)
    } else {

      dispatch(getFilterApi(e.target.value));
      setState(`${e.target.value}`);
      setcurrentPage(1)
      
    }

  }

  const handleReset = (e) => {
   
    dispatch(getAllPokemons())
    window.location.reload();

  }



  const handleSorting = (e) => {

    e.preventDefault()
    dispatch(getAlphabeticOrder(e.target.value));
    setState(e.target.value);
    setcurrentPage(1);
  }
  const handleAll = (e) => {
    dispatch(bringAll());
    setState(`${e.target.value}`);
      setcurrentPage(1)
    
  }
  return (
    <div className='home-styles' >

      {
        data.length > 0 ?

          <BarraDeNavegacion  />
          :
          <p style={{ color: 'red', fontsize: 20 }} >Loading</p>

      }
      {
         <SearchBar  setState={setState} setcurrentPage={setcurrentPage} />
      }
      <button onClick={handleReset} >reset</button>
      <div className='contenedor-pokeApi' >
        <div className='search-sort-class' >
          <p>Ordenamientos</p>
          <select onClick={handleSorting}>
            <option>Ordena Alfabéticamente</option>
            <option value='a-z' >ascendente por letra</option>
            <option value='z-a' >Descendente por letra</option>
          </select>
          <select onClick={handleAttackSorting} >
            <option>Ordena por ataque</option>
            <option value='asc' >ascendente por ataque</option>
            <option value='des' >Descendente por atque</option>
          </select>


          <p>Filtrar creados o en Base de Datos</p>


          <select onClick={handleFilterData}>
            <option value='api' >Desde la Api</option>
            <option value='db' >Desde la Db</option>
          </select>
          <button value={'todos'} onClick={(e)=>handleAll(e)} >Todos los Pokemon</button>
        </div>
        <div className='container-pokemons' >
          {
             frontPokemons && frontPokemons?.map((pokemon, i) =>
            (
              <div key={i} className='card-pokemon' >

                <NavLink key={pokemon.id} to={'/home/' + pokemon.id} className='container-pokemons__link-styles' ><b  > Caracteristicas </b></NavLink>
                <PokeCard
                  type={pokemon.type}
                  key={pokemon.name}
                  id={pokemon.id}
                  name={pokemon.name}
                  img={pokemon.img}
                  strength={pokemon.strength} />
              </div>
            )

            )
          }
        </div>
      </div>
      <Pagination paginated={paginated} data={data} amountPokesForPage={amountPokesForPage} />
    </div>
  )
}
