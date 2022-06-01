import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  
  id=-1
  userData :any;
  messageErr = "";

  constructor(private route:ActivatedRoute, private dataService:DataService) { 
    this.route.params.subscribe(data => this.id=data['id']);
    this.dataService.getOneUser(this.id).subscribe((res:any) => {
      this.userData = res.user;
    }, err => {
      this.messageErr = err.message;
    })

  }

  ngOnInit(): void {
  }

}
