import { Injectable, ViewContainerRef } from "@angular/core";
import { InfoAnimeComponent } from "../@pages/info-anime/info-anime.component";
import { ApiAnime } from "./ApiAnime";
import * as $ from 'jquery';

declare global {
    interface Window {
      infoContent: ViewContainerRef
    }
};

@Injectable()
export class FGlobal {
    constructor(
        private apiAnime: ApiAnime
    ) {}

    private isOpenInfo: boolean = false;

    openInfoAnime(url: string) {
        return new Promise((resolve, reject)=>{
            try {
                $("div#load-viewer").fadeIn('fast');
                var urlProcess: string = (url.indexOf('/ver/') === -1)? url.replace('https://henaojara.com/', 'https://henaojara.com/ver/'): url;
                this.apiAnime.getInfoData(urlProcess).then((data)=>{
                    if (this.isOpenInfo) window.infoContent.clear();
                    this.isOpenInfo = true;
                    var ref = window.infoContent?.createComponent(InfoAnimeComponent);
                    ref.instance.description = data.description;
                    ref.instance.genders = data.genders;
                    ref.instance.image = data.image;
                    ref.instance.lists = data.lists;
                    ref.instance.status = data.status;
                    ref.instance.timeUpload = data.timeUpload;
                    ref.instance.title = data.title;
                    ref.instance.views = data.views;
                    ref.instance.close = ()=>$('#view-anime').fadeOut('fast', ()=>{ ref.destroy(); this.isOpenInfo = false; });
                    $('#view-anime').fadeIn('fast');
                    $("div#load-viewer").fadeOut('fast');
                    return resolve(true);
                }).catch((reason)=>reject(reason));
            } catch (error) {
                reject(error);
                $("div#load-viewer").fadeOut('fast');
            }
        });
    }
}