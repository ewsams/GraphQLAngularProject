import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-frontend-authentication",
  templateUrl: "./frontend-authentication.component.html",
  styleUrls: ["./frontend-authentication.component.css"],
})
export class FrontendAuthenticationComponent implements OnInit {
  @Input() userName: string;
  @Input() password: string;
  @Output()
  isAuthenticated: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onAuthenticatedClick() {
    if (this.userName === "admin" && this.password === "admin") {
      this.isAuthenticated.emit("Logged In");
    } else {
      this.isAuthenticated.emit("Logged Out");
    }
  }
}
