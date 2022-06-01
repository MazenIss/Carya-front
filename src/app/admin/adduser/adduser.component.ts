import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  messageErr=""

  constructor(private dataService:DataService, private route:Router) { }

  ngOnInit(): void {
  }

  registerUser(userDataInput:any){
    let userData = userDataInput.value;
    this.dataService.addUser(userData).subscribe(_=>{
      // console.log(response)

      this.route.navigate(['/admin/allusers'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.message
      // console.log(err.error)
      // console.log(err.status)
    })
  }

}
