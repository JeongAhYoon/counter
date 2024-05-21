import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost, deletePost, updatePost } from "./posts.actions";

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
    let updatedPosts = state.posts.map((post) => {
       return post.id === action.value.id ? action.value : post;  
})
    return {
        ...state,
        posts: updatedPosts
    };
}),
on(deletePost, (state,action) => {
    let updatedPosts = state.posts.filter((post) => {
         return action.value !== post.id
});
    return {
        ...state,
        posts: updatedPosts
    };
})

);


export function postsReducer(state, action) {
return _postsReducer(state, action);
}