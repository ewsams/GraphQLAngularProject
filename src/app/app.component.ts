import { Component,OnInit } from "@angular/core";
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
  graphResponse: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.graphResponse = this.apollo
      .watchQuery({
        query: sampleQuery,
      })
      .valueChanges.pipe(map((result: any) => result.data));
    console.log(this.graphResponse);
  }
}
