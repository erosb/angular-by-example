import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {EventHandlingComponent} from "./event-handling/event-handling.component";
import {Type} from "@angular/core";

export interface ExampleDefinition {

  title: string,
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
    files: ["app/event-handling/event-handling.component.ts"],
    component: EventHandlingComponent
  }
];
