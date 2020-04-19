import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('UserDetailsComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deactivate method check',()=>{

    it('should make isDeleted to true for id 1',()=>{
      component.usersList=[{
        firstName : "User",
        lastName : "last",
        password : "pra123",
        age: 26,
        login:"1",
        isDeleted : false
      },{
        firstName : "User2",
        lastName : "last2",
        password : "pr123",
        age: 24,
        login:"2",
        isDeleted : false
      }];      
      let userlogin=component.usersList[0].login;
      component.deactivate(userlogin);
      expect(component.usersList[0].isDeleted).toBe(true);
    })


  });


});
