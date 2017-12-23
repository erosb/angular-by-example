import {Component, NgModule} from "@angular/core";

@Component({
  selector: "ngbex-hello-world",
  template: `There are multiple ways in angular to print text
  <ul>
      <li>{{firstLine}}</li>
      <li [innerText]="secondLine"></li>
      <li [innerHTML]="thirdLine"></li>
  </ul>

  `
})
export class HelloWorldComponent {

  firstLine = "The simplest is using double curly braces";

  secondLine = "You can also output using the [innerText] attribute";

  thirdLine = "the [innerHTML] value <b>won't be escaped</b>";


}


// --hide--
@NgModule({ declarations: [HelloWorldComponent]})
export class HelloWorldModule {}
