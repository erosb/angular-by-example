import {Component} from "@angular/core";

@Component({
  selector: "event-handling",
  template: `
  <div>{{message}}</div>
    <a (click)="buttonClicked()">Click me!</a>
  `
})
export class EventHandlingComponent {

  public message = "";

  public buttonClicked(): void {
    this.message = "clicked";
  }



}
