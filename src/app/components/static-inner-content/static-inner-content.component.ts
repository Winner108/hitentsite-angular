import { 
  Component, 
  OnInit,  
  Input } from '@angular/core';

@Component({
  selector: 'app-static-inner-content',
  templateUrl: './static-inner-content.component.html',
  styleUrls: ['./static-inner-content.component.css']
})
export class StaticInnerContentComponent implements OnInit {
  @Input() contentcode: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
