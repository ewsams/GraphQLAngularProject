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

  graphResponse: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.graphResponse = this.apollo
      .watchQuery({
        query: sampleQuery,
      })
      .valueChanges.pipe(
        map((result: any) => {
          console.log(result.data.counts);
          return result.data.counts;
        })
      );
  }
}
