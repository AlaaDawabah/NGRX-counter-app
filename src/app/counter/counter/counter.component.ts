import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { setCount } from './state/counter.action';
import * as CounterActions from "./state/counter.action";
import { getCount } from './state/counter.selectors';
import { CounterState } from './state/counter.reducer';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number;
  constructor(private store: Store<CounterState>) {
  }

  ngOnInit(): void {
    this.store.select(getCount).subscribe(count => this.count = count)
  }
  increment() {
    this.store.dispatch(CounterActions.setCount({ count: this.count + 1 }));
  }
  decrement() {
    this.store.dispatch(CounterActions.setCount({ count: this.count - 1 }));
  }
}
