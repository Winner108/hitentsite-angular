import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/models/setting';

@Component({
  selector: 'social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getSettings():Setting {
    return JSON.parse(sessionStorage.getItem('settings') || '{}');
  }
}
