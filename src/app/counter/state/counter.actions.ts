import { createAction } from "@ngrx/store";

// action에 유니크한 이름을 준다
export const increment = createAction('increment'); //여기서 data를 pass할수도 있음. 
export const decrement = createAction('decrement');
export const reset = createAction('reset');

