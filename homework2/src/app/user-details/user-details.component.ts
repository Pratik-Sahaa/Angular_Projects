import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  usersList = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersList = this.usersService.user;
  }

  deactivate(userid) {
    this.usersList[userid - 1].isDeleted = true;
  }

  // showDetails(id:number){
  //   this.router.navigate(['manage', id]);
  // }

}
