import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { setErrorMessage, setLoadingSpinner } from "./shared.action";


const _sharedReducer = createReducer(
    initialState,
    on(setLoadingSpinner, (state, action) => {
      return {
        ...state,
        showLoading : action.status,
      };  
    }),
    on(setErrorMessage, (state, action) => {
      return {
        ...state,
        message : action.errorMsg,
      };  
    }),
);

export function SharedReducer(state, action) {
    return _sharedReducer(state,action);
}