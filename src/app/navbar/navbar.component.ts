import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  submitted = false;
  password: string;
  userName: string;
  greeting = "Welcome";
  constructor() {}

  ngOnInit() {}

  onClick(greet: string) {
    if (this.password.length >= 3 && this.userName.length >= 3) {
      this.greeting = greet;
    }
  }
}
