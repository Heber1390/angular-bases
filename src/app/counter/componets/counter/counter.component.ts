import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3> Contador: {{ counter }} </h3>
<button (click)="increaseBy(+1) " > +1 </button>
<button (click)="resetCounter()" >Reset </button>
<button (click)="increaseBy(-1) " > -1 </button>
  `
})

export class CounterComponet  {
  public  counter: number = 10;

  //metodo para incrementar y decrementar el valor
  public increaseBy ( value: number  ): void {
    this. counter += value;
  }

  //Metodo para poner el contador en 10
  resetCounter() {
    this. counter = 10;
  }

  constructor() { }

}
