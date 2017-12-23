import {Component, NgModule} from "@angular/core";

export interface Person {
  name: string;
  email: string;
}

@Component({
  selector: "ngbex-parent",
  template: `
<ul>
    <li *ngFor="let person of persons" (click)="selectPerson(person)">
        {{person.name}}
    </li>
    <ngbex-child
            [person]="selectedPerson"
            (personRemovalRequested)="removePerson($event)">
    </ngbex-child>
</ul>
  `
})
export class ParentComponent {

  public selectedPerson: Person = null;

  public persons: Person[] = [
    { name: "Alice", email: "alice@example.org" },
    { name: "Bob", email: "bob@example.org" }
  ];

  public selectPerson(person: Person) {
    this.selectedPerson = person;
  }

  public removePerson(person: Person) {
    this.persons.splice(this.persons.indexOf(person), 1);
    this.selectedPerson = null;
  }


}
// --hide--
@NgModule({declarations: [ParentComponent]})
export class ComponentInteractionModule {}
