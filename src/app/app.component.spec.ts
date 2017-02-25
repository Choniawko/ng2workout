import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { MaterialModule } from '@angular/material';
import { UserComponent } from './user/user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserResolve } from './user/user-resolve.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        ProfileComponent,
        UserListComponent,
        UserComponent,
        UserEditComponent
      ],
      imports: [
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        UserResolve
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
