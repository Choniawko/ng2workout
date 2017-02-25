import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user/user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserResolve } from './user/user-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    UserListComponent,
    UserComponent,
    UserEditComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    UserResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
