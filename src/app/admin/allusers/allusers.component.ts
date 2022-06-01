import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {
  users: any;
  messageErr = "";
  messageSuccess = "";
  userToUpdateData = {
    firstName:'',
    lastName:'',
    phoneNumber:'',
    cin:'',
    email:'',
    id:0,
    avatar:'',
    offers:[],
  }

  constructor(private dataService: DataService, private route:Router) {
    this.dataService.getAllUsers().subscribe(data => this.users = data);
   }

  ngOnInit(): void {
  }

  deleteUser(id:any,idx:number){
    this.dataService.deleteUser(id).subscribe(res => {
      this.users.splice(idx,1);
    })
  }

  getUserData(idx:number){
    this.messageSuccess = "";
    this.messageErr = "";
    this.userToUpdateData = this.users[idx];
  }

  updateUser(updaterUserForm:any){
    let newUserData = updaterUserForm.value;
    this.dataService.updateUser(this.userToUpdateData.id,newUserData).subscribe((res:any) => {
      let index = this.users.findIndex((obj:any) => obj.id === this.userToUpdateData.id);
      this.users[index] = res.user;
      this.messageSuccess = `User with id ${res.user.id} was updated successfully!`;
    }, err => {
      console.log(err);
      this.messageErr = err.error;
    })
  }

  userDetails(id:number){
    this.route.navigate([`/admin/userdetails/${id}`]);
  }

}
