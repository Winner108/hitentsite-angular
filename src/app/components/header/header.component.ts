import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showTvMenu = false;
  public currentUser: any = null;
  static: string = environment.static;
  constructor() { 
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser") || "null");
  }

  ngOnInit(): void {
    
  }

  toggleTvGamesMenu(): void {
    this.showTvMenu = !this.showTvMenu;
    window.jQuery('#virtual-drop').toggle();
    window.jQuery('#virtual-drop').css({'opacity': 1});
  }
  
  openSigninModal() : void {
    window.jQuery("#sgn-mdl").addClass('open');
    window.jQuery("#sgn-mdl").css({"z-index": 1021, "opacity": 1, "transform": "scaleX(1)", "top": "10%"});
    window.jQuery("#sgn-mdl").fadeIn();
    window.jQuery("body").append('<div class="modal-overlay" style="z-index: 1020; display: block; opacity: 0.5;"></div>');
  }

}
