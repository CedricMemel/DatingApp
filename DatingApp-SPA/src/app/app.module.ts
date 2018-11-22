import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/Auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import {
  ErrorInterceptor,
  ErrorInterceptorProvider
} from "./_services/error.interceptor";

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent],

  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent],

  providers: [AuthService, ErrorInterceptorProvider]
})
export class AppModule {}
