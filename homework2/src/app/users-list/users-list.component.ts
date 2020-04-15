import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersList = this.usersService.user;
  }

  activate(userid) {
    this.usersList[userid - 1].isDeleted = false;
  }

}
