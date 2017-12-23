import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Person} from "./parent.component";

@Component({
  selector: "ngbex-child",
  template: `
      <ng-container *ngIf="selectedPersonExists()">
          <div>The email address of {{person.name}} is {{person.email}}</div>
          
          <button (click)="removePerson()">
              Remove person from list
          </button>
          
      </ng-container>
  `
})
export class ChildComponent {

  @Input() person: Person;

  @Output() personRemovalRequested = new EventEmitter<Person>();

  public selectedPersonExists (){
    return this.person != null;
  }

  public removePerson() {
    this.personRemovalRequested.emit(this.person);
  }

}
