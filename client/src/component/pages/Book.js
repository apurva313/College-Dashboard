import React, { useReducer } from 'react';
const initialState = {
    counter1: 0,
    counter2: 10,
    counter3: 20,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter1: state.counter1 + action.value };
        case 'decrement':
            return { ...state, counter1: state.counter1 - action.value };

        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value };
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value };

        case 'increment3':
            return { ...state, counter3: state.counter3 + action.value };
        case 'decrement3':
            return { ...state, counter3: state.counter3 - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const Book = () => {

    const [state, dispatch]= useReducer(reducer, initialState);

    return (
        <div>Book</div>
    )
}

export default Book