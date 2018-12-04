import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap";
import {
  ErrorInterceptor,
  ErrorInterceptorProvider
} from "./_services/error.interceptor";
import { AuthService } from "./_services/Auth.service";
import { AlertifyService } from "./_services/alertify.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { AuthGuard } from "./_guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [AuthService,
  ErrorInterceptorProvider,
  AlertifyService,
  AuthGuard]
})
export class AppModule {}
