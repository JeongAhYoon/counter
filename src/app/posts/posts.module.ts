import { RouterModule, Routes } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddpostComponent } from "./addpost/addpost.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";
import { POST_STATE_NAME } from "./state/posts.selectors";

const routes: Routes =[
{
        path:'', 
        component: PostsListComponent,
        children:[
            {path: 'add', component: AddpostComponent},
            {path: 'edit/:id', component: EditPostComponent}
        ]
    }
];

@NgModule({
    declarations:[
    PostsListComponent,
    AddpostComponent,
    EditPostComponent,
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(POST_STATE_NAME, postsReducer),
    ],
})

export class PostsModule{

}