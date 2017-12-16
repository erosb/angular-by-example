import {Component} from "@angular/core";

import { exampleList } from "./example-list";

@Component({
  selector : "ng-by-ex",
  templateUrl: "./root.component.html"
})
export class RootComponent {

  examples = exampleList;

}
