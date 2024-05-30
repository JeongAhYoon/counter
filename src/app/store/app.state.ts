
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selectors";
import { SharedState } from "./shared/shared.state";

export interface AppState {
    [SHARED_STATE_NAME] : SharedState
}

export const AppReducer = {
   [SHARED_STATE_NAME] : SharedReducer 
}