import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, cutomIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { getAuthorState } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-couter-input',
  templateUrl: './custom-couter-input.component.html',
  styleUrls: ['./custom-couter-input.component.css']
})
// export class CustomCouterInputComponent implements OnInit {

//   public userNumber : number;
//   public authorName : string;
// async: any;
//   constructor(private store:Store<{counterr: CounterState}>) { }



//   ngOnInit(): void {
//     this.store.select(getAuthorState).subscribe( function(data) {
//       console.log("getAuthorState is called");
//         this.authorName = data;    
     
//     }.bind(this));
//   }

//   example(){
//     return 0;
//   }

//   public onAdd() {
//     this.store.dispatch(cutomIncrement({value : + this.userNumber}));
//     console.log(this.userNumber);
//     this.userNumber = null; 
//   }

// public onChangeText() {
// this.store.dispatch(changeName({value:'kelly Student'}));
// }
// }

export class CustomCouterInputComponent implements OnInit {

  public userNumber : number;
  public authorName$ : Observable<string>;
async: any;
  constructor(private store:Store<{counterr: CounterState}>) { }



  ngOnInit(): void {
    this.authorName$ = this.store.select(getAuthorState);
    };
  
  public onAdd() {

    this.store.dispatch(cutomIncrement({value : + this.userNumber}));
    console.log(this.userNumber);
    this.userNumber = null; 
  }

public onChangeText() {
this.store.dispatch(changeName({value:'kelly Student'}));
}
}