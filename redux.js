//const redux = require('redux');
import {} from 'react-redux'
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}

//reducer
const rootReducer = (state = initialState, action) => {
    switch (action, type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        default: state;
    }
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//dispatch Action
store.dispatch({ type: 'ADD_AGE' })
console.log(store.getState());