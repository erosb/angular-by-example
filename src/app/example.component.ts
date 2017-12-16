import {AfterViewInit, Component, ComponentFactoryResolver, Directive, Input, ViewChild, ViewContainerRef} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as Prism from "prismjs";

@Directive({
  selector: "[running-example]"
})
export class ExampleDisplay {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}


@Component({
  selector: "ng-by-ex-example",
  templateUrl: "./example.component.html"
})
export class ExampleComponent implements AfterViewInit {

  @Input() example;

  @ViewChild(ExampleDisplay) exampleDisplay;

  public source: string;

  public ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.exampleDisplay)

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.example.component);
      const viewContainerRef = this.exampleDisplay.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
    });
    this.httpClient.get("/app/event-handling/event-handling.component.ts", {responseType: "text"})
      .subscribe(resp => {
        this.source = Prism.highlight(resp, Prism.languages.javascript);
      });
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private httpClient: HttpClient) {
  }

}
