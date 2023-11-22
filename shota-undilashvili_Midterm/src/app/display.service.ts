import { Injectable } from '@angular/core';
import { ParentUser, User } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  displayUsers( users: ParentUser[]): ParentUser[]{
    console.log("Array is displayed by Display service")
    console.log(users)
    return users
  }
}
