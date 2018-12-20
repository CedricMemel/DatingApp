import { Injectable } from "@angular/core";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { Router, Resolve } from "@angular/router";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../_services/Auth.service";

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}

  resolve(): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertify.error("Problem retrieving your data");
        this.router.navigate(["/members"]);
        return of(null);
      })
    );
  }
}
