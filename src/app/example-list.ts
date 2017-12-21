import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {EventHandlingComponent} from "./event-handling/event-handling.component";
import {Type} from "@angular/core";
import {TemplateWithHtmlComponent} from "./separate-template-file/template-with-html.component";

export interface ExampleDefinition {

  title: string,
  explanation?: string
  files: string[],
  component: Type<any>
}

export const exampleList: ExampleDefinition[] = [
  {
    title: "Hello world !",
    files: ["app/hello-world/hello-world.component.ts"],
    component: HelloWorldComponent
  },
  {
    title: "Event handling",
    explanation: `Event handlers are set up with (braced attributes)`,
    files: ["app/event-handling/event-handling.component.ts"],
    component: EventHandlingComponent
  },
  {
    title: "Separate template file",
    files: ["app/separate-template-file/template-with-html.component.ts", "app/separate-template-file/template-with-html.html", "app/separate-template-file/template-with-html.css"],
    component: TemplateWithHtmlComponent,
    explanation: `The template path should be relative to the location of the component. By convention its filename is the same as the name of the component file, just not .ts but .html
    
    CSS files should be listed in the styleUrls array.`
  }
];
