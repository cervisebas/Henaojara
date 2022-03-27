import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements AfterViewInit {
  constructor() { }

  @ViewChild('LoadingItem') LoadingItem: ElementRef;
  @ViewChild('ContentComponent') ContentComponent: ElementRef;
  @Input() title: string;
  @Input() image: string;
  @Input() type: string;
  @Input() url: string;
  @Input() click: (url: string)=>any;

  ngAfterViewInit(): void {
    $(this.LoadingItem.nativeElement).find('img.img-loading').on('load', ()=>{
      $(this.ContentComponent.nativeElement).fadeIn();
    });
    $(this.LoadingItem.nativeElement).find('img.img-content').on('load', ()=>{
      $(this.LoadingItem.nativeElement).find('img.img-content').show();
      $(this.LoadingItem.nativeElement).find('fast-skeleton').hide();
    });
  }

}
