
import {Component, NgModule} from "@angular/core";
import {CssSubComponent} from "./css-sub.component";

@Component({
  selector: "ngbex-css",
  template: `
  <div class="token string">styled by global css</div>
  <div [style.backgroundColor]="bgcolor">dynamically styled</div>
  <div class="highlighted">styled with inline css</div>
    <ngbex-css-sub></ngbex-css-sub>
`,
  styles: [`
    .highlighted {
        border: 1px solid orange
    }
  `]
})
export class CssComponent {

  public bgcolor = "lightblue";

}

// --hide--
@NgModule({declarations: [CssComponent, CssSubComponent]})
export class CssModule {}
