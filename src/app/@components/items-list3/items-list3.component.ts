import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'items-list3',
  templateUrl: './items-list3.component.html',
  styleUrls: ['./items-list3.component.scss']
})
export class ItemsList3Component implements AfterViewInit {
  constructor() { }

  @ViewChild('LoadingItem') LoadingItem: ElementRef;
  @ViewChild('ContentComponent') ContentComponent: ElementRef;
  @Input() title: string;
  @Input() image: string;
  @Input() type: string;
  @Input() url: string;
  @Input() extra: any;
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
