import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/catch';
import { User } from './user';
import { handleError } from '../shared/handleError';

@Injectable()
export class UserService {


  constructor(private _http: Http) { }

  getUsers = (): Observable<User[]> => {
    return this._http.get(`http://choniawko.com/api/users`)
      .map(res => res.json())
      .map(res => {
        const users: User[] = [];
        res.forEach((user: User) => {
          users.push(new User(
                           user.id,
                           user.name,
                           user.username,
                           user.age,
                           user.address,
                           user.company,
                           user.avatar,
                           user.website));
        });
        return users;
      })
      .catch(handleError);
  }


  getDynamicUsers = (): Observable<Observable<User[]>> => {
    return Observable.interval(5000)
        .map(() => {
          return this._http.get(`http://choniawko.com/api/users`)
            .map(res => res.json())
            .catch(handleError);
        });
  }

  getUser = (id): Observable<User> => {
    return this._http.get(`http://choniawko.com/api/user/${id}`)
      .map(res => res.json())
      .map(res => new User(
                           res.id,
                           res.name,
                           res.username,
                           res.age,
                           res.address,
                           res.company,
                           res.avatar,
                           res.website))
      .catch(handleError);
  }

  editUser = () => { };

  removeUser = () => { };

}
