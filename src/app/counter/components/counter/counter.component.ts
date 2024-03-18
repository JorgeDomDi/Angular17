import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter:number=0;

  incrementBy(value:number){
    this.counter=this.counter+value;
  }
  reset(){
    this.counter=0;
  }
}
