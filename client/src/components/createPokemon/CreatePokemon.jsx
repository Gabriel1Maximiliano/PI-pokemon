import React from 'react'
import { useFormulario } from '../../hooks/useFormulario';
import { BarraDeNavegacion } from '../navegacion/BarraDeNavegacion';
import './createPokemon.css'

export const CreatePokemon = () => {

  const initialForm = {
    name: "",
    height: "",
    weight: "",
    hp: "",
    strength: "",
    defense: "",
    speed: "",
    type: [],
    img: ""
  };
  const validationForm = (form) => {
    let errors = {};
    let regexURL = /(^(https:\/\/).*\.(png|jpg))/
    let regexName = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!form.name.trim()) {
      errors.name = 'El campo nombre es requerido'
    }
    else if (!regexName.test(form.name.trim())) {
      errors.name = 'Caracter inválido solo letras y números'
    }

    if (!form.height) {
      errors.height = 'Agregue altura a su Pokemon'
    } else if (form.height < 1) {
      errors.height = 'Altura de al menos 1'
    } else if (form.height > 100) { //1-100
      errors.height = 'La altura debe ser menor o igual a 100'
    }
    if (!form.weight) {
      errors.weight = 'Agregue peso a su Pokemon'
    }
    else if (form.weight < 1) {
      errors.weight = 'Peso de al menos 1 Kg'
    } else if (form.weight > 100) { //1-100
      errors.weight = 'La vida debe ser menor o igual a 100'
    }
    if (!form.hp) {
      errors.hp = 'Agregue puntos de vida a su Pokemon'
    } else if (form.hp < 1) {
      errors.hp = 'Vida de al menos 1'
    } else if (form.hp > 100) { //1-100
      errors.hp = 'La vida debe ser menor o igual a 100'
    }
    if (!form.strength) {
      errors.strength = 'Agregue fuerza de ataque a tu Pokemon'
    } else if (form.strength < 1) {
      errors.strength = 'Ataque de al menos 1'
    }
    if (!form.defense) {
      errors.defense = 'Agregue defensa a tu Pokeon'
    } else if (form.defense < 1) {
  
      errors.defense = 'Defensa de al menos 1'
    } else if (form.defense > 100) { //1-100
      errors.defense = 'La defensa debe ser menor o igual a 100'
    }
    if (!form.speed) {
      errors.speed = 'Agregue velocidad a tu Pokemon'
    } else if (form.speed < 1) {
   
      errors.speed = 'Velocidad de al menos 1'
    } else if (form.speed > 100) { //1-100
      errors.speed = 'La velocidad debe ser menor o igual a 100'
    }
    if (form.type.lenght > 0) {
      errors.type = 'Selecione un tipo de Pokemon'
     
    }
    
    console.log(form.img)
    if(!regexURL.test(form.img)){

      errors.img = 'Formato de imagen no válido'
    }
    
    
    return errors
  }
  const { form, errors, handleBlur, handleChange, handleSubmit, handleEliminate } = useFormulario(initialForm, validationForm);



  return (
    <div className='contenedor-formulario' >
      <br />
      <BarraDeNavegacion />
     
      <br></br>
      <div className='formulario' >
        <form onSubmit={handleSubmit} >
          <label htmlFor='name' >Nombre del Pokemon</label>
          <br></br>
          <br></br>
          <div className='decoration-input' >
            <input
              className='input'
              type='text'
              name='name'
              id='name'
              value={form.name}
              placeholder='Ingrese nombre del Pokemon'
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {
              errors.name && <p style={{ color: 'green' }} >{errors.name}</p>
            }
            <br></br>
            <br></br>
            <label htmlFor='height' >Altura entre {`(1-30)`} </label>
            <input
              type='number'
              name='height'
              min="1"
              max="30"
              id='height'
              onChange={handleChange}
              value={form.height}
              onBlur={handleBlur}
            />
             {
              errors.height && <p style={{ color: 'green' }} >{errors.height}</p>
            }
            <br></br>
            <br></br>
            <label htmlFor='weight' >Peso entre {`(1-300)`} </label>
            <input
              type='number'
              name='weight'
              min="1"
              max="300"
              id='weight'
              onChange={handleChange}
              value={form.weight}
              onBlur={handleBlur}
            />
            {
              errors.weight && <p style={{ color: 'green' }} >{errors.weight}</p>
            }
            <br></br>
            <br></br>
            <label htmlFor='hp' >Vida entre {`(1-100)`} </label>
            <input
              type='number'
              name='hp'
              min="1"
              max="100"
              id='hp'
              onChange={handleChange}
              value={form.hp}
              onBlur={handleBlur}
            />
            {
              errors.hp && <p style={{ color: 'green' }} >{errors.hp}</p>
            }
            <br></br>
            <br></br>
            <label htmlFor='strength' >Ataque entre {`(1-300)`} </label>
            <input
              type='number'
              name='strength'
              min="1"
              max="300"
              id='strength'
              onChange={handleChange}
              value={form.strength}
              onBlur={handleBlur}
            />
            {
              errors.strength && <p style={{ color: 'green' }} >{errors.strength}</p>
            }
            <br></br>
            <br></br>
            <label htmlFor='defense'>Defensa entre {`(1-100)`} </label>
            <input
              type='number'
              name='defense'

              min="1"
              max="100"
              id='defense'
              onChange={handleChange}
              value={form.defense}
              onBlur={handleBlur}
            />
            {
              errors.defense && <p style={{ color: 'green' }} >{errors.defense}</p>
            }
            <br></br>
            <br></br>
            <label htmlFor='speed' >Velocidad {`(entre 1-100)`} </label>
            <input
              type='number'
              name='speed'
              min="1"
              max="100"
              id='speed'

              onChange={handleChange}
              value={form.speed}
              onBlur={handleBlur}
            />
            {

              errors.speed && <p style={{ color: 'green' }} >{errors.speed}</p>

            }
            <br></br>
            <br></br>
            <div >
              <label>Tipos de Pokemon </label>
              <select value={form} name='type' onChange={handleChange} >
                <option  >---</option>
                <option value='normal' >Normal</option>
                <option value='fighting' >Fighting </option>
                <option value='flying' >Flying</option>
                <option value='poison' >Poison </option>
                <option value='ground' >Ground</option>
                <option value='rock' >Rock</option>
                <option value='bug'  >Bug </option>
                <option value='ghost'  >Ghost  </option>
                <option value='steel'  >Steel </option>
                <option value='fire' >Fire </option>
                <option value='water'  >Water</option>
                <option value='grass'  >Grass </option>
                <option value='electric'  >Electric</option>
                <option value='psychic'  >Psychic </option>
                <option value='ice'  >Ice </option>
                <option value='dragon'  >Dragon </option>
                <option value='dark'  >Dark  </option>
                <option value='fairy'  >Fairy </option>
                <option value='uknown'  >Unknown </option>
                <option value='shadow'  >Shadow  </option>

              </select>
              {
               errors.type && <p style={{ color: 'green' }} >{errors.type}</p>
              }
              <ul>
                {
                  form.type && form.type.map((el, indice) => (
                    <div key={indice} >
                      <li key={indice} >{el}</li>
                      <button className='btn' key={el} onClick={(e) => { handleEliminate(el) }}>X</button>
                    </div>
                  )
                  )

                }
              </ul>
            </div>
            {
              errors.type && <p style={{ color: 'green' }} >{errors.type[0]}</p>
            }
            <br />
            <label htmlFor='img' >Imagen </label>
            <input
              type='text'
              name='img'
              id='img'
              onChange={handleChange}
              value={form.img}
              onBlur={handleBlur}
            />
            <br />
            {
              errors.img && <p style={{ color: 'green' }} >{errors.img}</p>
            }
            <br></br>
           
            <br></br>
          </div>
          <button className='btn' type='submit'>Crear Pokemon</button>
        </form>
      </div>
    </div>
  )
}
