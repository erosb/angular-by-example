import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {EventHandlingComponent} from "./event-handling/event-handling.component";

export const exampleList = [
  {
    title: "Hello world !",
    files: ["example.component.ts"],
    component: HelloWorldComponent
  },
  {
    title: "Event handling",
    files: ["app/event-handling/event-handling.component.ts"],
    component: EventHandlingComponent
  }
];
