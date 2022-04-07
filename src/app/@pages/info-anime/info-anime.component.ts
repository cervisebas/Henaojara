import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import * as $ from 'jquery';
import { listSeasons } from 'src/app/@types/ApiAnime';

@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.scss']
})
export class InfoAnimeComponent implements OnInit, AfterViewInit {
  constructor() { }

  @ViewChild('LoadingImage') LoadingImage: ElementRef;
  @Input() description: string;
  @Input() title: string;
  @Input() status: boolean;
  @Input() image: string;
  @Input() timeUpload: string;
  @Input() views: string;
  @Input() lists: listSeasons[];
  @Input() genders: { title: string, url: string }[];
  @Input() close: ()=>any;
  public totalEpisodes: string = '0';
  public totalSeasons: string = '0';

  public optionScroll = {
    forceVisible: true,
    autoHide: false
  };

  ngOnInit(): void {
    var totalEpisodes: number = 0;
    this.lists.forEach((value)=>totalEpisodes += value.chapters.length);
    this.totalEpisodes = String(totalEpisodes);
    this.totalSeasons = String(this.lists.length);
  }

  ngAfterViewInit(): void {
    $(this.LoadingImage.nativeElement).find('img.img-content').on('load', ()=>{
      $(this.LoadingImage.nativeElement).find('img.img-content').show();
      $(this.LoadingImage.nativeElement).find('fast-skeleton').hide();
    });
  }

  goChapter(name: string, url: string) {
    console.log(name);
    console.log(url);
  }
}
