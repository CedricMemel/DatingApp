import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/Auth.service";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() nicknamesFromHome: any;
  @Output() cancelRegister: EventEmitter<any> = new EventEmitter();

  model: any = {};
  constructor(private auth: AuthService, private alertService: AlertifyService) {}

  ngOnInit() {}

  register() {
    this.auth.register(this.model).subscribe(
      () => {
        this.alertService.success("registered successfuly");
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
