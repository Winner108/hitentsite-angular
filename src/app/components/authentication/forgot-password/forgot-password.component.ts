import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  sendType: string = 'username';
  username: string = '';
  email: string = '';
  isSubmited: boolean = false;
  constructor(private readonly api: ApiService) { }

  ngOnInit(): void {
  }

  forgotPassword(): void {
    this.isSubmited = true;
    if(this.sendType == 'email' && this.email == '' || this.sendType == 'username' && this.username == '')
    {
      return;
    }
    var data = this.sendType == 'email' ? {email: this.email} : {username: this.username};
    this.api.forgotPassword(data).subscribe(data => {
      if(data.code == "200")
      {
        alert(data.data.message)
      }
    }, error => {

    })
  }
}
