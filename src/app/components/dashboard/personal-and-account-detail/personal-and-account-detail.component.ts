import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-personal-and-account-detail',
  templateUrl: './personal-and-account-detail.component.html',
  styleUrls: ['./personal-and-account-detail.component.css']
})
export class PersonalAndAccountDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUser(): Profile {
    return JSON.parse(sessionStorage.getItem("me") || "{}");
  }
}
