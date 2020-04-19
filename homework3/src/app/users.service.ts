import {HttpClient} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map, retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { User} from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // user = [
  //   { id: 1, firstName: "Pratik", lastName: "Saha", age: 22, login: "pra@epam", password: "pra123", isDeleted: false },
  //   { id: 2, firstName: "Ravi", lastName: "Singh", age: 52, login: "ra@epam", password: "pra456", isDeleted: true },
  //   { id: 3, firstName: "Vishad", lastName: "Sharma", age: 42, login: "vra@epam", password: "mypass123", isDeleted: false },
  //   { id: 4, firstName: "Sneha", lastName: "Saha", age: 23, login: "sn@epam", password: "thisisit123", isDeleted: false },
  //   { id: 5, firstName: "Anubhav", lastName: "kumar", age: 25, login: "bha@epam", password: "anu123", isDeleted: false }
  // ];
  User:any
  
  constructor(private http : HttpClient){ }


  getUsers(){
    return this.http.get<any[]>('http://localhost:8080/users');
  }

  getUser(id: string){
    return this.http.get<any[]>('http://localhost:8080/users'+ id);
  }

  createUser(user:User){
    return this.http.post('http://localhost:8080/users', user).pipe(
      map(result => result),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateUser( user: Partial<User>){
    return this.http.put('http://localhost:8080/users/' + user.id, {
      age : user.age,
      isDeleted :user.isDeleted,
      password : user.password
    });
  }

  delete(id: string){
    return this.http.delete('http://localhost:8080/users/' +id).pipe(
      map(result=> result),
      catchError((error)=>{
        return throwError(error);
      })
    );
  }


}
