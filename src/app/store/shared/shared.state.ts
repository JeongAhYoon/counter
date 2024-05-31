export interface SharedState {
    showLoading: boolean;
    message: string
}

export const initialState: SharedState = {
    showLoading : false,
    message: ''
}
