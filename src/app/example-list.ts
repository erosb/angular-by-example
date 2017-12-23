import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {EventHandlingComponent} from "./event-handling/event-handling.component";
import {Type} from "@angular/core";
import {TemplateWithHtmlComponent} from "./separate-template-file/template-with-html.component";
import {TemplateControlStructuresComponent} from "./ngif/ngif.component";
import {NgForComponent} from "./ngfor/ngfor.component";
import {CssComponent} from "./css/css.component";
import {CssSubComponent} from "./css/css-sub.component";
import {ParentComponent} from "./component-interaction/parent.component";
import {ChildComponent} from "./component-interaction/child.component";

export interface ExampleDefinition {
  id: string,
  title: string,
  explanation?: string
  files: string[],
  component?: Type<any>,
  components?: Type<any>[]
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
  },
  {
    id: "css",
    title: "Working with CSS",
    files: ["css.component.ts", "../../styles.css", "css-sub.component.ts", "css-sub.component.css", "css-sub.component.sass"],
    component: CssComponent,
    components: [CssComponent, CssSubComponent],
    explanation: `There are several ways of adding css to an Angular component:
 * the \`src/styles.css\` can contain global CSS declarations which apply to the entire page
   - they can be CSS files coming from node depencencies. Dependency directories should be references using the \`~dependency-name\` syntax instead of \`node_modules/dependency-name\`
   - they can be external css files referenced by absolute URL
   - they can be CSS filed referenced by path, relative to \`src/\`
 * the components can have inline CSS styling, using the \`styles\`, but these stylings don't apply to sub-components.
 * CSS can be put into a separate file, using the \`styleUrls\` component attribute, which should be an array containing css file paths by reference
 * \`styleUrls\` also supports CSS preprocessors (like SASS and LESS), you just have to name the file with a different extension (\`.sass\` in this example).
 * if you want to have a dynamic CSS value which is bound to a component field then you have to use the \`[style.cssProperty]="componentFieldName"\` syntax in the template   
    `
  },
  {
    id: "component-interaction",
    title: "Interaction between components",
    files: ["parent.component.ts", "child.component.ts"],
    component: ParentComponent,
    components: [ParentComponent, ChildComponent],
    explanation: `Angular components behave similarly to usual HTML elements: parent components can pass parameters to their children
in the form of attributes, and they can also listen to custom events emitted by the children.

Parameters can be passed by
 * decorating a public field with \`@Input()\` in the child component
 * in the parent template binding the attribute \`[fieldName]\` to the parameter value 
 
_Note: the attribute name and the field name can be different if you use the syntax \`@Input("attributeName")\` for decorating the field_

Components can signal events to their parents by
 * having an \`EventEmitter\` type field decorated with \`@Output()\`. The generic type parameter of \`EventEmitter\` is the type of the event argument, handled by the parent.
 * in the parent template, listening to the event by setting an event handler method in the parent component using the \`(fieldName)="eventHandler($event)"\` attribute 
`
  }
];
