import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements AfterViewInit {
  constructor() { }
  
  @Input() image: string;
  @Input() click?: (url: string)=>any;

  @ViewChild('ImageItem') ImageItem: ElementRef;
  @ViewChild('LoadingItem') LoadingItem: ElementRef;
  @ViewChild('ContentComponent') ContentComponent: ElementRef;
  @ViewChild('ImageLoad') ImageLoad: ElementRef;

  ngAfterViewInit(): void {
    $(this.ImageLoad.nativeElement).on('load', ()=>$(this.ContentComponent.nativeElement).fadeIn());
    $(this.ImageItem.nativeElement).on('load', ()=>{
      $(this.ImageItem.nativeElement).show();
      $(this.LoadingItem.nativeElement).css({ opacity: 0 });
    });
  }
}
