

const initialState = [{
    id: 1,
    todo: 'Estudiar',
    done: false,
}]

const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ]
    }


    return state;
}

const newTodo = {
    id: 2,
    todo: 'Entrenar',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

let todos = todoReducer();

todos = todoReducer( todos, addTodoAction )

console.log({state: todos });

