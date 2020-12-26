import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LandAvailableComponent } from "./land-available/land-available.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "land", component: LandAvailableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents =
[AppComponent,LandAvailableComponent,HomeComponent]
