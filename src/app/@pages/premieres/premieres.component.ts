import { Component, OnInit } from '@angular/core';
import { ApiAnime } from '../../@scripts/ApiAnime';
import { infoPost } from 'src/app/@types/ApiAnime';
import * as $ from 'jquery';
import { FGlobal } from 'src/app/@scripts/Global';

@Component({
  selector: 'page-premieres',
  templateUrl: './premieres.component.html',
  styleUrls: ['./premieres.component.scss']
})
export class PremieresComponent implements OnInit {
  constructor(
    private apiAnime: ApiAnime,
    private fGlobal: FGlobal
  ) { }
  
  public dataLoading: boolean = false;
  public listEmision: infoPost[] = [];
  public showError: boolean = false;
  public numbersPages: string[] = [];
  public currentPage: number = 0;
  public showButtonMore: boolean = false;
  public moreDataLoading: boolean = false;
  public optionScroll = {
    forceVisible: true,
    autoHide: false
  };

  ngOnInit(): void {
    this.dataLoading = false;
    this.listEmision = [];
    this.showError = false;
    this.numbersPages = [];
    this.currentPage = 0;
    this.showButtonMore = false;
    this.moreDataLoading = false;
    this.reloadData();
  }
  reloadMoreData() {
    this.moreDataLoading = true;
    this.currentPage += 1;
    $('#buttonMorePremieres fast-button').attr('disabled', 'true');
    this.apiAnime.getMoreListEstrenos(this.numbersPages[this.currentPage]).then((value)=>{
      this.listEmision = this.listEmision.concat(value);
      this.moreDataLoading = false;
      $('#buttonMorePremieres fast-button').removeAttr('disabled');
      this.showButtonMore = (this.numbersPages[this.currentPage + 1])? true: false;
    }).catch(()=>{
      this.currentPage -= 1;
      this.moreDataLoading = false;
      $('#buttonMorePremieres fast-button').removeAttr('disabled');
      this.showButtonMore = (this.numbersPages[this.currentPage + 1])? true: false;
    });
  }
  reloadData() {
    this.dataLoading = false;
    this.showError = false;
    this.apiAnime.getListEstrenos().then((list)=>{
      this.listEmision = list.list;
      this.numbersPages = list.numPages;
      this.currentPage = 0;
      this.showButtonMore = (list.numPages.length == 0)? false : true;
      this.dataLoading = true;
    }).catch((error)=>{
      this.showError = true;
      this.dataLoading = true;
      console.log(error);
    });
  }
  openInfoAnime(url: string | undefined) { return this.fGlobal.openInfoAnime(String(url)); }
}
