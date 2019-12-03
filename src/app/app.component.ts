import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
  styles: [
    `
      html,
      body,
      .map-container {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        position: relative;
      }
    `
  ]
})
export class AppComponent {
  title = "cesium-ng-cesium";
}
