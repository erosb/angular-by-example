import {Component, NgModule} from "@angular/core";

@Component({
  selector: "hello-world",
  template: "Ng Component says {{title}}"
})
export class HelloWorldComponent {

  title = "Hello World";

}


@NgModule({ declarations: [HelloWorldComponent]})
export class HelloWorldModule {}
