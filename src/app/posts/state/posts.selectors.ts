import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPost = createSelector(getPostsState, (state) =>
{
    return state.posts;
})

export const getPostById = createSelector(getPostsState,(state, props) =>{
    
    return state.posts.find(post => { return post.id === props.id});
})