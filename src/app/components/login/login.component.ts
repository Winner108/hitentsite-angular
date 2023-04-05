import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string = '';
    password: string = '';
    status: any;

    ngOnInit(): void {

    }

    constructor(private location: Location, private readonly api: ApiService) {
            this.status = {
                msg: '',
                msgType: ''
              }
    }

    login() {
        this.api.login(this.username, this.password).subscribe(data => {
            this.status.msg = data.message;
            this.status.msgType = "success";
            sessionStorage.setItem('currentUser', JSON.stringify(data.data));
            this.api.profile(data.data?.token).subscribe(data => {
                sessionStorage.setItem('profile', JSON.stringify(data.data));
                window.location.href = ('/');
            }, error => {
                this.status.msg = error.error.message;
                this.status.msgType = "error";
            })
        },
        error => {
            this.status.msg = error.error.message;
            this.status.msgType = "error";
        })
    }

    getMessage(): string {
        return this.status.msg;
    }

    getMessageType(): string {
        return this.status.msgType;
    }

    closeSigninModal(): void {
        window.jQuery("#sgn-mdl").fadeOut();
    }
}
