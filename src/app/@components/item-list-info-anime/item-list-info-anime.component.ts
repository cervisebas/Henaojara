import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'item-list-info-anime',
  templateUrl: './item-list-info-anime.component.html',
  styleUrls: ['./item-list-info-anime.component.scss']
})
export class ItemListInfoAnimeComponent implements OnInit, AfterViewInit {

  @ViewChild('LoadingItem') LoadingItem: ElementRef;

  @Input() image: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(this.LoadingItem.nativeElement).find('img.img-content').on('load', ()=>{
      $(this.LoadingItem.nativeElement).find('img.img-content').show();
      $(this.LoadingItem.nativeElement).find('fast-skeleton.img-loading').hide();
    });
  }

}
