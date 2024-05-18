import { createReducer, on } from "@ngrx/store";
import { CounterState, initialState } from "./counter.state";
import { changeName, cutomIncrement, decrement, increment, reset } from "./counter.actions";


const _counterReducer = createReducer(
    initialState, 
    //on사용시 second parameter는 state
    on(increment, (state:CounterState):CounterState => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state:CounterState):CounterState => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state:CounterState):CounterState =>{
        return {
            ...state,
            counter: 0,
        };
    }),
    on(cutomIncrement, (state:CounterState, action):CounterState =>{
        return {
            ...state,
            counter: state.counter + action.value
        };
    }),
    on(changeName, (state:CounterState, action):CounterState =>{
        return {
            ...state,
            author: action.value
        };
    }),
);


export function counterReducer(state, action) {
    return _counterReducer(state, action);
}