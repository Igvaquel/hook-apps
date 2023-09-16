/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'


describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'ignacio',
        email: 'ignacio@gmail.com'
    }
    
    test('debe de regresar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useForm(initialForm) );

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ) ,
            onResetForm:  expect.any( Function )
        })
    })

    test('debe de cambiar el nombre del formulario', () => { 
        
        const { result } = renderHook( () => useForm(initialForm) );
        const{ onInputChange } = result.current;
        act( () => {
            onInputChange({ target: {name: 'name', value: 'Juan'}})
        });


        expect(result.current.name).toBe('Juan')
        expect(result.current.formState.name).toBe('Juan')
    })

    test('debe de cambiar el nombre del formulario', () => { 
        
        const { result } = renderHook( () => useForm(initialForm) );
        const{ onInputChange, onResetForm } = result.current;
        act( () => {
            onInputChange({ target: {name: 'name', value: 'Juan'}})
            onResetForm()
        });
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    })
 })