import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get('http://localhost:3000/user');
  }

  addUser(registerUserForm:any){
    return this.http.post('http://localhost:3000/auth/register',registerUserForm);
  }

  deleteUser(id:any){
    return this.http.delete(`http://localhost:3000/user/${id}`);
  }

  updateUser(id:any,updaterUserForm:any){
    return this.http.patch(`http://localhost:3000/user/${id}`,updaterUserForm);
  }

  getOneUser(id:number){
    return this.http.get(`http://localhost:3000/user/${id}`);
  }
}
