import { Component, OnInit } from '@angular/core';
import { ApiAnime } from 'src/app/@scripts/ApiAnime';
import { infoPost, tableEmision1 } from 'src/app/@types/ApiAnime';
import * as $ from 'jquery';
import { FGlobal } from 'src/app/@scripts/Global';

@Component({
  selector: 'page-emision',
  templateUrl: './emision.component.html',
  styleUrls: ['./emision.component.scss']
})
export class EmisionComponent implements OnInit {
  constructor(
    private apiAnime: ApiAnime,
    private fGlobal: FGlobal
  ) { }

  public tableEmision: tableEmision1[] = [];
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
    this.tableEmision = [];
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
    $('#buttonMoreEmision fast-button').attr('disabled', 'true');
    this.apiAnime.getMoreInfoEmision(this.numbersPages[this.currentPage]).then((value)=>{
      this.listEmision = this.listEmision.concat(value);
      this.moreDataLoading = false;
      $('#buttonMoreEmision fast-button').removeAttr('disabled');
      this.showButtonMore = (this.numbersPages[this.currentPage + 1])? true: false;
    }).catch(()=>{
      this.currentPage -= 1;
      this.moreDataLoading = false;
      $('#buttonMoreEmision fast-button').removeAttr('disabled');
      this.showButtonMore = (this.numbersPages[this.currentPage + 1])? true: false;
    });
  }
  reloadData() {
    this.dataLoading = false;
    this.showError = false;
    this.apiAnime.getInfoEmision().then((emision)=>{
      this.tableEmision = emision.table;
      this.listEmision = emision.list;
      this.numbersPages = emision.numPages;
      this.currentPage = 0;
      this.showButtonMore = true;
      this.dataLoading = true;
    }).catch((error)=>{
      this.showError = true;
      this.dataLoading = true;
      console.log(error);
    });
  }
  openInfoAnime(url: string | undefined) { return this.fGlobal.openInfoAnime(String(url)); }
}
