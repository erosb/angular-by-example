import {AfterViewInit, Component, ComponentFactoryResolver, Directive, Input, ViewChild, ViewContainerRef} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as Prism from "prismjs";
import {ExampleDefinition} from "./example-list";

interface SourceFile {

  fileName: string;

  relPath: string;

  highlightedText: string

}

@Directive({
  selector: "[running-example]"
})
export class ExampleDisplay {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}

const extensionToLanguage = {
  ts: Prism.languages.javascript,
  css: Prism.languages.css,
  html: Prism.languages.html
};


@Component({
  selector: "ng-by-ex-example",
  templateUrl: "./example.component.html"
})
export class ExampleComponent implements AfterViewInit {

  @Input() example: ExampleDefinition;

  @ViewChild(ExampleDisplay) exampleDisplay;

  public source: string;

  public sourceFiles: SourceFile[] = [];

  public ngAfterViewInit(): void {
    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.example.component);
      const viewContainerRef = this.exampleDisplay.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
    });
    this.example.files.forEach(this.fetchSourceFile.bind(this));
  }

  private fetchSourceFile(fileName: string): void {
    this.httpClient.get(fileName, {responseType: "text"})
      .subscribe(resp => {
        const extension =  fileName.substring(fileName.lastIndexOf(".") + 1);
        this.sourceFiles.push({
          relPath: fileName,
          fileName: fileName.substring(fileName.lastIndexOf("/") + 1),
          highlightedText: Prism.highlight(resp, extensionToLanguage[extension])
        });
      });
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private httpClient: HttpClient) {
  }

}
