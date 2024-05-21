import { RouterModule, Routes } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddpostComponent } from "./addpost/addpost.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
        ReactiveFormsModule
    ]
})

export class PostsModule{

}