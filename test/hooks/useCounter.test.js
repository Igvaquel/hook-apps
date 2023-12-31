/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en useCounter', () => { 
    
    test('Debe de retornar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useCounter() );

        const{ counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('Debe de generar el counter con el valor de 100', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const{ counter } = result.current;
        expect( counter ).toBe(100);
    });

    test('Debe de incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const{ increment } = result.current;
        act( () => {
            increment()
        });
        expect( result.current.counter ).toBe(101);
    });

    test('Debe de decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const{ decrement } = result.current;
        act( () => {
            decrement()
        });
        expect( result.current.counter ).toBe(99);
    });

    test('Debe de resetear el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const{ decrement, reset } = result.current;
        act( () => {
            decrement()
            reset()
        });
        expect( result.current.counter ).toBe(100);
    })
})