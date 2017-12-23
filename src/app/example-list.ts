import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {EventHandlingComponent} from "./event-handling/event-handling.component";
import {Type} from "@angular/core";
import {TemplateWithHtmlComponent} from "./separate-template-file/template-with-html.component";
import {TemplateControlStructuresComponent} from "./ngif/ngif.component";
import {NgForComponent} from "./ngfor/ngfor.component";

export interface ExampleDefinition {
  id: string,
  title: string,
  explanation?: string
  files: string[],
  component: Type<any>
}

export const exampleList: ExampleDefinition[] = [
  {
    id: "hello-world",
    title: "Hello world !",
    files: ["hello-world.component.ts"],
    component: HelloWorldComponent,
    explanation: `Welcome to Angular By Example. This site is a collection of sample Angular 2+ code. It is not meant to be a complete
Angular tutorial, but it can serve as a good resource for recalling syntax or API tricks. On the other hand we don't go deeply into 
topics like what an SPA is or what dependency injection is.

It can serve as a reference or cheatsheet for people who understand the concepts of Angular, but don't have sufficient hands-on
experience with it yet.

`
  },
  {
    id: "event-handling",
    title: "Event handling",
    files: ["event-handling.component.ts"],
    component: EventHandlingComponent,
    explanation: `Event handlers are set up with (braced attributes). The event handler method should be invoked explicitly in the attribute value.
It is \`buttonClicked()\` instead of declaratively \`buttonClicked\`.
    
The event object can be passed along to the method using method(event).`
  },
  {
    id: "separate-template-file",
    title: "Separate template file",
    files: ["template-with-html.component.ts", "template-with-html.html", "template-with-html.css"],
    component: TemplateWithHtmlComponent,
    explanation: `The template path should be relative to the location of the component. By convention its filename is the same as the name of the component file, just not .ts but .html
    
CSS files should be listed in the styleUrls array.`
  },
  {
    id: "ngif",
    title: "Control structures in templates: *ngIf",
    files: ["ngif.component.ts", "ngif.component.html"],
    component: TemplateControlStructuresComponent,
    explanation: `Conditional template fragments can be defined using the \`*ngIf\` structural directive. The predicate can be any expression,
and can use any public members of the component class.

The else clause (if any) is not really a clause, but a reference to a local HTML element.`
  },
  {
    id: "ngfor",
    title: "Control structures in templates: *ngFor",
    files: ["ngfor.component.ts"],
    component: NgForComponent,
    explanation: `The \`*ngFor\` structural directive can be used to loop through arrays or objects. The syntax is \`let\` itemVarName \`of \` array.
    
It displays the element the \`*ngFor\` is bound to for each array items. If you don't want to have any specific wrapper element then you can wrap
with \`ng-container\` element (which won't appear in the DOM, only its children)`
  }
];
