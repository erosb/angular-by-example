import {Component} from "@angular/core";

@Component({
  selector: "ngbex-titlebar",
  template: `
      <div class="cnt-titlebar">
          <input type="text" placeholder="Search..." class="txt-search" size="30"/>
      </div>`,
  styles: [`
      .cnt-titlebar {
          min-height: 1.8em;
          background-color: #38120a/*#4e1c11 #46201a*/;
          line-height: 1.8em;
          padding-top: 0.5em;
          padding-bottom: 0.5em;
          padding-left: 1.5em;
      }

      input.txt-search {
        border-radius: 5px;
          border: 1px solid black;
          padding: 6px;
          background-color: #f3e1d4;
      }

  `]
})
export class TitlebarComponent {

}
