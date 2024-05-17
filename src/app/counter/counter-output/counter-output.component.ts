import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

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
  constructor(private store: Store<{counterr:CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counterr').subscribe((data)=>{
      this.counter = data.counter;
     });
  }

}

// export class CounterOutputComponent implements OnInit, OnDestroy {

//  public counter : number;
//  public counterSubscription : Subscription;
//  public counterState$ : Observable<CounterState>;
//   constructor(private store: Store<{counterr:CounterState}>) { }

//   ngOnInit(): void {
//     this.counterSubscription = this.store.select('counterr').subscribe((data)=>{
//       this.counter = data.counter;
//      });

//      this.counterState$ = this.store.select('counterr');
// console.log(this.counterState$);


//   }

//     ngOnDestroy(): void {
//     if(this.counterSubscription) {
//       this.counterSubscription.unsubscribe();
//     }
//   }


// }