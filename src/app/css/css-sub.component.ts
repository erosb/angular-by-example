
import {Component} from "@angular/core";

@Component({
  selector: "ngbex-css-sub",
  template: `sub-component with maybe some CSS
  <div class="highlighted">but no inherited highlight</div>
  <div class="highlighted-by-separate-css-file">separate CSS files can be used</div>
  <div class="preprocessors-are-supported">preprocessors are supported</div>
`,
  styleUrls: ["./css-sub.component.css", "./css-sub.component.sass"]
})
export class CssSubComponent {
}
