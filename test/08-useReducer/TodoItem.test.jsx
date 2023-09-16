/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => { 
    
    const todo = {
        id: 1,
        description: 'Demo Todo',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el Todo pendiente de completas', () => { 
        
        render( <TodoItem todo={todo} onToggleTodo={onDeleteTodoMock} onDeleteTodo={onDeleteTodoMock}/> )

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe("list-group-item d-flex justify-content-between");

        const spanElemnt = screen.getByLabelText("span");
        expect( spanElemnt.className ).toContain("align-self-center");
    });

    test('debe de mostrar el Todo completado', () => { 
        
        todo.done=true;
        
        render( <TodoItem todo={todo} onToggleTodo={onDeleteTodoMock} onDeleteTodo={onDeleteTodoMock}/> )

        const spanElemnt = screen.getByLabelText("span");
        expect( spanElemnt.className ).toContain("align-self-center text-decoration-line-through");
    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => { 
                
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/> )

        const spanElemnt = screen.getByLabelText("span");
        fireEvent.click( spanElemnt );
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('button debe de llamar el DeleteTodo cuando se hace click', () => { 
                
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/> )

        const deleteButton = screen.getByRole("button");
        
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
})