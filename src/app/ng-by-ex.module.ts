import {NgModule, Type} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AllExampleComponent, RootComponent} from "./root.component";
import {ExampleComponent, ExampleDisplayDirective} from "./example.component";
import { exampleList } from "./example-list";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatTabsModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {TitlebarComponent} from "./titlebar.component";

const declarations = [
  RootComponent,
  AllExampleComponent,
  ExampleComponent,
  ExampleDisplayDirective,
  TitlebarComponent
];
const entryComponents = [];

(function() {

  for (const i in exampleList) {
    const exampleDef = exampleList[i];
    if (exampleDef.component) {
      declarations.push(exampleDef.component as Type<any>);
      entryComponents.push(exampleDef.component);
    }
    if (exampleDef.components) {
      for (let compType of exampleDef.components) {
        console.log(compType)
        declarations.push(compType);
        entryComponents.push(compType);
      }
    }
  }

})();

const routes: Routes = [
  { path: "", component: AllExampleComponent },
  { path: "ex/:id", component: ExampleComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
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
