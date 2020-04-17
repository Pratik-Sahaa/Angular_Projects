import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: User[];
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  activate(userlogin) {
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].login === userlogin) {
       this.usersList[i].isDeleted=false;
      }
    }
  }

  getAllUsers() {
    this.usersService.getUsers()  
    .subscribe(
      (result) => {
        this.usersList = result as any;
        console.log('Result: Get Users API - ', result);
      },
      (error) => {
        console.log('Error: Get Users API - ', error);
      },
      () => {
        console.log('Complete: Get Users API');
      }
    );
  }

}
export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted?: boolean;
}