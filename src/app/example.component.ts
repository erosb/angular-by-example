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
  templateUrl: "./example.component.html",
  styles: [`
      mat-card-title {
          cursor: pointer
      }
      mat-card-title:hover {
          text-decoration: underline;
      }
      .row-cnt {
          display: flex;
          justify-content: center;
      }

      .row-cnt > div {
      }

      .cnt-example-card {
          padding-bottom: 1.8em;
      }

      .cnt-example-card mat-card {
          background-color: #dec888;
      }
      
      mat-tab-group {
          min-width: 40%;
      }

      .cnt-demo {
          padding-right: 6em;
          padding-top: 1em;
          background-color: #dec999;
          min-width: 20%;
          line-height: 180%;
      }

      .cnt-explanation {
          display: flex;
          flex-direction: column;
          justify-content: center;
          /*min-width: 25%;*/
          font-family: Kalam, Pangolin;
          font-size: 120%;
          padding: 3em;
          border: 3px green dashed;
      }
  `]
})
export class ExampleComponent implements AfterViewInit {

  @Input() example: ExampleDefinition;

  explanation: string;

  @ViewChild(ExampleDisplay) exampleDisplay;

  public source: string;

  public sourceFiles: SourceFile[] = [];

  public ngAfterViewInit(): void {
    if (this.example == null) {
      const exampleId = this.route.snapshot.paramMap.get("id");
      for (let i in exampleList) {
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
      setTimeout(()=> {
      const viewContainerRef = this.exampleDisplay.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);

      this.explanation = md({}).render(this.example.explanation);
      })
    });
    this.example.files.forEach(this.fetchSourceFile.bind(this));
  }

  private fetchSourceFile(fileName: string): void {
    this.httpClient.get("/app/" + this.example.id + "/" + fileName, {responseType: "text"})
      .subscribe(resp => {
        const extension =  fileName.substring(fileName.lastIndexOf(".") + 1);
        this.sourceFiles.push({
          relPath: fileName,
          fileName: fileName.substring(fileName.lastIndexOf("/") + 1),
          highlightedText: Prism.highlight(resp, extensionToLanguage[extension])
        });
      });
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private httpClient: HttpClient,
              private route: ActivatedRoute) {
  }

}
