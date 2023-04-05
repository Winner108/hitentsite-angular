import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private readonly api: ApiService) { 
    this.getProfile();
  }

  ngOnInit(): void {
  }

  public logout(): void {
    sessionStorage.setItem('currentUser', "null");
    window.location.href = "/";
  }

  getProfile():void {
    this.api.profile(false).subscribe(data => {
      sessionStorage.setItem('me', JSON.stringify(data.data));
    })
  }

  getUser(): Profile {
    return JSON.parse(sessionStorage.getItem("me") || "{}");
  }
}
