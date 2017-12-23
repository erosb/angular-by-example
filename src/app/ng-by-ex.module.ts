import {NgModule, Type} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AllExampleComponent, RootComponent} from "./root.component";
import {ExampleComponent, ExampleDisplayDirective} from "./example.component";
import { exampleList } from "./example-list";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatTabsModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";

const declarations = [
  RootComponent,
  AllExampleComponent,
  ExampleComponent,
  ExampleDisplayDirective
];
const entryComponents = [];

(function() {

  for (const i in exampleList) {
    const exampleDef = exampleList[i];
    declarations.push(exampleDef.component as Type<any>);
    entryComponents.push(exampleDef.component);
  }

})();

const routes: Routes = [
  { path: "", component: AllExampleComponent },
  { path: "ex/:id", component: ExampleComponent }
];

@NgModule({
  imports: [
    BrowserModule,
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
