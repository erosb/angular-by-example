import {Component} from "@angular/core";

import { exampleList } from "./example-list";

@Component({
  selector : "ngbex-root",
  templateUrl: "./root.component.html"
})
export class RootComponent {

}

@Component({
  selector: "ngbex-all-examples",
  template: `
      <ngbex-example *ngFor="let example of examples" [example]="example"></ngbex-example>`
})
export class AllExampleComponent {

  examples = exampleList;

}
