import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { CommonModule } from "@angular/common";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CustomCouterInputComponent } from "./custom-couter-input/custom-couter-input.component";
import { FormsModule } from "@angular/forms";
import { counterReducer } from "./state/counter.reducer";
import { StoreModule } from "@ngrx/store";
import { COUNTER_STATE_NAME } from "./state/counter.selectors";


const routes: Routes =[
    {
        path:'', 
        component: CounterComponent
    }
];

@NgModule({
    declarations:[
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCouterInputComponent
],
    imports:[
        CommonModule, 
        RouterModule.forChild(routes),
        FormsModule,
        StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer),
    ],
})
export class CounterModule {

}