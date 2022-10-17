import { fireEvent, render, screen } from "@testing-library/react";
import {LandinPage} from '../../components/LandingPage/LandinPage'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

describe('Pruebas sobre LandingPage ', () => { 
    test('Debe hacer match con el Snapshot', () => { 
      const { container }= render( 
       <BrowserRouter>
       <LandinPage />
       </BrowserRouter>)
      expect( container ).toMatchSnapshot()
      
     });

     test('debe mostrar el título "Bienvenidos a mi página de Pokemon" ' ,() => {
               render( 
            <BrowserRouter>
            <LandinPage />
            </BrowserRouter>);
           expect( screen.getByRole('heading',{Name: / Bienvenidos a mi página de Pokemon/}) )
     })
     test('Debe contener un boton con el nombre "Ingresar"', () => { 
        render( 
            <BrowserRouter>
            <LandinPage />
            </BrowserRouter>);

            expect( screen.getByRole('button',{Name : /Ingresar/}) )
          
      })
     
 })
