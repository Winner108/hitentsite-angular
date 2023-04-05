import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    sessionStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    var lang = sessionStorage.getItem('language') || 'EN';
    return lang?.toUpperCase();
  }
}
