import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(UsersService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', ()=>{

    service.getUsers().subscribe((data)=>{
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });

  // it('should return particular user', ()=>{
  //   const id='1';
  //   service.getUser(id).subscribe((data)=>{
  //     expect(data).toEqual([]);
  //   });
  //   const req = httpTestingController.expectOne('http://localhost:8080/users/' + id);
  //   expect(req.request.method).toEqual('GET');

  //   req.flush([]);

  //   httpTestingController.verify();
  // });

  it('should return create user', ()=>{
    const user={firstName:"thh",lastName:"uui",age:27,login:"sd",password:"uu8"};
    service.createUser(user).subscribe((data)=>{
      expect(data).toEqual([]);
    });


    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('POST');

    req.flush([]);

    httpTestingController.verify();
  });




});
