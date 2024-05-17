import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cutomIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-couter-input',
  templateUrl: './custom-couter-input.component.html',
  styleUrls: ['./custom-couter-input.component.css']
})
export class CustomCouterInputComponent implements OnInit {

 public test : string;

  public userNumber : number;
  constructor(private store:Store<{conterr: {State}}>) { }



  ngOnInit(): void {
  }

  public test1s():number {
    return 0;

  }
  public test2() {

    
  }
    
  public onAdd() {
    this.store.dispatch(cutomIncrement({value : +this.userNumber}));
    console.log(this.userNumber);
   // this.userNumber = null; 
  }





}
