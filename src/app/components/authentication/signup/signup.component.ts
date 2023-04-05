import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Globals } from 'src/app/common/globals';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  status: any;
  public tabId: number = 1;
  public checkedMiddleName: boolean = false;
  public passedValidation: boolean = false;

  username: string = "";
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  phone: string = "";
  birthday: string = "";
  city: string = "";
  address: string = "";
  country: string = "";
  password: string = "";
  password_confirmation: string = "";
  identity_number: string = "";

  day: string = "";
  month: string = "";
  year: string = "";
  years: number[] = [];
  months: number[] = [];
  days: number[] = [];

  public msg: string = '';
  public msgType: string = '';
  public isSubmited: boolean = false;
  public isAlreadyUsedUsername: boolean = false;
  public isShowPassword: boolean = false;
  public isToggleCoutryList: boolean = false;
  public privacyPolicy: boolean = false;
  public termsAndConditions: boolean = false;
  public selectedCountry: any = {};
  public countries = Globals.countries;
  constructor(private location: Location, private readonly api: ApiService) {
    this.status = {
      msg: '',
      msgType: ''
    }
    var now = new Date();
    for(var i = now.getFullYear() - 18;i > 1921;i --)
    {
      this.years.push(i);
    }

    for(var i = 1; i <= 12;i ++)
    {
      this.months.push(i);
    }

    for(var i = 1; i <= 31;i ++)
    {
      this.days.push(i);
    }
  }

  ngOnInit(): void {
    this.selectedCountry = this.countries[0];
    this.country=this.selectedCountry.dial_code;
  }

  getActiveTab(): number {
    return this.tabId;
  }

  setActiveTab(tab: number): void{
    this.tabId = tab;
  }

  back(): void {
    this.location.back();
  }

  validator(): void {
    this.isSubmited = true;
    this.birthday = this.year + "-" + this.month + "-" + this.day;
    if(this.password != this.password_confirmation)
    {
      this.msg = "";
      this.passedValidation = true;
    }
    else
    {
      this.passedValidation = false;
    }

    if(this.username == "" || 
      this.firstname == "" || 
      this.lastname == "" || 
      this.email == "" || 
      this.birthday == "" || 
      this.city == "" || 
      this.address == "" || 
      this.country == "" || 
      this.password == "" || 
      this.password_confirmation == "" || 
      this.identity_number == ""){
        this.passedValidation = false;
      }
      else {
        this.passedValidation = true;
      }
  }

  register(): void {
    this.validator();
    if(!this.passedValidation)
    {
      return;
    }
    var info = {
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      birthday: this.birthday,
      phone: "+" + this.selectedCountry.dial_code + this.phone,
      city: this.city,
      address: this.address,
      country: this.country,
      password: this.password,
      password_confirmation: this.password,
      identity_number: this.identity_number
    };
    this.api.register(info).subscribe(data => {
      this.status.msg = data.message;
      this.status.msgType = "info";
      sessionStorage.setItem('currentUser', JSON.stringify(data.data));
      window.location.href = ('/');
    },
    error => {
      this.status.msg = error.error.message;
      this.status.msgType = "error";
    })
  }

  checkValidUsername(): any {
    this.api.validusername({'username':this.username}).subscribe(data => {
      this.passedValidation = true;
      return true;
    },
    error => {
      this.passedValidation = false;
      return false
    });
  }

  checkEmailValied(): boolean {
    if(this.email.indexOf("@") == -1)
    {
      this.passedValidation = false;
      return false;
    }

    var arrE = this.email.split("@");
    var emailSite = arrE[1].split(".");
    if(emailSite.length == 1 || emailSite[emailSite.length - 1].length <= 1)
    {
      this.passedValidation = false;
      return false;
    }
    this.passedValidation = true;
    return true;
  }

  tckimlik(): boolean {
    const kno = this.identity_number;
    var desen = /^[0-9]{11,11}/;
    if ((kno).match(desen)) {
  
      if (Number(kno.charAt(0)) == 0) {
        this.passedValidation = false;
        return false;
      }
  
      var tekler = Number(kno.charAt(0)) + Number(kno.charAt(2)) + Number(kno.charAt(4)) + Number(kno.charAt(6)) + Number(kno.charAt(8));
      var ciftler = Number(kno.charAt(1)) + Number(kno.charAt(3)) + Number(kno.charAt(5)) + Number(kno.charAt(7));
      var basamak10 = (tekler * 7 - ciftler) % 10;
      var toplam = (tekler + ciftler + Number(kno.charAt(9))) % 10;
  
      if (basamak10 != Number(kno.charAt(9))) {
        this.passedValidation = false;
        return false;
      }
      if (toplam != Number(kno.charAt(10))) {
        this.passedValidation = false;
        return false;
      } else {
        this.passedValidation = true;
        return true
      };
  
    } else {
      this.passedValidation = false;
      return false
    };
  }
}
