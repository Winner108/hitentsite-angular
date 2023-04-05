import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUser(): Profile {
    return JSON.parse(sessionStorage.getItem("me") || "{}");
  }
}
