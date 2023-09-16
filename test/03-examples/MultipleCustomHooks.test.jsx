/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";


jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")


describe('Pruebas en <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({ 
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHooks/> )

        expect( screen.getByText('Loading...'))
        expect( screen.getByText('Quotes Quotes Quotes'))

        const nextButton = screen.getByRole('button', {name:"Next Quote"})
        expect( nextButton.disabled ).toBeTruthy()   
    });

    test('debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Ignacio', quote:'Hola mundo'}],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks/> )

        expect( screen.getByText('{"height":0,"width":0}'))
        const nextButton = screen.getByRole('button', {name:"Next Quote"})
        expect( nextButton.disabled ).toBeFalsy()           
    })

    test('debe de llamar la funcion increment', () => {       

        useFetch.mockReturnValue({
            data: [{ author: 'Ignacio', quote:'Hola mundo'}],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks/> )

        const nextButton = screen.getByRole('button', {name:"Next Quote"})
        fireEvent.click( nextButton )

        expect( mockIncrement ).toHaveBeenCalled();

    })
 })