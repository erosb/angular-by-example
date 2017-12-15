import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./root.component";
import {ExampleComponent, ExampleDisplay} from "./example.component";
import {HelloWorldComponent} from "./hello-world/hello-world.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent,
    ExampleComponent,
    ExampleDisplay,
    HelloWorldComponent
  ],
  entryComponents: [HelloWorldComponent],
  providers: [],
  bootstrap: [RootComponent]
})
export class NgByExModule { }
