import { Component, Input, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { SAMPLEQUERY } from "../queries/GraphQueries";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  /* Probably a good idea to 
  move this stuff to the services file. */

  // building our App on Objects
  graphResponse: any = {};
  loading = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: SAMPLEQUERY,
      })
      .valueChanges.subscribe((result: any) => {
        this.graphResponse["counts"] = result.data.counts;
        this.graphResponse["orders"] = result.data.orders;
        this.loading = false;
      });
  }
}
