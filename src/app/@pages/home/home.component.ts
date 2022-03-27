import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiAnime } from 'src/app/@scripts/ApiAnime';
import { infoPost } from 'src/app/@types/ApiAnime';
import { FGlobal } from 'src/app/@scripts/Global';
import { DesignToken } from '@microsoft/fast-foundation';
import { shell } from 'electron';
import * as $ from 'jquery';

type gender = {
  name: string;
  url: string;
};

const specialColor = DesignToken.create<string>("accent-fill-rest");
const specialColor2 = DesignToken.create<string>("neutral-fill-rest");
const specialColor3 = DesignToken.create<string>("neutral-fill-hover");
const specialColor4 = DesignToken.create<string>("neutral-fill-active");

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    private apiAnime: ApiAnime,
    private fGlobal: FGlobal
  ) { }
  
  public dataLoading: boolean = false;
  public listPopulars: infoPost[] = [];
  public listUploads: infoPost[] = [];
  public showError: boolean = false;

  public genders: gender[] = [
    { name: 'ACCION', url: 'https://henaojara.com/category/categorias/accion/' },
    { name: 'AMOR', url: 'https://henaojara.com/category/categorias/amor/' },
    { name: 'ARTES MARCIALES', url: 'https://henaojara.com/category/categorias/artes-marciales/' },
    { name: 'AVENTURA', url: 'https://henaojara.com/category/categorias/aventura/' },
    { name: 'CIENCIA FICCION', url: 'https://henaojara.com/category/categorias/ciencia-ficcion/' },
    { name: 'COCINAS', url: 'https://henaojara.com/category/categorias/cocinas/' },
    { name: 'COMEDIA', url: 'https://henaojara.com/category/categorias/comedia/' },
    { name: 'DEMONIOS', url: 'https://henaojara.com/category/categorias/demonios/' },
    { name: 'DEPORTES', url: 'https://henaojara.com/category/categorias/deportes/' },
    { name: 'DRAMA', url: 'https://henaojara.com/category/categorias/drama/' },
    { name: 'ECCHI', url: 'https://henaojara.com/category/categorias/ecchi/' },
    { name: 'EMISION', url: 'https://henaojara.com/category/emision/' },
    { name: 'ESCOLAR', url: 'https://henaojara.com/category/categorias/escolar/' },
    { name: 'ESPAÑOL CASTELLANO', url: 'https://henaojara.com/category/categorias/espanol-castellano/' },
    { name: 'ESPAÑOL LATINO', url: 'https://henaojara.com/category/categorias/latino/' },
    { name: 'ESTRENOS', url: 'https://henaojara.com/category/estrenos/' },
    { name: 'FAMILIA', url: 'https://henaojara.com/category/categorias/familia/' },
    { name: 'FANTASIA', url: 'https://henaojara.com/category/categorias/fantasia/' },
    { name: 'GORE', url: 'https://henaojara.com/category/categorias/gore/' },
    { name: 'HAREM', url: 'https://henaojara.com/category/categorias/harem/' },
    { name: 'HISTORICO', url: 'https://henaojara.com/category/categorias/historico/' },
    { name: 'ISEKAI', url: 'https://henaojara.com/category/categorias/isekai/' },
    { name: 'JUEGOS', url: 'https://henaojara.com/category/categorias/juegos/' },
    { name: 'MAGIA', url: 'https://henaojara.com/category/categorias/magia/' },
    { name: 'MECHA', url: 'https://henaojara.com/category/categorias/mecha/' },
    { name: 'MILITAR', url: 'https://henaojara.com/category/categorias/militar/' },
    { name: 'MISTERIO', url: 'https://henaojara.com/category/categorias/misterio/' },
    { name: 'MUSICA', url: 'https://henaojara.com/category/categorias/musica/' },
    { name: 'PELICULAS', url: 'https://henaojara.com/category/peliculas/' },
    { name: 'PIRATAS', url: 'https://henaojara.com/category/categorias/piratas/' },
    { name: 'PSICOLOGICO', url: 'https://henaojara.com/category/categorias/psicologico/' },
    { name: 'RECUERDOS', url: 'https://henaojara.com/category/categorias/recuerdos/' },
    { name: 'ROBOTS', url: 'https://henaojara.com/category/categorias/robots/' },
    { name: 'ROMANCE', url: 'https://henaojara.com/category/categorias/romance/' },
    { name: 'SAMURAI', url: 'https://henaojara.com/category/categorias/samurai/' },
    { name: 'SHOUNEN', url: 'https://henaojara.com/category/categorias/shounen/' },
    { name: 'SOBRENATURAL', url: 'https://henaojara.com/category/categorias/sobrenatural/' },
    { name: 'SUPERPODERES', url: 'https://henaojara.com/category/categorias/superpoderes/' },
    { name: 'SUSPENSO', url: 'https://henaojara.com/category/categorias/suspenso/' },
    { name: 'TERROR', url: 'https://henaojara.com/category/categorias/terror/' },
    { name: 'VAMPIROS', url: 'https://henaojara.com/category/categorias/vampiros/' },
    { name: 'YURI', url: 'https://henaojara.com/category/categorias/yuri/' },
  ];

  public optionScroll = {
    forceVisible: true,
    autoHide: false
  };

  ngOnInit(): void {
    this.dataLoading = false;
    this.listPopulars = [];
    this.listUploads = [];
    this.showError = false;
    this.reloadData();
  }
  ngAfterViewInit(): void {
    specialColor.setValueFor(<HTMLElement> $('fast-select#list-genders').get(0), '#BC1EAC');
    specialColor2.setValueFor(<HTMLElement> $('#buttons-extras').get(0), '#BC1EAC');
    specialColor3.setValueFor(<HTMLElement> $('#buttons-extras').get(0), '#0084CC');
    specialColor4.setValueFor(<HTMLElement> $('#buttons-extras').get(0), '#0084CC');
    $(<any> $('fast-select#list-genders').get(0)?.shadowRoot).append($('<style></style>').append(`::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { border-radius: 8px; background: #0084cc; border: 1px solid #0084cc } ::-webkit-scrollbar-thumb:hover { background: #0084cc; border: 1px solid #0084cc, .6); }`))
  }
  reloadData() {
    this.dataLoading = false;
    this.showError = false;
    this.apiAnime.getInfoHome().then((info)=>{
      this.listPopulars = info.populars;
      this.listUploads = info.uploads;
      this.dataLoading = true;
    }).catch((error)=>{
      this.showError = true;
      this.dataLoading = true;
      console.log(error);
    });
  }
  openLink(url: string) {
    shell.openExternal(url);
  }
  openInfoAnime(url: string) { return this.fGlobal.openInfoAnime(url); }
}
