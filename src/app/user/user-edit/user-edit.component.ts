import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.userForm = this.formBuilder.group({
      name: '',
      username: '',
      age: null,
      address: this.formBuilder.group({
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: this.formBuilder.group({
          lat: null,
          lng: null
        }),
      }),
      company: this.formBuilder.group({
        name: '',
        catchPhrase: '',
        bs: ''
      }),
      avatar: '',
      website: ''
    });

    console.log(this.userForm.value);
  }

}
