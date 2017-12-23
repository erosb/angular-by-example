import {Component, NgModule} from "@angular/core";

export interface Person {

  name: string;
  email: string;

}

@Component({
  selector: "ngbex-ngfor",
  template: `
      <ul>
          <li *ngFor="let person of people" (click)="showEmail(person)">
              {{person.name}}
          </li>
      </ul>
      <span class="message" *ngIf="selectedPerson != null">
          The email address of {{selectedPerson.name}} is {{selectedPerson.email}}.
      </span>
  `
})
export class NgForComponent {

  public selectedPerson: Person = null;

  public people: Person[] = [
    {name: "Alice", email: "alice@example.org"},
    {name: "Bob", email: "bob@example.org"}
  ];

  public showEmail(person:  Person) {
    this.selectedPerson = person;
  }

}


// --hide--
@NgModule({declarations : [NgForComponent]})
export class NgForModule {

}
