

import {Component, NgModule} from "@angular/core";

@Component({
  selector: "template-control-structures",
  templateUrl: "./template-control-structures.component.html"
})
export class TemplateControlStructuresComponent {

  showMessage = true;

}

// --hide--
@NgModule({declarations: [TemplateControlStructuresComponent]})
export class TemplateControlStructuresModule {}
