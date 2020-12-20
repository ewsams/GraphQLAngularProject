import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApolloBoostModule, ApolloBoost } from "apollo-angular-boost";
// App Components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//App Services
import { GraphService } from "./services/graph-service.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    ApolloBoostModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GraphService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(boost: ApolloBoost) {
    boost.create({
      uri: "https://api.thegraph.com/subgraphs/name/decentraland/marketplace",
      // Don't forget that you can actually pass http Headers
      // directly here with the option "httpOptions"
    });
  }
}
