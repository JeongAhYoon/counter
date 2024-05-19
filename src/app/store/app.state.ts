import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";

export interface AppState {
    counter: CounterState,
    posts: PostsState
}

export const AppReducer = {
    counterr: counterReducer,
    posts: postsReducer 
}