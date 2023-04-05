import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  password: string = "";
  currentPassword: string = "";
  msg: string = "";
  msgType: string = "";
  constructor(private readonly api: ApiService) { }

  ngOnInit(): void {
  }

  changePassword(): void {
    this.api.changePassword({
      password: this.password, 
      current_password: this.currentPassword, 
      password_confirmation: this.password}).subscribe(data => {
        this.msg = data.message;
        this.msgType = "info";
      }, error => {
        this.msg = error.error.message;
        this.msgType = "error";
      })
  }

}
