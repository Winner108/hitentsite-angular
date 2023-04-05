import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameProvider } from 'src/app/models/game-provider';
import { ApiService } from 'src/app/services/api.service';
import { Globals } from 'src/app/common/globals';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.css']
})
export class HorizontalScrollComponent implements OnInit {
  @Input() pathcode: string = '';
  @Output() provider = new EventEmitter<GameProvider | undefined>();
  providers: GameProvider[] | undefined = [];
  currentId: any = 0;
  server: string = environment.server;
  constructor(private readonly api: ApiService) { }

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders(): void {
    this.api.gameProvider((this.pathcode == 'casino' ? Globals.TYPE_SLOT : Globals.TYPE_LIVE_CASINO)).subscribe(data => {
      this.providers = data.data;
    }, error => {
      console.log(error.error.message);
    })
  }

  filter(provider: GameProvider | undefined): void {
    this.currentId = provider?.id;
    this.provider.emit(provider);
  }
}
