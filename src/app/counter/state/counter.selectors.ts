import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";


//<>안에 선택하고자 하는 feature을 선택한다
//()안에는 store의 종류를 넣을수가 있다. 'app module"에서 설정한..
export const COUNTER_STATE_NAME = 'counterr';
const getCounterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export const getAuthorState = createSelector(getCounterState, (state) =>{
    return state.author;
});