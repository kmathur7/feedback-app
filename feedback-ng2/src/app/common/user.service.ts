import { Injectable } from '@angular/core';
import { UserModel } from './user-model';

@Injectable()
export class UserService {

  private user: UserModel;
  constructor() { }

  setUser(data) {
    this.user = data;
    console.log(this.user);
  }

  getUser() {
    return this.user
  }

}
