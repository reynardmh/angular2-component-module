import { Component } from '@angular/core';

@Component({
  selector: 'app-cool',
  template: `<h1>Hi from Cool component!</h1>
    <button (click)="clicked()">Agree</button>`
})
export class CoolComponent {

  clicked(): void {
    alert('Thanks!');
  }
}
