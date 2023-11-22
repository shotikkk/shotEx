import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisplayService } from '../display.service';

export interface ParentUser{
  Id: number,
  Firstname: string,
  Lastname: string,
  DateOfBirth: Date,
  PhoneNumber: string,
  Email: string
}

export interface User{
  Id: number,
  Firstname: string,
  Lastname: string,
  DateOfBirth: Date,
  PhoneNumber: string,
  Email: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() usersFromInput: ParentUser[] = [];
  userForm: FormGroup;

  constructor(fb: FormBuilder, private displayService: DisplayService){

  }
  ngOnInit(): void{
    this.userForm = this.fb.group({
      Id: ['', Validators.required],
      Firstname: ['', Validators.required, Validators.minLength(3)],
      Lastname: ['', Validators.required,  Validators.minLength(3),
      DateOfBirth: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Email: ['', Validators.required,  Validators.minLength(8), Validators.email],
    })
  }

  callDisplayService(){[
    this.displayService.displayUsers(this.usersFromInput)
  ]}
}
