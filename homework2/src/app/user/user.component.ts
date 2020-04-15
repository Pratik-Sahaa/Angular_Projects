import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersList = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersList = this.usersService.user;
  }

  fname = "";
  lname = "";
  loginId = "";
  userAge = null;
  currentstatus = null;
  fullname = "USER"

  showDetails(Id) {

    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].id === Id) {
        this.fname = this.usersList[i].firstName;
        this.lname = this.usersList[i].lastName;
        this.loginId = this.usersList[i].login;
        this.userAge = this.usersList[i].age;
        this.currentstatus = this.usersList[i].isDeleted;
        var statusElement = document.getElementById("status");
        // if (this.usersList[i].isDeleted === true) {
        //   this.status = "Deactivated";
        //   statusElement.setAttribute("target", "NotActive");
        // } else {
        //   this.status = "Active";
        //   statusElement.setAttribute("target", "Active");
        // }
      }
    }
  }

}
