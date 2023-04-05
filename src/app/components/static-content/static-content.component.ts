import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Promotion } from 'src/app/models/promotion';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { StaticContentModalComponent } from './static-content-modal/static-content-modal.component';

@Component({
  selector: 'static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.css'],
})
export class StaticContentComponent implements OnInit {
  public content: string = '';
  public content_data: string = '';
  promotions: Promotion[] | undefined = [];
  public server: string = environment.server;
  public static: string = environment.static;
  isLoading: boolean = true;
  constructor(
                private readonly activatedRouter: ActivatedRoute, 
                private readonly api: ApiService,
                public dialog: MatDialog) { 
    this.activatedRouter.paramMap.subscribe(params => {
      this.content = params.get("page_name") || "";
      if(this.content == "promotions")
      {
        this.getPromotions();
      } else {

        this.api.pageContentBySlug(this.content).subscribe(
          (data) => {
            this.content_data= String(data.data?.content || '');
          },
          (error) => {
            console.log(error.error.message);
          }
        );

      }
    });
  }

  ngOnInit(): void {}

  getPromotions(): void {
    this.api.promotions().subscribe((data) => {
      this.promotions = data.data;
      this.isLoading = false;
    }, (error) => {
      alert(error.error.message);
    })
  }

  showContentModal(content: string | undefined): void {
    // this.api.pageContent(ind).subscribe(
    //   (data) => {
        const dialogRef = this.dialog.open(StaticContentModalComponent, {
          id: 'static_content_modal',
          width: '100%',
          data: {
            content: String(content || ''),
            // content: String(data.data?.content || ''),
          },
        });

        dialogRef.afterClosed().subscribe((data) => {});
    //   },
    //   (error) => {
    //     console.log(error.error.message);
    //   }
    // );
  }
}
