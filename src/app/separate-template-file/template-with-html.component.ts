
import {Component, NgModule} from "@angular/core";

@Component({
  selector: "ngbex-template-with-html",
  templateUrl: "./template-with-html.html",
  styleUrls: ["./template-with-html.css"]
})
export class TemplateWithHtmlComponent {}


// --hide--
@NgModule({declarations: [TemplateWithHtmlComponent]})
export class TemplateWithHtmlModule {}
