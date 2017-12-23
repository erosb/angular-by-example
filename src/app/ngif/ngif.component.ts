

import {Component, NgModule} from "@angular/core";

@Component({
  selector: "ngbex-template-control-structures",
  templateUrl: "./ngif.component.html"
})
export class TemplateControlStructuresComponent {

  public showMessage = true;

  public hideMessage(): void {
    this.showMessage = false;
  }

}

// --hide--
@NgModule({declarations: [TemplateControlStructuresComponent]})
export class TemplateControlStructuresModule {}
