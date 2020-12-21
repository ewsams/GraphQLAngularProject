import { Component } from "@angular/core";
import { Apollo } from "apollo-angular";
import { sampleQuery } from "./queries/GraphQueries";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  /* Probably a good idea to 
  move this stuff to the services file. */

  // building our App on Objects
  graphResponse = {};
  loading: boolean = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: sampleQuery,
      })
      .valueChanges.subscribe((result: any) => {
        this.graphResponse["counts"] = result.data.counts;
        this.graphResponse["orders"] = result.data.orders;
        this.loading = false;
      });
  }
}
