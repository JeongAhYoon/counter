import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
// export class CounterOutputComponent implements OnInit {
//  @Input() outputCounter; 

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class CounterOutputComponent implements OnInit {

 public counter;
  constructor(private store: Store<{counterr:State}>) { }

  ngOnInit(): void {
    this.store.select('counterr').subscribe((data)=>{
      this.counter = data.counter;
     });
  }

}