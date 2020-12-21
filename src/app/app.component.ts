import { Component } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { sampleQuery } from "./queries/GraphQueries";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  /* Probably a good idea to 
  move this stuff to the services file. */

  graphResponse: {};
  loading: boolean = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: sampleQuery,
      })
      .valueChanges.subscribe((result: any) => {
        const responseObject = {
          counts: result.data.counts,
          orders: result.data.orders,
        };
        console.log(responseObject);
        this.graphResponse = responseObject;
        this.loading = false;
      });
  }
}
