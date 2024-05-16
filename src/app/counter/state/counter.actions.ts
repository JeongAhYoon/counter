import { createAction, props } from "@ngrx/store";

// action에 유니크한 이름을 준다
export const increment = createAction('increment'); //여기서 data를 pass할수도 있음. 
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const cutomIncrement = createAction(
    'customInCrement', 
    props<{value:number}>() //보내고자 하는 데이터를 보내는 방법.. 여기서는 value만 보낸다. 
);

