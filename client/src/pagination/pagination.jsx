import React from 'react'
import './pagination.css'
export const Pagination = ({paginated,data,amountPokesForPage}) => {
   
   let array = [];
     for (let i = 1; i <= Math.ceil(data.length / amountPokesForPage); i++) {
         array.push(i);
     }
 
    return(
        <nav className='pagination-container' >
          <ul>
            {
              array && array.map((numero,i)=>{
                return(
                  <button   className='pagination-button' key ={i} onClick={()=>{paginated(numero)}} 
                    
                  > {numero}</button>
                 

                )
              }
               // console.log(numero),
              )
            }
          </ul>
        </nav>
    )
}

/**
 * {
                         padding: "10px 20px",
                         border: "none",
                         borderRadius: "4px",
                         background: "#666",
                         color: "#ff6633",
                         fontSize: 14,
                         display: 'inline-block',
                    }
 */