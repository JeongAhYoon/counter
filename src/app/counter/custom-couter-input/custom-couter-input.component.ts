import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, cutomIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-couter-input',
  templateUrl: './custom-couter-input.component.html',
  styleUrls: ['./custom-couter-input.component.css']
})
export class CustomCouterInputComponent implements OnInit {

  public userNumber : number;
  public authorName : string;
async: any;
  constructor(private store:Store<{counterr: CounterState}>) { }



  ngOnInit(): void {
    this.store.select('counterr').subscribe( function(data) {
        this.authorName = data.author;    
        console.log(this.authorName);
    }.bind(this));
  }

  example(){
    return 0;
  }

  public onAdd() {
    this.store.dispatch(cutomIncrement({value : + this.userNumber}));
    console.log(this.userNumber);
   // this.userNumber = null; 
  }

public onChangeText() {
this.store.dispatch(changeName({value:'kelly Student'}));
}
}
