import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersListComponent } from './users-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('UsersListComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
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
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('activate method check',()=>{

    it('should make isDeleted to false for id 2',()=>{

      component.usersList=[{
        firstName : "User",
        lastName : "last",
        password : "pra123",
        age: 26,
        login:"1",
        isDeleted : true
      },{
        firstName : "User2",
        lastName : "last2",
        password : "pr123",
        age: 24,
        login:"2",
        isDeleted : true
      }];
      let userlogin=component.usersList[0].login;
      component.activate(userlogin);
      expect(component.usersList[0].isDeleted).toBe(false);
    })


  });

});
