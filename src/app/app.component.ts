import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Titlebar, Color } from 'custom-electron-titlebar';
import { Menu } from '@electron/remote';
import { ipcRenderer } from 'electron';
import { DesignToken } from '@microsoft/fast-foundation';
import { ApiAnime } from './@scripts/ApiAnime';
import { FGlobal } from './@scripts/Global';
import { listSearch } from './@types/ApiAnime';
import { ChatbroService } from './@services/chatbro.service';
import { SearchResultsComponent } from './@pages/search-results/search-results.component';
import * as $ from 'jquery';

const specialColor = DesignToken.create<string>("accent-fill-rest");
const specialColor2 = DesignToken.create<string>("accent-foreground-rest");
const specialColor3 = DesignToken.create<string>("accent-foreground-hover");
const specialColor4 = DesignToken.create<string>("accent-fill-hover");
const specialColor5 = DesignToken.create<string>("accent-fill-active");
const specialColor6 = DesignToken.create<string>("focus-stroke-outer");

declare global {
  interface Window {
    infoContent: ViewContainerRef,
    $: any,
    apiAnime: ApiAnime
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private apiAnime: ApiAnime,
    private chatbroService: ChatbroService,
    private fGlobal: FGlobal
  ) {}
  public textSearch: string = '';
  public focusSearch: boolean = false;
  public lastTextSearch: string = '';
  public listSearch: listSearch[] = []
  @ViewChild('searchsContent', { read: ViewContainerRef }) searchsContent: ViewContainerRef;
  @ViewChild('infoContent', { read: ViewContainerRef }) infoContent: ViewContainerRef;

  ngOnInit() {
    window.$ = $;
    window.apiAnime = this.apiAnime;
    const titlebar = new Titlebar({
      backgroundColor: Color.fromHex('#29153c'),
      titleHorizontalAlignment: 'left',
      menu: new Menu(),
      onMinimize: ()=>ipcRenderer.send('window-minimize'),
      onMaximize: ()=>ipcRenderer.send('window-maximize'),
      onClose: ()=>ipcRenderer.send('window-close'),
      isMaximized: ()=>ipcRenderer.sendSync('window-is-maximized'),
      onMenuItemClick: ()=>{return;}
    });
    ipcRenderer.on('window-maximize', ()=>this.calculeScreen()).on('window-restore', ()=>this.calculeScreen()).on('window-resize', ()=>this.calculeScreen());
    this.calculeScreen();
    setInterval(()=>{
      this.textSearch = <string> $('fast-text-field#text-search').attr('current-value');
      if (this.focusSearch == true && this.textSearch.length >= 4) {
        if (this.lastTextSearch !== this.textSearch) this.apiAnime.searchType(this.textSearch).then((list)=>this.listSearch = list);
        if (this.listSearch.length !== 0) $('fast-listbox#listSearch').fadeIn(64); else $('fast-listbox#listSearch').fadeOut(128);
        this.lastTextSearch = this.textSearch;
      } else {
        $('fast-listbox#listSearch').fadeOut(128);
      }
    }, 512);

    var provider = <HTMLElement> $('fast-design-system-provider').get(0);
    specialColor.setValueFor(provider, '#FFFFFF');
    specialColor2.setValueFor(provider, '#FFFFFF');
    specialColor3.setValueFor(provider, '#FFFFFF');
    specialColor4.setValueFor(provider, '#0084cc');
    specialColor5.setValueFor(provider, '#bc1eac');
    specialColor6.setValueFor(provider, '#bc1eac');
    specialColor.setValueFor(<HTMLElement> $('fast-listbox#listSearch').get(0), '#BC1EAC');

    $('fast-text-field#text-search').on('focusin', (event)=>{
      this.focusSearch = true;
      if (this.textSearch.length >= 4 && this.listSearch.length !== 0) $('fast-listbox#listSearch').fadeIn(64);
    });
    $('fast-text-field#text-search').on('focusout', (event)=>{
      $('fast-listbox#listSearch').fadeOut(128);
      this.focusSearch = false;
    });
    this.chatbroService.init();
  }
  ngAfterViewInit(): void {
    window.infoContent = this.infoContent;
  }
  calculeScreen() {
    var win = window;
    var doc = document;
    var docElem = doc.documentElement;
    var body = doc.getElementsByTagName('body')[0];
    var y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
    var componentHeight = `${(y - (73 + 30))}px`;
    $('fast-tab-panel.tabpanel1').css({ height: componentHeight });
    $('fast-tab-panel.tabpanel1').css({ height: componentHeight });
    $('fast-tab-panel.tabpanel1').css({ height: componentHeight });
  }
  goSearch() {
    var search: string = String($('fast-text-field#text-search').attr('current-value'));
    if (search.length <= 1) return;
    var process: string = search.replace(/\ /gi, '+');
    this.openSearchs(process, search);
    $('fast-listbox#listSearch').fadeOut(128);
    this.focusSearch = false;
  }
  openSearchs(search: string, title: string) {
    var ref = this.searchsContent?.createComponent(SearchResultsComponent);
    ref.instance.search = search;
    ref.instance.title = title;
    ref.instance.close = ()=>$('#search-results').fadeOut('fast', ()=>ref.destroy());
    $('#search-results').fadeIn('fast');
  }
  openInfoAnime(url: string) { return this.fGlobal.openInfoAnime(url); }
}
