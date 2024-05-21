import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost, updatePost } from "./posts.actions";

const _postsReducer = createReducer( 
initialState,
on(addPost, (state, action) => {
    let post = {...action.value};
    post.id = (state.posts.length +1).toString();
    return {
        ...state,
        posts:[...state.posts, post]
    };
}),
on(updatePost, (state, action) => {
    let post = {...action.value};
    let updatedPosts = {...state.posts};
    updatedPosts[+post.id-1] = post;
    return {
        ...state,
        posts: [...updatedPosts]
    }
})
);


export function postsReducer(state, action) {
return _postsReducer(state, action);
}