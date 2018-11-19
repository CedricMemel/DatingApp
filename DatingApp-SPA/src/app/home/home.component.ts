import { Component, OnInit } from "@angular/core";
import { ValueService } from "../_services/value.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  registerMode = false;
  nicknames: any;
  constructor(private values: ValueService) {}

  ngOnInit() {
    this.getValues();
  }

  registerToggle() {
    this.registerMode = true;
  }

  getValues() {
    this.values.getValues().subscribe(
      response => {
        this.nicknames = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = !this.registerMode;
  }
}
