import {Component} from "@angular/core";

import { exampleList } from "./example-list";

@Component({
  selector : "ng-by-ex",
  templateUrl: "./root.component.html"
})
export class RootComponent {

}

@Component({
  selector: "ngbex-all-examples",
  template: `<ng-by-ex-example *ngFor="let example of examples" [example]="example"></ng-by-ex-example>`
})
export class AllExampleComponent {

  examples = exampleList;

}
