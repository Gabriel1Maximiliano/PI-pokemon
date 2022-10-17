import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import { PokeCard } from "../../components/pokeCard/PokeCard";

describe('Pruebas sobre <PokeCard />', () => { 
   
    test('Debe hacer un match con el Snapshot', () => {
       
    const {container} = render(<BrowserRouter><PokeCard name={"Pokeprueba"} strength={35} img={null} id={"78ad527e-0aff-45d9-ac5d-463626452bf0"} type={ [
        "psychic",
        "ice"]} /></BrowserRouter> )
        expect( container ).toMatchSnapshot()
});

test('Debe mostrar el nombre en un h2', () => {
    let testName = "Pokeprueba";
   const { container, getByText } = render(<BrowserRouter><PokeCard name={"Pokeprueba"} strength={35} img={null} id={"78ad527e-0aff-45d9-ac5d-463626452bf0"} type={ [
        "psychic",
        "ice"]} /></BrowserRouter> )

        expect(getByText(testName)).toBeTruthy();

        const h2 = container.querySelector('h2');

        expect(h2.innerHTML).toBe(testName)

});
test('Debe mostrar el ALT de la imagen ', () => {
    let testName = "Pokeprueba";
    render(<BrowserRouter><PokeCard name={"Pokeprueba"} strength={35} img={null} id={"78ad527e-0aff-45d9-ac5d-463626452bf0"} type={ [
        "psychic",
        "ice"]} /></BrowserRouter> );

        expect(screen.getByRole('img').alt).toBe(`Imagen de ${testName}`)
})


})
