import { Component, OnInit } from '@angular/core';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  faCkeck = faCheckDouble;
  constructor() { }

  ngOnInit(): void {
  }


}
