import { createReducer, on } from "@ngrx/store";
import { State, initialState } from "./counter.state";
import { cutomIncrement, decrement, increment, reset } from "./counter.actions";
import { Action } from "rxjs/internal/scheduler/Action";


const _counterReducer = createReducer(
    initialState, 
    //on사용시 second parameter는 state
    on(increment, (state:State):State => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state:State):State => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state:State):State =>{
        return {
            ...state,
            counter: 0,
        };
    }),
    on(cutomIncrement, (state:State, action):State =>{
        console.log(action);
        return {
            ...state,
            counter: state.counter + action.value
        };
    })
);


export function counterReducer(state, action) {
    return _counterReducer(state, action);
}