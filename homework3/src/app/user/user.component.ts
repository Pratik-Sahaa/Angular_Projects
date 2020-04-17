import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  ngOnInit(): void {
    this.getAllUsers();
    document.getElementById('createuser').style.display="none";
    document.getElementById('deleteuser').style.display="none";
    document.getElementById('updateuser').style.display="none";
    document.getElementById('sidebox').style.display="none";

  }
 
  fname: string;
  lname: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
  id: string;
  usersList: User[];

  reqSub;

  constructor(private usersService: UsersService, private router: Router) { }

  userName='';

  // fname = "";
  // lname = "";
  // loginId = "";
  // userAge = null;
  // currentStatus=null;

  showUserDetail(Id) {

    document.getElementById('createuser').style.display="none";
    document.getElementById('deleteuser').style.display="none";
    document.getElementById('updateuser').style.display="none";
    document.getElementById('sidebox').style.display="block";

    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].id === Id) {
        this.fname = this.usersList[i].firstName;
        this.lname = this.usersList[i].lastName;
        this.login = this.usersList[i].login;
        this.age = this.usersList[i].age;
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

  createUser() {

    document.getElementById('createuser').style.display="block";
    document.getElementById('deleteuser').style.display="none";
    document.getElementById('updateuser').style.display="none";
    document.getElementById('sidebox').style.display="none";

    this.usersService.createUser(
      {
        firstName: this.fname,
        lastName: this.lname,
        login: this.login,
        age: this.age,
        password: this.password
      }
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
      }
    );
  }

  deleteUser() {

    document.getElementById('createuser').style.display="none";
    document.getElementById('deleteuser').style.display="block";
    document.getElementById('updateuser').style.display="none";
    document.getElementById('sidebox').style.display="none";

    this.usersService.delete(this.id).subscribe(
      (result) => {
        console.log('Result: Delete User API - ', result);
      },
      (error) => {
        console.log('Error: Delete User API - ', error);
      },
      () => {
        console.log('Complete: Delete User API');
      }
    );
  }

  handleChange(eventInfo) {
    this.userName = eventInfo.target.value;
  }

  updateUser() {
    document.getElementById('createuser').style.display="none";
    document.getElementById('deleteuser').style.display="none";
    document.getElementById('updateuser').style.display="block";
    document.getElementById('sidebox').style.display="none";

    this.reqSub = this.usersService.updateUser(
      {
        id: this.id,
        age: this.age,
        password: this.password,
        isDeleted: this.isDeleted
      }
    ).subscribe(
      (result) => {
        console.log('Result: Update User API - ', result);
      },
      (error) => {
        console.log('Error: Update User API - ', error);
      },
      () => {
        console.log('Complete: Update User API');
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


