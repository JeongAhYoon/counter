import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
// export class CounterButtonsComponent implements OnInit {
//  @Output() increment = new EventEmitter<void>();
//  @Output() decrement = new EventEmitter<void>();
//  @Output() reset = new EventEmitter<void>();
//   constructor() { }

//   ngOnInit(): void {
//   }
//   onIncrement() {
//     this.increment.emit();
//   }
//   onDecrement() {
//     this.decrement.emit();
//   }
//   onReset() {
//     this.reset.emit();
//   }
// }

export class CounterButtonsComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  }
  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
   this.store.dispatch(decrement());
  }
  onReset() {
   this.store.dispatch(reset());
  }
}