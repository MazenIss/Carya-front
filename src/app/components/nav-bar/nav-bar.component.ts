import { Component, OnInit } from '@angular/core';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  fa=faArrowTurnUp;
  navOpen=false;
  constructor() { }

  ngOnInit(): void {
  }
  

}
