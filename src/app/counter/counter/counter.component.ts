import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  number = 2;
  constructor() { }

  ngOnInit(): void {
  }
  increment() {
    console.log("object")
    this.number = this.number+1;
  }
  decrement(){
  this.number = this.number-1;
  }
}