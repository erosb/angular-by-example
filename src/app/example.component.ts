import {AfterViewInit, Component, ComponentFactoryResolver, Directive, Input, ViewChild, ViewContainerRef} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as Prism from "prismjs";
import {ExampleDefinition, exampleList} from "./example-list";
import * as md from "markdown-it";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

interface SourceFile {

  fileName: string;

  relPath: string;

  highlightedText: string;

}

@Directive({
  selector: "[ngbexRunningExample]"
})
export class ExampleDisplayDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}

const extensionToLanguage = {
  ts: Prism.languages.javascript,
  css: Prism.languages.css,
  html: Prism.languages.html
};


@Component({
  selector: "ngbex-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.css"]
})
export class ExampleComponent implements AfterViewInit {

  @Input() example: ExampleDefinition;

  explanation: string;

  @ViewChild(ExampleDisplayDirective) exampleDisplay;

  public source: string;

  public sourceFiles: SourceFile[] = [];

  public ngAfterViewInit(): void {
    if (this.example == null) {
      const exampleId = this.route.snapshot.paramMap.get("id");
      for (const i in exampleList) {
        const exDef = exampleList[i];
        if (exDef.id === exampleId) {
          this.example = exDef;
          break;
        }
      }
    }
    this.loadExampleContents();
  }

  private loadExampleContents() {
    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.example.component);
      setTimeout(() => {
        this.explanation = md({}).render(this.example.explanation);
        const viewContainerRef = this.exampleDisplay.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
      });
    });
    this.example.files.forEach(this.fetchSourceFile.bind(this));
  }

  private fetchSourceFile(fileName: string): void {
    this.httpClient.get("/app/" + this.example.id + "/" + fileName, {responseType: "text"})
      .subscribe(resp => {
        const extension =  fileName.substring(fileName.lastIndexOf(".") + 1);
        const displayableSource = this.trimHiddenPart(resp);
        this.sourceFiles.push({
          relPath: fileName,
          fileName: fileName.substring(fileName.lastIndexOf("/") + 1),
          highlightedText: Prism.highlight(displayableSource, extensionToLanguage[extension])
        });
      });
  }

  private trimHiddenPart(completeSourceContent: string) {
    const lines = completeSourceContent.split("\n");
    let rval = "";
    const separatorLinePattern = /^\/\/\s*--\s*hide\s*--\s*$/;
    for (const i in lines) {
      const line = lines[i];
      if (line.match(separatorLinePattern) !== null) {
        break;
      }
      rval += line + "\n";
    }
    return rval;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private httpClient: HttpClient,
              private route: ActivatedRoute) {
  }

}
