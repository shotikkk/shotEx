import { Component } from '@angular/core';
import { ParentUser } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shota-undilashvili';

  public users: {firstname: string; lastname: string; age: number}[] = [
    {
      firstname: 'shota',
      lastname: 'undilashvili',
      age: 18
    },
    {
      firstname: 'shota2',
      lastname: 'test2',
      age: 15
    },
    {
      firstname: 'shota3',
      lastname: 'test3',
      age: 24
    },
    {
      firstname: 'shota4',
      lastname: 'test4',
      age: 26
    },
    {
      firstname: 'shota5',
      lastname: 'test5',
      age: 28
    }
  ];

  public parentUsers: ParentUser[] = [
    {
      Id: 1,
      Firstname: 'test user firstname',
      Lastname: "test user lastname",
      DateOfBirth: new Date(),
      Email: 'testUser@gamil.com',
      PhoneNumber: '5617656'
    },
    {
      Id: 2,
      Firstname: 'test user firstname',
      Lastname: "test user lastname",
      DateOfBirth: new Date(),
      Email: 'testUser@gamil.com',
      PhoneNumber: '5617656'
    },
    {
      Id: 3,
      Firstname: 'test user firstname',
      Lastname: "test user lastname",
      DateOfBirth: new Date(),
      Email: 'testUser@gamil.com',
      PhoneNumber: '5617656'
    }
  ]
}
