import {NgModule, Type} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./root.component";
import {ExampleComponent, ExampleDisplay} from "./example.component";
import { exampleList } from "./example-list";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatTabsModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const declarations = [
  RootComponent,
  ExampleComponent,
  ExampleDisplay
];
const entryComponents = [];

(function() {

  for (let i in exampleList) {
    const exampleDef = exampleList[i];
    declarations.push(exampleDef.component as Type<any>);
    entryComponents.push(exampleDef.component);
  }

})();


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule
  ],
  declarations,
  entryComponents,
  providers: [],
  bootstrap: [RootComponent]
})
export class NgByExModule { }
