import {AfterViewInit, Component, ComponentFactoryResolver, Directive, Input, ViewChild, ViewContainerRef} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Directive({
  selector: "[running-example]"
})
export class ExampleDisplay {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}


@Component({
  selector: "ng-by-ex-example",
  template: `<h2>{{example.title}}</h2>
  <ng-template running-example></ng-template>
  <code>
      <pre>{{source}}</pre>
  </code>
  <hr>
  `
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
      .subscribe(resp => this.source = resp);
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private httpClient: HttpClient) {
  }

}
