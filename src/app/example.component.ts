import {AfterViewInit, Component, ComponentFactoryResolver, Directive, Input, ViewChild, ViewContainerRef} from "@angular/core";

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
  <hr>
  `
})
export class ExampleComponent implements AfterViewInit {

  @Input() example;

  @ViewChild(ExampleDisplay) exampleDisplay;

  public ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.exampleDisplay)

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.example.component);
      const viewContainerRef = this.exampleDisplay.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
    });
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

}
