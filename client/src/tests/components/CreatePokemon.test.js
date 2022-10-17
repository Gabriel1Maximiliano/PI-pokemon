import { render,screen,fireEvent} from "@testing-library/react"
import { Provider } from "react-redux"
import { CreatePokemon } from "../../components/createPokemon/CreatePokemon"
import { MemoryRouter } from "react-router-dom"
import{ createStore } from 'redux';
import reducer from "../../reducer/reducer"
 

const store  = (createStore(reducer))

 

 describe('Pruebas sobre <CreatePokemon />', () => {
    
       test('Deba hacer un match con el snapshot', () => { 

          const { container } = render(
          <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter>
            </Provider>)

            expect( container ).toMatchSnapshot()
        })

        test('Debe contener el texto "Nombre del Pokemon"', () => { 
            render(
            <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter>
            </Provider>)
         expect(screen.getByText('Nombre del Pokemon')).toBeTruthy() 
         })

         test('No debe haber mensajes de error ni  bien se monta el componente', () => {
            render(
            <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter>
            </Provider>)
             expect(screen.queryByText(/'El campo nombre es requerido'/)).not.toBeInTheDocument();
            expect(screen.queryByText(/'Agregue altura a su Pokemon'/)).not.toBeInTheDocument();
            expect(screen.queryByText(/'Agregue peso a su Pokemon'/)).not.toBeInTheDocument();
            expect(screen.queryByText(/'Agregue puntos de vida a su Pokemon'/)).not.toBeInTheDocument();
            expect(screen.queryByText(/  'Agregue fuerza de ataque a tu Pokemon'/)).not.toBeInTheDocument();


         })

         test('Debe mostrar la leyenda "Complete los campos" si hace submit con el formulario vacío', () => {
            render(
            <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter>
            </Provider>)

           const btnSubmint = screen.getByRole('button', {name: /Crear Pokemon/i});
           window.alert = jest.fn();
             fireEvent.click(btnSubmint)
            let error = window.alert.mock.calls[0];
            expect(error[0]).toEqual('Complete los campos')
         })
       
    });

    describe('Pruebas de mensajes de error en <CreatePokemon />', () => { 
       
        test('Muestra mensaje de error si el campo nombre no esta completado',() => {
            render(
            <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter>
            </Provider>)

            
             fireEvent.blur(screen.getByLabelText(/Nombre del Pokemon/,{value:''}))
                    
           
            expect(screen.getByText(/El campo nombre es requerido/i)).toBeInTheDocument();
         
        })
        test('Muestra mensaje de error en el campo "Altura entre"',() => {
            render(
            <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter>
            </Provider>)

            
             fireEvent.blur(screen.getByLabelText(/Altura entre/,{value:''}))
                    
           
            expect(screen.getByText(/Agregue altura a su Pokemon/i)).toBeInTheDocument();
         
        });
        test('Muestra mensaje de error en el campo " Peso entre"',() => {
            render(
            <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter> 
            </Provider>)

            
             fireEvent.blur(screen.getByLabelText(/Peso entre /,{value:''}))
                    
           
            expect(screen.getByText(/Agregue peso a su Pokemon/i)).toBeInTheDocument();
         
        });
        test('Muestra mensaje de error en el campo "Vida entre"',() => {
            render(
            <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter>
            </Provider>)

            
             fireEvent.blur(screen.getByLabelText(/Vida entre/,{value:''}))
                    
           
            expect(screen.getByText(/Agregue puntos de vida a su Pokemon/i)).toBeInTheDocument();
         
        });
        test('Muestra mensaje de error en el campo "Ataque entre"',() => {
            render(
            <Provider store={store}>
                <MemoryRouter>
                <CreatePokemon />
                </MemoryRouter>
            </Provider>)

            
             fireEvent.blur(screen.getByLabelText(/Ataque entre/,{value:''}))
                    
           
            expect(screen.getByText(/Agregue fuerza de ataque a tu Pokemon/i)).toBeInTheDocument();
         
        });
    
    
     })
    
    
     
    
     //Defensa entre
     //Velocidad
        
        
  
