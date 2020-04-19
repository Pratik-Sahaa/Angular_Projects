import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../users.service';

describe('UserComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['updateUser']);
  let usersService: UsersService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        UserComponent
      ], providers: [{ provide: UsersService, useValue: userServiceSpy }],
    })
      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createUser method', () => {

    it('should set createUser element display to block', () => {
      let x = document.createElement('div');
      x.setAttribute('id', 'createuser');
      document.body.appendChild(x);
      document.getElementById('createuser').style.display = "none";
      component.createUser();
      expect(document.getElementById('createuser').style.display).toBe("block");

    });
  });

  describe('deleteUser method', () => {

    it('should set deleteser element display to block', () => {
      let y = document.createElement('div');
      y.setAttribute('id', 'deleteuser');
      document.body.appendChild(y);
      document.getElementById('deleteuser').style.display = "none";
      component.deleteUser();
      expect(document.getElementById('deleteuser').style.display).toBe("block");

    });
  });
  describe('updateUser method', () => {

    it('should set updateUser element display to block', () => {
      let z = document.createElement('div');
      z.setAttribute('id', 'updateuser');
      document.body.appendChild(z);
      document.getElementById('updateuser').style.display = "none";
      component.updateUser();
      expect(document.getElementById('updateuser').style.display).toBe("block");

    });
  });

  describe('showUserDetails method', () => {

    it('should set sidebox element display to block', () => {

      component.usersList = [{
        firstName: "User",
        lastName: "last",
        password: "pra123",
        age: 26,
        login: "1",
        id: "one",
        isDeleted: true
      }, {
        firstName: "User2",
        lastName: "last2",
        password: "pr123",
        age: 24,
        login: "2",
        id: "two",
        isDeleted: true
      }];
      let z = document.createElement('div');
      z.setAttribute('id', 'sidebox');
      document.body.appendChild(z);
      document.getElementById('sidebox').style.display = "none";
      component.showUserDetail(component.usersList[1].id);
      expect(document.getElementById('sidebox').style.display).toBe("block");

    });

    it('should return with the details matching user id', () => {

      component.usersList = [{
        firstName: "User",
        lastName: "last",
        password: "pra123",
        age: 26,
        login: "1",
        id: "one",
        isDeleted: true
      }, {
        firstName: "User2",
        lastName: "last2",
        password: "pr123",
        age: 24,
        login: "2",
        id: "two",
        isDeleted: true
      }];
      let z = document.createElement('div');
      z.setAttribute('id', 'sidebox');
      document.body.appendChild(z);
      component.showUserDetail(component.usersList[1].id);
      expect(component.usersList[1].age).toBe(24);
    });
  });

});
