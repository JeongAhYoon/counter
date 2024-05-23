import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CounterModule } from "./counter/counter.module";
import { PostsModule } from "./posts/posts.module";
import { AuthModule } from "./auth/auth.module";

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path:'counter', 
        loadChildren: () => import('./counter/counter.module').then((m) =>CounterModule)
    },
    {
        path:'posts', 
        loadChildren: () => import('./posts/posts.module').then((m) =>PostsModule)
    },
    {
        path:'auth', 
        loadChildren: () => import('./auth/auth.module').then((m) =>AuthModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}