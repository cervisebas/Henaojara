import { Injectable } from '@angular/core';
import { listSearch, tableEmision1, InfoEmision1, infoPost, lists, infoListsHome, listSeasons, InfoData } from '../@types/ApiAnime';
import * as cheerio from 'cheerio';
import * as jQuery from 'jquery';

declare global {
    interface Window {
        apiAnime: ApiAnime
    }
}

@Injectable()
export class ApiAnime {
    constructor() { this.refreshData(); window.apiAnime = this; }
    private trlive: { loading: string, nonce: string, none: string, url: string } = { loading: '', nonce: '', none: '', url: '' };

    refreshData() {
        jQuery.get('https://henaojara.com/', {}, (html: string)=>{
            try {
                var trliveVar = html.slice(html.indexOf('var trlive = ') + 'var trlive = '.length, html.indexOf(';', html.indexOf('var trlive = ')));
                var trlive: { loading: string, nonce: string, none: string, url: string } = JSON.parse(trliveVar);
                this.trlive = trlive;
            } catch (error) {
                console.log(error);
            }
        });
    }
    getInfoEmision(): Promise<InfoEmision1> {
        return new Promise((resolve, reject)=>{
            jQuery.get('https://henaojara.com/ver/category/emision/', {}, (html: string)=>{
                try {
                    const $ = cheerio.load(html);
                    var table1: tableEmision1[] = [];
                    $('#tablepress-1 tbody').find('tr').each((_i: number, el)=>{
                        var monday, tuesday, wednesday, thursday, friday, saturday, sunday: infoPost | undefined;
                        if (String($(el).find('td.column-1').html()).length !== 0) monday = { image: String($(el).find('td.column-1 img').attr('src')), title: '', url: String($(el).find('td.column-1 a').attr('href')) };
                        if (String($(el).find('td.column-2').html()).length !== 0) tuesday = { image: String($(el).find('td.column-2 img').attr('src')), title: '', url: String($(el).find('td.column-2 a').attr('href')) };
                        if (String($(el).find('td.column-3').html()).length !== 0) wednesday = { image: String($(el).find('td.column-3 img').attr('src')), title: '', url: String($(el).find('td.column-3 a').attr('href')) };
                        if (String($(el).find('td.column-4').html()).length !== 0) thursday = { image: String($(el).find('td.column-4 img').attr('src')), title: '', url: String($(el).find('td.column-4 a').attr('href')) };
                        if (String($(el).find('td.column-5').html()).length !== 0) friday = { image: String($(el).find('td.column-5 img').attr('src')), title: '', url: String($(el).find('td.column-5 a').attr('href')) };
                        if (String($(el).find('td.column-6').html()).length !== 0) saturday = { image: String($(el).find('td.column-6 img').attr('src')), title: '', url: String($(el).find('td.column-6 a').attr('href')) };
                        if (String($(el).find('td.column-7').html()).length !== 0) sunday = { image: String($(el).find('td.column-7 img').attr('src')), title: '', url: String($(el).find('td.column-7 a').attr('href')) };
                        table1.push({ monday: monday, tuesday: tuesday, wednesday: wednesday, thursday: thursday, friday: friday, saturday: saturday, sunday: sunday });
                    });
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    var numPages: string[] = [];
                    $('div.wp-pagenavi').find('.page-numbers').not('a.next').each((_i: number, el): any=>numPages.push($(el).text()));
                    resolve({ table: table1, list: list, numPages: numPages });
                } catch (error) {
                    reject(error);
                }
            }).fail((error)=>reject(error));
        });
    }
    getMoreInfoEmision(page: string): Promise<infoPost[]> {
        return new Promise((resolve, reject)=>{
            jQuery.get(`https://henaojara.com/ver/category/emision/page/${page}/`, {}, (html)=>{
                try {
                    const $ = cheerio.load(html);
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve(list);
                } catch (error) {
                    reject(error);
                }
            }).fail((error)=>reject(error));
        });
    }

    getListAnime(): Promise<lists> {
        return new Promise((resolve, reject)=>{
            try {
                jQuery.get('https://henaojara.com/ver/category/categorias/', {}, (html)=>{
                    const $ = cheerio.load(html);
                    var pagesList0: string[] = [];
                    var pagesList1: string[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > div.wp-pagenavi').find('.page-numbers').not('.next.page-numbers').each((_i: number, el): any=>pagesList0.push($(el).text()));
                    jQuery.each([].constructor(parseInt((pagesList0.length !== 0)? pagesList0[pagesList0.length - 1] : '0')), (index: number, _value: any)=>pagesList1.push(String(Math.floor(index + 1))));
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve({ numPages: pagesList1, list: list });
                }).fail((error)=>reject(error));
            } catch (error) {
                reject(error);
            }
        });
    }
    getMoreListAnime(page: string): Promise<infoPost[]> {
        return new Promise((resolve, reject)=>{
            jQuery.get(`https://henaojara.com/ver/category/categorias/page/${page}/`, {}, (html)=>{
                try {
                    const $ = cheerio.load(html);
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve(list);
                } catch (error) {
                    reject(error);
                }
            }).fail((error)=>reject(error));
        });
    }
    getListMovies(): Promise<lists> {
        return new Promise((resolve, reject)=>{
            try {
                jQuery.get('https://henaojara.com/ver/category/pelicula/', {}, (html)=>{
                    const $ = cheerio.load(html);
                    var pagesList0: string[] = [];
                    var pagesList1: string[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > div.wp-pagenavi').find('.page-numbers').not('.next.page-numbers').each((_i: number, el): any=>pagesList0.push($(el).text()));
                    jQuery.each([].constructor(parseInt((pagesList0.length !== 0)? pagesList0[pagesList0.length - 1] : '0')), (index: number, _value: any)=>pagesList1.push(String(Math.floor(index + 1))));
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve({ numPages: pagesList1, list: list });
                }).fail((error)=>reject(error));
            } catch (error) {
                reject(error);
            }
        });
    }
    getMoreListMovies(page: string): Promise<infoPost[]> {
        return new Promise((resolve, reject)=>{
            jQuery.get(`https://henaojara.com/ver/category/pelicula/page/${page}/`, {}, (html)=>{
                try {
                    const $ = cheerio.load(html);
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve(list);
                } catch (error) {
                    reject(error);
                }
            }).fail((error)=>reject(error));
        });
    }
    getListEstrenos(): Promise<lists> {
        return new Promise((resolve, reject)=>{
            try {
                jQuery.get('https://henaojara.com/ver/category/estrenos/', {}, (html)=>{
                    const $ = cheerio.load(html);
                    var pagesList0: string[] = [];
                    var pagesList1: string[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > div.wp-pagenavi').find('.page-numbers').not('.next.page-numbers').each((_i: number, el): any=>pagesList0.push($(el).text()));
                    jQuery.each([].constructor(parseInt((pagesList0.length !== 0)? pagesList0[pagesList0.length - 1] : '0')), (index: number, _value: any)=>pagesList1.push(String(Math.floor(index + 1))));
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve({ numPages: pagesList1, list: list });
                }).fail((error)=>reject(error));
            } catch (error) {
                reject(error);
            }
        });
    }
    getMoreListEstrenos(page: string): Promise<infoPost[]> {
        return new Promise((resolve, reject)=>{
            jQuery.get(`https://henaojara.com/ver/category/estrenos/page/${page}/`, {}, (html)=>{
                try {
                    const $ = cheerio.load(html);
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve(list);
                } catch (error) {
                    reject(error);
                }
            }).fail((error)=>reject(error));
        });
    }
    getInfoHome(): Promise<infoListsHome> {
        return new Promise((resolve, reject)=>{
            try {
                jQuery.get('https://henaojara.com/', {}, (html)=>{
                    const $ = cheerio.load(html);
                    var populars: infoPost[] = [];
                    $("#Tp-Wp > div > div > div > div.TpRwCont > aside > div:nth-child(4) > ul").find('li').each((_i: number, el)=>{
                        var spanTitle: string = $(el).find('div.Title span').text().replace(/\n/gi, '');
                        populars.push({
                            title: $(el).find('div.Title').not('span').text().replace(/\n/gi, '').replace(spanTitle, '').trimEnd(),
                            image: String($(el).find('div.Image figure img').attr('src')).replace('92x138', '185x278'),
                            url: String($(el).find('div.TPost > a').attr('href')),
                            type: $(el).find('div.Title span').text(),
                            rank: $(el).find('span.Top').text()
                        });
                    });
                    var upload: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section:nth-child(4) > ul').find('li').each((_i: number, el)=>{
                        var spanType: string = $(el).find('div.Image figcaption span').text()+' - ';
                        upload.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')).replace('92x138', '185x278'),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text(),
                            extra: $(el).find('div.Image figcaption').text().replace(spanType, '')
                        });
                    });
                    resolve({
                        populars: populars,
                        uploads: upload
                    })
                });
            } catch (error) {
                reject(error);
            }
        });
    }
    searchType(search: string): Promise<listSearch[]> {
        return new Promise((resolve, reject)=>{
            jQuery.post(this.trlive.url, { nonce: this.trlive.nonce, action: 'tr_live', trsearch: search, type: 10 }, (html)=>{
                try {
                    const $ = cheerio.load(html);
                    var list: listSearch[] = [];
                    $('ul li').each((_i: number, el)=>{
                        list.push({
                            image: String($(el).find('div.Image img').attr('src')),
                            title: $(el).find('div.Title').text(),
                            url: String($(el).find('a').attr('href'))
                        });
                    });
                    resolve(list);
                } catch (error) {
                    reject(error);
                }
            }).fail((error)=>reject(error));
        });
    }
    getResultSearch(search: string): Promise<lists> {
        return new Promise((resolve, reject)=>{
            jQuery.get('https://henaojara.com/', { s: search }, (html)=>{
                try {
                    const $ = cheerio.load(html);
                    var pagesList0: string[] = [];
                    var pagesList1: string[] = [];
                    $("#Tp-Wp > div > div > div > div.TpRwCont > main > div.wp-pagenavi").find('.page-numbers').not('.next.page-numbers').each((_i: number, el): any=>pagesList0.push($(el).text()));
                    jQuery.each([].constructor(parseInt((pagesList0.length !== 0)? pagesList0[pagesList0.length - 1] : '0')), (index: number)=>pagesList1.push(String(Math.floor(index + 1))));
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        if (String($(el).find('article > a').attr('href')) == 'https://henaojara.com/donar-apoyar-la-pagina/' || String($(el).find('article > a').attr('href')) == 'https://henaojara.com/terminos-y-condiciones/') return;
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve({ numPages: pagesList1, list: list });
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
    getMoreResultSearch(search: string, page: string): Promise<infoPost[]> {
        return new Promise((resolve, reject)=>{
            jQuery.get(`https://henaojara.com/page/${page}/`, { s: search }, (html)=>{
                try {
                    const $ = cheerio.load(html);
                    var list: infoPost[] = [];
                    $('#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul').find('li').each((_i: number, el)=>{
                        list.push({
                            title: $(el).find('h3.Title').text(),
                            image: String($(el).find('div.Image img').attr('src')),
                            url: String($(el).find('article > a').attr('href')),
                            type: $(el).find('div.Image span').text()
                        });
                    });
                    resolve(list);
                } catch (error) {
                    reject(error);
                }
            }).fail((error)=>reject(error));
        });
    }
    async getUrlInfoMovie(url: string): Promise<string> {
        return new Promise((resolve, reject)=>{
            try {
                var xhr = new XMLHttpRequest();
                jQuery.ajax({
                    url: url,
                    method: 'GET',
                    xhr: ()=>xhr,
                    success: ()=>{
                        if (xhr.responseURL.indexOf('episode/') !== -1) {
                            var urlProcess: string = xhr.responseURL.replace('episode/', 'season/');
                            urlProcess = urlProcess.split("").reverse().join("");
                            urlProcess = urlProcess.replace('1x', '');
                            urlProcess = urlProcess.split("").reverse().join("");
                            resolve(urlProcess);
                        } else {
                            resolve(xhr.responseURL);
                        }
                    }
                }).fail((error)=>reject(error));
            } catch (error) {
                reject(error);
            }
        });
    }
    getInfoData(url: string): Promise<InfoData> {
        return new Promise((resolve, reject)=>{
            this.getUrlInfoMovie(url).then((urlProcess)=>{
                jQuery.get(urlProcess, {}, (html)=>{
                    try {
                        const $ = cheerio.load(html);
                        var description: string = $("#Tp-Wp > div > div > div > div.TpRwCont > main > article > header > div.Description").text();
                        var title: string = $("#Tp-Wp > div > div > div > div.TpRwCont > main > article > header > h1").text();
                        var status: string = $("#Tp-Wp > div > div > div > div.TpRwCont > main > article > header > div.SubTitle > span.Qlty").text();
                        var timeUpload: string = $("#Tp-Wp > div > div > div > div.TpRwCont > main > article > footer > p > span.Time.AAIco-access_time").text();
                        var views: string = $("#Tp-Wp > div > div > div > div.TpRwCont > main > article > footer > p > span.View.AAIco-remove_red_eye").text().replace(' visitas', '');
                        var image: string = String($("#Tp-Wp > div > div > div > div.TpRwCont > main > article > header > div.Image > figure > img").attr('src'));
                        var lists: listSeasons[] = [];
                        var genders: { title: string, url: string }[] = [];
                        $("#Tp-Wp > div > div > div > div.TpRwCont > main > div.Wdgt.AABox").each((i, el)=>{
                            var chapters: { title: string, image: string, url: string }[] = [];
                            $(el).find('table tr').each((_i2, el2):any=>chapters.push({ title: $(el2).find('td.MvTbTtl a').text(), image: String($(el2).find('td a img').attr('src')), url: String($(el2).find('td.MvTbTtl a').attr('href')) }));
                            lists.push({ title: `Temporada ${String(i+1)}`, chapters: chapters });
                        });
                        $("#MvTb-Info > ul > li:nth-child(3) > a").each((_i, el): any => genders.push({ title: $(el).text(), url: String($(el).attr('href')) }));
                        if (lists.length == 0 && urlProcess.indexOf('season/') !== -1) {
                            var temp1: string = String($("#Tp-Wp > div > div > div > div.TpRwCont > main > div.Wdgt").find('tr td.MvTbImg a').attr('href'));
                            var temp2: string = String($("#Tp-Wp > div > div > div > div.TpRwCont > main > div.Wdgt").find('tr td.MvTbImg a img').attr('src'));
                            var temp3: string = $("#Tp-Wp > div > div > div > div.TpRwCont > main > div.Wdgt").find('tr td.MvTbTtl a').text().replace(/\n/gi, '').trimStart().trimEnd();
                            lists.push({ title: 'Temporada 1', chapters: [{ title: temp3, url: temp1, image: temp2 }] });
                        }
                        resolve({
                            description: description.replace(/\n/gi, ''),
                            title: title,
                            status: (status == "EMISION")? true: false,
                            image: image,
                            timeUpload: timeUpload,
                            views: views,
                            lists: lists,
                            genders: genders
                        });
                    } catch (error) {
                        reject(error);
                    }
                }).fail((error)=>reject(error));
            }).catch((error)=>reject(error));
        });
    }
    getVideoServers(url: string) {
        return new Promise((resolve, reject)=>{
            try {
                jQuery.get(url, {}, (html)=>{
                    const $ = cheerio.load(html);
                    var servers: { title: string, url: string }[] = [];
                    $("div.TPlayer").find("div.TPlayerTb").each((_i, el)=>{
                        var iframe: string = String($(el).html());
                        var src: string = iframe.slice(iframe.indexOf('src="') + 'src="'.length, iframe.indexOf('" frameborder'));
                        var trembed: string = src.slice(src.indexOf('trembed=') + 'trembed='.length, src.indexOf('&', src.indexOf('trembed=')));
                        var trid: string = src.slice(src.indexOf('trid=') + 'trid='.length, src.indexOf('&', src.indexOf('trid=')));
                        var trtype: string = src.slice(src.indexOf('trtype=') + 'trtype='.length, src.length);
                        servers.push({
                            title: '',
                            url: `https://henaojara.com/?trembed=${trembed}&trid=${trid}&trtype=${trtype}`
                        });
                    });
                    $("ul.TPlayerNv").find('li.Button.STPb').each((i, el): any=>servers[i].title = $(el).text().replace(/\n/gi, '').trimStart().trimEnd());
                    resolve(servers);
                }).fail((error)=>reject(error));
            } catch (error) {
                reject(false);
            }
        });
    }
};