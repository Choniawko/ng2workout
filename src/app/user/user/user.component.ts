import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userId;
  user: User;

  constructor(
    private _userService: UserService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getUser(this.userId);
  }

  getUser = (id): void => {
    this._userService.getUser(id)
      .subscribe(
        (data: User) => {
          this.user = data;
        });
  }

  editUser(id) {
    this._router.navigate(['user/edit', id]);
   }
  removeUser(id) { }

}
