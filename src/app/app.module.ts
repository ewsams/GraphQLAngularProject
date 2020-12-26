import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApolloBoostModule, ApolloBoost } from "apollo-angular-boost";
import { FormsModule } from "@angular/forms";
// App Components
import { AppRoutingModule, routingComponents } from "./app-routing.module";

//App Services
import { GraphService } from "./services/graph-service.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { FrontendAuthenticationComponent } from "./frontend-authentication/frontend-authentication.component";

@NgModule({
  declarations: [
    routingComponents,
    NavbarComponent,
    FrontendAuthenticationComponent,
  ],
  imports: [
    AppRoutingModule,
    ApolloBoostModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GraphService],
  bootstrap: [routingComponents],
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
