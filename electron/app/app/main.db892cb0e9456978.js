(global.webpackChunkHenaojara=global.webpackChunkHenaojara||[]).push([[179],{2523:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>ChatbroService});var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8702),jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(74),_notify_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1427);let ChatbroService=(()=>{class ChatbroService{constructor(W){this.notify=W,this.showError=!1,this.retryIntents=0}chatbroLoader(chats,async){return new Promise((resolve,reject)=>{var async1=!1!==async,params={embedChatsParameters:chats instanceof Array?chats:[chats],lang:navigator.language,needLoadCode:!0,embedParamsVersion:localStorage.embedParamsVersion,chatbroScriptVersion:localStorage.chatbroScriptVersion},processParams=btoa(unescape(encodeURIComponent(JSON.stringify(params))));jquery__WEBPACK_IMPORTED_MODULE_0__.ajax({url:`https://chatbro.com/embed.js?${processParams}`,method:"GET",data:{},xhrFields:{withCredentials:!0},async:async1,success:response=>{resolve(!0),eval(response)},error:W=>{reject(W)}})})}chatBroStart(W,r){this.chatbroLoader(W).then(()=>{this.showError&&(this.notify.push({title:"Chat en linea cargado.",body:`Se recupero el chat en l\xednea luego de ${String(this.retryIntents)} ${this.retryIntents>=1?"intento":"intentos"}.`}),this.retryIntents=0,this.showError=!1)}).catch(()=>{this.showError||(this.notify.push({title:"\xa1\xa1\xa1Atenci\xf3n!!!",body:"Ocurri\xf3 un error al cargar el chat en l\xednea."}),this.showError=!0),this.retryIntents+=1,setTimeout(()=>this.chatBroStart(W),1500)})}init(){this.chatBroStart({encodedChatId:"062UM",chatLanguage:"es",chatState:"minimized",chatBottom:"12px",chatRight:"12px",minimizedChatBorderRadius:"6px",minimizedChatBottom:"16px",minimizedChatRight:"16px",showChatBorder:!1,allowResizeChat:!1,minimizedChatTitle:"Chat"})}}return ChatbroService.\u0275fac=function W(r){return new(r||ChatbroService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LFG(_notify_service__WEBPACK_IMPORTED_MODULE_1__.c))},ChatbroService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_2__.Yz7({token:ChatbroService,factory:ChatbroService.\u0275fac,providedIn:"root"}),ChatbroService})()},1427:(W,r,o)=>{"use strict";o.d(r,{c:()=>f});var i=o(2298),V=o(74);let f=(()=>{class c{constructor(){}push(_){i.ipcRenderer.send("notify",_)}}return c.\u0275fac=function(_){return new(_||c)},c.\u0275prov=V.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},327:(W,r,o)=>{"use strict";var i=o(74);let H=null;function V(){return H}const _=new i.OlP("DocumentToken");let m=(()=>{class e{historyGo(t){throw new Error("Not implemented")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Yz7({token:e,factory:function(){return function d(){return(0,i.LFG)(x)}()},providedIn:"platform"}),e})();const u=new i.OlP("Location Initialized");let x=(()=>{class e extends m{constructor(t){super(),this._doc=t,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return V().getBaseHref(this._doc)}onPopState(t){const n=V().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){const n=V().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(t){this.location.pathname=t}pushState(t,n,v){M()?this._history.pushState(t,n,v):this.location.hash=v}replaceState(t,n,v){M()?this._history.replaceState(t,n,v):this.location.hash=v}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(_))},e.\u0275prov=i.Yz7({token:e,factory:function(){return function y(){return new x((0,i.LFG)(_))}()},providedIn:"platform"}),e})();function M(){return!!window.history.pushState}function w(e,a){if(0==e.length)return a;if(0==a.length)return e;let t=0;return e.endsWith("/")&&t++,a.startsWith("/")&&t++,2==t?e+a.substring(1):1==t?e+a:e+"/"+a}function T(e){const a=e.match(/#|\?|$/),t=a&&a.index||e.length;return e.slice(0,t-("/"===e[t-1]?1:0))+e.slice(t)}function E(e){return e&&"?"!==e[0]?"?"+e:e}let P=(()=>{class e{historyGo(t){throw new Error("Not implemented")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Yz7({token:e,factory:function(){return function $(e){const a=(0,i.LFG)(_).location;return new G((0,i.LFG)(m),a&&a.origin||"")}()},providedIn:"root"}),e})();const Z=new i.OlP("appBaseHref");let G=(()=>{class e extends P{constructor(t,n){if(super(),this._platformLocation=t,this._removeListenerFns=[],null==n&&(n=this._platformLocation.getBaseHrefFromDOM()),null==n)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=n}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return w(this._baseHref,t)}path(t=!1){const n=this._platformLocation.pathname+E(this._platformLocation.search),v=this._platformLocation.hash;return v&&t?`${n}${v}`:n}pushState(t,n,v,A){const S=this.prepareExternalUrl(v+E(A));this._platformLocation.pushState(t,n,S)}replaceState(t,n,v,A){const S=this.prepareExternalUrl(v+E(A));this._platformLocation.replaceState(t,n,S)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(t=0){var n,v;null===(v=(n=this._platformLocation).historyGo)||void 0===v||v.call(n,t)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(m),i.LFG(Z,8))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})(),j=(()=>{class e extends P{constructor(t,n){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],null!=n&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash;return null==n&&(n="#"),n.length>0?n.substring(1):n}prepareExternalUrl(t){const n=w(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,v,A){let S=this.prepareExternalUrl(v+E(A));0==S.length&&(S=this._platformLocation.pathname),this._platformLocation.pushState(t,n,S)}replaceState(t,n,v,A){let S=this.prepareExternalUrl(v+E(A));0==S.length&&(S=this._platformLocation.pathname),this._platformLocation.replaceState(t,n,S)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(t=0){var n,v;null===(v=(n=this._platformLocation).historyGo)||void 0===v||v.call(n,t)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(m),i.LFG(Z,8))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})(),U=(()=>{class e{constructor(t,n){this._subject=new i.vpe,this._urlChangeListeners=[],this._platformStrategy=t;const v=this._platformStrategy.getBaseHref();this._platformLocation=n,this._baseHref=T(r0(v)),this._platformStrategy.onPopState(A=>{this._subject.emit({url:this.path(!0),pop:!0,state:A.state,type:A.type})})}path(t=!1){return this.normalize(this._platformStrategy.path(t))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+E(n))}normalize(t){return e.stripTrailingSlash(function a0(e,a){return e&&a.startsWith(e)?a.substring(e.length):a}(this._baseHref,r0(t)))}prepareExternalUrl(t){return t&&"/"!==t[0]&&(t="/"+t),this._platformStrategy.prepareExternalUrl(t)}go(t,n="",v=null){this._platformStrategy.pushState(v,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+E(n)),v)}replaceState(t,n="",v=null){this._platformStrategy.replaceState(v,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+E(n)),v)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(t=0){var n,v;null===(v=(n=this._platformStrategy).historyGo)||void 0===v||v.call(n,t)}onUrlChange(t){this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}))}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(v=>v(t,n))}subscribe(t,n,v){return this._subject.subscribe({next:t,error:n,complete:v})}}return e.normalizeQueryParams=E,e.joinWithSlash=w,e.stripTrailingSlash=T,e.\u0275fac=function(t){return new(t||e)(i.LFG(P),i.LFG(m))},e.\u0275prov=i.Yz7({token:e,factory:function(){return function L(){return new U((0,i.LFG)(P),(0,i.LFG)(m))}()},providedIn:"root"}),e})();function r0(e){return e.replace(/\/index.html$/,"")}class X5{constructor(a,t,n,v){this.$implicit=a,this.ngForOf=t,this.index=n,this.count=v}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let R5=(()=>{class e{constructor(t,n,v){this._viewContainer=t,this._template=n,this._differs=v,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){const t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){const n=this._viewContainer;t.forEachOperation((v,A,S)=>{if(null==v.previousIndex)n.createEmbeddedView(this._template,new X5(v.item,this._ngForOf,-1,-1),null===S?void 0:S);else if(null==S)n.remove(null===A?void 0:A);else if(null!==A){const N=n.get(A);n.move(N,S),c5(N,v)}});for(let v=0,A=n.length;v<A;v++){const N=n.get(v).context;N.index=v,N.count=A,N.ngForOf=this._ngForOf}t.forEachIdentityChange(v=>{c5(n.get(v.currentIndex),v)})}static ngTemplateContextGuard(t,n){return!0}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.s_b),i.Y36(i.Rgc),i.Y36(i.ZZ4))},e.\u0275dir=i.lG2({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),e})();function c5(e,a){e.context.$implicit=a.item}let G2=(()=>{class e{constructor(t,n){this._viewContainer=t,this._context=new I2,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){m2("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){m2("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,n){return!0}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.s_b),i.Y36(i.Rgc))},e.\u0275dir=i.lG2({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),e})();class I2{constructor(){this.$implicit=null,this.ngIf=null}}function m2(e,a){if(a&&!a.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${(0,i.AaK)(a)}'.`)}let Tt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),e})();let Y=(()=>{class e{}return e.\u0275prov=(0,i.Yz7)({token:e,providedIn:"root",factory:()=>new h0((0,i.LFG)(_),window)}),e})();class h0{constructor(a,t){this.document=a,this.window=t,this.offset=()=>[0,0]}setOffset(a){this.offset=Array.isArray(a)?()=>a:a}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(a){this.supportsScrolling()&&this.window.scrollTo(a[0],a[1])}scrollToAnchor(a){if(!this.supportsScrolling())return;const t=function d0(e,a){const t=e.getElementById(a)||e.getElementsByName(a)[0];if(t)return t;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let v=n.currentNode;for(;v;){const A=v.shadowRoot;if(A){const S=A.getElementById(a)||A.querySelector(`[name="${a}"]`);if(S)return S}v=n.nextNode()}}return null}(this.document,a);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(a){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=a)}}scrollToElement(a){const t=a.getBoundingClientRect(),n=t.left+this.window.pageXOffset,v=t.top+this.window.pageYOffset,A=this.offset();this.window.scrollTo(n-A[0],v-A[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const a=s0(this.window.history)||s0(Object.getPrototypeOf(this.window.history));return!(!a||!a.writable&&!a.set)}catch(a){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(a){return!1}}}function s0(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}class B extends class T0 extends class p{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function c(e){H||(H=e)}(new B)}onAndCancel(a,t,n){return a.addEventListener(t,n,!1),()=>{a.removeEventListener(t,n,!1)}}dispatchEvent(a,t){a.dispatchEvent(t)}remove(a){a.parentNode&&a.parentNode.removeChild(a)}createElement(a,t){return(t=t||this.getDefaultDocument()).createElement(a)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(a){return a.nodeType===Node.ELEMENT_NODE}isShadowRoot(a){return a instanceof DocumentFragment}getGlobalEventTarget(a,t){return"window"===t?window:"document"===t?a:"body"===t?a.body:null}getBaseHref(a){const t=function I(){return k=k||document.querySelector("base"),k?k.getAttribute("href"):null}();return null==t?null:function X0(e){b0=b0||document.createElement("a"),b0.setAttribute("href",e);const a=b0.pathname;return"/"===a.charAt(0)?a:`/${a}`}(t)}resetBaseElement(){k=null}getUserAgent(){return window.navigator.userAgent}getCookie(a){return function G1(e,a){a=encodeURIComponent(a);for(const t of e.split(";")){const n=t.indexOf("="),[v,A]=-1==n?[t,""]:[t.slice(0,n),t.slice(n+1)];if(v.trim()===a)return decodeURIComponent(A)}return null}(document.cookie,a)}}let b0,k=null;const p1=new i.OlP("TRANSITION_ID"),C5=[{provide:i.ip1,useFactory:function g1(e,a,t){return()=>{t.get(i.CZH).donePromise.then(()=>{const n=V(),v=a.querySelectorAll(`style[ng-transition="${e}"]`);for(let A=0;A<v.length;A++)n.remove(v[A])})}},deps:[p1,_,i.zs3],multi:!0}];class H5{static init(){(0,i.VLi)(new H5)}addToWindow(a){i.dqk.getAngularTestability=(n,v=!0)=>{const A=a.findTestabilityInTree(n,v);if(null==A)throw new Error("Could not find testability for element.");return A},i.dqk.getAllAngularTestabilities=()=>a.getAllTestabilities(),i.dqk.getAllAngularRootElements=()=>a.getAllRootElements(),i.dqk.frameworkStabilizers||(i.dqk.frameworkStabilizers=[]),i.dqk.frameworkStabilizers.push(n=>{const v=i.dqk.getAllAngularTestabilities();let A=v.length,S=!1;const N=function(o0){S=S||o0,A--,0==A&&n(S)};v.forEach(function(o0){o0.whenStable(N)})})}findTestabilityInTree(a,t,n){if(null==t)return null;const v=a.getTestability(t);return null!=v?v:n?V().isShadowRoot(t)?this.findTestabilityInTree(a,t.host,!0):this.findTestabilityInTree(a,t.parentElement,!0):null}}let W2=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();const t5=new i.OlP("EventManagerPlugins");let I1=(()=>{class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(v=>v.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,n,v){return this._findPluginFor(n).addEventListener(t,n,v)}addGlobalEventListener(t,n,v){return this._findPluginFor(n).addGlobalEventListener(t,n,v)}getZone(){return this._zone}_findPluginFor(t){const n=this._eventNameToPlugin.get(t);if(n)return n;const v=this._plugins;for(let A=0;A<v.length;A++){const S=v[A];if(S.supports(t))return this._eventNameToPlugin.set(t,S),S}throw new Error(`No event manager plugin found for event ${t}`)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(t5),i.LFG(i.R0b))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();class z2{constructor(a){this._doc=a}addGlobalEventListener(a,t,n){const v=V().getGlobalEventTarget(this._doc,a);if(!v)throw new Error(`Unsupported event target ${v} for event ${t}`);return this.addEventListener(v,t,n)}}let m1=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(t){const n=new Set;t.forEach(v=>{this._stylesSet.has(v)||(this._stylesSet.add(v),n.add(v))}),this.onStylesAdded(n)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})(),b5=(()=>{class e extends m1{constructor(t){super(),this._doc=t,this._hostNodes=new Map,this._hostNodes.set(t.head,[])}_addStylesToHost(t,n,v){t.forEach(A=>{const S=this._doc.createElement("style");S.textContent=A,v.push(n.appendChild(S))})}addHost(t){const n=[];this._addStylesToHost(this._stylesSet,t,n),this._hostNodes.set(t,n)}removeHost(t){const n=this._hostNodes.get(t);n&&n.forEach(Xt),this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach((n,v)=>{this._addStylesToHost(t,v,n)})}ngOnDestroy(){this._hostNodes.forEach(t=>t.forEach(Xt))}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(_))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();function Xt(e){V().remove(e)}const Jt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},R2=/%COMP%/g;function N5(e,a,t){for(let n=0;n<a.length;n++){let v=a[n];Array.isArray(v)?N5(e,v,t):(v=v.replace(R2,e),t.push(v))}return t}function K7(e){return a=>{if("__ngUnwrap__"===a)return e;!1===e(a)&&(a.preventDefault(),a.returnValue=!1)}}let Q1=(()=>{class e{constructor(t,n,v){this.eventManager=t,this.sharedStylesHost=n,this.appId=v,this.rendererByCompId=new Map,this.defaultRenderer=new x7(t)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;switch(n.encapsulation){case i.ifc.Emulated:{let v=this.rendererByCompId.get(n.id);return v||(v=new u6(this.eventManager,this.sharedStylesHost,n,this.appId),this.rendererByCompId.set(n.id,v)),v.applyToHost(t),v}case 1:case i.ifc.ShadowDom:return new St(this.eventManager,this.sharedStylesHost,t,n);default:if(!this.rendererByCompId.has(n.id)){const v=N5(n.id,n.styles,[]);this.sharedStylesHost.addStyles(v),this.rendererByCompId.set(n.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(I1),i.LFG(b5),i.LFG(i.AFp))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();class x7{constructor(a){this.eventManager=a,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(a,t){return t?document.createElementNS(Jt[t]||t,a):document.createElement(a)}createComment(a){return document.createComment(a)}createText(a){return document.createTextNode(a)}appendChild(a,t){a.appendChild(t)}insertBefore(a,t,n){a&&a.insertBefore(t,n)}removeChild(a,t){a&&a.removeChild(t)}selectRootElement(a,t){let n="string"==typeof a?document.querySelector(a):a;if(!n)throw new Error(`The selector "${a}" did not match any elements`);return t||(n.textContent=""),n}parentNode(a){return a.parentNode}nextSibling(a){return a.nextSibling}setAttribute(a,t,n,v){if(v){t=v+":"+t;const A=Jt[v];A?a.setAttributeNS(A,t,n):a.setAttribute(t,n)}else a.setAttribute(t,n)}removeAttribute(a,t,n){if(n){const v=Jt[n];v?a.removeAttributeNS(v,t):a.removeAttribute(`${n}:${t}`)}else a.removeAttribute(t)}addClass(a,t){a.classList.add(t)}removeClass(a,t){a.classList.remove(t)}setStyle(a,t,n,v){v&(i.JOm.DashCase|i.JOm.Important)?a.style.setProperty(t,n,v&i.JOm.Important?"important":""):a.style[t]=n}removeStyle(a,t,n){n&i.JOm.DashCase?a.style.removeProperty(t):a.style[t]=""}setProperty(a,t,n){a[t]=n}setValue(a,t){a.nodeValue=t}listen(a,t,n){return"string"==typeof a?this.eventManager.addGlobalEventListener(a,t,K7(n)):this.eventManager.addEventListener(a,t,K7(n))}}class u6 extends x7{constructor(a,t,n,v){super(a),this.component=n;const A=N5(v+"-"+n.id,n.styles,[]);t.addStyles(A),this.contentAttr=function F1(e){return"_ngcontent-%COMP%".replace(R2,e)}(v+"-"+n.id),this.hostAttr=function W7(e){return"_nghost-%COMP%".replace(R2,e)}(v+"-"+n.id)}applyToHost(a){super.setAttribute(a,this.hostAttr,"")}createElement(a,t){const n=super.createElement(a,t);return super.setAttribute(n,this.contentAttr,""),n}}class St extends x7{constructor(a,t,n,v){super(a),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const A=N5(v.id,v.styles,[]);for(let S=0;S<A.length;S++){const N=document.createElement("style");N.textContent=A[S],this.shadowRoot.appendChild(N)}}nodeOrShadowRoot(a){return a===this.hostEl?this.shadowRoot:a}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(a,t){return super.appendChild(this.nodeOrShadowRoot(a),t)}insertBefore(a,t,n){return super.insertBefore(this.nodeOrShadowRoot(a),t,n)}removeChild(a,t){return super.removeChild(this.nodeOrShadowRoot(a),t)}parentNode(a){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(a)))}}let c4=(()=>{class e extends z2{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,v){return t.addEventListener(n,v,!1),()=>this.removeEventListener(t,n,v)}removeEventListener(t,n,v){return t.removeEventListener(n,v)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(_))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();const _2=["alt","control","meta","shift"],ee={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ot={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},g7={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let m6=(()=>{class e extends z2{constructor(t){super(t)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,v){const A=e.parseEventName(n),S=e.eventCallback(A.fullKey,v,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>V().onAndCancel(t,A.domEventName,S))}static parseEventName(t){const n=t.toLowerCase().split("."),v=n.shift();if(0===n.length||"keydown"!==v&&"keyup"!==v)return null;const A=e._normalizeKey(n.pop());let S="";if(_2.forEach(o0=>{const g0=n.indexOf(o0);g0>-1&&(n.splice(g0,1),S+=o0+".")}),S+=A,0!=n.length||0===A.length)return null;const N={};return N.domEventName=v,N.fullKey=S,N}static getEventFullKey(t){let n="",v=function he(e){let a=e.key;if(null==a){if(a=e.keyIdentifier,null==a)return"Unidentified";a.startsWith("U+")&&(a=String.fromCharCode(parseInt(a.substring(2),16)),3===e.location&&Ot.hasOwnProperty(a)&&(a=Ot[a]))}return ee[a]||a}(t);return v=v.toLowerCase()," "===v?v="space":"."===v&&(v="dot"),_2.forEach(A=>{A!=v&&g7[A](t)&&(n+=A+".")}),n+=v,n}static eventCallback(t,n,v){return A=>{e.getEventFullKey(A)===t&&v.runGuarded(()=>n(A))}}static _normalizeKey(t){return"esc"===t?"escape":t}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(_))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();const O7=(0,i.eFA)(i._c5,"browser",[{provide:i.Lbi,useValue:"browser"},{provide:i.g9A,useValue:function z6(){B.makeCurrent(),H5.init()},multi:!0},{provide:_,useFactory:function U4(){return(0,i.RDi)(document),document},deps:[]}]),H7=[{provide:i.zSh,useValue:"root"},{provide:i.qLn,useFactory:function C3(){return new i.qLn},deps:[]},{provide:t5,useClass:c4,multi:!0,deps:[_,i.R0b,i.Lbi]},{provide:t5,useClass:m6,multi:!0,deps:[_]},{provide:Q1,useClass:Q1,deps:[I1,b5,i.AFp]},{provide:i.FYo,useExisting:Q1},{provide:m1,useExisting:b5},{provide:b5,useClass:b5,deps:[_]},{provide:i.dDg,useClass:i.dDg,deps:[i.R0b]},{provide:I1,useClass:I1,deps:[t5,i.R0b]},{provide:class M0{},useClass:W2,deps:[]}];let se=(()=>{class e{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:i.AFp,useValue:t.appId},{provide:p1,useExisting:i.AFp},C5]}}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(e,12))},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({providers:H7,imports:[Tt,i.hGG]}),e})();"undefined"!=typeof window&&window;var U0=o(9942),W0=o(5796);class A1{constructor(a,t){this.id=a,this.url=t}}class Q5 extends A1{constructor(a,t,n="imperative",v=null){super(a,t),this.navigationTrigger=n,this.restoredState=v}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class J5 extends A1{constructor(a,t,n){super(a,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class r2 extends A1{constructor(a,t,n){super(a,t),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class O5 extends A1{constructor(a,t,n){super(a,t),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class D7 extends A1{constructor(a,t,n,v){super(a,t),this.urlAfterRedirects=n,this.state=v}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Dt extends A1{constructor(a,t,n,v){super(a,t),this.urlAfterRedirects=n,this.state=v}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class B2 extends A1{constructor(a,t,n,v,A){super(a,t),this.urlAfterRedirects=n,this.state=v,this.shouldActivate=A}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class lg extends A1{constructor(a,t,n,v){super(a,t),this.urlAfterRedirects=n,this.state=v}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class _s extends A1{constructor(a,t,n,v){super(a,t),this.urlAfterRedirects=n,this.state=v}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class x6{constructor(a){this.route=a}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class fs{constructor(a){this.route=a}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Jn{constructor(a){this.snapshot=a}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class K4{constructor(a){this.snapshot=a}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class H6{constructor(a){this.snapshot=a}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class A6{constructor(a){this.snapshot=a}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Y4{constructor(a,t,n){this.routerEvent=a,this.position=t,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}const J1="primary";class qn{constructor(a){this.params=a||{}}has(a){return Object.prototype.hasOwnProperty.call(this.params,a)}get(a){if(this.has(a)){const t=this.params[a];return Array.isArray(t)?t[0]:t}return null}getAll(a){if(this.has(a)){const t=this.params[a];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function E3(e){return new qn(e)}const V6="ngNavigationCancelingError";function re(e){const a=Error("NavigationCancelingError: "+e);return a[V6]=!0,a}function tl(e,a,t){const n=t.path.split("/");if(n.length>e.length||"full"===t.pathMatch&&(a.hasChildren()||n.length<e.length))return null;const v={};for(let A=0;A<n.length;A++){const S=n[A],N=e[A];if(S.startsWith(":"))v[S.substring(1)]=N;else if(S!==N.path)return null}return{consumed:e.slice(0,n.length),posParams:v}}function A7(e,a){const t=e?Object.keys(e):void 0,n=a?Object.keys(a):void 0;if(!t||!n||t.length!=n.length)return!1;let v;for(let A=0;A<t.length;A++)if(v=t[A],!w4(e[v],a[v]))return!1;return!0}function w4(e,a){if(Array.isArray(e)&&Array.isArray(a)){if(e.length!==a.length)return!1;const t=[...e].sort(),n=[...a].sort();return t.every((v,A)=>n[A]===v)}return e===a}function xs(e){return Array.prototype.concat.apply([],e)}function C6(e){return e.length>0?e[e.length-1]:null}function s2(e,a){for(const t in e)e.hasOwnProperty(t)&&a(e[t],t)}function dt(e){return(0,i.CqO)(e)?e:(0,i.QGY)(e)?(0,U0.from)(Promise.resolve(e)):(0,U0.of)(e)}const y6={exact:function L6(e,a,t){if(!u4(e.segments,a.segments)||!oe(e.segments,a.segments,t)||e.numberOfChildren!==a.numberOfChildren)return!1;for(const n in a.children)if(!e.children[n]||!L6(e.children[n],a.children[n],t))return!1;return!0},subset:O3},T3={exact:function p4(e,a){return A7(e,a)},subset:function B6(e,a){return Object.keys(a).length<=Object.keys(e).length&&Object.keys(a).every(t=>w4(e[t],a[t]))},ignored:()=>!0};function S3(e,a,t){return y6[t.paths](e.root,a.root,t.matrixParams)&&T3[t.queryParams](e.queryParams,a.queryParams)&&!("exact"===t.fragment&&e.fragment!==a.fragment)}function O3(e,a,t){return hl(e,a,a.segments,t)}function hl(e,a,t,n){if(e.segments.length>t.length){const v=e.segments.slice(0,t.length);return!(!u4(v,t)||a.hasChildren()||!oe(v,t,n))}if(e.segments.length===t.length){if(!u4(e.segments,t)||!oe(e.segments,t,n))return!1;for(const v in a.children)if(!e.children[v]||!O3(e.children[v],a.children[v],n))return!1;return!0}{const v=t.slice(0,e.segments.length),A=t.slice(e.segments.length);return!!(u4(e.segments,v)&&oe(e.segments,v,n)&&e.children[J1])&&hl(e.children[J1],a,A,n)}}function oe(e,a,t){return a.every((n,v)=>T3[t](e[v].parameters,n.parameters))}class T5{constructor(a,t,n){this.root=a,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=E3(this.queryParams)),this._queryParamMap}toString(){return Z4.serialize(this)}}class r5{constructor(a,t){this.segments=a,this.children=t,this.parent=null,s2(t,(n,v)=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return E6(this)}}class ce{constructor(a,t){this.path=a,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=E3(this.parameters)),this._parameterMap}toString(){return S6(this)}}function u4(e,a){return e.length===a.length&&e.every((t,n)=>t.path===a[n].path)}class sl{}class il{parse(a){const t=new V7(a);return new T5(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(a){const t=`/${q5(a.root,!0)}`,n=function Q4(e){const a=Object.keys(e).map(t=>{const n=e[t];return Array.isArray(n)?n.map(v=>`${e3(t)}=${e3(v)}`).join("&"):`${e3(t)}=${e3(n)}`}).filter(t=>!!t);return a.length?`?${a.join("&")}`:""}(a.queryParams);return`${t}${n}${"string"==typeof a.fragment?`#${function cg(e){return encodeURI(e)}(a.fragment)}`:""}`}}const Z4=new il;function E6(e){return e.segments.map(a=>S6(a)).join("/")}function q5(e,a){if(!e.hasChildren())return E6(e);if(a){const t=e.children[J1]?q5(e.children[J1],!1):"",n=[];return s2(e.children,(v,A)=>{A!==J1&&n.push(`${A}:${q5(v,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}{const t=function og(e,a){let t=[];return s2(e.children,(n,v)=>{v===J1&&(t=t.concat(a(n,v)))}),s2(e.children,(n,v)=>{v!==J1&&(t=t.concat(a(n,v)))}),t}(e,(n,v)=>v===J1?[q5(e.children[J1],!1)]:[`${v}:${q5(n,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[J1]?`${E6(e)}/${t[0]}`:`${E6(e)}/(${t.join("//")})`}}function ve(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function e3(e){return ve(e).replace(/%3B/gi,";")}function T6(e){return ve(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function h7(e){return decodeURIComponent(e)}function Z7(e){return h7(e.replace(/\+/g,"%20"))}function S6(e){return`${T6(e.path)}${function ge(e){return Object.keys(e).map(a=>`;${T6(a)}=${T6(e[a])}`).join("")}(e.parameters)}`}const Hs=/^[^\/()?;=#]+/;function de(e){const a=e.match(Hs);return a?a[0]:""}const nl=/^[^=?&#]+/,gg=/^[^&#]+/;class V7{constructor(a){this.url=a,this.remaining=a}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new r5([],{}):new r5([],this.parseChildren())}parseQueryParams(){const a={};if(this.consumeOptional("?"))do{this.parseQueryParam(a)}while(this.consumeOptional("&"));return a}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const a=[];for(this.peekStartsWith("(")||a.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),a.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(a.length>0||Object.keys(t).length>0)&&(n[J1]=new r5(a,t)),n}parseSegment(){const a=de(this.remaining);if(""===a&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(a),new ce(h7(a),this.parseMatrixParams())}parseMatrixParams(){const a={};for(;this.consumeOptional(";");)this.parseParam(a);return a}parseParam(a){const t=de(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const v=de(this.remaining);v&&(n=v,this.capture(n))}a[h7(t)]=h7(n)}parseQueryParam(a){const t=function vg(e){const a=e.match(nl);return a?a[0]:""}(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const S=function As(e){const a=e.match(gg);return a?a[0]:""}(this.remaining);S&&(n=S,this.capture(n))}const v=Z7(t),A=Z7(n);if(a.hasOwnProperty(v)){let S=a[v];Array.isArray(S)||(S=[S],a[v]=S),S.push(A)}else a[v]=A}parseParens(a){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=de(this.remaining),v=this.remaining[n.length];if("/"!==v&&")"!==v&&";"!==v)throw new Error(`Cannot parse url '${this.url}'`);let A;n.indexOf(":")>-1?(A=n.substr(0,n.indexOf(":")),this.capture(A),this.capture(":")):a&&(A=J1);const S=this.parseChildren();t[A]=1===Object.keys(S).length?S[J1]:new r5([],S),this.consumeOptional("//")}return t}peekStartsWith(a){return this.remaining.startsWith(a)}consumeOptional(a){return!!this.peekStartsWith(a)&&(this.remaining=this.remaining.substring(a.length),!0)}capture(a){if(!this.consumeOptional(a))throw new Error(`Expected "${a}".`)}}class we{constructor(a){this._root=a}get root(){return this._root.value}parent(a){const t=this.pathFromRoot(a);return t.length>1?t[t.length-2]:null}children(a){const t=h3(a,this._root);return t?t.children.map(n=>n.value):[]}firstChild(a){const t=h3(a,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(a){const t=Vs(a,this._root);return t.length<2?[]:t[t.length-2].children.map(v=>v.value).filter(v=>v!==a)}pathFromRoot(a){return Vs(a,this._root).map(t=>t.value)}}function h3(e,a){if(e===a.value)return a;for(const t of a.children){const n=h3(e,t);if(n)return n}return null}function Vs(e,a){if(e===a.value)return[a];for(const t of a.children){const n=Vs(e,t);if(n.length)return n.unshift(a),n}return[]}class wt{constructor(a,t){this.value=a,this.children=t}toString(){return`TreeNode(${this.value})`}}function m4(e){const a={};return e&&e.children.forEach(t=>a[t.value.outlet]=t),a}class Cs extends we{constructor(a,t){super(a),this.snapshot=t,I3(this,a)}toString(){return this.snapshot.toString()}}function bs(e,a){const t=function ll(e,a){const S=new D3([],{},{},"",{},J1,a,null,e.root,-1,{});return new rl("",new wt(S,[]))}(e,a),n=new U0.BehaviorSubject([new ce("",{})]),v=new U0.BehaviorSubject({}),A=new U0.BehaviorSubject({}),S=new U0.BehaviorSubject({}),N=new U0.BehaviorSubject(""),o0=new z4(n,v,S,N,A,J1,a,t.root);return o0.snapshot=t.root,new Cs(new wt(o0,[]),t)}class z4{constructor(a,t,n,v,A,S,N,o0){this.url=a,this.params=t,this.queryParams=n,this.fragment=v,this.data=A,this.outlet=S,this.component=N,this._futureSnapshot=o0}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,W0.UI)(a=>E3(a)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,W0.UI)(a=>E3(a)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function O6(e,a="emptyOnly"){const t=e.pathFromRoot;let n=0;if("always"!==a)for(n=t.length-1;n>=1;){const v=t[n],A=t[n-1];if(v.routeConfig&&""===v.routeConfig.path)n--;else{if(A.component)break;n--}}return function D6(e){return e.reduce((a,t)=>({params:Object.assign(Object.assign({},a.params),t.params),data:Object.assign(Object.assign({},a.data),t.data),resolve:Object.assign(Object.assign({},a.resolve),t._resolvedData)}),{params:{},data:{},resolve:{}})}(t.slice(n))}class D3{constructor(a,t,n,v,A,S,N,o0,g0,A0,E0){this.url=a,this.params=t,this.queryParams=n,this.fragment=v,this.data=A,this.outlet=S,this.component=N,this.routeConfig=o0,this._urlSegment=g0,this._lastPathIndex=A0,this._resolve=E0}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=E3(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=E3(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(n=>n.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class rl extends we{constructor(a,t){super(t),this.url=a,I3(this,t)}toString(){return pe(this._root)}}function I3(e,a){a.value._routerState=e,a.children.forEach(t=>I3(e,t))}function pe(e){const a=e.children.length>0?` { ${e.children.map(pe).join(", ")} } `:"";return`${e.value}${a}`}function _4(e){if(e.snapshot){const a=e.snapshot,t=e._futureSnapshot;e.snapshot=t,A7(a.queryParams,t.queryParams)||e.queryParams.next(t.queryParams),a.fragment!==t.fragment&&e.fragment.next(t.fragment),A7(a.params,t.params)||e.params.next(t.params),function al(e,a){if(e.length!==a.length)return!1;for(let t=0;t<e.length;++t)if(!A7(e[t],a[t]))return!1;return!0}(a.url,t.url)||e.url.next(t.url),A7(a.data,t.data)||e.data.next(t.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function I6(e,a){const t=A7(e.params,a.params)&&function rg(e,a){return u4(e,a)&&e.every((t,n)=>A7(t.parameters,a[n].parameters))}(e.url,a.url);return t&&!(!e.parent!=!a.parent)&&(!e.parent||I6(e.parent,a.parent))}function X4(e,a,t){if(t&&e.shouldReuseRoute(a.value,t.value.snapshot)){const n=t.value;n._futureSnapshot=a.value;const v=function ys(e,a,t){return a.children.map(n=>{for(const v of t.children)if(e.shouldReuseRoute(n.value,v.value.snapshot))return X4(e,n,v);return X4(e,n)})}(e,a,t);return new wt(n,v)}{if(e.shouldAttach(a.value)){const A=e.retrieve(a.value);if(null!==A){const S=A.route;return S.value._futureSnapshot=a.value,S.children=a.children.map(N=>X4(e,N)),S}}const n=function cl(e){return new z4(new U0.BehaviorSubject(e.url),new U0.BehaviorSubject(e.params),new U0.BehaviorSubject(e.queryParams),new U0.BehaviorSubject(e.fragment),new U0.BehaviorSubject(e.data),e.outlet,e.component,e)}(a.value),v=a.children.map(A=>X4(e,A));return new wt(n,v)}}function q4(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function ta(e){return"object"==typeof e&&null!=e&&e.outlets}function d2(e,a,t,n,v){let A={};return n&&s2(n,(S,N)=>{A[N]=Array.isArray(S)?S.map(o0=>`${o0}`):`${S}`}),new T5(t.root===e?a:P6(t.root,e,a),A,v)}function P6(e,a,t){const n={};return s2(e.children,(v,A)=>{n[A]=v===a?t:P6(v,a,t)}),new r5(e.segments,n)}class Ls{constructor(a,t,n){if(this.isAbsolute=a,this.numberOfDoubleDots=t,this.commands=n,a&&n.length>0&&q4(n[0]))throw new Error("Root segment cannot have matrix parameters");const v=n.find(ta);if(v&&v!==C6(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class P3{constructor(a,t,n){this.segmentGroup=a,this.processChildren=t,this.index=n}}function aa(e,a,t){if(e||(e=new r5([],{})),0===e.segments.length&&e.hasChildren())return s3(e,a,t);const n=function Bs(e,a,t){let n=0,v=a;const A={match:!1,pathIndex:0,commandIndex:0};for(;v<e.segments.length;){if(n>=t.length)return A;const S=e.segments[v],N=t[n];if(ta(N))break;const o0=`${N}`,g0=n<t.length-1?t[n+1]:null;if(v>0&&void 0===o0)break;if(o0&&g0&&"object"==typeof g0&&void 0===g0.outlets){if(!ue(o0,g0,S))return A;n+=2}else{if(!ue(o0,{},S))return A;n++}v++}return{match:!0,pathIndex:v,commandIndex:n}}(e,a,t),v=t.slice(n.commandIndex);if(n.match&&n.pathIndex<e.segments.length){const A=new r5(e.segments.slice(0,n.pathIndex),{});return A.children[J1]=new r5(e.segments.slice(n.pathIndex),e.children),s3(A,0,v)}return n.match&&0===v.length?new r5(e.segments,{}):n.match&&!e.hasChildren()?k3(e,a,t):n.match?s3(e,0,v):k3(e,a,t)}function s3(e,a,t){if(0===t.length)return new r5(e.segments,{});{const n=function dl(e){return ta(e[0])?e[0].outlets:{[J1]:e}}(t),v={};return s2(n,(A,S)=>{"string"==typeof A&&(A=[A]),null!==A&&(v[S]=aa(e.children[S],a,A))}),s2(e.children,(A,S)=>{void 0===n[S]&&(v[S]=A)}),new r5(e.segments,v)}}function k3(e,a,t){const n=e.segments.slice(0,a);let v=0;for(;v<t.length;){const A=t[v];if(ta(A)){const o0=wl(A.outlets);return new r5(n,o0)}if(0===v&&q4(t[0])){n.push(new ce(e.segments[a].path,R6(t[0]))),v++;continue}const S=ta(A)?A.outlets[J1]:`${A}`,N=v<t.length-1?t[v+1]:null;S&&N&&q4(N)?(n.push(new ce(S,R6(N))),v+=2):(n.push(new ce(S,{})),v++)}return new r5(n,{})}function wl(e){const a={};return s2(e,(t,n)=>{"string"==typeof t&&(t=[t]),null!==t&&(a[n]=k3(new r5([],{}),0,t))}),a}function R6(e){const a={};return s2(e,(t,n)=>a[n]=`${t}`),a}function ue(e,a,t){return e==t.path&&A7(a,t.parameters)}class Es{constructor(a,t,n,v){this.routeReuseStrategy=a,this.futureState=t,this.currState=n,this.forwardEvent=v}activate(a){const t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,a),_4(this.futureState.root),this.activateChildRoutes(t,n,a)}deactivateChildRoutes(a,t,n){const v=m4(t);a.children.forEach(A=>{const S=A.value.outlet;this.deactivateRoutes(A,v[S],n),delete v[S]}),s2(v,(A,S)=>{this.deactivateRouteAndItsChildren(A,n)})}deactivateRoutes(a,t,n){const v=a.value,A=t?t.value:null;if(v===A)if(v.component){const S=n.getContext(v.outlet);S&&this.deactivateChildRoutes(a,t,S.children)}else this.deactivateChildRoutes(a,t,n);else A&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(a,t){a.value.component&&this.routeReuseStrategy.shouldDetach(a.value.snapshot)?this.detachAndStoreRouteSubtree(a,t):this.deactivateRouteAndOutlet(a,t)}detachAndStoreRouteSubtree(a,t){const n=t.getContext(a.value.outlet),v=n&&a.value.component?n.children:t,A=m4(a);for(const S of Object.keys(A))this.deactivateRouteAndItsChildren(A[S],v);if(n&&n.outlet){const S=n.outlet.detach(),N=n.children.onOutletDeactivated();this.routeReuseStrategy.store(a.value.snapshot,{componentRef:S,route:a,contexts:N})}}deactivateRouteAndOutlet(a,t){const n=t.getContext(a.value.outlet),v=n&&a.value.component?n.children:t,A=m4(a);for(const S of Object.keys(A))this.deactivateRouteAndItsChildren(A[S],v);n&&n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated(),n.attachRef=null,n.resolver=null,n.route=null)}activateChildRoutes(a,t,n){const v=m4(t);a.children.forEach(A=>{this.activateRoutes(A,v[A.value.outlet],n),this.forwardEvent(new A6(A.value.snapshot))}),a.children.length&&this.forwardEvent(new K4(a.value.snapshot))}activateRoutes(a,t,n){const v=a.value,A=t?t.value:null;if(_4(v),v===A)if(v.component){const S=n.getOrCreateContext(v.outlet);this.activateChildRoutes(a,t,S.children)}else this.activateChildRoutes(a,t,n);else if(v.component){const S=n.getOrCreateContext(v.outlet);if(this.routeReuseStrategy.shouldAttach(v.snapshot)){const N=this.routeReuseStrategy.retrieve(v.snapshot);this.routeReuseStrategy.store(v.snapshot,null),S.children.onOutletReAttached(N.contexts),S.attachRef=N.componentRef,S.route=N.route.value,S.outlet&&S.outlet.attach(N.componentRef,N.route.value),_4(N.route.value),this.activateChildRoutes(a,null,S.children)}else{const N=function pl(e){for(let a=e.parent;a;a=a.parent){const t=a.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig;if(t&&t.component)return null}return null}(v.snapshot),o0=N?N.module.componentFactoryResolver:null;S.attachRef=null,S.route=v,S.resolver=o0,S.outlet&&S.outlet.activateWith(v,o0),this.activateChildRoutes(a,null,S.children)}}else this.activateChildRoutes(a,null,n)}}class N6{constructor(a,t){this.routes=a,this.module=t}}function C7(e){return"function"==typeof e}function R3(e){return e instanceof T5}const ha=Symbol("INITIAL_VALUE");function sa(){return(0,W0.wt)(e=>(0,U0.combineLatest)(e.map(a=>a.pipe((0,W0.qn)(1),(0,W0.O4)(ha)))).pipe((0,W0.Rp)((a,t)=>{let n=!1;return t.reduce((v,A,S)=>v!==ha?v:(A===ha&&(n=!0),n||!1!==A&&S!==t.length-1&&!R3(A)?v:A),a)},ha),(0,W0.hX)(a=>a!==ha),(0,W0.UI)(a=>R3(a)?a:!0===a),(0,W0.qn)(1)))}class ml{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new i3,this.attachRef=null}}class i3{constructor(){this.contexts=new Map}onChildOutletCreated(a,t){const n=this.getOrCreateContext(a);n.outlet=t,this.contexts.set(a,n)}onChildOutletDestroyed(a){const t=this.getContext(a);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){const a=this.contexts;return this.contexts=new Map,a}onOutletReAttached(a){this.contexts=a}getOrCreateContext(a){let t=this.getContext(a);return t||(t=new ml,this.contexts.set(a,t)),t}getContext(a){return this.contexts.get(a)||null}}let ze=(()=>{class e{constructor(t,n,v,A,S){this.parentContexts=t,this.location=n,this.resolver=v,this.changeDetector=S,this.activated=null,this._activatedRoute=null,this.activateEvents=new i.vpe,this.deactivateEvents=new i.vpe,this.attachEvents=new i.vpe,this.detachEvents=new i.vpe,this.name=A||J1,t.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const t=this.parentContexts.getContext(this.name);t&&t.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=t;const S=(n=n||this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),N=this.parentContexts.getOrCreateContext(this.name).children,o0=new f4(t,N,this.location.injector);this.activated=this.location.createComponent(S,this.location.length,o0),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i3),i.Y36(i.s_b),i.Y36(i._Vd),i.$8M("name"),i.Y36(i.sBO))},e.\u0275dir=i.lG2({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),e})();class f4{constructor(a,t,n){this.route=a,this.childContexts=t,this.parent=n}get(a,t){return a===z4?this.route:a===i3?this.childContexts:this.parent.get(a,t)}}let Ss=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(t,n){1&t&&i._UZ(0,"router-outlet")},directives:[ze],encapsulation:2}),e})();function Os(e,a=""){for(let t=0;t<e.length;t++){const n=e[t];pg(n,_e(a,n))}}function pg(e,a){e.children&&Os(e.children,a)}function _e(e,a){return a?e||a.path?e&&!a.path?`${e}/`:!e&&a.path?a.path:`${e}/${a.path}`:"":e}function ia(e){const a=e.children&&e.children.map(ia),t=a?Object.assign(Object.assign({},e),{children:a}):Object.assign({},e);return!t.component&&(a||t.loadChildren)&&t.outlet&&t.outlet!==J1&&(t.component=Ss),t}function b7(e){return e.outlet||J1}function F6(e,a){const t=e.filter(n=>b7(n)===a);return t.push(...e.filter(n=>b7(n)!==a)),t}const j6={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function na(e,a,t){var n;if(""===a.path)return"full"===a.pathMatch&&(e.hasChildren()||t.length>0)?Object.assign({},j6):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};const A=(a.matcher||tl)(t,e,a);if(!A)return Object.assign({},j6);const S={};s2(A.posParams,(o0,g0)=>{S[g0]=o0.path});const N=A.consumed.length>0?Object.assign(Object.assign({},S),A.consumed[A.consumed.length-1].parameters):S;return{matched:!0,consumedSegments:A.consumed,remainingSegments:t.slice(A.consumed.length),parameters:N,positionalParamSegments:null!==(n=A.posParams)&&void 0!==n?n:{}}}function fe(e,a,t,n,v="corrected"){if(t.length>0&&function fl(e,a,t){return t.some(n=>Q7(e,a,n)&&b7(n)!==J1)}(e,t,n)){const S=new r5(a,function _l(e,a,t,n){const v={};v[J1]=n,n._sourceSegment=e,n._segmentIndexShift=a.length;for(const A of t)if(""===A.path&&b7(A)!==J1){const S=new r5([],{});S._sourceSegment=e,S._segmentIndexShift=a.length,v[b7(A)]=S}return v}(e,a,n,new r5(t,e.children)));return S._sourceSegment=e,S._segmentIndexShift=a.length,{segmentGroup:S,slicedSegments:[]}}if(0===t.length&&function Ml(e,a,t){return t.some(n=>Q7(e,a,n))}(e,t,n)){const S=new r5(e.segments,function zl(e,a,t,n,v,A){const S={};for(const N of n)if(Q7(e,t,N)&&!v[b7(N)]){const o0=new r5([],{});o0._sourceSegment=e,o0._segmentIndexShift="legacy"===A?e.segments.length:a.length,S[b7(N)]=o0}return Object.assign(Object.assign({},v),S)}(e,a,t,n,e.children,v));return S._sourceSegment=e,S._segmentIndexShift=a.length,{segmentGroup:S,slicedSegments:t}}const A=new r5(e.segments,e.children);return A._sourceSegment=e,A._segmentIndexShift=a.length,{segmentGroup:A,slicedSegments:t}}function Q7(e,a,t){return(!(e.hasChildren()||a.length>0)||"full"!==t.pathMatch)&&""===t.path}function M4(e,a,t,n){return!!(b7(e)===n||n!==J1&&Q7(a,t,e))&&("**"===e.path||na(a,e,t).matched)}function Ds(e,a,t){return 0===a.length&&!e.children[t]}class Me{constructor(a){this.segmentGroup=a||null}}class xl{constructor(a){this.urlTree=a}}function $6(e){return(0,U0.throwError)(new Me(e))}function Hl(e){return(0,U0.throwError)(new xl(e))}class Vl{constructor(a,t,n,v,A){this.configLoader=t,this.urlSerializer=n,this.urlTree=v,this.config=A,this.allowRedirects=!0,this.ngModule=a.get(i.h0i)}apply(){const a=fe(this.urlTree.root,[],[],this.config).segmentGroup,t=new r5(a.segments,a.children);return this.expandSegmentGroup(this.ngModule,this.config,t,J1).pipe((0,W0.UI)(A=>this.createUrlTree(U6(A),this.urlTree.queryParams,this.urlTree.fragment))).pipe((0,W0.KQ)(A=>{if(A instanceof xl)return this.allowRedirects=!1,this.match(A.urlTree);throw A instanceof Me?this.noMatchError(A):A}))}match(a){return this.expandSegmentGroup(this.ngModule,this.config,a.root,J1).pipe((0,W0.UI)(v=>this.createUrlTree(U6(v),a.queryParams,a.fragment))).pipe((0,W0.KQ)(v=>{throw v instanceof Me?this.noMatchError(v):v}))}noMatchError(a){return new Error(`Cannot match any routes. URL Segment: '${a.segmentGroup}'`)}createUrlTree(a,t,n){const v=a.segments.length>0?new r5([],{[J1]:a}):a;return new T5(v,t,n)}expandSegmentGroup(a,t,n,v){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(a,t,n).pipe((0,W0.UI)(A=>new r5([],A))):this.expandSegment(a,n,t,n.segments,v,!0)}expandChildren(a,t,n){const v=[];for(const A of Object.keys(n.children))"primary"===A?v.unshift(A):v.push(A);return(0,U0.from)(v).pipe((0,W0.bJ)(A=>{const S=n.children[A],N=F6(t,A);return this.expandSegmentGroup(a,N,S,A).pipe((0,W0.UI)(o0=>({segment:o0,outlet:A})))}),(0,W0.Rp)((A,S)=>(A[S.outlet]=S.segment,A),{}),(0,W0.Z$)())}expandSegment(a,t,n,v,A,S){return(0,U0.from)(n).pipe((0,W0.bJ)(N=>this.expandSegmentAgainstRoute(a,t,n,N,v,A,S).pipe((0,W0.KQ)(g0=>{if(g0 instanceof Me)return(0,U0.of)(null);throw g0}))),(0,W0.Ps)(N=>!!N),(0,W0.KQ)((N,o0)=>{if(N instanceof U0.EmptyError||"EmptyError"===N.name){if(Ds(t,v,A))return(0,U0.of)(new r5([],{}));throw new Me(t)}throw N}))}expandSegmentAgainstRoute(a,t,n,v,A,S,N){return M4(v,t,A,S)?void 0===v.redirectTo?this.matchSegmentAgainstRoute(a,t,v,A,S):N&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(a,t,n,v,A,S):$6(t):$6(t)}expandSegmentAgainstRouteUsingRedirect(a,t,n,v,A,S){return"**"===v.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(a,n,v,S):this.expandRegularSegmentAgainstRouteUsingRedirect(a,t,n,v,A,S)}expandWildCardWithParamsAgainstRouteUsingRedirect(a,t,n,v){const A=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?Hl(A):this.lineralizeSegments(n,A).pipe((0,W0.zg)(S=>{const N=new r5(S,{});return this.expandSegment(a,N,t,S,v,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(a,t,n,v,A,S){const{matched:N,consumedSegments:o0,remainingSegments:g0,positionalParamSegments:A0}=na(t,v,A);if(!N)return $6(t);const E0=this.applyRedirectCommands(o0,v.redirectTo,A0);return v.redirectTo.startsWith("/")?Hl(E0):this.lineralizeSegments(v,E0).pipe((0,W0.zg)(j0=>this.expandSegment(a,t,n,j0.concat(g0),S,!1)))}matchSegmentAgainstRoute(a,t,n,v,A){if("**"===n.path)return n.loadChildren?(n._loadedConfig?(0,U0.of)(n._loadedConfig):this.configLoader.load(a.injector,n)).pipe((0,W0.UI)(E0=>(n._loadedConfig=E0,new r5(v,{})))):(0,U0.of)(new r5(v,{}));const{matched:S,consumedSegments:N,remainingSegments:o0}=na(t,n,v);return S?this.getChildConfig(a,n,v).pipe((0,W0.zg)(A0=>{const E0=A0.module,j0=A0.routes,{segmentGroup:s1,slicedSegments:M1}=fe(t,N,o0,j0),O1=new r5(s1.segments,s1.children);if(0===M1.length&&O1.hasChildren())return this.expandChildren(E0,j0,O1).pipe((0,W0.UI)($2=>new r5(N,$2)));if(0===j0.length&&0===M1.length)return(0,U0.of)(new r5(N,{}));const q1=b7(n)===A;return this.expandSegment(E0,O1,j0,M1,q1?J1:A,!0).pipe((0,W0.UI)($1=>new r5(N.concat($1.segments),$1.children)))})):$6(t)}getChildConfig(a,t,n){return t.children?(0,U0.of)(new N6(t.children,a)):t.loadChildren?void 0!==t._loadedConfig?(0,U0.of)(t._loadedConfig):this.runCanLoadGuards(a.injector,t,n).pipe((0,W0.zg)(v=>v?this.configLoader.load(a.injector,t).pipe((0,W0.UI)(A=>(t._loadedConfig=A,A))):function Is(e){return(0,U0.throwError)(re(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`))}(t))):(0,U0.of)(new N6([],a))}runCanLoadGuards(a,t,n){const v=t.canLoad;if(!v||0===v.length)return(0,U0.of)(!0);const A=v.map(S=>{const N=a.get(S);let o0;if(function dg(e){return e&&C7(e.canLoad)}(N))o0=N.canLoad(t,n);else{if(!C7(N))throw new Error("Invalid CanLoad guard");o0=N(t,n)}return dt(o0)});return(0,U0.of)(A).pipe(sa(),(0,W0.bw)(S=>{if(!R3(S))return;const N=re(`Redirecting to "${this.urlSerializer.serialize(S)}"`);throw N.url=S,N}),(0,W0.UI)(S=>!0===S))}lineralizeSegments(a,t){let n=[],v=t.root;for(;;){if(n=n.concat(v.segments),0===v.numberOfChildren)return(0,U0.of)(n);if(v.numberOfChildren>1||!v.children[J1])return(0,U0.throwError)(new Error(`Only absolute redirects can have named outlets. redirectTo: '${a.redirectTo}'`));v=v.children[J1]}}applyRedirectCommands(a,t,n){return this.applyRedirectCreatreUrlTree(t,this.urlSerializer.parse(t),a,n)}applyRedirectCreatreUrlTree(a,t,n,v){const A=this.createSegmentGroup(a,t.root,n,v);return new T5(A,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(a,t){const n={};return s2(a,(v,A)=>{if("string"==typeof v&&v.startsWith(":")){const N=v.substring(1);n[A]=t[N]}else n[A]=v}),n}createSegmentGroup(a,t,n,v){const A=this.createSegments(a,t.segments,n,v);let S={};return s2(t.children,(N,o0)=>{S[o0]=this.createSegmentGroup(a,N,n,v)}),new r5(A,S)}createSegments(a,t,n,v){return t.map(A=>A.path.startsWith(":")?this.findPosParam(a,A,v):this.findOrReturn(A,n))}findPosParam(a,t,n){const v=n[t.path.substring(1)];if(!v)throw new Error(`Cannot redirect to '${a}'. Cannot find '${t.path}'.`);return v}findOrReturn(a,t){let n=0;for(const v of t){if(v.path===a.path)return t.splice(n),v;n++}return a}}function U6(e){const a={};for(const n of Object.keys(e.children)){const A=U6(e.children[n]);(A.segments.length>0||A.hasChildren())&&(a[n]=A)}return function Cl(e){if(1===e.numberOfChildren&&e.children[J1]){const a=e.children[J1];return new r5(e.segments.concat(a.segments),a.children)}return e}(new r5(e.segments,a))}class Ps{constructor(a){this.path=a,this.route=this.path[this.path.length-1]}}class N3{constructor(a,t){this.component=a,this.route=t}}function ks(e,a,t){const n=e._root;return x4(n,a?a._root:null,t,[n.value])}function n3(e,a,t){const n=function Rs(e){if(!e)return null;for(let a=e.parent;a;a=a.parent){const t=a.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig}return null}(a);return(n?n.module.injector:t).get(e)}function x4(e,a,t,n,v={canDeactivateChecks:[],canActivateChecks:[]}){const A=m4(a);return e.children.forEach(S=>{(function Ns(e,a,t,n,v={canDeactivateChecks:[],canActivateChecks:[]}){const A=e.value,S=a?a.value:null,N=t?t.getContext(e.value.outlet):null;if(S&&A.routeConfig===S.routeConfig){const o0=function zg(e,a,t){if("function"==typeof t)return t(e,a);switch(t){case"pathParamsChange":return!u4(e.url,a.url);case"pathParamsOrQueryParamsChange":return!u4(e.url,a.url)||!A7(e.queryParams,a.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!I6(e,a)||!A7(e.queryParams,a.queryParams);default:return!I6(e,a)}}(S,A,A.routeConfig.runGuardsAndResolvers);o0?v.canActivateChecks.push(new Ps(n)):(A.data=S.data,A._resolvedData=S._resolvedData),x4(e,a,A.component?N?N.children:null:t,n,v),o0&&N&&N.outlet&&N.outlet.isActivated&&v.canDeactivateChecks.push(new N3(N.outlet.component,S))}else S&&xe(a,N,v),v.canActivateChecks.push(new Ps(n)),x4(e,null,A.component?N?N.children:null:t,n,v)})(S,A[S.value.outlet],t,n.concat([S.value]),v),delete A[S.value.outlet]}),s2(A,(S,N)=>xe(S,t.getContext(N),v)),v}function xe(e,a,t){const n=m4(e),v=e.value;s2(n,(A,S)=>{xe(A,v.component?a?a.children.getContext(S):null:a,t)}),t.canDeactivateChecks.push(new N3(v.component&&a&&a.outlet&&a.outlet.isActivated?a.outlet.component:null,v))}class yl{}function js(e){return new U0.Observable(a=>a.error(e))}class $s{constructor(a,t,n,v,A,S){this.rootComponentType=a,this.config=t,this.urlTree=n,this.url=v,this.paramsInheritanceStrategy=A,this.relativeLinkResolution=S}recognize(){const a=fe(this.urlTree.root,[],[],this.config.filter(S=>void 0===S.redirectTo),this.relativeLinkResolution).segmentGroup,t=this.processSegmentGroup(this.config,a,J1);if(null===t)return null;const n=new D3([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},J1,this.rootComponentType,null,this.urlTree.root,-1,{}),v=new wt(n,t),A=new rl(this.url,v);return this.inheritParamsAndData(A._root),A}inheritParamsAndData(a){const t=a.value,n=O6(t,this.paramsInheritanceStrategy);t.params=Object.freeze(n.params),t.data=Object.freeze(n.data),a.children.forEach(v=>this.inheritParamsAndData(v))}processSegmentGroup(a,t,n){return 0===t.segments.length&&t.hasChildren()?this.processChildren(a,t):this.processSegment(a,t,t.segments,n)}processChildren(a,t){const n=[];for(const A of Object.keys(t.children)){const S=t.children[A],N=F6(a,A),o0=this.processSegmentGroup(N,S,A);if(null===o0)return null;n.push(...o0)}const v=Us(n);return function He(e){e.sort((a,t)=>a.value.outlet===J1?-1:t.value.outlet===J1?1:a.value.outlet.localeCompare(t.value.outlet))}(v),v}processSegment(a,t,n,v){for(const A of a){const S=this.processSegmentAgainstRoute(A,t,n,v);if(null!==S)return S}return Ds(t,n,v)?[]:null}processSegmentAgainstRoute(a,t,n,v){if(a.redirectTo||!M4(a,t,n,v))return null;let A,S=[],N=[];if("**"===a.path){const s1=n.length>0?C6(n).parameters:{};A=new D3(n,s1,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ae(a),b7(a),a.component,a,Gs(t),Ws(t)+n.length,Z6(a))}else{const s1=na(t,a,n);if(!s1.matched)return null;S=s1.consumedSegments,N=s1.remainingSegments,A=new D3(S,s1.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ae(a),b7(a),a.component,a,Gs(t),Ws(t)+S.length,Z6(a))}const o0=function Bl(e){return e.children?e.children:e.loadChildren?e._loadedConfig.routes:[]}(a),{segmentGroup:g0,slicedSegments:A0}=fe(t,S,N,o0.filter(s1=>void 0===s1.redirectTo),this.relativeLinkResolution);if(0===A0.length&&g0.hasChildren()){const s1=this.processChildren(o0,g0);return null===s1?null:[new wt(A,s1)]}if(0===o0.length&&0===A0.length)return[new wt(A,[])];const E0=b7(a)===v,j0=this.processSegment(o0,g0,A0,E0?J1:v);return null===j0?null:[new wt(A,j0)]}}function Y6(e){const a=e.value.routeConfig;return a&&""===a.path&&void 0===a.redirectTo}function Us(e){const a=[],t=new Set;for(const n of e){if(!Y6(n)){a.push(n);continue}const v=a.find(A=>n.value.routeConfig===A.value.routeConfig);void 0!==v?(v.children.push(...n.children),t.add(v)):a.push(n)}for(const n of t){const v=Us(n.children);a.push(new wt(n.value,v))}return a.filter(n=>!t.has(n))}function Gs(e){let a=e;for(;a._sourceSegment;)a=a._sourceSegment;return a}function Ws(e){let a=e,t=a._segmentIndexShift?a._segmentIndexShift:0;for(;a._sourceSegment;)a=a._sourceSegment,t+=a._segmentIndexShift?a._segmentIndexShift:0;return t-1}function Ae(e){return e.data||{}}function Z6(e){return e.resolve||{}}function Ks(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ys(e){return(0,W0.wt)(a=>{const t=e(a);return t?(0,U0.from)(t).pipe((0,W0.UI)(()=>a)):(0,U0.of)(a)})}class Q6 extends class s7{shouldDetach(a){return!1}store(a,t){}shouldAttach(a){return!1}retrieve(a){return null}shouldReuseRoute(a,t){return a.routeConfig===t.routeConfig}}{}const Ve=new i.OlP("ROUTES");class X6{constructor(a,t,n,v){this.injector=a,this.compiler=t,this.onLoadStartListener=n,this.onLoadEndListener=v}load(a,t){if(t._loader$)return t._loader$;this.onLoadStartListener&&this.onLoadStartListener(t);const v=this.loadModuleFactory(t.loadChildren).pipe((0,W0.UI)(A=>{this.onLoadEndListener&&this.onLoadEndListener(t);const S=A.create(a);return new N6(xs(S.injector.get(Ve,void 0,i.XFs.Self|i.XFs.Optional)).map(ia),S)}),(0,W0.KQ)(A=>{throw t._loader$=void 0,A}));return t._loader$=new U0.ConnectableObservable(v,()=>new U0.Subject).pipe((0,W0.Gz)()),t._loader$}loadModuleFactory(a){return dt(a()).pipe((0,W0.zg)(t=>t instanceof i.YKP?(0,U0.of)(t):(0,U0.from)(this.compiler.compileModuleAsync(t))))}}class ra{shouldProcessUrl(a){return!0}extract(a){return a}merge(a,t){return a}}function J6(e){throw e}function Dl(e,a,t){return a.parse("/")}function Zs(e,a){return(0,U0.of)(null)}const Qs={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Il={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let w7=(()=>{class e{constructor(t,n,v,A,S,N,o0){this.rootComponentType=t,this.urlSerializer=n,this.rootContexts=v,this.location=A,this.config=o0,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new U0.Subject,this.errorHandler=J6,this.malformedUriErrorHandler=Dl,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Zs,afterPreactivation:Zs},this.urlHandlingStrategy=new ra,this.routeReuseStrategy=new Q6,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=S.get(i.h0i),this.console=S.get(i.c2e);const E0=S.get(i.R0b);this.isNgZoneEnabled=E0 instanceof i.R0b&&i.R0b.isInAngularZone(),this.resetConfig(o0),this.currentUrlTree=function b6(){return new T5(new r5([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new X6(S,N,j0=>this.triggerEvent(new x6(j0)),j0=>this.triggerEvent(new fs(j0))),this.routerState=bs(this.currentUrlTree,this.rootComponentType),this.transitions=new U0.BehaviorSubject({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var t;return null===(t=this.location.getState())||void 0===t?void 0:t.\u0275routerPageId}setupNavigations(t){const n=this.events;return t.pipe((0,W0.hX)(v=>0!==v.id),(0,W0.UI)(v=>Object.assign(Object.assign({},v),{extractedUrl:this.urlHandlingStrategy.extract(v.rawUrl)})),(0,W0.wt)(v=>{let A=!1,S=!1;return(0,U0.of)(v).pipe((0,W0.bw)(N=>{this.currentNavigation={id:N.id,initialUrl:N.currentRawUrl,extractedUrl:N.extractedUrl,trigger:N.source,extras:N.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),(0,W0.wt)(N=>{const o0=this.browserUrlTree.toString(),g0=!this.navigated||N.extractedUrl.toString()!==o0||o0!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||g0)&&this.urlHandlingStrategy.shouldProcessUrl(N.rawUrl))return oa(N.source)&&(this.browserUrlTree=N.extractedUrl),(0,U0.of)(N).pipe((0,W0.wt)(E0=>{const j0=this.transitions.getValue();return n.next(new Q5(E0.id,this.serializeUrl(E0.extractedUrl),E0.source,E0.restoredState)),j0!==this.transitions.getValue()?U0.EMPTY:Promise.resolve(E0)}),function mg(e,a,t,n){return(0,W0.wt)(v=>function Al(e,a,t,n,v){return new Vl(e,a,t,n,v).apply()}(e,a,t,v.extractedUrl,n).pipe((0,W0.UI)(A=>Object.assign(Object.assign({},v),{urlAfterRedirects:A}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),(0,W0.bw)(E0=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:E0.urlAfterRedirects})}),function El(e,a,t,n,v){return(0,W0.zg)(A=>function Ll(e,a,t,n,v="emptyOnly",A="legacy"){try{const S=new $s(e,a,t,n,v,A).recognize();return null===S?js(new yl):(0,U0.of)(S)}catch(S){return js(S)}}(e,a,A.urlAfterRedirects,t(A.urlAfterRedirects),n,v).pipe((0,W0.UI)(S=>Object.assign(Object.assign({},A),{targetSnapshot:S}))))}(this.rootComponentType,this.config,E0=>this.serializeUrl(E0),this.paramsInheritanceStrategy,this.relativeLinkResolution),(0,W0.bw)(E0=>{if("eager"===this.urlUpdateStrategy){if(!E0.extras.skipLocationChange){const s1=this.urlHandlingStrategy.merge(E0.urlAfterRedirects,E0.rawUrl);this.setBrowserUrl(s1,E0)}this.browserUrlTree=E0.urlAfterRedirects}const j0=new D7(E0.id,this.serializeUrl(E0.extractedUrl),this.serializeUrl(E0.urlAfterRedirects),E0.targetSnapshot);n.next(j0)}));if(g0&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:j0,extractedUrl:s1,source:M1,restoredState:O1,extras:q1}=N,M5=new Q5(j0,this.serializeUrl(s1),M1,O1);n.next(M5);const $1=bs(s1,this.rootComponentType).snapshot;return(0,U0.of)(Object.assign(Object.assign({},N),{targetSnapshot:$1,urlAfterRedirects:s1,extras:Object.assign(Object.assign({},q1),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=N.rawUrl,N.resolve(null),U0.EMPTY}),Ys(N=>{const{targetSnapshot:o0,id:g0,extractedUrl:A0,rawUrl:E0,extras:{skipLocationChange:j0,replaceUrl:s1}}=N;return this.hooks.beforePreactivation(o0,{navigationId:g0,appliedUrlTree:A0,rawUrlTree:E0,skipLocationChange:!!j0,replaceUrl:!!s1})}),(0,W0.bw)(N=>{const o0=new Dt(N.id,this.serializeUrl(N.extractedUrl),this.serializeUrl(N.urlAfterRedirects),N.targetSnapshot);this.triggerEvent(o0)}),(0,W0.UI)(N=>Object.assign(Object.assign({},N),{guards:ks(N.targetSnapshot,N.currentSnapshot,this.rootContexts)})),function _g(e,a){return(0,W0.zg)(t=>{const{targetSnapshot:n,currentSnapshot:v,guards:{canActivateChecks:A,canDeactivateChecks:S}}=t;return 0===S.length&&0===A.length?(0,U0.of)(Object.assign(Object.assign({},t),{guardsResult:!0})):function G6(e,a,t,n){return(0,U0.from)(e).pipe((0,W0.zg)(v=>function bl(e,a,t,n,v){const A=a&&a.routeConfig?a.routeConfig.canDeactivate:null;if(!A||0===A.length)return(0,U0.of)(!0);const S=A.map(N=>{const o0=n3(N,a,v);let g0;if(function wg(e){return e&&C7(e.canDeactivate)}(o0))g0=dt(o0.canDeactivate(e,a,t,n));else{if(!C7(o0))throw new Error("Invalid CanDeactivate guard");g0=dt(o0(e,a,t,n))}return g0.pipe((0,W0.Ps)())});return(0,U0.of)(S).pipe(sa())}(v.component,v.route,t,a,n)),(0,W0.Ps)(v=>!0!==v,!0))}(S,n,v,e).pipe((0,W0.zg)(N=>N&&function ea(e){return"boolean"==typeof e}(N)?function W6(e,a,t,n){return(0,U0.from)(a).pipe((0,W0.bJ)(v=>(0,U0.concat)(function fg(e,a){return null!==e&&a&&a(new Jn(e)),(0,U0.of)(!0)}(v.route.parent,n),function K6(e,a){return null!==e&&a&&a(new H6(e)),(0,U0.of)(!0)}(v.route,n),function Fs(e,a,t){const n=a[a.length-1],A=a.slice(0,a.length-1).reverse().map(S=>function pt(e){const a=e.routeConfig?e.routeConfig.canActivateChild:null;return a&&0!==a.length?{node:e,guards:a}:null}(S)).filter(S=>null!==S).map(S=>(0,U0.defer)(()=>{const N=S.guards.map(o0=>{const g0=n3(o0,S.node,t);let A0;if(function ul(e){return e&&C7(e.canActivateChild)}(g0))A0=dt(g0.canActivateChild(n,e));else{if(!C7(g0))throw new Error("Invalid CanActivateChild guard");A0=dt(g0(n,e))}return A0.pipe((0,W0.Ps)())});return(0,U0.of)(N).pipe(sa())}));return(0,U0.of)(A).pipe(sa())}(e,v.path,t),function Mg(e,a,t){const n=a.routeConfig?a.routeConfig.canActivate:null;if(!n||0===n.length)return(0,U0.of)(!0);const v=n.map(A=>(0,U0.defer)(()=>{const S=n3(A,a,t);let N;if(function Ts(e){return e&&C7(e.canActivate)}(S))N=dt(S.canActivate(a,e));else{if(!C7(S))throw new Error("Invalid CanActivate guard");N=dt(S(a,e))}return N.pipe((0,W0.Ps)())}));return(0,U0.of)(v).pipe(sa())}(e,v.route,t))),(0,W0.Ps)(v=>!0!==v,!0))}(n,A,e,a):(0,U0.of)(N)),(0,W0.UI)(N=>Object.assign(Object.assign({},t),{guardsResult:N})))})}(this.ngModule.injector,N=>this.triggerEvent(N)),(0,W0.bw)(N=>{if(R3(N.guardsResult)){const g0=re(`Redirecting to "${this.serializeUrl(N.guardsResult)}"`);throw g0.url=N.guardsResult,g0}const o0=new B2(N.id,this.serializeUrl(N.extractedUrl),this.serializeUrl(N.urlAfterRedirects),N.targetSnapshot,!!N.guardsResult);this.triggerEvent(o0)}),(0,W0.hX)(N=>!!N.guardsResult||(this.restoreHistory(N),this.cancelNavigationTransition(N,""),!1)),Ys(N=>{if(N.guards.canActivateChecks.length)return(0,U0.of)(N).pipe((0,W0.bw)(o0=>{const g0=new lg(o0.id,this.serializeUrl(o0.extractedUrl),this.serializeUrl(o0.urlAfterRedirects),o0.targetSnapshot);this.triggerEvent(g0)}),(0,W0.wt)(o0=>{let g0=!1;return(0,U0.of)(o0).pipe(function Tl(e,a){return(0,W0.zg)(t=>{const{targetSnapshot:n,guards:{canActivateChecks:v}}=t;if(!v.length)return(0,U0.of)(t);let A=0;return(0,U0.from)(v).pipe((0,W0.bJ)(S=>function Sl(e,a,t,n){return function Ol(e,a,t,n){const v=Ks(e);if(0===v.length)return(0,U0.of)({});const A={};return(0,U0.from)(v).pipe((0,W0.zg)(S=>function xg(e,a,t,n){const v=n3(e,a,n);return dt(v.resolve?v.resolve(a,t):v(a,t))}(e[S],a,t,n).pipe((0,W0.bw)(N=>{A[S]=N}))),(0,W0.h$)(1),(0,W0.zg)(()=>Ks(A).length===v.length?(0,U0.of)(A):U0.EMPTY))}(e._resolve,e,a,n).pipe((0,W0.UI)(A=>(e._resolvedData=A,e.data=Object.assign(Object.assign({},e.data),O6(e,t).resolve),null)))}(S.route,n,e,a)),(0,W0.bw)(()=>A++),(0,W0.h$)(1),(0,W0.zg)(S=>A===v.length?(0,U0.of)(t):U0.EMPTY))})}(this.paramsInheritanceStrategy,this.ngModule.injector),(0,W0.bw)({next:()=>g0=!0,complete:()=>{g0||(this.restoreHistory(o0),this.cancelNavigationTransition(o0,"At least one route resolver didn't emit any value."))}}))}),(0,W0.bw)(o0=>{const g0=new _s(o0.id,this.serializeUrl(o0.extractedUrl),this.serializeUrl(o0.urlAfterRedirects),o0.targetSnapshot);this.triggerEvent(g0)}))}),Ys(N=>{const{targetSnapshot:o0,id:g0,extractedUrl:A0,rawUrl:E0,extras:{skipLocationChange:j0,replaceUrl:s1}}=N;return this.hooks.afterPreactivation(o0,{navigationId:g0,appliedUrlTree:A0,rawUrlTree:E0,skipLocationChange:!!j0,replaceUrl:!!s1})}),(0,W0.UI)(N=>{const o0=function ol(e,a,t){const n=X4(e,a._root,t?t._root:void 0);return new Cs(n,a)}(this.routeReuseStrategy,N.targetSnapshot,N.currentRouterState);return Object.assign(Object.assign({},N),{targetRouterState:o0})}),(0,W0.bw)(N=>{this.currentUrlTree=N.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(N.urlAfterRedirects,N.rawUrl),this.routerState=N.targetRouterState,"deferred"===this.urlUpdateStrategy&&(N.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,N),this.browserUrlTree=N.urlAfterRedirects)}),((e,a,t)=>(0,W0.UI)(n=>(new Es(a,n.targetRouterState,n.currentRouterState,t).activate(e),n)))(this.rootContexts,this.routeReuseStrategy,N=>this.triggerEvent(N)),(0,W0.bw)({next(){A=!0},complete(){A=!0}}),(0,W0.xS)(()=>{var N;A||S||this.cancelNavigationTransition(v,`Navigation ID ${v.id} is not equal to the current navigation id ${this.navigationId}`),(null===(N=this.currentNavigation)||void 0===N?void 0:N.id)===v.id&&(this.currentNavigation=null)}),(0,W0.KQ)(N=>{if(S=!0,function Ms(e){return e&&e[V6]}(N)){const o0=R3(N.url);o0||(this.navigated=!0,this.restoreHistory(v,!0));const g0=new r2(v.id,this.serializeUrl(v.extractedUrl),N.message);n.next(g0),o0?setTimeout(()=>{const A0=this.urlHandlingStrategy.merge(N.url,this.rawUrlTree),E0={skipLocationChange:v.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||oa(v.source)};this.scheduleNavigation(A0,"imperative",null,E0,{resolve:v.resolve,reject:v.reject,promise:v.promise})},0):v.resolve(!1)}else{this.restoreHistory(v,!0);const o0=new O5(v.id,this.serializeUrl(v.extractedUrl),N);n.next(o0);try{v.resolve(this.errorHandler(N))}catch(g0){v.reject(g0)}}return U0.EMPTY}))}))}resetRootComponentType(t){this.rootComponentType=t,this.routerState.root.component=this.rootComponentType}setTransition(t){this.transitions.next(Object.assign(Object.assign({},this.transitions.value),t))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(t=>{const n="popstate"===t.type?"popstate":"hashchange";"popstate"===n&&setTimeout(()=>{var v;const A={replaceUrl:!0},S=(null===(v=t.state)||void 0===v?void 0:v.navigationId)?t.state:null;if(S){const o0=Object.assign({},S);delete o0.navigationId,delete o0.\u0275routerPageId,0!==Object.keys(o0).length&&(A.state=o0)}const N=this.parseUrl(t.url);this.scheduleNavigation(N,n,S,A)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(t){this.events.next(t)}resetConfig(t){Os(t),this.config=t.map(ia),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(t,n={}){const{relativeTo:v,queryParams:A,fragment:S,queryParamsHandling:N,preserveFragment:o0}=n,g0=v||this.routerState.root,A0=o0?this.currentUrlTree.fragment:S;let E0=null;switch(N){case"merge":E0=Object.assign(Object.assign({},this.currentUrlTree.queryParams),A);break;case"preserve":E0=this.currentUrlTree.queryParams;break;default:E0=A||null}return null!==E0&&(E0=this.removeEmptyProps(E0)),function J4(e,a,t,n,v){if(0===t.length)return d2(a.root,a.root,a,n,v);const A=function k6(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new Ls(!0,0,e);let a=0,t=!1;const n=e.reduce((v,A,S)=>{if("object"==typeof A&&null!=A){if(A.outlets){const N={};return s2(A.outlets,(o0,g0)=>{N[g0]="string"==typeof o0?o0.split("/"):o0}),[...v,{outlets:N}]}if(A.segmentPath)return[...v,A.segmentPath]}return"string"!=typeof A?[...v,A]:0===S?(A.split("/").forEach((N,o0)=>{0==o0&&"."===N||(0==o0&&""===N?t=!0:".."===N?a++:""!=N&&v.push(N))}),v):[...v,A]},[]);return new Ls(t,a,n)}(t);if(A.toRoot())return d2(a.root,new r5([],{}),a,n,v);const S=function vl(e,a,t){if(e.isAbsolute)return new P3(a.root,!0,0);if(-1===t.snapshot._lastPathIndex){const A=t.snapshot._urlSegment;return new P3(A,A===a.root,0)}const n=q4(e.commands[0])?0:1;return function gl(e,a,t){let n=e,v=a,A=t;for(;A>v;){if(A-=v,n=n.parent,!n)throw new Error("Invalid number of '../'");v=n.segments.length}return new P3(n,!1,v-A)}(t.snapshot._urlSegment,t.snapshot._lastPathIndex+n,e.numberOfDoubleDots)}(A,a,e),N=S.processChildren?s3(S.segmentGroup,S.index,A.commands):aa(S.segmentGroup,S.index,A.commands);return d2(S.segmentGroup,N,a,n,v)}(g0,this.currentUrlTree,t,E0,null!=A0?A0:null)}navigateByUrl(t,n={skipLocationChange:!1}){const v=R3(t)?t:this.parseUrl(t),A=this.urlHandlingStrategy.merge(v,this.rawUrlTree);return this.scheduleNavigation(A,"imperative",null,n)}navigate(t,n={skipLocationChange:!1}){return function Pl(e){for(let a=0;a<e.length;a++){const t=e[a];if(null==t)throw new Error(`The requested path contains ${t} segment at index ${a}`)}}(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){let n;try{n=this.urlSerializer.parse(t)}catch(v){n=this.malformedUriErrorHandler(v,this.urlSerializer,t)}return n}isActive(t,n){let v;if(v=!0===n?Object.assign({},Qs):!1===n?Object.assign({},Il):n,R3(t))return S3(this.currentUrlTree,t,v);const A=this.parseUrl(t);return S3(this.currentUrlTree,A,v)}removeEmptyProps(t){return Object.keys(t).reduce((n,v)=>{const A=t[v];return null!=A&&(n[v]=A),n},{})}processNavigations(){this.navigations.subscribe(t=>{this.navigated=!0,this.lastSuccessfulId=t.id,this.currentPageId=t.targetPageId,this.events.next(new J5(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,t.resolve(!0)},t=>{this.console.warn(`Unhandled Navigation Error: ${t}`)})}scheduleNavigation(t,n,v,A,S){var N,o0,g0;if(this.disposed)return Promise.resolve(!1);const A0=this.transitions.value,E0=oa(n)&&A0&&!oa(A0.source),j0=A0.rawUrl.toString()===t.toString(),s1=A0.id===(null===(N=this.currentNavigation)||void 0===N?void 0:N.id);if(E0&&j0&&s1)return Promise.resolve(!0);let O1,q1,M5;S?(O1=S.resolve,q1=S.reject,M5=S.promise):M5=new Promise((A2,yt)=>{O1=A2,q1=yt});const $1=++this.navigationId;let $2;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(v=this.location.getState()),$2=v&&v.\u0275routerPageId?v.\u0275routerPageId:A.replaceUrl||A.skipLocationChange?null!==(o0=this.browserPageId)&&void 0!==o0?o0:0:(null!==(g0=this.browserPageId)&&void 0!==g0?g0:0)+1):$2=0,this.setTransition({id:$1,targetPageId:$2,source:n,restoredState:v,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:t,extras:A,resolve:O1,reject:q1,promise:M5,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),M5.catch(A2=>Promise.reject(A2))}setBrowserUrl(t,n){const v=this.urlSerializer.serialize(t),A=Object.assign(Object.assign({},n.extras.state),this.generateNgRouterState(n.id,n.targetPageId));this.location.isCurrentPathEqualTo(v)||n.extras.replaceUrl?this.location.replaceState(v,"",A):this.location.go(v,"",A)}restoreHistory(t,n=!1){var v,A;if("computed"===this.canceledNavigationResolution){const S=this.currentPageId-t.targetPageId;"popstate"!==t.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(v=this.currentNavigation)||void 0===v?void 0:v.finalUrl)||0===S?this.currentUrlTree===(null===(A=this.currentNavigation)||void 0===A?void 0:A.finalUrl)&&0===S&&(this.resetState(t),this.browserUrlTree=t.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(S)}else"replace"===this.canceledNavigationResolution&&(n&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=t.currentRouterState,this.currentUrlTree=t.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(t,n){const v=new r2(t.id,this.serializeUrl(t.extractedUrl),n);this.triggerEvent(v),t.resolve(!1)}generateNgRouterState(t,n){return"computed"===this.canceledNavigationResolution?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}}return e.\u0275fac=function(t){i.$Z()},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();function oa(e){return"imperative"!==e}class Ce{}class Xs{preload(a,t){return(0,U0.of)(null)}}let ca=(()=>{class e{constructor(t,n,v,A){this.router=t,this.injector=v,this.preloadingStrategy=A,this.loader=new X6(v,n,o0=>t.triggerEvent(new x6(o0)),o0=>t.triggerEvent(new fs(o0)))}setUpPreloading(){this.subscription=this.router.events.pipe((0,W0.hX)(t=>t instanceof J5),(0,W0.bJ)(()=>this.preload())).subscribe(()=>{})}preload(){const t=this.injector.get(i.h0i);return this.processRoutes(t,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,n){const v=[];for(const A of n)if(A.loadChildren&&!A.canLoad&&A._loadedConfig){const S=A._loadedConfig;v.push(this.processRoutes(S.module,S.routes))}else A.loadChildren&&!A.canLoad?v.push(this.preloadConfig(t,A)):A.children&&v.push(this.processRoutes(t,A.children));return(0,U0.from)(v).pipe((0,W0.Jn)(),(0,W0.UI)(A=>{}))}preloadConfig(t,n){return this.preloadingStrategy.preload(n,()=>(n._loadedConfig?(0,U0.of)(n._loadedConfig):this.loader.load(t.injector,n)).pipe((0,W0.zg)(A=>(n._loadedConfig=A,this.processRoutes(A.module,A.routes)))))}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(w7),i.LFG(i.Sil),i.LFG(i.zs3),i.LFG(Ce))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})(),ah=(()=>{class e{constructor(t,n,v={}){this.router=t,this.viewportScroller=n,this.options=v,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},v.scrollPositionRestoration=v.scrollPositionRestoration||"disabled",v.anchorScrolling=v.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(t=>{t instanceof Q5?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof J5&&(this.lastId=t.id,this.scheduleScrollEvent(t,this.router.parseUrl(t.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(t=>{t instanceof Y4&&(t.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,n){this.router.triggerEvent(new Y4(t,"popstate"===this.lastSource?this.store[this.restoredId]:null,n))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(t){i.$Z()},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();const F3=new i.OlP("ROUTER_CONFIGURATION"),Js=new i.OlP("ROUTER_FORROOT_GUARD"),Fl=[U,{provide:sl,useClass:il},{provide:w7,useFactory:function Gl(e,a,t,n,v,A,S={},N,o0){const g0=new w7(null,e,a,t,n,v,xs(A));return N&&(g0.urlHandlingStrategy=N),o0&&(g0.routeReuseStrategy=o0),function Wl(e,a){e.errorHandler&&(a.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(a.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(a.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(a.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(a.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(a.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(a.canceledNavigationResolution=e.canceledNavigationResolution)}(S,g0),S.enableTracing&&g0.events.subscribe(A0=>{var E0,j0;null===(E0=console.group)||void 0===E0||E0.call(console,`Router Event: ${A0.constructor.name}`),console.log(A0.toString()),console.log(A0),null===(j0=console.groupEnd)||void 0===j0||j0.call(console)}),g0},deps:[sl,i3,U,i.zs3,i.Sil,Ve,F3,[class Z2{},new i.FiY],[class la{},new i.FiY]]},i3,{provide:z4,useFactory:function Kl(e){return e.routerState.root},deps:[w7]},ca,Xs,class Nl{preload(a,t){return t().pipe((0,W0.KQ)(()=>(0,U0.of)(null)))}},{provide:F3,useValue:{enableTracing:!1}}];function qs(){return new i.PXZ("Router",w7)}let t8=(()=>{class e{constructor(t,n){}static forRoot(t,n){return{ngModule:e,providers:[Fl,a8(t),{provide:Js,useFactory:Ul,deps:[[w7,new i.FiY,new i.tp0]]},{provide:F3,useValue:n||{}},{provide:P,useFactory:$l,deps:[m,[new i.tBr(Z),new i.FiY],F3]},{provide:ah,useFactory:jl,deps:[w7,Y,F3]},{provide:Ce,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:Xs},{provide:i.PXZ,multi:!0,useFactory:qs},[r3,{provide:i.ip1,multi:!0,useFactory:ut,deps:[r3]},{provide:Yl,useFactory:Ag,deps:[r3]},{provide:i.tb,multi:!0,useExisting:Yl}]]}}static forChild(t){return{ngModule:e,providers:[a8(t)]}}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(Js,8),i.LFG(w7,8))},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),e})();function jl(e,a,t){return t.scrollOffset&&a.setOffset(t.scrollOffset),new ah(e,a,t)}function $l(e,a,t={}){return t.useHash?new j(e,a):new G(e,a)}function Ul(e){return"guarded"}function a8(e){return[{provide:i.deG,multi:!0,useValue:e},{provide:Ve,multi:!0,useValue:e}]}let r3=(()=>{class e{constructor(t){this.injector=t,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new U0.Subject}appInitializer(){return this.injector.get(u,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let n=null;const v=new Promise(N=>n=N),A=this.injector.get(w7),S=this.injector.get(F3);return"disabled"===S.initialNavigation?(A.setUpLocationChangeListener(),n(!0)):"enabled"===S.initialNavigation||"enabledBlocking"===S.initialNavigation?(A.hooks.afterPreactivation=()=>this.initNavigation?(0,U0.of)(null):(this.initNavigation=!0,n(!0),this.resultOfPreactivationDone),A.initialNavigation()):n(!0),v})}bootstrapListener(t){const n=this.injector.get(F3),v=this.injector.get(ca),A=this.injector.get(ah),S=this.injector.get(w7),N=this.injector.get(i.z2F);t===N.components[0]&&(("enabledNonBlocking"===n.initialNavigation||void 0===n.initialNavigation)&&S.initialNavigation(),v.setUpPreloading(),A.init(),S.resetRootComponentType(N.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(i.zs3))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();function ut(e){return e.appInitializer.bind(e)}function Ag(e){return e.bootstrapListener.bind(e)}const Yl=new i.OlP("Router Initializer"),mt=[];let eh=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[t8.forRoot(mt)],t8]}),e})();var be=o(1441),Zl=o(9909),j3=o(2298);function ye(e,a,t,n){var S,v=arguments.length,A=v<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(e,a,t,n);else for(var N=e.length-1;N>=0;N--)(S=e[N])&&(A=(v<3?S(A):v>3?S(a,t,A):S(a,t))||A);return v>3&&A&&Object.defineProperty(a,t,A),A}class ga{createCSS(){return""}createBehavior(){}}const da=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===da.trustedTypes&&(da.trustedTypes={createPolicy:(e,a)=>a});const X7=Object.freeze([]),zt=[],sh=da.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let ih=sh;const H4=[];function er(){if(H4.length)throw H4.shift()}function l8(e){try{e.call()}catch(a){H4.push(a),setTimeout(er,0)}}const A4=`fast-${Math.random().toString(36).substring(2,8)}`,nh=`${A4}{`,wa=`}${A4}`,W1=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(ih!==sh)throw new Error("The HTML policy can only be set once.");ih=e},createHTML:e=>ih.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(A4),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${A4}:`,"")),createInterpolationPlaceholder:e=>`${nh}${e}${wa}`,createCustomAttributePlaceholder(e,a){return`${e}="${this.createInterpolationPlaceholder(a)}"`},createBlockPlaceholder:e=>`\x3c!--${A4}:${e}--\x3e`,queueUpdate(e){zt.length<1&&window.requestAnimationFrame(W1.processUpdates),zt.push(e)},processUpdates(){let a=0;for(;a<zt.length;)if(l8(zt[a]),a++,a>1024){for(let t=0,n=zt.length-a;t<n;t++)zt[t]=zt[t+a];zt.length-=a,a=0}zt.length=0},nextUpdate:()=>new Promise(e=>{W1.queueUpdate(e)}),setAttribute(e,a,t){null==t?e.removeAttribute(a):e.setAttribute(a,t)},setBooleanAttribute(e,a,t){t?e.setAttribute(a,""):e.removeAttribute(a)},removeChildNodes(e){for(let a=e.firstChild;null!==a;a=e.firstChild)e.removeChild(a)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function Ee(e){const a=this.spillover;-1===a.indexOf(e)&&a.push(e)}function Te(e){const a=this.spillover,t=a.indexOf(e);-1!==t&&a.splice(t,1)}function r8(e){const a=this.spillover,t=this.source;for(let n=0,v=a.length;n<v;++n)a[n].handleChange(t,e)}function lh(e){return-1!==this.spillover.indexOf(e)}class Se{constructor(a,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=a,this.sub1=t}has(a){return this.sub1===a||this.sub2===a}subscribe(a){if(!this.has(a)){if(void 0===this.sub1)return void(this.sub1=a);if(void 0===this.sub2)return void(this.sub2=a);this.spillover=[this.sub1,this.sub2,a],this.subscribe=Ee,this.unsubscribe=Te,this.notify=r8,this.has=lh,this.sub1=void 0,this.sub2=void 0}}unsubscribe(a){this.sub1===a?this.sub1=void 0:this.sub2===a&&(this.sub2=void 0)}notify(a){const t=this.sub1,n=this.sub2,v=this.source;void 0!==t&&t.handleChange(v,a),void 0!==n&&n.handleChange(v,a)}}class Oe{constructor(a){this.subscribers={},this.sourceSubscribers=null,this.source=a}notify(a){var t;const n=this.subscribers[a];void 0!==n&&n.notify(a),null===(t=this.sourceSubscribers)||void 0===t||t.notify(a)}subscribe(a,t){var n;if(t){let v=this.subscribers[t];void 0===v&&(this.subscribers[t]=v=new Se(this.source)),v.subscribe(a)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new Se(this.source),this.sourceSubscribers.subscribe(a)}unsubscribe(a,t){var n;if(t){const v=this.subscribers[t];void 0!==v&&v.unsubscribe(a)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(a)}}const pa=/(:|&&|\|\||if)/,o8=new WeakMap,De=new WeakMap;let J7,c8=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class v8{constructor(a){this.name=a,this.field=`_${a}`,this.callback=`${a}Changed`}getValue(a){return void 0!==J7&&J7.watch(a,this.name),a[this.field]}setValue(a,t){const n=this.field,v=a[n];if(v!==t){a[n]=t;const A=a[this.callback];"function"==typeof A&&A.call(a,v,t),Ie(a).notify(this.name)}}}const a5=Object.freeze({setArrayObserverFactory(e){c8=e},getNotifier(e){let a=e.$fastController||o8.get(e);return void 0===a&&(Array.isArray(e)?a=c8(e):o8.set(e,a=new Oe(e))),a},track(e,a){void 0!==J7&&J7.watch(e,a)},trackVolatile(){void 0!==J7&&(J7.needsRefresh=!0)},notify(e,a){Ie(e).notify(a)},defineProperty(e,a){"string"==typeof a&&(a=new v8(a)),this.getAccessors(e).push(a),Reflect.defineProperty(e,a.name,{enumerable:!0,get:function(){return a.getValue(this)},set:function(t){a.setValue(this,t)}})},getAccessors(e){let a=De.get(e);if(void 0===a){let t=Reflect.getPrototypeOf(e);for(;void 0===a&&null!==t;)a=De.get(t),t=Reflect.getPrototypeOf(t);a=void 0===a?[]:a.slice(0),De.set(e,a)}return a},binding(e,a,t=this.isVolatileBinding(e)){return new p8(e,a,t)},isVolatileBinding:e=>pa.test(e.toString())}),Ie=a5.getNotifier,g8=W1.queueUpdate;function j1(e,a){a5.defineProperty(e,a)}let d8=null;function w8(e){d8=e}class y7{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return d8}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}a5.defineProperty(y7.prototype,"index"),a5.defineProperty(y7.prototype,"length");const V4=Object.seal(new y7);class p8 extends Se{constructor(a,t,n=!1){super(a,t),this.binding=a,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(a,t){this.needsRefresh&&null!==this.last&&this.disconnect();const n=J7;J7=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const v=this.binding(a,t);return J7=n,v}disconnect(){if(null!==this.last){let a=this.first;for(;void 0!==a;)a.notifier.unsubscribe(this,a.propertyName),a=a.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(a,t){const n=this.last,v=Ie(a),A=null===n?this.first:{};if(A.propertySource=a,A.propertyName=t,A.notifier=v,v.subscribe(this,t),null!==n){if(!this.needsRefresh){let S;J7=void 0,S=n.propertySource[n.propertyName],J7=this,a===S&&(this.needsRefresh=!0)}n.next=A}this.last=A}handleChange(){this.needsQueue&&(this.needsQueue=!1,g8(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let a=this.first;return{next:()=>{const t=a;return void 0===t?{value:void 0,done:!0}:(a=a.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}class Q2{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(a){this.targets.add(a)}removeStylesFrom(a){this.targets.delete(a)}isAttachedTo(a){return this.targets.has(a)}withBehaviors(...a){return this.behaviors=null===this.behaviors?a:this.behaviors.concat(a),this}}function rh(e){return e.map(a=>a instanceof Q2?rh(a.styles):[a]).reduce((a,t)=>a.concat(t),[])}function u8(e){return e.map(a=>a instanceof Q2?a.behaviors:null).reduce((a,t)=>null===t?a:(null===a&&(a=[]),a.concat(t)),null)}Q2.create=(()=>{if(W1.supportsAdoptedStyleSheets){const e=new Map;return a=>new sr(a,e)}return e=>new nr(e)})();class sr extends Q2{constructor(a,t){super(),this.styles=a,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=u8(a)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styleSheetCache;this._styleSheets=rh(this.styles).map(n=>{if(n instanceof CSSStyleSheet)return n;let v=t.get(n);return void 0===v&&(v=new CSSStyleSheet,v.replaceSync(n),t.set(n,v)),v})}return this._styleSheets}addStylesTo(a){a.adoptedStyleSheets=[...a.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(a)}removeStylesFrom(a){const t=this.styleSheets;a.adoptedStyleSheets=a.adoptedStyleSheets.filter(n=>-1===t.indexOf(n)),super.removeStylesFrom(a)}}let m8=0;class nr extends Q2{constructor(a){super(),this.styles=a,this.behaviors=null,this.behaviors=u8(a),this.styleSheets=rh(a),this.styleClass=function ir(){return"fast-style-class-"+ ++m8}()}addStylesTo(a){const t=this.styleSheets,n=this.styleClass;a=this.normalizeTarget(a);for(let v=0;v<t.length;v++){const A=document.createElement("style");A.innerHTML=t[v],A.className=n,a.append(A)}super.addStylesTo(a)}removeStylesFrom(a){const t=(a=this.normalizeTarget(a)).querySelectorAll(`.${this.styleClass}`);for(let n=0,v=t.length;n<v;++n)a.removeChild(t[n]);super.removeStylesFrom(a)}isAttachedTo(a){return super.isAttachedTo(this.normalizeTarget(a))}normalizeTarget(a){return a===document?document.body:a}}const oh={toView:e=>e?"true":"false",fromView:e=>!(null==e||"false"===e||!1===e||0===e)},l1={toView(e){if(null==e)return null;const a=1*e;return isNaN(a)?null:a.toString()},fromView(e){if(null==e)return null;const a=1*e;return isNaN(a)?null:a}};class ua{constructor(a,t,n=t.toLowerCase(),v="reflect",A){this.guards=new Set,this.Owner=a,this.name=t,this.attribute=n,this.mode=v,this.converter=A,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in a.prototype,"boolean"===v&&void 0===A&&(this.converter=oh)}setValue(a,t){const n=a[this.fieldName],v=this.converter;void 0!==v&&(t=v.fromView(t)),n!==t&&(a[this.fieldName]=t,this.tryReflectToAttribute(a),this.hasCallback&&a[this.callbackName](n,t),a.$fastController.notify(this.name))}getValue(a){return a5.track(a,this.name),a[this.fieldName]}onAttributeChangedCallback(a,t){this.guards.has(a)||(this.guards.add(a),this.setValue(a,t),this.guards.delete(a))}tryReflectToAttribute(a){const t=this.mode,n=this.guards;n.has(a)||"fromView"===t||W1.queueUpdate(()=>{n.add(a);const v=a[this.fieldName];switch(t){case"reflect":const A=this.converter;W1.setAttribute(a,this.attribute,void 0!==A?A.toView(v):v);break;case"boolean":W1.setBooleanAttribute(a,this.attribute,v)}n.delete(a)})}static collect(a,...t){const n=[];t.push(a.attributes);for(let v=0,A=t.length;v<A;++v){const S=t[v];if(void 0!==S)for(let N=0,o0=S.length;N<o0;++N){const g0=S[N];n.push("string"==typeof g0?new ua(a,g0):new ua(a,g0.property,g0.attribute,g0.mode,g0.converter))}}return n}}function N0(e,a){let t;function n(v,A){arguments.length>1&&(t.property=A),(v.constructor.attributes||(v.constructor.attributes=[])).push(t)}return arguments.length>1?(t={},void n(e,a)):(t=void 0===e?{}:e,n)}const ch={mode:"open"},ma={},I7=new Map;class Pe{constructor(a,t=a.definition){"string"==typeof t&&(t={name:t}),this.type=a,this.name=t.name,this.template=t.template;const n=ua.collect(a,t.attributes),v=new Array(n.length),A={},S={};for(let N=0,o0=n.length;N<o0;++N){const g0=n[N];v[N]=g0.attribute,A[g0.name]=g0,S[g0.attribute]=g0}this.attributes=n,this.observedAttributes=v,this.propertyLookup=A,this.attributeLookup=S,this.shadowOptions=void 0===t.shadowOptions?ch:null===t.shadowOptions?void 0:Object.assign(Object.assign({},ch),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?ma:Object.assign(Object.assign({},ma),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?Q2.create(t.styles):t.styles instanceof Q2?t.styles:Q2.create([t.styles])}define(a=customElements){const t=this.type;if(!this.isDefined){const n=this.attributes,v=t.prototype;for(let A=0,S=n.length;A<S;++A)a5.defineProperty(v,n[A]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),I7.set(t,this),this.isDefined=!0}return a.get(this.name)||a.define(this.name,t,this.elementOptions),this}static forType(a){return I7.get(a)}}const z8=new WeakMap,vh={bubbles:!0,composed:!0,cancelable:!0};function q7(e){return e.shadowRoot||z8.get(e)||null}class za extends Oe{constructor(a,t){super(a),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=a,this.definition=t;const n=t.shadowOptions;if(void 0!==n){const A=a.attachShadow(n);"closed"===n.mode&&z8.set(a,A)}const v=a5.getAccessors(a);if(v.length>0){const A=this.boundObservables=Object.create(null);for(let S=0,N=v.length;S<N;++S){const o0=v[S].name,g0=a[o0];void 0!==g0&&(delete a[o0],A[o0]=g0)}}}get isConnected(){return a5.track(this,"isConnected"),this._isConnected}setIsConnected(a){this._isConnected=a,a5.notify(this,"isConnected")}get template(){return this._template}set template(a){this._template!==a&&(this._template=a,this.needsInitialization||this.renderTemplate(a))}get styles(){return this._styles}set styles(a){this._styles!==a&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=a,!this.needsInitialization&&null!==a&&this.addStyles(a))}addStyles(a){const t=q7(this.element)||this.element.getRootNode();if(a instanceof HTMLStyleElement)t.append(a);else if(!a.isAttachedTo(t)){const n=a.behaviors;a.addStylesTo(t),null!==n&&this.addBehaviors(n)}}removeStyles(a){const t=q7(this.element)||this.element.getRootNode();if(a instanceof HTMLStyleElement)t.removeChild(a);else if(a.isAttachedTo(t)){const n=a.behaviors;a.removeStylesFrom(t),null!==n&&this.removeBehaviors(n)}}addBehaviors(a){const t=this.behaviors||(this.behaviors=new Map),n=a.length,v=[];for(let A=0;A<n;++A){const S=a[A];t.has(S)?t.set(S,t.get(S)+1):(t.set(S,1),v.push(S))}if(this._isConnected){const A=this.element;for(let S=0;S<v.length;++S)v[S].bind(A,V4)}}removeBehaviors(a,t=!1){const n=this.behaviors;if(null===n)return;const v=a.length,A=[];for(let S=0;S<v;++S){const N=a[S];if(n.has(N)){const o0=n.get(N)-1;0===o0||t?n.delete(N)&&A.push(N):n.set(N,o0)}}if(this._isConnected){const S=this.element;for(let N=0;N<A.length;++N)A[N].unbind(S)}}onConnectedCallback(){if(this._isConnected)return;const a=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(a,V4);const t=this.behaviors;if(null!==t)for(const[n]of t)n.bind(a,V4);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const a=this.view;null!==a&&a.unbind();const t=this.behaviors;if(null!==t){const n=this.element;for(const[v]of t)v.unbind(n)}}onAttributeChangedCallback(a,t,n){const v=this.definition.attributeLookup[a];void 0!==v&&v.onAttributeChangedCallback(this.element,n)}emit(a,t,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(a,Object.assign(Object.assign({detail:t},vh),n)))}finishInitialization(){const a=this.element,t=this.boundObservables;if(null!==t){const v=Object.keys(t);for(let A=0,S=v.length;A<S;++A){const N=v[A];a[N]=t[N]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(a){const t=this.element,n=q7(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||W1.removeChildNodes(n),a&&(this.view=a.render(t,n,t))}static forCustomElement(a){const t=a.$fastController;if(void 0!==t)return t;const n=Pe.forType(a.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return a.$fastController=new za(a,n)}}function gh(e){return class extends e{constructor(){super(),za.forCustomElement(this)}$emit(a,t,n){return this.$fastController.emit(a,t,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(a,t,n){this.$fastController.onAttributeChangedCallback(a,t,n)}}}const o3=Object.assign(gh(HTMLElement),{from:e=>gh(e),define:(e,a)=>new Pe(e,a).define().type});function ke(e){const a=e.parentElement;if(a)return a;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const P7=document.createElement("div");class _a{setProperty(a,t){W1.queueUpdate(()=>this.target.setProperty(a,t))}removeProperty(a){W1.queueUpdate(()=>this.target.removeProperty(a))}}class wh extends _a{constructor(){super();const a=new CSSStyleSheet;this.target=a.cssRules[a.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,a]}}class Og extends _a{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:a}=this.style;if(a){const t=a.insertRule(":root{}",a.cssRules.length);this.target=a.cssRules[t].style}}}let lr=(()=>{class e{constructor(t){this.store=new Map,this.target=null;const n=t.$fastController;this.style=document.createElement("style"),n.addStyles(this.style),a5.getNotifier(n).subscribe(this,"isConnected"),this.handleChange(n,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,n]of this.store.entries())this.target.setProperty(t,n)}setProperty(t,n){this.store.set(t,n),W1.queueUpdate(()=>{null!==this.target&&this.target.setProperty(t,n)})}removeProperty(t){this.store.delete(t),W1.queueUpdate(()=>{null!==this.target&&this.target.removeProperty(t)})}handleChange(t,n){const{sheet:v}=this.style;if(v){const A=v.insertRule(":host{}",v.cssRules.length);this.target=v.cssRules[A].style}else this.target=null}}return ye([j1],e.prototype,"target",void 0),e})();class rr{constructor(a){this.target=a.style}setProperty(a,t){W1.queueUpdate(()=>this.target.setProperty(a,t))}removeProperty(a){W1.queueUpdate(()=>this.target.removeProperty(a))}}class E2{setProperty(a,t){E2.properties[a]=t;for(const n of E2.roots.values())fa.getOrCreate(E2.normalizeRoot(n)).setProperty(a,t)}removeProperty(a){delete E2.properties[a];for(const t of E2.roots.values())fa.getOrCreate(E2.normalizeRoot(t)).removeProperty(a)}static registerRoot(a){const{roots:t}=E2;if(!t.has(a)){t.add(a);const n=fa.getOrCreate(this.normalizeRoot(a));for(const v in E2.properties)n.setProperty(v,E2.properties[v])}}static unregisterRoot(a){const{roots:t}=E2;if(t.has(a)){t.delete(a);const n=fa.getOrCreate(E2.normalizeRoot(a));for(const v in E2.properties)n.removeProperty(v)}}static normalizeRoot(a){return a===P7?document:a}}E2.roots=new Set,E2.properties={};const ph=new WeakMap,_8=W1.supportsAdoptedStyleSheets?class dh extends _a{constructor(a){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,a.$fastController.addStyles(Q2.create([t]))}}:lr,fa=Object.freeze({getOrCreate(e){if(ph.has(e))return ph.get(e);let a;return a=e===P7?new E2:e instanceof Document?W1.supportsAdoptedStyleSheets?new wh:new Og:function Re(e){return e instanceof o3}(e)?new _8(e):new rr(e),ph.set(e,a),a}});class i7 extends ga{constructor(a){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=a.name,null!==a.cssCustomPropertyName&&(this.cssCustomProperty=`--${a.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=i7.uniqueId(),i7.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(a){return new i7({name:"string"==typeof a?a:a.name,cssCustomPropertyName:"string"==typeof a?a:void 0===a.cssCustomPropertyName?a.name:a.cssCustomPropertyName})}static isCSSDesignToken(a){return"string"==typeof a.cssCustomProperty}static isDerivedDesignTokenValue(a){return"function"==typeof a}static getTokenById(a){return i7.tokensById.get(a)}getOrCreateSubscriberSet(a=this){return this.subscribers.get(a)||this.subscribers.set(a,new Set)&&this.subscribers.get(a)}createCSS(){return this.cssVar||""}getValueFor(a){const t=w2.getOrCreate(a).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${a} or an ancestor of ${a}.`)}setValueFor(a,t){return this._appliedTo.add(a),t instanceof i7&&(t=this.alias(t)),w2.getOrCreate(a).set(this,t),this}deleteValueFor(a){return this._appliedTo.delete(a),w2.existsFor(a)&&w2.getOrCreate(a).delete(this),this}withDefault(a){return this.setValueFor(P7,a),this}subscribe(a,t){const n=this.getOrCreateSubscriberSet(t);t&&!w2.existsFor(t)&&w2.getOrCreate(t),n.has(a)||n.add(a)}unsubscribe(a,t){const n=this.subscribers.get(t||this);n&&n.has(a)&&n.delete(a)}notify(a){const t=Object.freeze({token:this,target:a});this.subscribers.has(this)&&this.subscribers.get(this).forEach(n=>n.handleChange(t)),this.subscribers.has(a)&&this.subscribers.get(a).forEach(n=>n.handleChange(t))}alias(a){return t=>a.getValueFor(t)}}i7.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),i7.tokensById=new Map;class f8{constructor(a,t,n){this.source=a,this.token=t,this.node=n,this.dependencies=new Set,this.observer=a5.binding(a,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,V4))}}class M8{constructor(){this.values=new Map}set(a,t){this.values.get(a)!==t&&(this.values.set(a,t),a5.getNotifier(this).notify(a.id))}get(a){return a5.track(this,a.id),this.values.get(a)}delete(a){this.values.delete(a)}all(){return this.values.entries()}}const Ma=new WeakMap,U3=new WeakMap;class w2{constructor(a){this.target=a,this.store=new M8,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,n)=>{const v=i7.getTokenById(n);if(v&&(v.notify(this.target),i7.isCSSDesignToken(v))){const A=this.parent,S=this.isReflecting(v);if(A){const N=A.get(v),o0=t.get(v);N===o0||S?N===o0&&S&&this.stopReflectToCSS(v):this.reflectToCSS(v)}else S||this.reflectToCSS(v)}}},Ma.set(a,this),a5.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),a instanceof o3?a.$fastController.addBehaviors([this]):a.isConnected&&this.bind()}static getOrCreate(a){return Ma.get(a)||new w2(a)}static existsFor(a){return Ma.has(a)}static findParent(a){if(P7!==a.target){let t=ke(a.target);for(;null!==t;){if(Ma.has(t))return Ma.get(t);t=ke(t)}return w2.getOrCreate(P7)}return null}static findClosestAssignedNode(a,t){let n=t;do{if(n.has(a))return n;n=n.parent?n.parent:n.target!==P7?w2.getOrCreate(P7):null}while(null!==n);return null}get parent(){return U3.get(this)||null}has(a){return this.assignedValues.has(a)}get(a){const t=this.store.get(a);if(void 0!==t)return t;const n=this.getRaw(a);return void 0!==n?(this.hydrate(a,n),this.get(a)):void 0}getRaw(a){var t;return this.assignedValues.has(a)?this.assignedValues.get(a):null===(t=w2.findClosestAssignedNode(a,this))||void 0===t?void 0:t.getRaw(a)}set(a,t){i7.isDerivedDesignTokenValue(this.assignedValues.get(a))&&this.tearDownBindingObserver(a),this.assignedValues.set(a,t),i7.isDerivedDesignTokenValue(t)?this.setupBindingObserver(a,t):this.store.set(a,t)}delete(a){this.assignedValues.delete(a),this.tearDownBindingObserver(a);const t=this.getRaw(a);t?this.hydrate(a,t):this.store.delete(a)}bind(){const a=w2.findParent(this);a&&a.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&U3.get(this).removeChild(this)}appendChild(a){a.parent&&U3.get(a).removeChild(a);const t=this.children.filter(n=>a.contains(n));U3.set(a,this),this.children.push(a),t.forEach(n=>a.appendChild(n)),a5.getNotifier(this.store).subscribe(a);for(const[n,v]of this.store.all())a.hydrate(n,this.bindingObservers.has(n)?this.getRaw(n):v)}removeChild(a){const t=this.children.indexOf(a);return-1!==t&&this.children.splice(t,1),a5.getNotifier(this.store).unsubscribe(a),a.parent===this&&U3.delete(a)}contains(a){return function Sg(e,a){let t=a;for(;null!==t;){if(t===e)return!0;t=ke(t)}return!1}(this.target,a.target)}reflectToCSS(a){this.isReflecting(a)||(this.reflecting.add(a),w2.cssCustomPropertyReflector.startReflection(a,this.target))}stopReflectToCSS(a){this.isReflecting(a)&&(this.reflecting.delete(a),w2.cssCustomPropertyReflector.stopReflection(a,this.target))}isReflecting(a){return this.reflecting.has(a)}handleChange(a,t){const n=i7.getTokenById(t);!n||this.hydrate(n,this.getRaw(n))}hydrate(a,t){if(!this.has(a)){const n=this.bindingObservers.get(a);i7.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(a),this.setupBindingObserver(a,t)):this.setupBindingObserver(a,t):(n&&this.tearDownBindingObserver(a),this.store.set(a,t))}}setupBindingObserver(a,t){const n=new f8(t,a,this);return this.bindingObservers.set(a,n),n}tearDownBindingObserver(a){return!!this.bindingObservers.has(a)&&(this.bindingObservers.get(a).disconnect(),this.bindingObservers.delete(a),!0)}}w2.cssCustomPropertyReflector=new class Dg{startReflection(a,t){a.subscribe(this,t),this.handleChange({token:a,target:t})}stopReflection(a,t){a.unsubscribe(this,t),this.remove(a,t)}handleChange(a){const{token:t,target:n}=a;this.add(t,n)}add(a,t){fa.getOrCreate(t).setProperty(a.cssCustomProperty,this.resolveCSSValue(w2.getOrCreate(t).get(a)))}remove(a,t){fa.getOrCreate(t).removeProperty(a.cssCustomProperty)}resolveCSSValue(a){return a&&"function"==typeof a.createCSS?a.createCSS():a}},ye([j1],w2.prototype,"children",void 0);const It=Object.freeze({create:function Ig(e){return i7.from(e)},notifyConnection:e=>!(!e.isConnected||!w2.existsFor(e)||(w2.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!w2.existsFor(e)||(w2.getOrCreate(e).unbind(),0)),registerRoot(e=P7){E2.registerRoot(e)},unregisterRoot(e=P7){E2.unregisterRoot(e)}});var r1=o(8702),Pg=o(655),L7=o(2269);let c3=(()=>{class e{constructor(){this.trlive={loading:"",nonce:"",none:"",url:""},this.refreshData(),window.apiAnime=this}refreshData(){r1.get("https://henaojara.com/",{},t=>{try{var n=t.slice(t.indexOf("var trlive = ")+"var trlive = ".length,t.indexOf(";",t.indexOf("var trlive = "))),v=JSON.parse(n);this.trlive=v}catch(A){console.log(A)}})}getInfoEmision(){return new Promise((t,n)=>{r1.get("https://henaojara.com/ver/category/emision/",{},v=>{try{const o0=L7.load(v);var A=[];o0("#tablepress-1 tbody").find("tr").each((g0,A0)=>{var E0,j0,s1,M1,O1,q1,M5;0!==String(o0(A0).find("td.column-1").html()).length&&(E0={image:String(o0(A0).find("td.column-1 img").attr("src")),title:"",url:String(o0(A0).find("td.column-1 a").attr("href"))}),0!==String(o0(A0).find("td.column-2").html()).length&&(j0={image:String(o0(A0).find("td.column-2 img").attr("src")),title:"",url:String(o0(A0).find("td.column-2 a").attr("href"))}),0!==String(o0(A0).find("td.column-3").html()).length&&(s1={image:String(o0(A0).find("td.column-3 img").attr("src")),title:"",url:String(o0(A0).find("td.column-3 a").attr("href"))}),0!==String(o0(A0).find("td.column-4").html()).length&&(M1={image:String(o0(A0).find("td.column-4 img").attr("src")),title:"",url:String(o0(A0).find("td.column-4 a").attr("href"))}),0!==String(o0(A0).find("td.column-5").html()).length&&(O1={image:String(o0(A0).find("td.column-5 img").attr("src")),title:"",url:String(o0(A0).find("td.column-5 a").attr("href"))}),0!==String(o0(A0).find("td.column-6").html()).length&&(q1={image:String(o0(A0).find("td.column-6 img").attr("src")),title:"",url:String(o0(A0).find("td.column-6 a").attr("href"))}),0!==String(o0(A0).find("td.column-7").html()).length&&(M5={image:String(o0(A0).find("td.column-7 img").attr("src")),title:"",url:String(o0(A0).find("td.column-7 a").attr("href"))}),A.push({monday:E0,tuesday:j0,wednesday:s1,thursday:M1,friday:O1,saturday:q1,sunday:M5})});var S=[];o0("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((g0,A0)=>{S.push({title:o0(A0).find("h3.Title").text(),image:String(o0(A0).find("div.Image img").attr("src")),url:String(o0(A0).find("article > a").attr("href")),type:o0(A0).find("div.Image span").text()})});var N=[];o0("div.wp-pagenavi").find(".page-numbers").not("a.next").each((g0,A0)=>N.push(o0(A0).text())),t({table:A,list:S,numPages:N})}catch(o0){n(o0)}}).fail(v=>n(v))})}getMoreInfoEmision(t){return new Promise((n,v)=>{r1.get(`https://henaojara.com/ver/category/emision/page/${t}/`,{},A=>{try{const N=L7.load(A);var S=[];N("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((o0,g0)=>{S.push({title:N(g0).find("h3.Title").text(),image:String(N(g0).find("div.Image img").attr("src")),url:String(N(g0).find("article > a").attr("href")),type:N(g0).find("div.Image span").text()})}),n(S)}catch(N){v(N)}}).fail(A=>v(A))})}getListAnime(){return new Promise((t,n)=>{try{r1.get("https://henaojara.com/ver/category/categorias/",{},v=>{const A=L7.load(v);var S=[],N=[];A("#Tp-Wp > div > div > div > div.TpRwCont > main > div.wp-pagenavi").find(".page-numbers").not(".next.page-numbers").each((g0,A0)=>S.push(A(A0).text())),r1.each([].constructor(parseInt(0!==S.length?S[S.length-1]:"0")),(g0,A0)=>N.push(String(Math.floor(g0+1))));var o0=[];A("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((g0,A0)=>{o0.push({title:A(A0).find("h3.Title").text(),image:String(A(A0).find("div.Image img").attr("src")),url:String(A(A0).find("article > a").attr("href")),type:A(A0).find("div.Image span").text()})}),t({numPages:N,list:o0})}).fail(v=>n(v))}catch(v){n(v)}})}getMoreListAnime(t){return new Promise((n,v)=>{r1.get(`https://henaojara.com/ver/category/categorias/page/${t}/`,{},A=>{try{const N=L7.load(A);var S=[];N("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((o0,g0)=>{S.push({title:N(g0).find("h3.Title").text(),image:String(N(g0).find("div.Image img").attr("src")),url:String(N(g0).find("article > a").attr("href")),type:N(g0).find("div.Image span").text()})}),n(S)}catch(N){v(N)}}).fail(A=>v(A))})}getListMovies(){return new Promise((t,n)=>{try{r1.get("https://henaojara.com/ver/category/pelicula/",{},v=>{const A=L7.load(v);var S=[],N=[];A("#Tp-Wp > div > div > div > div.TpRwCont > main > div.wp-pagenavi").find(".page-numbers").not(".next.page-numbers").each((g0,A0)=>S.push(A(A0).text())),r1.each([].constructor(parseInt(0!==S.length?S[S.length-1]:"0")),(g0,A0)=>N.push(String(Math.floor(g0+1))));var o0=[];A("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((g0,A0)=>{o0.push({title:A(A0).find("h3.Title").text(),image:String(A(A0).find("div.Image img").attr("src")),url:String(A(A0).find("article > a").attr("href")),type:A(A0).find("div.Image span").text()})}),t({numPages:N,list:o0})}).fail(v=>n(v))}catch(v){n(v)}})}getMoreListMovies(t){return new Promise((n,v)=>{r1.get(`https://henaojara.com/ver/category/pelicula/page/${t}/`,{},A=>{try{const N=L7.load(A);var S=[];N("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((o0,g0)=>{S.push({title:N(g0).find("h3.Title").text(),image:String(N(g0).find("div.Image img").attr("src")),url:String(N(g0).find("article > a").attr("href")),type:N(g0).find("div.Image span").text()})}),n(S)}catch(N){v(N)}}).fail(A=>v(A))})}getListEstrenos(){return new Promise((t,n)=>{try{r1.get("https://henaojara.com/ver/category/estrenos/",{},v=>{const A=L7.load(v);var S=[],N=[];A("#Tp-Wp > div > div > div > div.TpRwCont > main > div.wp-pagenavi").find(".page-numbers").not(".next.page-numbers").each((g0,A0)=>S.push(A(A0).text())),r1.each([].constructor(parseInt(0!==S.length?S[S.length-1]:"0")),(g0,A0)=>N.push(String(Math.floor(g0+1))));var o0=[];A("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((g0,A0)=>{o0.push({title:A(A0).find("h3.Title").text(),image:String(A(A0).find("div.Image img").attr("src")),url:String(A(A0).find("article > a").attr("href")),type:A(A0).find("div.Image span").text()})}),t({numPages:N,list:o0})}).fail(v=>n(v))}catch(v){n(v)}})}getMoreListEstrenos(t){return new Promise((n,v)=>{r1.get(`https://henaojara.com/ver/category/estrenos/page/${t}/`,{},A=>{try{const N=L7.load(A);var S=[];N("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((o0,g0)=>{S.push({title:N(g0).find("h3.Title").text(),image:String(N(g0).find("div.Image img").attr("src")),url:String(N(g0).find("article > a").attr("href")),type:N(g0).find("div.Image span").text()})}),n(S)}catch(N){v(N)}}).fail(A=>v(A))})}getInfoHome(){return new Promise((t,n)=>{try{r1.get("https://henaojara.com/",{},v=>{const A=L7.load(v);var S=[];A("#Tp-Wp > div > div > div > div.TpRwCont > aside > div:nth-child(4) > ul").find("li").each((o0,g0)=>{var A0=A(g0).find("div.Title span").text().replace(/\n/gi,"");S.push({title:A(g0).find("div.Title").not("span").text().replace(/\n/gi,"").replace(A0,"").trimEnd(),image:String(A(g0).find("div.Image figure img").attr("src")).replace("92x138","185x278"),url:String(A(g0).find("div.TPost > a").attr("href")),type:A(g0).find("div.Title span").text(),rank:A(g0).find("span.Top").text()})});var N=[];A("#Tp-Wp > div > div > div > div.TpRwCont > main > section:nth-child(4) > ul").find("li").each((o0,g0)=>{var A0=A(g0).find("div.Image figcaption span").text()+" - ";N.push({title:A(g0).find("h3.Title").text(),image:String(A(g0).find("div.Image img").attr("src")).replace("92x138","185x278"),url:String(A(g0).find("article > a").attr("href")),type:A(g0).find("div.Image span").text(),extra:A(g0).find("div.Image figcaption").text().replace(A0,"")})}),t({populars:S,uploads:N})})}catch(v){n(v)}})}searchType(t){return new Promise((n,v)=>{r1.post(this.trlive.url,{nonce:this.trlive.nonce,action:"tr_live",trsearch:t,type:10},A=>{try{const N=L7.load(A);var S=[];N("ul li").each((o0,g0)=>{S.push({image:String(N(g0).find("div.Image img").attr("src")),title:N(g0).find("div.Title").text(),url:String(N(g0).find("a").attr("href"))})}),n(S)}catch(N){v(N)}}).fail(A=>v(A))})}getResultSearch(t){return new Promise((n,v)=>{r1.get("https://henaojara.com/",{s:t},A=>{try{const g0=L7.load(A);var S=[],N=[];g0("#Tp-Wp > div > div > div > div.TpRwCont > main > div.wp-pagenavi").find(".page-numbers").not(".next.page-numbers").each((A0,E0)=>S.push(g0(E0).text())),r1.each([].constructor(parseInt(0!==S.length?S[S.length-1]:"0")),A0=>N.push(String(Math.floor(A0+1))));var o0=[];g0("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((A0,E0)=>{"https://henaojara.com/donar-apoyar-la-pagina/"==String(g0(E0).find("article > a").attr("href"))||"https://henaojara.com/terminos-y-condiciones/"==String(g0(E0).find("article > a").attr("href"))||o0.push({title:g0(E0).find("h3.Title").text(),image:String(g0(E0).find("div.Image img").attr("src")),url:String(g0(E0).find("article > a").attr("href")),type:g0(E0).find("div.Image span").text()})}),n({numPages:N,list:o0})}catch(g0){v(g0)}})})}getMoreResultSearch(t,n){return new Promise((v,A)=>{r1.get(`https://henaojara.com/page/${n}/`,{s:t},S=>{try{const o0=L7.load(S);var N=[];o0("#Tp-Wp > div > div > div > div.TpRwCont > main > section > ul").find("li").each((g0,A0)=>{N.push({title:o0(A0).find("h3.Title").text(),image:String(o0(A0).find("div.Image img").attr("src")),url:String(o0(A0).find("article > a").attr("href")),type:o0(A0).find("div.Image span").text()})}),v(N)}catch(o0){A(o0)}}).fail(S=>A(S))})}getUrlInfoMovie(t){return(0,Pg.__awaiter)(this,void 0,void 0,function*(){return new Promise((n,v)=>{try{var A=new XMLHttpRequest;r1.ajax({url:t,method:"GET",xhr:()=>A,success:()=>{if(-1!==A.responseURL.indexOf("episode/")){var S=A.responseURL.replace("episode/","season/");S=(S=(S=S.split("").reverse().join("")).replace("1x","")).split("").reverse().join(""),n(S)}else n(A.responseURL)}}).fail(S=>v(S))}catch(S){v(S)}})})}getInfoData(t){return new Promise((n,v)=>{this.getUrlInfoMovie(t).then(A=>{r1.get(A,{},S=>{try{const $1=L7.load(S);var N=$1("#Tp-Wp > div > div > div > div.TpRwCont > main > article > header > div.Description").text(),o0=$1("#Tp-Wp > div > div > div > div.TpRwCont > main > article > header > h1").text(),g0=$1("#Tp-Wp > div > div > div > div.TpRwCont > main > article > header > div.SubTitle > span.Qlty").text(),A0=$1("#Tp-Wp > div > div > div > div.TpRwCont > main > article > footer > p > span.Time.AAIco-access_time").text(),E0=$1("#Tp-Wp > div > div > div > div.TpRwCont > main > article > footer > p > span.View.AAIco-remove_red_eye").text().replace(" visitas",""),j0=String($1("#Tp-Wp > div > div > div > div.TpRwCont > main > article > header > div.Image > figure > img").attr("src")),s1=[],M1=[];if($1("#Tp-Wp > div > div > div > div.TpRwCont > main > div.Wdgt.AABox").each(($2,A2)=>{var yt=[];$1(A2).find("table tr").each((m_,zs)=>yt.push({title:$1(zs).find("td.MvTbTtl a").text(),image:String($1(zs).find("td a img").attr("src")),url:String($1(zs).find("td.MvTbTtl a").attr("href"))})),s1.push({title:`Temporada ${String($2+1)}`,chapters:yt})}),$1("#MvTb-Info > ul > li:nth-child(3) > a").each(($2,A2)=>M1.push({title:$1(A2).text(),url:String($1(A2).attr("href"))})),0==s1.length&&-1!==A.indexOf("season/")){var O1=String($1("#Tp-Wp > div > div > div > div.TpRwCont > main > div.Wdgt").find("tr td.MvTbImg a").attr("href")),q1=String($1("#Tp-Wp > div > div > div > div.TpRwCont > main > div.Wdgt").find("tr td.MvTbImg a img").attr("src")),M5=$1("#Tp-Wp > div > div > div > div.TpRwCont > main > div.Wdgt").find("tr td.MvTbTtl a").text().replace(/\n/gi,"").trimStart().trimEnd();s1.push({title:"Temporada 1",chapters:[{title:M5,url:O1,image:q1}]})}n({description:N.replace(/\n/gi,""),title:o0,status:"EMISION"==g0,image:j0,timeUpload:A0,views:E0,lists:s1,genders:M1})}catch($1){v($1)}}).fail(S=>v(S))}).catch(A=>v(A))})}getVideoServers(t){return new Promise((n,v)=>{try{r1.get(t,{},A=>{const S=L7.load(A);var N=[];S("div.TPlayer").find("div.TPlayerTb").each((o0,g0)=>{var A0=String(S(g0).html()),E0=A0.slice(A0.indexOf('src="')+'src="'.length,A0.indexOf('" frameborder')),j0=E0.slice(E0.indexOf("trembed=")+"trembed=".length,E0.indexOf("&",E0.indexOf("trembed="))),s1=E0.slice(E0.indexOf("trid=")+"trid=".length,E0.indexOf("&",E0.indexOf("trid="))),M1=E0.slice(E0.indexOf("trtype=")+"trtype=".length,E0.length);N.push({title:"",url:`https://henaojara.com/?trembed=${j0}&trid=${s1}&trtype=${M1}`})}),S("ul.TPlayerNv").find("li.Button.STPb").each((o0,g0)=>N[o0].title=S(g0).text().replace(/\n/gi,"").trimStart().trimEnd()),n(N)}).fail(A=>v(A))}catch(A){v(!1)}})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();o(7327),o(9554),o(6992),o(9601),o(1539),o(1058),o(8783),o(4129),o(3948);var Hh,uh=o(887),A8=o.n(uh),v3=o(532),mh=o.n(v3),vr=o(1071),zh=o.n(vr),W3=[],C8="ResizeObserver loop completed with undelivered notifications.",tt=(()=>{return(e=tt||(tt={})).BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box",tt;var e})(),Pt=function(e){return Object.freeze(e)},C4=function e(a,t){this.inlineSize=a,this.blockSize=t,Pt(this)},b4=function(){function e(a,t,n,v){return this.x=a,this.y=t,this.width=n,this.height=v,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Pt(this)}return e.prototype.toJSON=function(){var a=this;return{x:a.x,y:a.y,top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width,height:a.height}},e.fromRect=function(a){return new e(a.x,a.y,a.width,a.height)},e}(),g3=function(e){return e instanceof SVGElement&&"getBBox"in e},b8=function(e){if(g3(e)){var a=e.getBBox();return!a.width&&!a.height}return!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},_h=function(e){var a,t;if(e instanceof Element)return!0;var n=null===(t=null===(a=e)||void 0===a?void 0:a.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},K3="undefined"!=typeof window?window:{},y4=new WeakMap,fh=/auto|scroll/,Ne=/^tb|vertical/,dr=/msie|trident/i.test(K3.navigator&&K3.navigator.userAgent),at=function(e){return parseFloat(e||"0")},Ha=function(e,a,t){return void 0===e&&(e=0),void 0===a&&(a=0),void 0===t&&(t=!1),new C4((t?a:e)||0,(t?e:a)||0)},Mh=Pt({devicePixelContentBoxSize:Ha(),borderBoxSize:Ha(),contentBoxSize:Ha(),contentRect:new b4(0,0,0,0)}),xh=function(e,a){if(void 0===a&&(a=!1),y4.has(e)&&!a)return y4.get(e);if(b8(e))return y4.set(e,Mh),Mh;var t=getComputedStyle(e),n=g3(e)&&e.ownerSVGElement&&e.getBBox(),v=!dr&&"border-box"===t.boxSizing,A=Ne.test(t.writingMode||""),S=!n&&fh.test(t.overflowY||""),N=!n&&fh.test(t.overflowX||""),o0=n?0:at(t.paddingTop),g0=n?0:at(t.paddingRight),A0=n?0:at(t.paddingBottom),E0=n?0:at(t.paddingLeft),j0=n?0:at(t.borderTopWidth),s1=n?0:at(t.borderRightWidth),M1=n?0:at(t.borderBottomWidth),q1=E0+g0,M5=o0+A0,$1=(n?0:at(t.borderLeftWidth))+s1,$2=j0+M1,A2=N?e.offsetHeight-$2-e.clientHeight:0,yt=S?e.offsetWidth-$1-e.clientWidth:0,m_=v?q1+$1:0,zs=v?M5+$2:0,Qn=n?n.width:at(t.width)-m_-yt,Xn=n?n.height:at(t.height)-zs-A2,db=Qn+q1+yt+$1,wb=Xn+M5+A2+$2,z_=Pt({devicePixelContentBoxSize:Ha(Math.round(Qn*devicePixelRatio),Math.round(Xn*devicePixelRatio),A),borderBoxSize:Ha(db,wb,A),contentBoxSize:Ha(Qn,Xn,A),contentRect:new b4(E0,o0,Qn,Xn)});return y4.set(e,z_),z_},L8=function(e,a,t){var n=xh(e,t),v=n.borderBoxSize,A=n.contentBoxSize,S=n.devicePixelContentBoxSize;switch(a){case tt.DEVICE_PIXEL_CONTENT_BOX:return S;case tt.BORDER_BOX:return v;default:return A}},B8=function e(a){var t=xh(a);this.target=a,this.contentRect=t.contentRect,this.borderBoxSize=Pt([t.borderBoxSize]),this.contentBoxSize=Pt([t.contentBoxSize]),this.devicePixelContentBoxSize=Pt([t.devicePixelContentBoxSize])},E8=function(e){if(b8(e))return 1/0;for(var a=0,t=e.parentNode;t;)a+=1,t=t.parentNode;return a},wr=function(){var e=1/0,a=[];W3.forEach(function(S){if(0!==S.activeTargets.length){var N=[];S.activeTargets.forEach(function(g0){var A0=new B8(g0.target),E0=E8(g0.target);N.push(A0),g0.lastReportedSize=L8(g0.target,g0.observedBox),E0<e&&(e=E0)}),a.push(function(){S.callback.call(S.observer,N,S.observer)}),S.activeTargets.splice(0,S.activeTargets.length)}});for(var t=0,n=a;t<n.length;t++)(0,n[t])();return e},p7=function(e){W3.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(v){v.isActive()&&(E8(v.target)>e?t.activeTargets.push(v):t.skippedTargets.push(v))})})},ur=[],Fe=0,mr={attributes:!0,characterData:!0,childList:!0,subtree:!0},O8=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],D8=function(e){return void 0===e&&(e=0),Date.now()+e},je=!1,$e=new(function(){function e(){var a=this;this.stopped=!0,this.listener=function(){return a.schedule()}}return e.prototype.run=function(a){var t=this;if(void 0===a&&(a=250),!je){je=!0;var n=D8(a);!function(e){!function(e){if(!Hh){var a=0,t=document.createTextNode("");new MutationObserver(function(){return ur.splice(0).forEach(function(e){return e()})}).observe(t,{characterData:!0}),Hh=function(){t.textContent=""+(a?a--:a++)}}ur.push(e),Hh()}(function(){requestAnimationFrame(e)})}(function(){var v=!1;try{v=function(){var e=0;for(p7(e);W3.some(function(e){return e.activeTargets.length>0});)e=wr(),p7(e);return W3.some(function(e){return e.skippedTargets.length>0})&&function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:C8}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=C8),window.dispatchEvent(e)}(),e>0}()}finally{if(je=!1,a=n-D8(),!Fe)return;v?t.run(1e3):a>0?t.run(a):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var a=this,t=function(){return a.observer&&a.observer.observe(document.body,mr)};document.body?t():K3.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var a=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),O8.forEach(function(t){return K3.addEventListener(t,a.listener,!0)}))},e.prototype.stop=function(){var a=this;this.stopped||(this.observer&&this.observer.disconnect(),O8.forEach(function(t){return K3.removeEventListener(t,a.listener,!0)}),this.stopped=!0)},e}()),I8=function(e){!Fe&&e>0&&$e.start(),!(Fe+=e)&&$e.stop()},P8=function(){function e(a,t){this.target=a,this.observedBox=t||tt.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var a=L8(this.target,this.observedBox,!0);return function(e){return!g3(e)&&!function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)&&"inline"===getComputedStyle(e).display}(this.target)&&(this.lastReportedSize=a),this.lastReportedSize.inlineSize!==a.inlineSize||this.lastReportedSize.blockSize!==a.blockSize},e}(),k8=function e(a,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=a,this.callback=t},Ue=new WeakMap,et=function(e,a){for(var t=0;t<e.length;t+=1)if(e[t].target===a)return t;return-1},L4=function(){function e(){}return e.connect=function(a,t){var n=new k8(a,t);Ue.set(a,n)},e.observe=function(a,t,n){var v=Ue.get(a),A=0===v.observationTargets.length;et(v.observationTargets,t)<0&&(A&&W3.push(v),v.observationTargets.push(new P8(t,n&&n.box)),I8(1),$e.schedule())},e.unobserve=function(a,t){var n=Ue.get(a),v=et(n.observationTargets,t);v>=0&&(1===n.observationTargets.length&&W3.splice(W3.indexOf(n),1),n.observationTargets.splice(v,1),I8(-1))},e.disconnect=function(a){var t=this,n=Ue.get(a);n.observationTargets.slice().forEach(function(v){return t.unobserve(a,v.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),fr=function(){function e(a){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof a)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");L4.connect(this,a)}return e.prototype.observe=function(a,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!_h(a))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");L4.observe(this,a,t)},e.prototype.unobserve=function(a){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!_h(a))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");L4.unobserve(this,a)},e.prototype.disconnect=function(){L4.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}(),Mr=o(9291),xr=o.n(Mr);function d3(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function Ge(e){return e&&e.ownerDocument?e.ownerDocument:document}o(5827),o(8309),o(4916),o(4723),o(5306);var kt=null,We=null;function N8(e){if(null===kt){var a=Ge(e);if(void 0===a)return kt=0;var t=a.body,n=a.createElement("div");n.classList.add("simplebar-hide-scrollbar"),t.appendChild(n);var v=n.getBoundingClientRect().right;t.removeChild(n),kt=v}return kt}xr()&&window.addEventListener("resize",function(){We!==window.devicePixelRatio&&(We=window.devicePixelRatio,kt=null)});var Aa=function(){function e(t,n){var v=this;this.onScroll=function(){var A=d3(v.el);v.scrollXTicking||(A.requestAnimationFrame(v.scrollX),v.scrollXTicking=!0),v.scrollYTicking||(A.requestAnimationFrame(v.scrollY),v.scrollYTicking=!0)},this.scrollX=function(){v.axis.x.isOverflowing&&(v.showScrollbar("x"),v.positionScrollbar("x")),v.scrollXTicking=!1},this.scrollY=function(){v.axis.y.isOverflowing&&(v.showScrollbar("y"),v.positionScrollbar("y")),v.scrollYTicking=!1},this.onMouseEnter=function(){v.showScrollbar("x"),v.showScrollbar("y")},this.onMouseMove=function(A){v.mouseX=A.clientX,v.mouseY=A.clientY,(v.axis.x.isOverflowing||v.axis.x.forceVisible)&&v.onMouseMoveForAxis("x"),(v.axis.y.isOverflowing||v.axis.y.forceVisible)&&v.onMouseMoveForAxis("y")},this.onMouseLeave=function(){v.onMouseMove.cancel(),(v.axis.x.isOverflowing||v.axis.x.forceVisible)&&v.onMouseLeaveForAxis("x"),(v.axis.y.isOverflowing||v.axis.y.forceVisible)&&v.onMouseLeaveForAxis("y"),v.mouseX=-1,v.mouseY=-1},this.onWindowResize=function(){v.scrollbarWidth=v.getScrollbarWidth(),v.hideNativeScrollbar()},this.hideScrollbars=function(){v.axis.x.track.rect=v.axis.x.track.el.getBoundingClientRect(),v.axis.y.track.rect=v.axis.y.track.el.getBoundingClientRect(),v.isWithinBounds(v.axis.y.track.rect)||(v.axis.y.scrollbar.el.classList.remove(v.classNames.visible),v.axis.y.isVisible=!1),v.isWithinBounds(v.axis.x.track.rect)||(v.axis.x.scrollbar.el.classList.remove(v.classNames.visible),v.axis.x.isVisible=!1)},this.onPointerEvent=function(A){var S,N;v.axis.x.track.rect=v.axis.x.track.el.getBoundingClientRect(),v.axis.y.track.rect=v.axis.y.track.el.getBoundingClientRect(),(v.axis.x.isOverflowing||v.axis.x.forceVisible)&&(S=v.isWithinBounds(v.axis.x.track.rect)),(v.axis.y.isOverflowing||v.axis.y.forceVisible)&&(N=v.isWithinBounds(v.axis.y.track.rect)),(S||N)&&(A.preventDefault(),A.stopPropagation(),"mousedown"===A.type&&(S&&(v.axis.x.scrollbar.rect=v.axis.x.scrollbar.el.getBoundingClientRect(),v.isWithinBounds(v.axis.x.scrollbar.rect)?v.onDragStart(A,"x"):v.onTrackClick(A,"x")),N&&(v.axis.y.scrollbar.rect=v.axis.y.scrollbar.el.getBoundingClientRect(),v.isWithinBounds(v.axis.y.scrollbar.rect)?v.onDragStart(A,"y"):v.onTrackClick(A,"y"))))},this.drag=function(A){var N=v.axis[v.draggedAxis].track,o0=N.rect[v.axis[v.draggedAxis].sizeAttr],g0=v.axis[v.draggedAxis].scrollbar,A0=v.contentWrapperEl[v.axis[v.draggedAxis].scrollSizeAttr],E0=parseInt(v.elStyles[v.axis[v.draggedAxis].sizeAttr],10);A.preventDefault(),A.stopPropagation();var M1=(("y"===v.draggedAxis?A.pageY:A.pageX)-N.rect[v.axis[v.draggedAxis].offsetAttr]-v.axis[v.draggedAxis].dragOffset)/(o0-g0.size)*(A0-E0);"x"===v.draggedAxis&&(M1=v.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?M1-(o0+g0.size):M1,M1=v.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-M1:M1),v.contentWrapperEl[v.axis[v.draggedAxis].scrollOffsetAttr]=M1},this.onEndDrag=function(A){var S=Ge(v.el),N=d3(v.el);A.preventDefault(),A.stopPropagation(),v.el.classList.remove(v.classNames.dragging),S.removeEventListener("mousemove",v.drag,!0),S.removeEventListener("mouseup",v.onEndDrag,!0),v.removePreventClickId=N.setTimeout(function(){S.removeEventListener("click",v.preventClick,!0),S.removeEventListener("dblclick",v.preventClick,!0),v.removePreventClickId=null})},this.preventClick=function(A){A.preventDefault(),A.stopPropagation()},this.el=t,this.minScrollbarWidth=20,this.options=Object.assign({},e.defaultOptions,{},n),this.classNames=Object.assign({},e.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,!e.instances.has(this.el)&&(this.recalculate=A8()(this.recalculate.bind(this),64),this.onMouseMove=A8()(this.onMouseMove.bind(this),64),this.hideScrollbars=mh()(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=mh()(this.onWindowResize.bind(this),64,{leading:!0}),e.getRtlHelpers=zh()(e.getRtlHelpers),this.init())}e.getRtlHelpers=function(){var n=document.createElement("div");n.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var v=n.firstElementChild;document.body.appendChild(v);var A=v.firstElementChild;v.scrollLeft=0;var S=e.getOffset(v),N=e.getOffset(A);v.scrollLeft=999;var o0=e.getOffset(A);return{isRtlScrollingInverted:S.left!==N.left&&N.left-o0.left!=0,isRtlScrollbarInverted:S.left!==N.left}},e.getOffset=function(n){var v=n.getBoundingClientRect(),A=Ge(n),S=d3(n);return{top:v.top+(S.pageYOffset||A.documentElement.scrollTop),left:v.left+(S.pageXOffset||A.documentElement.scrollLeft)}};var a=e.prototype;return a.init=function(){e.instances.set(this.el,this),xr()&&(this.initDOM(),this.setAccessibilityAttributes(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},a.initDOM=function(){var n=this;if(Array.prototype.filter.call(this.el.children,function(S){return S.classList.contains(n.classNames.wrapper)}).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var v=document.createElement("div"),A=document.createElement("div");v.classList.add(this.classNames.track),A.classList.add(this.classNames.scrollbar),v.appendChild(A),this.axis.x.track.el=v.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=v.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},a.setAccessibilityAttributes=function(){var n=this.options.ariaLabel||"scrollable content";this.contentWrapperEl.setAttribute("tabindex","0"),this.contentWrapperEl.setAttribute("role","region"),this.contentWrapperEl.setAttribute("aria-label",n)},a.initListeners=function(){var n=this,v=d3(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach(function(N){n.el.addEventListener(N,n.onPointerEvent,!0)}),["touchstart","touchend","touchmove"].forEach(function(N){n.el.addEventListener(N,n.onPointerEvent,{capture:!0,passive:!0})}),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),v.addEventListener("resize",this.onWindowResize);var A=!1;this.resizeObserver=new(v.ResizeObserver||fr)(function(){!A||n.recalculate()}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),v.requestAnimationFrame(function(){A=!0}),this.mutationObserver=new v.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},a.recalculate=function(){var n=d3(this.el);this.elStyles=n.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var v=this.heightAutoObserverEl.offsetHeight<=1,A=this.heightAutoObserverEl.offsetWidth<=1,S=this.contentEl.offsetWidth,N=this.contentWrapperEl.offsetWidth,o0=this.elStyles.overflowX,g0=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var A0=this.contentEl.scrollHeight,E0=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=v?"auto":"100%",this.placeholderEl.style.width=A?S+"px":"auto",this.placeholderEl.style.height=A0+"px";var j0=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=E0>S,this.axis.y.isOverflowing=A0>j0,this.axis.x.isOverflowing="hidden"!==o0&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==g0&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var s1=this.axis.x.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&E0>N-(this.axis.y.isOverflowing?this.scrollbarWidth:0),this.axis.y.isOverflowing=this.axis.y.isOverflowing&&A0>j0-s1,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},a.getScrollbarSize=function(n){if(void 0===n&&(n="y"),!this.axis[n].isOverflowing)return 0;var S,A=this.axis[n].track.el[this.axis[n].offsetSizeAttr];return S=Math.max(~~(A/this.contentEl[this.axis[n].scrollSizeAttr]*A),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(S=Math.min(S,this.options.scrollbarMaxSize)),S},a.positionScrollbar=function(n){if(void 0===n&&(n="y"),this.axis[n].isOverflowing){var v=this.contentWrapperEl[this.axis[n].scrollSizeAttr],A=this.axis[n].track.el[this.axis[n].offsetSizeAttr],S=parseInt(this.elStyles[this.axis[n].sizeAttr],10),N=this.axis[n].scrollbar,o0=this.contentWrapperEl[this.axis[n].scrollOffsetAttr],A0=~~((o0="x"===n&&this.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-o0:o0)/(v-S)*(A-N.size));A0="x"===n&&this.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?A0+(A-N.size):A0,N.el.style.transform="x"===n?"translate3d("+A0+"px, 0, 0)":"translate3d(0, "+A0+"px, 0)"}},a.toggleTrackVisibility=function(n){void 0===n&&(n="y");var v=this.axis[n].track.el,A=this.axis[n].scrollbar.el;this.axis[n].isOverflowing||this.axis[n].forceVisible?(v.style.visibility="visible",this.contentWrapperEl.style[this.axis[n].overflowAttr]="scroll"):(v.style.visibility="hidden",this.contentWrapperEl.style[this.axis[n].overflowAttr]="hidden"),A.style.display=this.axis[n].isOverflowing?"block":"none"},a.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},a.onMouseMoveForAxis=function(n){void 0===n&&(n="y"),this.axis[n].track.rect=this.axis[n].track.el.getBoundingClientRect(),this.axis[n].scrollbar.rect=this.axis[n].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[n].scrollbar.rect)?this.axis[n].scrollbar.el.classList.add(this.classNames.hover):this.axis[n].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[n].track.rect)?(this.showScrollbar(n),this.axis[n].track.el.classList.add(this.classNames.hover)):this.axis[n].track.el.classList.remove(this.classNames.hover)},a.onMouseLeaveForAxis=function(n){void 0===n&&(n="y"),this.axis[n].track.el.classList.remove(this.classNames.hover),this.axis[n].scrollbar.el.classList.remove(this.classNames.hover)},a.showScrollbar=function(n){void 0===n&&(n="y"),this.axis[n].isVisible||(this.axis[n].scrollbar.el.classList.add(this.classNames.visible),this.axis[n].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},a.onDragStart=function(n,v){void 0===v&&(v="y");var A=Ge(this.el),S=d3(this.el);this.axis[v].dragOffset=("y"===v?n.pageY:n.pageX)-this.axis[v].scrollbar.rect[this.axis[v].offsetAttr],this.draggedAxis=v,this.el.classList.add(this.classNames.dragging),A.addEventListener("mousemove",this.drag,!0),A.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(A.addEventListener("click",this.preventClick,!0),A.addEventListener("dblclick",this.preventClick,!0)):(S.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},a.onTrackClick=function(n,v){var A=this;if(void 0===v&&(v="y"),this.options.clickOnTrack){var S=d3(this.el);this.axis[v].scrollbar.rect=this.axis[v].scrollbar.el.getBoundingClientRect();var o0=this.axis[v].scrollbar.rect[this.axis[v].offsetAttr],g0=parseInt(this.elStyles[this.axis[v].sizeAttr],10),A0=this.contentWrapperEl[this.axis[v].scrollOffsetAttr],j0=("y"===v?this.mouseY-o0:this.mouseX-o0)<0?-1:1,s1=-1===j0?A0-g0:A0+g0;!function O1(){var q1;if(-1===j0)A0>s1&&(A.contentWrapperEl.scrollTo(((q1={})[A.axis[v].offsetAttr]=A0-=A.options.clickOnTrackSpeed,q1)),S.requestAnimationFrame(O1));else if(A0<s1){var M5;A.contentWrapperEl.scrollTo(((M5={})[A.axis[v].offsetAttr]=A0+=A.options.clickOnTrackSpeed,M5)),S.requestAnimationFrame(O1)}}()}},a.getContentElement=function(){return this.contentEl},a.getScrollElement=function(){return this.contentWrapperEl},a.getScrollbarWidth=function(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:N8(this.el)}catch(n){return N8(this.el)}},a.removeListeners=function(){var n=this,v=d3(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach(function(A){n.el.removeEventListener(A,n.onPointerEvent,!0)}),["touchstart","touchend","touchmove"].forEach(function(A){n.el.removeEventListener(A,n.onPointerEvent,{capture:!0,passive:!0})}),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),v.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},a.unMount=function(){this.removeListeners(),e.instances.delete(this.el)},a.isWithinBounds=function(n){return this.mouseX>=n.left&&this.mouseX<=n.left+n.width&&this.mouseY>=n.top&&this.mouseY<=n.top+n.height},a.findChild=function(n,v){var A=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;return Array.prototype.filter.call(n.children,function(S){return A.call(S,v)})[0]},e}();Aa.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},Aa.instances=new WeakMap;const Vh=Aa,F8=["*"];let Y3=(()=>{class e{constructor(t){this.elRef=t}ngOnInit(){}ngAfterViewInit(){this.SimpleBar=new Vh(this.elRef.nativeElement,this.options||{})}ngOnDestroy(){this.SimpleBar.unMount(),this.SimpleBar=null}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq))},e.\u0275cmp=i.Xpm({type:e,selectors:[["ngx-simplebar"]],hostAttrs:["data-simplebar","init"],inputs:{options:"options"},ngContentSelectors:F8,decls:13,vars:0,consts:[[1,"simplebar-wrapper"],[1,"simplebar-height-auto-observer-wrapper"],[1,"simplebar-height-auto-observer"],[1,"simplebar-mask"],[1,"simplebar-offset"],[1,"simplebar-content-wrapper"],[1,"simplebar-content"],[1,"simplebar-placeholder"],[1,"simplebar-track","simplebar-horizontal"],[1,"simplebar-scrollbar"],[1,"simplebar-track","simplebar-vertical"]],template:function(t,n){1&t&&(i.F$t(),i.TgZ(0,"div",0)(1,"div",1),i._UZ(2,"div",2),i.qZA(),i.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),i.Hsn(7),i.qZA()()()(),i._UZ(8,"div",7),i.qZA(),i.TgZ(9,"div",8),i._UZ(10,"div",9),i.qZA(),i.TgZ(11,"div",10),i._UZ(12,"div",9),i.qZA())},styles:["[data-simplebar]{position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;-webkit-box-align:start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;-webkit-box-flex:inherit;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;-webkit-transition:opacity linear;transition:opacity linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}","ngx-simplebar{display:block}"],encapsulation:2}),e})(),Ar=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[]]}),e})();const Ch=["*"];class bh{constructor(a){this.icons=a}}let w3=(()=>{class e{constructor(t,n,v){this.element=t,this.changeDetector=n,this.icons=v}ngOnChanges(t){const v=Object.assign({},...this.icons)[t.name.currentValue]||"";v||console.warn(`Icon not found: ${t.name.currentValue}\n`),this.element.nativeElement.innerHTML=v,this.changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(bh))},e.\u0275cmp=i.Xpm({type:e,selectors:[["fluent-ui-icon"],["fui"]],inputs:{name:"name"},features:[i.TTD],ngContentSelectors:Ch,decls:1,vars:0,template:function(t,n){1&t&&(i.F$t(),i.Hsn(0))},styles:["[_nghost-%COMP%] {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      fill: none;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      svg{\n        width: 100% !important;\n        height: 100% !important;\n      }\n    }"]}),e})(),j8=(()=>{class e{constructor(t){if(this.icons=t,!this.icons)throw new Error("No icon provided. Make sure to use 'FluentUiIconsModule.pick({ ... })' when importing the module\n")}static pick(t){return{ngModule:e,providers:[{provide:bh,multi:!0,useValue:t}]}}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(bh,8))},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[]]}),e})();const hM=["LoadingItem"];let sM=(()=>{class e{constructor(){}ngOnInit(){}ngAfterViewInit(){r1(this.LoadingItem.nativeElement).find("img.img-content").on("load",()=>{r1(this.LoadingItem.nativeElement).find("img.img-content").show(),r1(this.LoadingItem.nativeElement).find("fast-skeleton.img-loading").hide()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["item-list-info-anime"]],viewQuery:function(t,n){if(1&t&&i.Gf(hM,5),2&t){let v;i.iGM(v=i.CRH())&&(n.LoadingItem=v.first)}},inputs:{image:"image",title:"title"},decls:11,vars:2,consts:[[1,"item-flex"],[1,"playIcon"],["width","36","height","36","viewBox","0 0 36 36","xmlns","http://www.w3.org/2000/svg"],["d","M4,18c0-7.7,6.3-14,14-14s14,6.3,14,14s-6.3,14-14,14S4,25.7,4,18z M16.4,12.6c-0.8-0.5-1.9-0.2-2.4,0.7 c-0.1,0.3-0.2,0.6-0.2,0.8v7.7c0,1,0.8,1.7,1.8,1.7c0.3,0,0.6-0.1,0.8-0.2l8.1-4.5c0.5-0.3,0.7-0.9,0.4-1.4 c-0.1-0.2-0.2-0.3-0.4-0.4C24.5,17.1,16.4,12.6,16.4,12.6z",1,"st0"],[1,"image"],["LoadingItem",""],["shimmer","","shape","rect",1,"img-loading"],[1,"img-content",3,"src"],[1,"title"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0)(1,"div",1),i.O4$(),i.TgZ(2,"svg",2),i._UZ(3,"path",3),i.qZA()(),i.kcU(),i.TgZ(4,"div",4,5),i._UZ(6,"fast-skeleton",6)(7,"img",7),i.qZA(),i.TgZ(8,"div",8)(9,"h3"),i._uU(10),i.qZA()()()),2&t&&(i.xp6(7),i.Q6J("src",n.image,i.LSH),i.xp6(3),i.Oqu(n.title))},styles:["div.item-flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;align-content:center;padding:14px 24px;border-radius:50px;--color: #FFFFFF;background-color:transparent;cursor:default;transition:background-color .2s,cursor .1s}div.item-flex[_ngcontent-%COMP%]   div.playIcon[_ngcontent-%COMP%]{margin-left:8px}div.item-flex[_ngcontent-%COMP%]   div.playIcon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:var(--color);transition:fill .2s}div.item-flex[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%]{width:100px;height:60px;overflow:hidden;margin-left:18px;margin-right:24px;position:relative;border-radius:6px;box-shadow:0 0 4px .5px #000000bf}div.item-flex[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;object-fit:cover}div.item-flex[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%]   img.img-content[_ngcontent-%COMP%]{display:none}div.item-flex[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%]   fast-skeleton.img-loading[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%}div.item-flex[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin:0;font-size:20px;color:var(--color);transition:color .2s}div.item-flex[_ngcontent-%COMP%]:hover{background-color:#fffc;--color: #c21eac;cursor:pointer}"]}),e})();const iM=["LoadingImage"];function nM(e,a){if(1&e&&i._UZ(0,"item-list-info-anime",24),2&e){const t=a.$implicit;i.Q6J("image",t.image)("title",t.title)}}function lM(e,a){if(1&e&&(i.TgZ(0,"fast-accordion-item",16)(1,"div",17),i.YNc(2,nM,1,2,"item-list-info-anime",18),i.qZA(),i.TgZ(3,"div",19)(4,"h3"),i._uU(5),i.qZA()(),i.O4$(),i.TgZ(6,"svg",20),i._UZ(7,"path",21),i.qZA(),i.TgZ(8,"svg",22),i._UZ(9,"path",23),i.qZA()()),2&e){const t=a.$implicit;i.xp6(2),i.Q6J("ngForOf",t.chapters),i.xp6(3),i.Oqu(t.title)}}let rM=(()=>{class e{constructor(){this.totalEpisodes="0",this.totalSeasons="0",this.optionScroll={forceVisible:!0,autoHide:!1}}ngOnInit(){var t=0;this.lists.forEach(n=>t+=n.chapters.length),this.totalEpisodes=String(t),this.totalSeasons=String(this.lists.length)}ngAfterViewInit(){r1(this.LoadingImage.nativeElement).find("img.img-content").on("load",()=>{r1(this.LoadingImage.nativeElement).find("img.img-content").show(),r1(this.LoadingImage.nativeElement).find("fast-skeleton").hide()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-info-anime"]],viewQuery:function(t,n){if(1&t&&i.Gf(iM,5),2&t){let v;i.iGM(v=i.CRH())&&(n.LoadingImage=v.first)}},inputs:{description:"description",title:"title",status:"status",image:"image",timeUpload:"timeUpload",views:"views",lists:"lists",genders:"genders",close:"close"},decls:30,vars:9,consts:[["id","info-anime",3,"options"],[1,"close",3,"click"],["name","dismiss_28_filled",1,"beat"],[1,"info-header"],[1,"loading-cover"],["LoadingImage",""],["src","./assets/backgroung-load-min.svg",1,"img-loading"],[1,"img-content",3,"src"],["shape","rect"],[1,"infoData"],[1,"title"],[1,"infoExtra"],[1,"status"],[3,"options"],[1,"info-season"],["slot","item",4,"ngFor","ngForOf"],["slot","item"],[1,"chapters"],[3,"image","title",4,"ngFor","ngForOf"],["slot","heading",1,"heading"],["width","24","height","24","viewBox","0 0 24 24","fill","#0084cc","xmlns","http://www.w3.org/2000/svg","slot","collapsed-icon",2,"stroke","#0084cc"],["transform","rotate(-90 12 12.0056)","id","svg_1","d","m16.97245,3.687a1,1 0 1 0 -1.454,-1.374l-8.5,9a1,1 0 0 0 0,1.374l8.5,9.001a1,1 0 1 0 1.454,-1.373l-7.852,-8.315l7.852,-8.313z"],["width","24","height","24","viewBox","0 0 24 24","fill","#0084cc","xmlns","http://www.w3.org/2000/svg","slot","expanded-icon",2,"stroke","#0084cc"],["transform","rotate(90 12 12.0056)","id","svg_1","d","m16.97245,3.687a1,1 0 1 0 -1.454,-1.374l-8.5,9a1,1 0 0 0 0,1.374l8.5,9.001a1,1 0 1 0 1.454,-1.373l-7.852,-8.315l7.852,-8.313z"],[3,"image","title"]],template:function(t,n){1&t&&(i.TgZ(0,"ngx-simplebar",0)(1,"div",1),i.NdJ("click",function(){return n.close()}),i._UZ(2,"fluent-ui-icon",2),i.qZA(),i.TgZ(3,"div",3)(4,"div",4,5),i._UZ(6,"img",6)(7,"img",7)(8,"fast-skeleton",8),i.qZA(),i.TgZ(9,"div",9)(10,"div",10)(11,"h2"),i._uU(12),i.qZA()(),i.TgZ(13,"div",11)(14,"div",12)(15,"b"),i._uU(16),i.qZA()(),i.TgZ(17,"h4")(18,"b"),i._uU(19),i.qZA(),i._uU(20," Temporadas - "),i.TgZ(21,"b"),i._uU(22),i.qZA(),i._uU(23," Episodios"),i.qZA()(),i.TgZ(24,"ngx-simplebar",13)(25,"p"),i._uU(26),i.qZA()()()(),i.TgZ(27,"div",14)(28,"fast-accordion"),i.YNc(29,lM,10,2,"fast-accordion-item",15),i.qZA()()()),2&t&&(i.Q6J("options",n.optionScroll),i.xp6(7),i.Q6J("src",n.image,i.LSH),i.xp6(5),i.Oqu(n.title),i.xp6(4),i.Oqu(n.status?"Emisi\xf3n":"Finalizado"),i.xp6(3),i.Oqu(n.totalSeasons),i.xp6(3),i.Oqu(n.totalEpisodes),i.xp6(2),i.Q6J("options",n.optionScroll),i.xp6(2),i.Oqu(n.description),i.xp6(3),i.Q6J("ngForOf",n.lists))},directives:[Y3,w3,R5,sM],styles:["ngx-simplebar#info-anime[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#18142f}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.close[_ngcontent-%COMP%]{position:fixed;z-index:1;right:12px;top:44px;padding:6px;background:#69036b;border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 5px 1px #00000080;cursor:pointer}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.close[_ngcontent-%COMP%]   fluent-ui-icon[_ngcontent-%COMP%]{fill:#fff;width:28px;height:28px}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]{position:relative;margin:16px;width:calc(100% - 32px);height:300px;transition:height .2s;background:#18142f;background:radial-gradient(circle,#18142f 0%,#15122a 50%,#100e20 100%);box-shadow:0 0 5px 1px #0006;border-radius:16px}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.loading-cover[_ngcontent-%COMP%]{position:absolute;top:16px;left:16px;bottom:16px;width:auto;height:calc(100% - 32px);border-radius:8px;overflow:hidden}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.loading-cover[_ngcontent-%COMP%]   img.img-loading[_ngcontent-%COMP%]{width:auto;height:100%;opacity:0}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.loading-cover[_ngcontent-%COMP%]   img.img-content[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;top:0;right:0;width:100%;height:100%;display:none}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.loading-cover[_ngcontent-%COMP%]   fast-skeleton[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;margin-bottom:8px}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]{position:absolute;top:20px;left:224px;height:calc(100% - 36px);display:flex;flex-direction:column;margin-right:16px;overflow-y:auto;overflow-x:hidden;width:calc(100% - 238px);transform:left .2s,width .2s}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{position:absolute;top:8px;left:0;right:0;width:100%;height:92px;display:flex;align-items:center}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:34px;font-weight:400;color:#0084cc;max-width:100%;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   div.infoExtra[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;align-items:center;flex-wrap:nowrap;width:calc(100% - 6px);margin-left:6px;height:40px;position:absolute;top:100px;left:0;right:0}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   div.infoExtra[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]{padding:3px 10px;display:flex;background-color:#0084cc;border-radius:20px;align-items:center}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   div.infoExtra[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#fff;font-size:12px;text-transform:uppercase;font-weight:700}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   div.infoExtra[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-left:12px;color:#fff;font-weight:400;font-size:18px;display:flex;align-items:center;flex-direction:row}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   div.infoExtra[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{margin-left:4px;margin-right:4px;color:#0084cc}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   ngx-simplebar[_ngcontent-%COMP%]{height:calc(100% - 138px);position:absolute;bottom:0;left:0;right:0;width:100%}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]   ngx-simplebar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6f6c7d;margin:2px 8px 0 10px;width:calc(100% - 18px)}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-season[_ngcontent-%COMP%]{margin-left:16px;margin-right:16px}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-season[_ngcontent-%COMP%]   fast-accordion[_ngcontent-%COMP%]{border:none}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-season[_ngcontent-%COMP%]   fast-accordion[_ngcontent-%COMP%]   fast-accordion-item[_ngcontent-%COMP%]{padding:12px 8px;border-radius:8px;box-shadow:0 0 5px 1px #0006;border:none;margin-bottom:12px;background-color:#28153b}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-season[_ngcontent-%COMP%]   fast-accordion[_ngcontent-%COMP%]   fast-accordion-item[_ngcontent-%COMP%]   div.heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:16px}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-season[_ngcontent-%COMP%]   fast-accordion[_ngcontent-%COMP%]   fast-accordion-item[_ngcontent-%COMP%]   div.chapters[_ngcontent-%COMP%]{margin-top:12px}@media only screen and (min-width: 900px){ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]{height:300!important}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]{left:224px;width:calc(100% - 238px)}}@media only screen and (min-width: 1200px){ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]{height:400px!important}ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]   div.infoData[_ngcontent-%COMP%]{left:294px;width:calc(100% - 310px)}}@media only screen and (min-width: 1700px){ngx-simplebar#info-anime[_ngcontent-%COMP%]   div.info-header[_ngcontent-%COMP%]{height:500px!important}}"]}),e})(),O4=(()=>{class e{constructor(t){this.apiAnime=t,this.isOpenInfo=!1}openInfoAnime(t){return new Promise((n,v)=>{try{r1("div#load-viewer").fadeIn("fast");var A=-1===t.indexOf("/ver/")?t.replace("https://henaojara.com/","https://henaojara.com/ver/"):t;this.apiAnime.getInfoData(A).then(S=>{var N;this.isOpenInfo&&window.infoContent.clear(),this.isOpenInfo=!0;var o0=null===(N=window.infoContent)||void 0===N?void 0:N.createComponent(rM);return o0.instance.description=S.description,o0.instance.genders=S.genders,o0.instance.image=S.image,o0.instance.lists=S.lists,o0.instance.status=S.status,o0.instance.timeUpload=S.timeUpload,o0.instance.title=S.title,o0.instance.views=S.views,o0.instance.close=()=>r1("#view-anime").fadeOut("fast",()=>{o0.destroy(),this.isOpenInfo=!1}),r1("#view-anime").fadeIn("fast"),r1("div#load-viewer").fadeOut("fast"),n(!0)}).catch(S=>v(S))}catch(S){v(S),r1("div#load-viewer").fadeOut("fast")}})}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(c3))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();const oM=["LoadingItem"],cM=["ContentComponent"];let Qh=(()=>{class e{constructor(){}ngAfterViewInit(){r1(this.LoadingItem.nativeElement).find("img.img-loading").on("load",()=>{r1(this.ContentComponent.nativeElement).fadeIn()}),r1(this.LoadingItem.nativeElement).find("img.img-content").on("load",()=>{r1(this.LoadingItem.nativeElement).find("img.img-content").show(),r1(this.LoadingItem.nativeElement).find("fast-skeleton").hide()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["items-list"]],viewQuery:function(t,n){if(1&t&&(i.Gf(oM,5),i.Gf(cM,5)),2&t){let v;i.iGM(v=i.CRH())&&(n.LoadingItem=v.first),i.iGM(v=i.CRH())&&(n.ContentComponent=v.first)}},inputs:{title:"title",image:"image",type:"type",url:"url",click:"click"},decls:16,vars:3,consts:[[1,"items-list"],["ContentComponent",""],[1,"loading"],["LoadingItem",""],[1,"type"],[1,"type-text"],[1,"hover-view"],[1,"play-icon"],["name","play_24_filled",1,"beat",2,"fill","#0084cc"],["src","./assets/backgroung-load-min.svg",1,"img-loading"],[1,"img-content",3,"src"],["shimmer","","shape","rect"],[1,"title"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0,1)(2,"div",2,3)(4,"div",4)(5,"div",5),i._uU(6),i.qZA()(),i.TgZ(7,"div",6)(8,"div",7),i._UZ(9,"fluent-ui-icon",8),i.qZA()(),i._UZ(10,"img",9)(11,"img",10)(12,"fast-skeleton",11),i.qZA(),i.TgZ(13,"div",12)(14,"h3"),i._uU(15),i.qZA()()()),2&t&&(i.xp6(6),i.Oqu(n.type),i.xp6(5),i.Q6J("src",n.image,i.LSH),i.xp6(4),i.Oqu(n.title))},directives:[w3],styles:["div.items-list[_ngcontent-%COMP%]{--opacity-hover: 0;position:relative;width:100%;display:none;cursor:pointer}div.items-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]{position:relative;width:100%;border-radius:6px;overflow:hidden}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.type[_ngcontent-%COMP%]{position:absolute;z-index:5;left:10px;top:8px;padding:0 10px;background-color:#000;border-radius:10px}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.type[_ngcontent-%COMP%]   div.type-text[_ngcontent-%COMP%]{color:#fff;font-size:14px;font-weight:700;text-transform:uppercase;font-weight:400}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.hover-view[_ngcontent-%COMP%]{position:absolute;cursor:pointer;opacity:var(--opacity-hover);transition:opacity .15s;left:0;top:0;bottom:0;right:0;z-index:4;display:flex;justify-content:center;align-items:center;background-color:#00000080}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.hover-view[_ngcontent-%COMP%]   div.play-icon[_ngcontent-%COMP%]{margin:0;width:55px;height:55px;background-color:#0006;border:2px solid #FFFFFF;display:flex;align-items:center;justify-content:center;border-radius:50%}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   img.img-loading[_ngcontent-%COMP%]{width:100%;height:auto;opacity:0}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   img.img-content[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;top:0;right:0;width:100%;height:100%;display:none}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   fast-skeleton[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;margin-bottom:8px}div.items-list[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{width:100%;text-align:center}div.items-list[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{cursor:pointer;color:#0084cc;font-weight:400}div.items-list[_ngcontent-%COMP%]:hover{--opacity-hover: 1}"]}),e})();function vM(e,a){1&e&&i._UZ(0,"fast-progress",9)}function gM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",10),i._UZ(1,"img",11),i.TgZ(2,"div",12)(3,"h2"),i._uU(4,"Ocurri\xf3 un error al cargar :("),i.qZA(),i.TgZ(5,"fast-button",13),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadData()}),i._uU(6,"Reintentar"),i.qZA()()()}}function dM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"li")(1,"items-list",15),i.NdJ("click",function(){const A=i.CHM(t).$implicit;return i.oxw(2).openInfoAnime(A.url)}),i.qZA()()}if(2&e){const t=a.$implicit;i.xp6(1),i.s9C("type",t.type),i.Q6J("title",t.title)("image",t.image)("url",t.url)}}function wM(e,a){if(1&e&&(i.TgZ(0,"ul"),i.YNc(1,dM,2,4,"li",14),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.listEmision)}}function pM(e,a){1&e&&i._UZ(0,"fast-progress",9)}function uM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",16)(1,"fast-button",13),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadMoreData()}),i._uU(2,"Cargar m\xe1s"),i.qZA()()}}let mM=(()=>{class e{constructor(t,n){this.apiAnime=t,this.fGlobal=n,this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.optionScroll={forceVisible:!0,autoHide:!1}}ngOnInit(){this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.reloadData()}reloadMoreData(){this.moreDataLoading=!0,this.currentPage+=1,r1("#buttonMoreAnimes fast-button").attr("disabled","true"),this.apiAnime.getMoreResultSearch(this.search,this.numbersPages[this.currentPage]).then(t=>{this.listEmision=this.listEmision.concat(t),this.moreDataLoading=!1,r1("#buttonMoreAnimes fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]}).catch(()=>{this.currentPage-=1,this.moreDataLoading=!1,r1("#buttonMoreAnimes fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]})}reloadData(){this.dataLoading=!1,this.showError=!1,this.apiAnime.getResultSearch(this.search).then(t=>{this.listEmision=t.list,this.numbersPages=t.numPages,this.currentPage=0,this.showButtonMore=0!=t.numPages.length,this.dataLoading=!0}).catch(t=>{this.showError=!0,this.dataLoading=!0,console.log(t)})}openInfoAnime(t){return this.fGlobal.openInfoAnime(t)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c3),i.Y36(O4))},e.\u0275cmp=i.Xpm({type:e,selectors:[["page-search-results"]],inputs:{search:"search",title:"title",close:"close"},decls:13,vars:7,consts:[["id","search-results-page",3,"options"],[1,"listSearchResults"],["slot","start",3,"click"],["name","arrow_left_20_filled",1,"beat"],[1,"cont"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[4,"ngIf"],["id","buttonMoreAnimes","class","buttonMore",4,"ngIf"],[1,"loading"],[1,"error"],["src","./assets/net_error.svg"],[1,"title"],["appearance","accent",3,"click"],[4,"ngFor","ngForOf"],[3,"title","image","type","url","click"],["id","buttonMoreAnimes",1,"buttonMore"]],template:function(t,n){1&t&&(i.TgZ(0,"ngx-simplebar",0)(1,"div",1)(2,"fast-toolbar")(3,"fast-button",2),i.NdJ("click",function(){return n.close()}),i._UZ(4,"fluent-ui-icon",3),i.qZA(),i.TgZ(5,"h2"),i._uU(6),i.qZA()(),i.TgZ(7,"div",4),i.YNc(8,vM,1,0,"fast-progress",5),i.YNc(9,gM,7,0,"div",6),i.YNc(10,wM,2,1,"ul",7),i.YNc(11,pM,1,0,"fast-progress",5),i.YNc(12,uM,3,0,"div",8),i.qZA()()()),2&t&&(i.Q6J("options",n.optionScroll),i.xp6(6),i.hij('Resultado de: "',n.title,'"'),i.xp6(2),i.Q6J("ngIf",!n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.showError),i.xp6(1),i.Q6J("ngIf",n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.moreDataLoading),i.xp6(1),i.Q6J("ngIf",n.showButtonMore))},directives:[Y3,w3,G2,R5,Qh],styles:["ngx-simplebar#search-results-page[_ngcontent-%COMP%]{width:100%;height:100%}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]{width:calc(100% - 30px);padding-right:20px;padding-left:10px}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]{background-color:#29153c;width:100%;height:60px;position:fixed;z-index:10;top:30px;left:0;right:0;display:flex;align-items:center}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:8px;margin-right:16px}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]   fluent-ui-icon[_ngcontent-%COMP%]{fill:#fff;display:flex;align-items:center;justify-content:center}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   div.cont[_ngcontent-%COMP%]{margin-top:70px}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   fast-progress.loading[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   div.buttonMore[_ngcontent-%COMP%]{width:100%;--accent-fill-rest: #391648;padding-top:8px;padding-bottom:12px;display:flex;justify-content:center}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;padding-left:16px;--accent-fill-rest: #391648;display:flex;align-items:center;justify-content:flex-start;width:100%}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{fill:#fff;width:100px;height:100px;margin-right:20px}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:26px;margin-top:20px;margin-bottom:20px}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:8px}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%;padding:0}ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(20% - 10px);margin-left:10px;margin-top:8px;list-style:none;height:auto}@media only screen and (min-width: 900px){ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(16.6666666667% - 10px)}}@media only screen and (min-width: 1200px){ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(14.2857142857% - 10px)}}@media only screen and (min-width: 1500px){ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(12.5% - 10px)}}@media only screen and (min-width: 1700px){ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(11.1111111111% - 10px)}}@media only screen and (min-width: 2000px){ngx-simplebar#search-results-page[_ngcontent-%COMP%]   div.listSearchResults[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(10% - 10px)}}"]}),e})();var zM=o(2523);const _M=["LoadingItem"],fM=["ContentComponent"];let MM=(()=>{class e{constructor(){}ngAfterViewInit(){r1(this.LoadingItem.nativeElement).find("img.img-loading").on("load",()=>{r1(this.ContentComponent.nativeElement).fadeIn()}),r1(this.LoadingItem.nativeElement).find("img.img-content").on("load",()=>{r1(this.LoadingItem.nativeElement).find("img.img-content").show(),r1(this.LoadingItem.nativeElement).find("fast-skeleton").hide()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["items-list2"]],viewQuery:function(t,n){if(1&t&&(i.Gf(_M,5),i.Gf(fM,5)),2&t){let v;i.iGM(v=i.CRH())&&(n.LoadingItem=v.first),i.iGM(v=i.CRH())&&(n.ContentComponent=v.first)}},inputs:{title:"title",image:"image",type:"type",url:"url",rank:"rank",click:"click"},decls:17,vars:3,consts:[[1,"items-list"],["ContentComponent",""],[1,"loading"],["LoadingItem",""],[1,"type"],["src","./assets/bookmark.svg",1,"bookmark"],[1,"type-text"],[1,"hover-view"],[1,"play-icon"],["name","play_24_filled",1,"beat",2,"fill","#0084cc"],["src","./assets/backgroung-load-min.svg",1,"img-loading"],[1,"img-content",3,"src"],["shimmer","","shape","rect"],[1,"title"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0,1)(2,"div",2,3)(4,"div",4),i._UZ(5,"img",5),i.TgZ(6,"div",6),i._uU(7),i.qZA()(),i.TgZ(8,"div",7)(9,"div",8),i._UZ(10,"fluent-ui-icon",9),i.qZA()(),i._UZ(11,"img",10)(12,"img",11)(13,"fast-skeleton",12),i.qZA(),i.TgZ(14,"div",13)(15,"h3"),i._uU(16),i.qZA()()()),2&t&&(i.xp6(7),i.Oqu(n.rank),i.xp6(5),i.Q6J("src",n.image,i.LSH),i.xp6(4),i.Oqu(n.title))},directives:[w3],styles:["div.items-list[_ngcontent-%COMP%]{--opacity-hover: 0;position:relative;width:100%;display:none;cursor:pointer}div.items-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]{position:relative;width:100%;border-radius:6px;overflow:hidden}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.type[_ngcontent-%COMP%]{position:absolute;z-index:5;left:0px;top:0px;padding:0;background-color:transparent;width:32%;border-radius:10px}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.type[_ngcontent-%COMP%]   img.bookmark[_ngcontent-%COMP%]{width:100%;height:auto;filter:drop-shadow(3px 5px 2px rgba(0,0,0,.4))}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.type[_ngcontent-%COMP%]   div.type-text[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;right:0;margin:40% auto 50%;color:#fff;font-size:20px;font-weight:700;text-transform:uppercase;font-weight:400;width:min-content;height:min-content}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.hover-view[_ngcontent-%COMP%]{position:absolute;cursor:pointer;opacity:var(--opacity-hover);transition:opacity .15s;left:0;top:0;bottom:0;right:0;z-index:4;display:flex;justify-content:center;align-items:center;background-color:#00000080}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.hover-view[_ngcontent-%COMP%]   div.play-icon[_ngcontent-%COMP%]{margin:0;width:55px;height:55px;background-color:#0006;border:2px solid #FFFFFF;display:flex;align-items:center;justify-content:center;border-radius:50%}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   img.img-loading[_ngcontent-%COMP%]{width:100%;height:auto;opacity:0}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   img.img-content[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;top:0;right:0;width:100%;height:100%;display:none}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   fast-skeleton[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;margin-bottom:8px}div.items-list[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{width:100%;text-align:center}div.items-list[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{cursor:pointer;color:#0084cc;font-weight:400}div.items-list[_ngcontent-%COMP%]:hover{--opacity-hover: 1}"]}),e})();const xM=["LoadingItem"],HM=["ContentComponent"];let AM=(()=>{class e{constructor(){}ngAfterViewInit(){r1(this.LoadingItem.nativeElement).find("img.img-loading").on("load",()=>{r1(this.ContentComponent.nativeElement).fadeIn()}),r1(this.LoadingItem.nativeElement).find("img.img-content").on("load",()=>{r1(this.LoadingItem.nativeElement).find("img.img-content").show(),r1(this.LoadingItem.nativeElement).find("fast-skeleton").hide()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["items-list3"]],viewQuery:function(t,n){if(1&t&&(i.Gf(xM,5),i.Gf(HM,5)),2&t){let v;i.iGM(v=i.CRH())&&(n.LoadingItem=v.first),i.iGM(v=i.CRH())&&(n.ContentComponent=v.first)}},inputs:{title:"title",image:"image",type:"type",url:"url",extra:"extra",click:"click"},decls:19,vars:4,consts:[[1,"items-list"],["ContentComponent",""],[1,"loading"],["LoadingItem",""],[1,"type"],[1,"type-text"],[1,"extra"],[1,"hover-view"],[1,"play-icon"],["name","play_24_filled",1,"beat",2,"fill","#0084cc"],["src","./assets/backgroung-load-min-2.svg",1,"img-loading"],[1,"img-content",3,"src"],["shimmer","","shape","rect"],[1,"title"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0,1)(2,"div",2,3)(4,"div",4)(5,"div",5),i._uU(6),i.qZA()(),i.TgZ(7,"div",6)(8,"h4"),i._uU(9),i.qZA()(),i.TgZ(10,"div",7)(11,"div",8),i._UZ(12,"fluent-ui-icon",9),i.qZA()(),i._UZ(13,"img",10)(14,"img",11)(15,"fast-skeleton",12),i.qZA(),i.TgZ(16,"div",13)(17,"h3"),i._uU(18),i.qZA()()()),2&t&&(i.xp6(6),i.Oqu(n.type),i.xp6(3),i.Oqu(n.extra),i.xp6(5),i.Q6J("src",n.image,i.LSH),i.xp6(4),i.Oqu(n.title))},directives:[w3],styles:["div.items-list[_ngcontent-%COMP%]{--opacity-hover: 0;--bottom-hover: 0%;position:relative;width:100%;display:none;cursor:pointer}div.items-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]{position:relative;width:100%;border-radius:6px;overflow:hidden}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.type[_ngcontent-%COMP%]{position:absolute;z-index:5;left:10px;top:8px;padding:0 10px;background-color:#000;border-radius:10px}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.type[_ngcontent-%COMP%]   div.type-text[_ngcontent-%COMP%]{color:#fff;font-size:14px;font-weight:700;text-transform:uppercase;font-weight:400}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.extra[_ngcontent-%COMP%]{position:absolute;bottom:var(--bottom-hover);transition:bottom .35s;z-index:3;left:0;right:0;width:100%;height:auto;background-color:#0009}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.extra[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:8px;font-size:12px;font-weight:400;color:#fff}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.hover-view[_ngcontent-%COMP%]{position:absolute;cursor:pointer;opacity:var(--opacity-hover);transition:opacity .15s;left:0;top:0;bottom:0;right:0;z-index:4;display:flex;justify-content:center;align-items:center;background-color:#00000080}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   div.hover-view[_ngcontent-%COMP%]   div.play-icon[_ngcontent-%COMP%]{margin:0;width:55px;height:55px;background-color:#0006;border:2px solid #FFFFFF;display:flex;align-items:center;justify-content:center;border-radius:50%}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   img.img-loading[_ngcontent-%COMP%]{width:100%;height:auto;opacity:0}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   img.img-content[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;top:0;right:0;width:100%;height:100%;display:none;object-fit:cover}div.items-list[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   fast-skeleton[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;margin-bottom:8px}div.items-list[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{width:100%;text-align:center}div.items-list[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{cursor:pointer;color:#0084cc;font-weight:400}div.items-list[_ngcontent-%COMP%]:hover{--opacity-hover: 1;--bottom-hover: -100%}"]}),e})();function VM(e,a){if(1&e&&(i.TgZ(0,"fast-option",21),i._uU(1),i.qZA()),2&e){const t=a.$implicit;i.s9C("value",t.url),i.xp6(1),i.Oqu(t.name)}}function CM(e,a){1&e&&i._UZ(0,"fast-progress",22)}function bM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",23),i._UZ(1,"img",24),i.TgZ(2,"div",25)(3,"h2"),i._uU(4,"Ocurri\xf3 un error al cargar :("),i.qZA(),i.TgZ(5,"fast-button",26),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadData()}),i._uU(6,"Reintentar"),i.qZA()()()}}function yM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"li")(1,"items-list2",28),i.NdJ("click",function(){const A=i.CHM(t).$implicit;return i.oxw(2).openInfoAnime(A.url)}),i.qZA()()}if(2&e){const t=a.$implicit;i.xp6(1),i.s9C("type",t.type),i.s9C("rank",t.rank),i.Q6J("title",t.title)("image",t.image)("url",t.url)}}function LM(e,a){if(1&e&&(i.TgZ(0,"ul"),i.YNc(1,yM,2,5,"li",27),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.listPopulars)}}function BM(e,a){1&e&&i._UZ(0,"fast-progress",22)}function EM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",23),i._UZ(1,"img",24),i.TgZ(2,"div",25)(3,"h2"),i._uU(4,"Ocurri\xf3 un error al cargar :("),i.qZA(),i.TgZ(5,"fast-button",26),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadData()}),i._uU(6,"Reintentar"),i.qZA()()()}}function TM(e,a){if(1&e&&(i.TgZ(0,"li"),i._UZ(1,"items-list3",29),i.qZA()),2&e){const t=a.$implicit;i.xp6(1),i.s9C("type",t.type),i.s9C("rank",t.rank),i.Q6J("title",t.title)("image",t.image)("extra",null==t?null:t.extra)("url",t.url)}}function SM(e,a){if(1&e&&(i.TgZ(0,"ul"),i.YNc(1,TM,2,6,"li",27),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.listUploads)}}const OM=It.create("accent-fill-rest"),DM=It.create("neutral-fill-rest"),IM=It.create("neutral-fill-hover"),PM=It.create("neutral-fill-active");let kM=(()=>{class e{constructor(t,n){this.apiAnime=t,this.fGlobal=n,this.dataLoading=!1,this.listPopulars=[],this.listUploads=[],this.showError=!1,this.genders=[{name:"ACCION",url:"https://henaojara.com/category/categorias/accion/"},{name:"AMOR",url:"https://henaojara.com/category/categorias/amor/"},{name:"ARTES MARCIALES",url:"https://henaojara.com/category/categorias/artes-marciales/"},{name:"AVENTURA",url:"https://henaojara.com/category/categorias/aventura/"},{name:"CIENCIA FICCION",url:"https://henaojara.com/category/categorias/ciencia-ficcion/"},{name:"COCINAS",url:"https://henaojara.com/category/categorias/cocinas/"},{name:"COMEDIA",url:"https://henaojara.com/category/categorias/comedia/"},{name:"DEMONIOS",url:"https://henaojara.com/category/categorias/demonios/"},{name:"DEPORTES",url:"https://henaojara.com/category/categorias/deportes/"},{name:"DRAMA",url:"https://henaojara.com/category/categorias/drama/"},{name:"ECCHI",url:"https://henaojara.com/category/categorias/ecchi/"},{name:"EMISION",url:"https://henaojara.com/category/emision/"},{name:"ESCOLAR",url:"https://henaojara.com/category/categorias/escolar/"},{name:"ESPA\xd1OL CASTELLANO",url:"https://henaojara.com/category/categorias/espanol-castellano/"},{name:"ESPA\xd1OL LATINO",url:"https://henaojara.com/category/categorias/latino/"},{name:"ESTRENOS",url:"https://henaojara.com/category/estrenos/"},{name:"FAMILIA",url:"https://henaojara.com/category/categorias/familia/"},{name:"FANTASIA",url:"https://henaojara.com/category/categorias/fantasia/"},{name:"GORE",url:"https://henaojara.com/category/categorias/gore/"},{name:"HAREM",url:"https://henaojara.com/category/categorias/harem/"},{name:"HISTORICO",url:"https://henaojara.com/category/categorias/historico/"},{name:"ISEKAI",url:"https://henaojara.com/category/categorias/isekai/"},{name:"JUEGOS",url:"https://henaojara.com/category/categorias/juegos/"},{name:"MAGIA",url:"https://henaojara.com/category/categorias/magia/"},{name:"MECHA",url:"https://henaojara.com/category/categorias/mecha/"},{name:"MILITAR",url:"https://henaojara.com/category/categorias/militar/"},{name:"MISTERIO",url:"https://henaojara.com/category/categorias/misterio/"},{name:"MUSICA",url:"https://henaojara.com/category/categorias/musica/"},{name:"PELICULAS",url:"https://henaojara.com/category/peliculas/"},{name:"PIRATAS",url:"https://henaojara.com/category/categorias/piratas/"},{name:"PSICOLOGICO",url:"https://henaojara.com/category/categorias/psicologico/"},{name:"RECUERDOS",url:"https://henaojara.com/category/categorias/recuerdos/"},{name:"ROBOTS",url:"https://henaojara.com/category/categorias/robots/"},{name:"ROMANCE",url:"https://henaojara.com/category/categorias/romance/"},{name:"SAMURAI",url:"https://henaojara.com/category/categorias/samurai/"},{name:"SHOUNEN",url:"https://henaojara.com/category/categorias/shounen/"},{name:"SOBRENATURAL",url:"https://henaojara.com/category/categorias/sobrenatural/"},{name:"SUPERPODERES",url:"https://henaojara.com/category/categorias/superpoderes/"},{name:"SUSPENSO",url:"https://henaojara.com/category/categorias/suspenso/"},{name:"TERROR",url:"https://henaojara.com/category/categorias/terror/"},{name:"VAMPIROS",url:"https://henaojara.com/category/categorias/vampiros/"},{name:"YURI",url:"https://henaojara.com/category/categorias/yuri/"}],this.optionScroll={forceVisible:!0,autoHide:!1}}ngOnInit(){this.dataLoading=!1,this.listPopulars=[],this.listUploads=[],this.showError=!1,this.reloadData()}ngAfterViewInit(){var t;OM.setValueFor(r1("fast-select#list-genders").get(0),"#BC1EAC"),DM.setValueFor(r1("#buttons-extras").get(0),"#BC1EAC"),IM.setValueFor(r1("#buttons-extras").get(0),"#0084CC"),PM.setValueFor(r1("#buttons-extras").get(0),"#0084CC"),r1(null===(t=r1("fast-select#list-genders").get(0))||void 0===t?void 0:t.shadowRoot).append(r1("<style></style>").append("::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { border-radius: 8px; background: #0084cc; border: 1px solid #0084cc } ::-webkit-scrollbar-thumb:hover { background: #0084cc; border: 1px solid #0084cc, .6); }"))}reloadData(){this.dataLoading=!1,this.showError=!1,this.apiAnime.getInfoHome().then(t=>{this.listPopulars=t.populars,this.listUploads=t.uploads,this.dataLoading=!0}).catch(t=>{this.showError=!0,this.dataLoading=!0,console.log(t)})}openLink(t){j3.shell.openExternal(t)}openInfoAnime(t){return this.fGlobal.openInfoAnime(t)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c3),i.Y36(O4))},e.\u0275cmp=i.Xpm({type:e,selectors:[["page-home"]],decls:46,vars:8,consts:[["id","home-page",3,"options"],[1,"fixed"],[1,"card"],[1,"header"],[1,"content"],["id","list-genders"],["value","-1"],[3,"value",4,"ngFor","ngForOf"],[1,"card","top-margin"],[1,"social-panel"],["src","./assets/@Icons/facebook-app.svg",3,"click"],["src","./assets/@Icons/ig-instagram.svg",3,"click"],["src","./assets/@Icons/discord.svg",3,"click"],["id","buttons-extras",1,"buttons"],[3,"click"],["slot","start","name","window_new_20_regular",1,"beat",2,"fill","#FFFFFF"],[1,"lists"],["slot","start"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[4,"ngIf"],[3,"value"],[1,"loading"],[1,"error"],["src","./assets/net_error.svg"],[1,"title"],["appearance","accent",3,"click"],[4,"ngFor","ngForOf"],[3,"title","image","type","rank","url","click"],[3,"title","image","extra","type","rank","url"]],template:function(t,n){1&t&&(i.TgZ(0,"ngx-simplebar",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),i._uU(5,"CATEGORIAS"),i.qZA()(),i.TgZ(6,"div",4)(7,"fast-select",5)(8,"fast-option",6),i._uU(9,"Elegir la categor\xeda"),i.qZA(),i.YNc(10,VM,2,2,"fast-option",7),i.qZA()()(),i.TgZ(11,"div",8)(12,"div",3)(13,"h3"),i._uU(14,"REDES SOCIALES"),i.qZA()(),i.TgZ(15,"div",4)(16,"div",9)(17,"img",10),i.NdJ("click",function(){return n.openLink("https://www.facebook.com/henaojaraonline")}),i.qZA(),i.TgZ(18,"img",11),i.NdJ("click",function(){return n.openLink("https://instagram.com/henaojara")}),i.qZA(),i.TgZ(19,"img",12),i.NdJ("click",function(){return n.openLink("https://discord.gg/2yQVAWaBPk")}),i.qZA()()()(),i.TgZ(20,"div",8)(21,"div",3)(22,"h3"),i._uU(23,"EXTRAS"),i.qZA()(),i.TgZ(24,"div",4)(25,"div",13)(26,"fast-button",14),i.NdJ("click",function(){return n.openLink("https://henaojara.com/peticiones-de-anime/")}),i._UZ(27,"fluent-ui-icon",15),i._uU(28," Peticiones "),i.qZA(),i.TgZ(29,"fast-button",14),i.NdJ("click",function(){return n.openLink("https://www.paypal.com/donate/?hosted_button_id=RTV3KEBY72LMS")}),i._UZ(30,"fluent-ui-icon",15),i._uU(31," Donaciones "),i.qZA()()()()(),i.TgZ(32,"div",16)(33,"fast-toolbar")(34,"h3",17),i._uU(35,"TOP ANIMES POPULARES"),i.qZA()(),i.YNc(36,CM,1,0,"fast-progress",18),i.YNc(37,bM,7,0,"div",19),i.YNc(38,LM,2,1,"ul",20),i.qZA(),i.TgZ(39,"div",16)(40,"fast-toolbar")(41,"h3",17),i._uU(42,"\xdaLTIMOS EPISODIOS"),i.qZA()(),i.YNc(43,BM,1,0,"fast-progress",18),i.YNc(44,EM,7,0,"div",19),i.YNc(45,SM,2,1,"ul",20),i.qZA()()),2&t&&(i.Q6J("options",n.optionScroll),i.xp6(10),i.Q6J("ngForOf",n.genders),i.xp6(26),i.Q6J("ngIf",!n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.showError),i.xp6(1),i.Q6J("ngIf",n.dataLoading),i.xp6(5),i.Q6J("ngIf",!n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.showError),i.xp6(1),i.Q6J("ngIf",n.dataLoading))},directives:[Y3,R5,w3,G2,MM,AM],styles:["ngx-simplebar#home-page[_ngcontent-%COMP%]{width:100%;height:100%}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]{width:calc(100% - 30px);padding-right:20px;padding-left:10px}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]{width:100%}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-left:6px;margin-top:24px;margin-bottom:18px;font-size:24px;font-weight:700}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   fast-progress.loading[_ngcontent-%COMP%]{width:calc(100% - 290px);margin-left:8px;margin-right:8px}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   div.buttonMore[_ngcontent-%COMP%]{width:100%;--accent-fill-rest: #391648;padding-top:8px;padding-bottom:12px;display:flex;justify-content:center}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;padding-left:16px;--accent-fill-rest: #391648;display:flex;align-items:center;justify-content:flex-start;width:100%}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{fill:#fff;width:100px;height:100px;margin-right:20px}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:26px;margin-top:20px;margin-bottom:20px}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:8px}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:calc(100% - 280px);padding:0}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(33.3333333333% - 10px);margin-left:10px;margin-top:8px;list-style:none;height:auto}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]{position:absolute;right:26px;top:64px;width:260;z-index:6}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card.top-margin[_ngcontent-%COMP%]{margin-top:16px}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]{width:100%;padding:8px 5px;background-color:#28153b;border-radius:8px;box-shadow:0 0 5px 1px #0006}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]{height:24px;width:100%;border-bottom:1px solid #2d3e40;padding-bottom:5px}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:12px;margin-left:8px;margin-bottom:10px;font-size:18px;font-weight:400}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:12px}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.social-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;align-content:center}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.social-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;margin:8px;cursor:pointer}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:90%}ngx-simplebar#home-page[_ngcontent-%COMP%]   div.fixed[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{width:100%;margin-top:6px;margin-bottom:6px}@media only screen and (min-width: 900px){ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(25% - 10px)}}@media only screen and (min-width: 1200px){ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(20% - 10px)}}@media only screen and (min-width: 1500px){ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(16.6666666667% - 10px)}}@media only screen and (min-width: 1700px){ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(14.2857142857% - 10px)}}@media only screen and (min-width: 2000px){ngx-simplebar#home-page[_ngcontent-%COMP%]   div.lists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(10% - 10px)}}"]}),e})();const RM=["ImageItem"],NM=["LoadingItem"],FM=["ContentComponent"],jM=["ImageLoad"];let $M=(()=>{class e{constructor(){}ngAfterViewInit(){r1(this.ImageLoad.nativeElement).on("load",()=>r1(this.ContentComponent.nativeElement).fadeIn()),r1(this.ImageItem.nativeElement).on("load",()=>{r1(this.ImageItem.nativeElement).show(),r1(this.LoadingItem.nativeElement).css({opacity:0})})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["items-table"]],viewQuery:function(t,n){if(1&t&&(i.Gf(RM,5),i.Gf(NM,5),i.Gf(FM,5),i.Gf(jM,5)),2&t){let v;i.iGM(v=i.CRH())&&(n.ImageItem=v.first),i.iGM(v=i.CRH())&&(n.LoadingItem=v.first),i.iGM(v=i.CRH())&&(n.ContentComponent=v.first),i.iGM(v=i.CRH())&&(n.ImageLoad=v.first)}},inputs:{image:"image",click:"click"},decls:10,vars:1,consts:[[1,"item-table"],["ContentComponent",""],[1,"img-content",3,"src"],["ImageItem",""],[1,"hover-item"],[1,"loading"],["LoadingItem",""],["src","./assets/backgroung-load-min.svg",1,"img-loading"],["ImageLoad",""]],template:function(t,n){1&t&&(i.TgZ(0,"div",0,1),i._UZ(2,"img",2,3)(4,"div",4),i.TgZ(5,"div",5,6),i._UZ(7,"img",7,8)(9,"fast-progress-ring"),i.qZA()()),2&t&&(i.xp6(2),i.Q6J("src",n.image,i.LSH))},styles:["div.item-table[_ngcontent-%COMP%]{position:relative;padding-left:8px;padding-top:8px;padding-right:8px;cursor:pointer;--opacity-hover: 0;display:none}div.item-table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}div.item-table[_ngcontent-%COMP%]   div.hover-item[_ngcontent-%COMP%]{position:absolute;top:8px;left:8px;right:8px;bottom:0;width:calc(100% - 16px);height:calc(100% - 8px);background-color:#000;opacity:var(--opacity-hover);transform:opacity .2s}div.item-table[_ngcontent-%COMP%]   img.img-content[_ngcontent-%COMP%]{position:absolute;top:8px;left:8px;right:8px;bottom:0;width:calc(100% - 16px);height:calc(100% - 8px);object-fit:cover;display:none}div.item-table[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]{position:relative}div.item-table[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   img.img-loading[_ngcontent-%COMP%]{width:100%;height:100%;opacity:.7;display:flex}div.item-table[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]   fast-progress-ring[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;right:0;margin:auto}div.item-table[_ngcontent-%COMP%]:hover{--opacity-hover: .7}"]}),e})();function UM(e,a){1&e&&(i.TgZ(0,"tr",10)(1,"td",11),i._UZ(2,"fast-progress"),i.qZA()())}function GM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",13),i._UZ(1,"img",14),i.TgZ(2,"div",15)(3,"h2"),i._uU(4,"Ocurri\xf3 un error al cargar :("),i.qZA(),i.TgZ(5,"fast-button",16),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).reloadData()}),i._uU(6,"Reintentar"),i.qZA()()()}}function WM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"items-table",18),i.NdJ("click",function(){i.CHM(t);const v=i.oxw().$implicit;return i.oxw(2).openInfoAnime(null==v.sunday?null:v.sunday.url)}),i.qZA()}if(2&e){const t=i.oxw().$implicit;i.s9C("image",null==t.sunday?null:t.sunday.image)}}function KM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"items-table",18),i.NdJ("click",function(){i.CHM(t);const v=i.oxw().$implicit;return i.oxw(2).openInfoAnime(null==v.monday?null:v.monday.url)}),i.qZA()}if(2&e){const t=i.oxw().$implicit;i.s9C("image",null==t.monday?null:t.monday.image)}}function YM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"items-table",18),i.NdJ("click",function(){i.CHM(t);const v=i.oxw().$implicit;return i.oxw(2).openInfoAnime(null==v.tuesday?null:v.tuesday.url)}),i.qZA()}if(2&e){const t=i.oxw().$implicit;i.s9C("image",null==t.tuesday?null:t.tuesday.image)}}function ZM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"items-table",18),i.NdJ("click",function(){i.CHM(t);const v=i.oxw().$implicit;return i.oxw(2).openInfoAnime(null==v.wednesday?null:v.wednesday.url)}),i.qZA()}if(2&e){const t=i.oxw().$implicit;i.s9C("image",null==t.wednesday?null:t.wednesday.image)}}function QM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"items-table",18),i.NdJ("click",function(){i.CHM(t);const v=i.oxw().$implicit;return i.oxw(2).openInfoAnime(null==v.thursday?null:v.thursday.url)}),i.qZA()}if(2&e){const t=i.oxw().$implicit;i.s9C("image",null==t.thursday?null:t.thursday.image)}}function XM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"items-table",18),i.NdJ("click",function(){i.CHM(t);const v=i.oxw().$implicit;return i.oxw(2).openInfoAnime(null==v.friday?null:v.friday.url)}),i.qZA()}if(2&e){const t=i.oxw().$implicit;i.s9C("image",null==t.friday?null:t.friday.image)}}function JM(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"items-table",18),i.NdJ("click",function(){i.CHM(t);const v=i.oxw().$implicit;return i.oxw(2).openInfoAnime(null==v.saturday?null:v.saturday.url)}),i.qZA()}if(2&e){const t=i.oxw().$implicit;i.s9C("image",null==t.saturday?null:t.saturday.image)}}function qM(e,a){if(1&e&&(i.TgZ(0,"tr")(1,"td"),i.YNc(2,WM,1,1,"items-table",17),i.qZA(),i.TgZ(3,"td"),i.YNc(4,KM,1,1,"items-table",17),i.qZA(),i.TgZ(5,"td"),i.YNc(6,YM,1,1,"items-table",17),i.qZA(),i.TgZ(7,"td"),i.YNc(8,ZM,1,1,"items-table",17),i.qZA(),i.TgZ(9,"td"),i.YNc(10,QM,1,1,"items-table",17),i.qZA(),i.TgZ(11,"td"),i.YNc(12,XM,1,1,"items-table",17),i.qZA(),i.TgZ(13,"td"),i.YNc(14,JM,1,1,"items-table",17),i.qZA()()),2&e){const t=a.$implicit;i.xp6(2),i.Q6J("ngIf",t.sunday),i.xp6(2),i.Q6J("ngIf",t.monday),i.xp6(2),i.Q6J("ngIf",t.tuesday),i.xp6(2),i.Q6J("ngIf",t.wednesday),i.xp6(2),i.Q6J("ngIf",t.thursday),i.xp6(2),i.Q6J("ngIf",t.friday),i.xp6(2),i.Q6J("ngIf",t.saturday)}}function tx(e,a){if(1&e&&(i.TgZ(0,"tbody")(1,"tr")(2,"td",11),i.YNc(3,GM,7,0,"div",8),i.qZA()(),i.YNc(4,qM,15,7,"tr",12),i.qZA()),2&e){const t=i.oxw();i.xp6(3),i.Q6J("ngIf",t.showError),i.xp6(1),i.Q6J("ngForOf",t.tableEmision)}}function ax(e,a){1&e&&i._UZ(0,"fast-progress",10)}function ex(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",13),i._UZ(1,"img",14),i.TgZ(2,"div",15)(3,"h2"),i._uU(4,"Ocurri\xf3 un error al cargar :("),i.qZA(),i.TgZ(5,"fast-button",16),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadData()}),i._uU(6,"Reintentar"),i.qZA()()()}}function hx(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"li")(1,"items-list",19),i.NdJ("click",function(){const A=i.CHM(t).$implicit;return i.oxw(2).openInfoAnime(A.url)}),i.qZA()()}if(2&e){const t=a.$implicit;i.xp6(1),i.s9C("type",t.type),i.Q6J("title",t.title)("image",t.image)("url",t.url)}}function sx(e,a){if(1&e&&(i.TgZ(0,"ul"),i.YNc(1,hx,2,4,"li",12),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.listEmision)}}function ix(e,a){1&e&&i._UZ(0,"fast-progress",10)}function nx(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",20)(1,"fast-button",16),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadMoreData()}),i._uU(2,"Cargar m\xe1s"),i.qZA()()}}let lx=(()=>{class e{constructor(t,n){this.apiAnime=t,this.fGlobal=n,this.tableEmision=[],this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.optionScroll={forceVisible:!0,autoHide:!1}}ngOnInit(){this.tableEmision=[],this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.reloadData()}reloadMoreData(){this.moreDataLoading=!0,this.currentPage+=1,r1("#buttonMoreEmision fast-button").attr("disabled","true"),this.apiAnime.getMoreInfoEmision(this.numbersPages[this.currentPage]).then(t=>{this.listEmision=this.listEmision.concat(t),this.moreDataLoading=!1,r1("#buttonMoreEmision fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]}).catch(()=>{this.currentPage-=1,this.moreDataLoading=!1,r1("#buttonMoreEmision fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]})}reloadData(){this.dataLoading=!1,this.showError=!1,this.apiAnime.getInfoEmision().then(t=>{this.tableEmision=t.table,this.listEmision=t.list,this.numbersPages=t.numPages,this.currentPage=0,this.showButtonMore=!0,this.dataLoading=!0}).catch(t=>{this.showError=!0,this.dataLoading=!0,console.log(t)})}openInfoAnime(t){return this.fGlobal.openInfoAnime(String(t))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c3),i.Y36(O4))},e.\u0275cmp=i.Xpm({type:e,selectors:[["page-emision"]],decls:38,vars:8,consts:[["id","emision-page",3,"options"],[1,"tableEmision"],[1,"color"],[1,"day"],["class","loading",4,"ngIf"],[4,"ngIf"],[1,"seriesEmision"],["slot","start"],["class","error",4,"ngIf"],["id","buttonMoreEmision","class","buttonMore",4,"ngIf"],[1,"loading"],["colspan","7"],[4,"ngFor","ngForOf"],[1,"error"],["src","./assets/net_error.svg"],[1,"title"],["appearance","accent",3,"click"],[3,"image","click",4,"ngIf"],[3,"image","click"],[3,"title","image","type","url","click"],["id","buttonMoreEmision",1,"buttonMore"]],template:function(t,n){1&t&&(i.TgZ(0,"ngx-simplebar",0)(1,"div",1)(2,"table")(3,"thead")(4,"tr",2)(5,"td")(6,"div",3),i._uU(7,"DOMINGO"),i.qZA()(),i.TgZ(8,"td")(9,"div",3),i._uU(10,"LUNES"),i.qZA()(),i.TgZ(11,"td")(12,"div",3),i._uU(13,"MARTES"),i.qZA()(),i.TgZ(14,"td")(15,"div",3),i._uU(16,"MIERCOLES"),i.qZA()(),i.TgZ(17,"td")(18,"div",3),i._uU(19,"JUEVES"),i.qZA()(),i.TgZ(20,"td")(21,"div",3),i._uU(22,"VIERNES"),i.qZA()(),i.TgZ(23,"td")(24,"div",3),i._uU(25,"SABADO"),i.qZA()()(),i.YNc(26,UM,3,0,"tr",4),i.qZA(),i.YNc(27,tx,5,2,"tbody",5),i.qZA()(),i._UZ(28,"fast-divider"),i.TgZ(29,"div",6)(30,"fast-toolbar")(31,"h3",7),i._uU(32,"SERIES Y PELICULAS"),i.qZA()(),i.YNc(33,ax,1,0,"fast-progress",4),i.YNc(34,ex,7,0,"div",8),i.YNc(35,sx,2,1,"ul",5),i.YNc(36,ix,1,0,"fast-progress",4),i.YNc(37,nx,3,0,"div",9),i.qZA()()),2&t&&(i.Q6J("options",n.optionScroll),i.xp6(26),i.Q6J("ngIf",!n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.dataLoading),i.xp6(6),i.Q6J("ngIf",!n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.showError),i.xp6(1),i.Q6J("ngIf",n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.moreDataLoading),i.xp6(1),i.Q6J("ngIf",n.showButtonMore))},directives:[Y3,G2,R5,$M,Qh],styles:["ngx-simplebar#emision-page[_ngcontent-%COMP%]{width:100%;height:100%}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:8px;margin-bottom:8px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:95%}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr.loading[_ngcontent-%COMP%]{width:100%}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr.loading[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   fast-progress[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr.color[_ngcontent-%COMP%]{width:100%}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr.color[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:auto;min-width:120.2414285714px;padding:0;background-color:#1c1542}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr.color[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   div.day[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px;width:100%;text-align:center}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;padding-left:16px;--accent-fill-rest: #391648;display:flex;align-items:center;justify-content:flex-start;width:100%}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{fill:#fff;width:100px;height:100px;margin-right:20px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:26px;margin-top:20px;margin-bottom:20px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:8px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:auto;min-width:120.2414285714px;max-width:14.2857142857%;padding:0}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   items-table[_ngcontent-%COMP%]{width:100%;height:auto}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.tableEmision[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}ngx-simplebar#emision-page[_ngcontent-%COMP%]   fast-divider[_ngcontent-%COMP%]{margin-left:16px;margin-right:16px;width:calc(100% - 32px)}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]{width:calc(100% - 30px);padding-right:20px;padding-left:10px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]{width:100%}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-left:6px;margin-top:24px;margin-bottom:18px;font-size:24px;font-weight:700}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   fast-progress.loading[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   div.buttonMore[_ngcontent-%COMP%]{width:100%;--accent-fill-rest: #391648;padding-top:8px;padding-bottom:12px;display:flex;justify-content:center}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;padding-left:16px;--accent-fill-rest: #391648;display:flex;align-items:center;justify-content:flex-start;width:100%}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{fill:#fff;width:100px;height:100px;margin-right:20px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:26px;margin-top:20px;margin-bottom:20px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:8px}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%;padding:0}ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(20% - 10px);margin-left:10px;margin-top:8px;list-style:none;height:auto}@media only screen and (min-width: 900px){ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(16.6666666667% - 10px)}}@media only screen and (min-width: 1200px){ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(14.2857142857% - 10px)}}@media only screen and (min-width: 1500px){ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(12.5% - 10px)}}@media only screen and (min-width: 1700px){ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(11.1111111111% - 10px)}}@media only screen and (min-width: 2000px){ngx-simplebar#emision-page[_ngcontent-%COMP%]   div.seriesEmision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(10% - 10px)}}"]}),e})();function rx(e,a){1&e&&i._UZ(0,"fast-progress",7)}function ox(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",8),i._UZ(1,"img",9),i.TgZ(2,"div",10)(3,"h2"),i._uU(4,"Ocurri\xf3 un error al cargar :("),i.qZA(),i.TgZ(5,"fast-button",11),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadData()}),i._uU(6,"Reintentar"),i.qZA()()()}}function cx(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"li")(1,"items-list",13),i.NdJ("click",function(){const A=i.CHM(t).$implicit;return i.oxw(2).openInfoAnime(A.url)}),i.qZA()()}if(2&e){const t=a.$implicit;i.xp6(1),i.s9C("type",t.type),i.Q6J("title",t.title)("image",t.image)("url",t.url)}}function vx(e,a){if(1&e&&(i.TgZ(0,"ul"),i.YNc(1,cx,2,4,"li",12),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.listEmision)}}function gx(e,a){1&e&&i._UZ(0,"fast-progress",7)}function dx(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",14)(1,"fast-button",11),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadMoreData()}),i._uU(2,"Cargar m\xe1s"),i.qZA()()}}let wx=(()=>{class e{constructor(t,n){this.apiAnime=t,this.fGlobal=n,this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.optionScroll={forceVisible:!0,autoHide:!1}}ngOnInit(){this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.reloadData()}reloadMoreData(){this.moreDataLoading=!0,this.currentPage+=1,r1("#buttonMoreAnimes fast-button").attr("disabled","true"),this.apiAnime.getMoreListAnime(this.numbersPages[this.currentPage]).then(t=>{this.listEmision=this.listEmision.concat(t),this.moreDataLoading=!1,r1("#buttonMoreAnimes fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]}).catch(()=>{this.currentPage-=1,this.moreDataLoading=!1,r1("#buttonMoreAnimes fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]})}reloadData(){this.dataLoading=!1,this.showError=!1,this.apiAnime.getListAnime().then(t=>{this.listEmision=t.list,this.numbersPages=t.numPages,this.currentPage=0,this.showButtonMore=!0,this.dataLoading=!0}).catch(t=>{this.showError=!0,this.dataLoading=!0,console.log(t)})}openInfoAnime(t){return this.fGlobal.openInfoAnime(String(t))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c3),i.Y36(O4))},e.\u0275cmp=i.Xpm({type:e,selectors:[["page-animes"]],decls:10,vars:6,consts:[["id","animes-page",3,"options"],[1,"listAnimes"],["slot","start"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[4,"ngIf"],["id","buttonMoreAnimes","class","buttonMore",4,"ngIf"],[1,"loading"],[1,"error"],["src","./assets/net_error.svg"],[1,"title"],["appearance","accent",3,"click"],[4,"ngFor","ngForOf"],[3,"title","image","type","url","click"],["id","buttonMoreAnimes",1,"buttonMore"]],template:function(t,n){1&t&&(i.TgZ(0,"ngx-simplebar",0)(1,"div",1)(2,"fast-toolbar")(3,"h3",2),i._uU(4,"LISTA DE ANIMES"),i.qZA()(),i.YNc(5,rx,1,0,"fast-progress",3),i.YNc(6,ox,7,0,"div",4),i.YNc(7,vx,2,1,"ul",5),i.YNc(8,gx,1,0,"fast-progress",3),i.YNc(9,dx,3,0,"div",6),i.qZA()()),2&t&&(i.Q6J("options",n.optionScroll),i.xp6(5),i.Q6J("ngIf",!n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.showError),i.xp6(1),i.Q6J("ngIf",n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.moreDataLoading),i.xp6(1),i.Q6J("ngIf",n.showButtonMore))},directives:[Y3,G2,R5,Qh],styles:["ngx-simplebar#animes-page[_ngcontent-%COMP%]{width:100%;height:100%}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]{width:calc(100% - 30px);padding-right:20px;padding-left:10px}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]{width:100%}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-left:6px;margin-top:24px;margin-bottom:18px;font-size:24px;font-weight:700}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   fast-progress.loading[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   div.buttonMore[_ngcontent-%COMP%]{width:100%;--accent-fill-rest: #391648;padding-top:8px;padding-bottom:12px;display:flex;justify-content:center}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;padding-left:16px;--accent-fill-rest: #391648;display:flex;align-items:center;justify-content:flex-start;width:100%}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{fill:#fff;width:100px;height:100px;margin-right:20px}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:26px;margin-top:20px;margin-bottom:20px}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:8px}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%;padding:0}ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(20% - 10px);margin-left:10px;margin-top:8px;list-style:none;height:auto}@media only screen and (min-width: 900px){ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(16.6666666667% - 10px)}}@media only screen and (min-width: 1200px){ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(14.2857142857% - 10px)}}@media only screen and (min-width: 1500px){ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(12.5% - 10px)}}@media only screen and (min-width: 1700px){ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(11.1111111111% - 10px)}}@media only screen and (min-width: 2000px){ngx-simplebar#animes-page[_ngcontent-%COMP%]   div.listAnimes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(10% - 10px)}}"]}),e})();function px(e,a){1&e&&i._UZ(0,"fast-progress",7)}function ux(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",8),i._UZ(1,"img",9),i.TgZ(2,"div",10)(3,"h2"),i._uU(4,"Ocurri\xf3 un error al cargar :("),i.qZA(),i.TgZ(5,"fast-button",11),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadData()}),i._uU(6,"Reintentar"),i.qZA()()()}}function mx(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"li")(1,"items-list",13),i.NdJ("click",function(){const A=i.CHM(t).$implicit;return i.oxw(2).openInfoAnime(A.url)}),i.qZA()()}if(2&e){const t=a.$implicit;i.xp6(1),i.s9C("type",t.type),i.Q6J("title",t.title)("image",t.image)("url",t.url)}}function zx(e,a){if(1&e&&(i.TgZ(0,"ul"),i.YNc(1,mx,2,4,"li",12),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.listEmision)}}function _x(e,a){1&e&&i._UZ(0,"fast-progress",7)}function fx(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",14)(1,"fast-button",11),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadMoreData()}),i._uU(2,"Cargar m\xe1s"),i.qZA()()}}let Mx=(()=>{class e{constructor(t,n){this.apiAnime=t,this.fGlobal=n,this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.optionScroll={forceVisible:!0,autoHide:!1}}ngOnInit(){this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.reloadData()}reloadMoreData(){this.moreDataLoading=!0,this.currentPage+=1,r1("#buttonMoreAnimes fast-button").attr("disabled","true"),this.apiAnime.getMoreListMovies(this.numbersPages[this.currentPage]).then(t=>{this.listEmision=this.listEmision.concat(t),this.moreDataLoading=!1,r1("#buttonMoreAnimes fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]}).catch(()=>{this.currentPage-=1,this.moreDataLoading=!1,r1("#buttonMoreAnimes fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]})}reloadData(){this.dataLoading=!1,this.showError=!1,this.apiAnime.getListMovies().then(t=>{this.listEmision=t.list,this.numbersPages=t.numPages,this.currentPage=0,this.showButtonMore=!0,this.dataLoading=!0}).catch(t=>{this.showError=!0,this.dataLoading=!0,console.log(t)})}openInfoAnime(t){return this.fGlobal.openInfoAnime(String(t))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c3),i.Y36(O4))},e.\u0275cmp=i.Xpm({type:e,selectors:[["page-movies"]],decls:10,vars:6,consts:[["id","movies-page",3,"options"],[1,"listMovies"],["slot","start"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[4,"ngIf"],["id","buttonMoreAnimes","class","buttonMore",4,"ngIf"],[1,"loading"],[1,"error"],["src","./assets/net_error.svg"],[1,"title"],["appearance","accent",3,"click"],[4,"ngFor","ngForOf"],[3,"title","image","type","url","click"],["id","buttonMoreAnimes",1,"buttonMore"]],template:function(t,n){1&t&&(i.TgZ(0,"ngx-simplebar",0)(1,"div",1)(2,"fast-toolbar")(3,"h3",2),i._uU(4,"LISTA DE PELICULAS"),i.qZA()(),i.YNc(5,px,1,0,"fast-progress",3),i.YNc(6,ux,7,0,"div",4),i.YNc(7,zx,2,1,"ul",5),i.YNc(8,_x,1,0,"fast-progress",3),i.YNc(9,fx,3,0,"div",6),i.qZA()()),2&t&&(i.Q6J("options",n.optionScroll),i.xp6(5),i.Q6J("ngIf",!n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.showError),i.xp6(1),i.Q6J("ngIf",n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.moreDataLoading),i.xp6(1),i.Q6J("ngIf",n.showButtonMore))},directives:[Y3,G2,R5,Qh],styles:["ngx-simplebar#movies-page[_ngcontent-%COMP%]{width:100%;height:100%}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]{width:calc(100% - 30px);padding-right:20px;padding-left:10px}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]{width:100%}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-left:6px;margin-top:24px;margin-bottom:18px;font-size:24px;font-weight:700}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   fast-progress.loading[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   div.buttonMore[_ngcontent-%COMP%]{width:100%;--accent-fill-rest: #391648;padding-top:8px;padding-bottom:12px;display:flex;justify-content:center}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;padding-left:16px;--accent-fill-rest: #391648;display:flex;align-items:center;justify-content:flex-start;width:100%}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{fill:#fff;width:100px;height:100px;margin-right:20px}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:26px;margin-top:20px;margin-bottom:20px}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:8px}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%;padding:0}ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(20% - 10px);margin-left:10px;margin-top:8px;list-style:none;height:auto}@media only screen and (min-width: 900px){ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(16.6666666667% - 10px)}}@media only screen and (min-width: 1200px){ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(14.2857142857% - 10px)}}@media only screen and (min-width: 1500px){ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(12.5% - 10px)}}@media only screen and (min-width: 1700px){ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(11.1111111111% - 10px)}}@media only screen and (min-width: 2000px){ngx-simplebar#movies-page[_ngcontent-%COMP%]   div.listMovies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(10% - 10px)}}"]}),e})();function xx(e,a){1&e&&i._UZ(0,"fast-progress",7)}function Hx(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",8),i._UZ(1,"img",9),i.TgZ(2,"div",10)(3,"h2"),i._uU(4,"Ocurri\xf3 un error al cargar :("),i.qZA(),i.TgZ(5,"fast-button",11),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadData()}),i._uU(6,"Reintentar"),i.qZA()()()}}function Ax(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"li")(1,"items-list",13),i.NdJ("click",function(){const A=i.CHM(t).$implicit;return i.oxw(2).openInfoAnime(A.url)}),i.qZA()()}if(2&e){const t=a.$implicit;i.xp6(1),i.s9C("type",t.type),i.Q6J("title",t.title)("image",t.image)("url",t.url)}}function Vx(e,a){if(1&e&&(i.TgZ(0,"ul"),i.YNc(1,Ax,2,4,"li",12),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.listEmision)}}function Cx(e,a){1&e&&i._UZ(0,"fast-progress",7)}function bx(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"div",14)(1,"fast-button",11),i.NdJ("click",function(){return i.CHM(t),i.oxw().reloadMoreData()}),i._uU(2,"Cargar m\xe1s"),i.qZA()()}}let yx=(()=>{class e{constructor(t,n){this.apiAnime=t,this.fGlobal=n,this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.optionScroll={forceVisible:!0,autoHide:!1}}ngOnInit(){this.dataLoading=!1,this.listEmision=[],this.showError=!1,this.numbersPages=[],this.currentPage=0,this.showButtonMore=!1,this.moreDataLoading=!1,this.reloadData()}reloadMoreData(){this.moreDataLoading=!0,this.currentPage+=1,r1("#buttonMorePremieres fast-button").attr("disabled","true"),this.apiAnime.getMoreListEstrenos(this.numbersPages[this.currentPage]).then(t=>{this.listEmision=this.listEmision.concat(t),this.moreDataLoading=!1,r1("#buttonMorePremieres fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]}).catch(()=>{this.currentPage-=1,this.moreDataLoading=!1,r1("#buttonMorePremieres fast-button").removeAttr("disabled"),this.showButtonMore=!!this.numbersPages[this.currentPage+1]})}reloadData(){this.dataLoading=!1,this.showError=!1,this.apiAnime.getListEstrenos().then(t=>{this.listEmision=t.list,this.numbersPages=t.numPages,this.currentPage=0,this.showButtonMore=0!=t.numPages.length,this.dataLoading=!0}).catch(t=>{this.showError=!0,this.dataLoading=!0,console.log(t)})}openInfoAnime(t){return this.fGlobal.openInfoAnime(String(t))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c3),i.Y36(O4))},e.\u0275cmp=i.Xpm({type:e,selectors:[["page-premieres"]],decls:10,vars:6,consts:[["id","premieres-page",3,"options"],[1,"listPremieres"],["slot","start"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[4,"ngIf"],["id","buttonMorePremieres","class","buttonMore",4,"ngIf"],[1,"loading"],[1,"error"],["src","./assets/net_error.svg"],[1,"title"],["appearance","accent",3,"click"],[4,"ngFor","ngForOf"],[3,"title","image","type","url","click"],["id","buttonMorePremieres",1,"buttonMore"]],template:function(t,n){1&t&&(i.TgZ(0,"ngx-simplebar",0)(1,"div",1)(2,"fast-toolbar")(3,"h3",2),i._uU(4,"LISTA DE ANIMES"),i.qZA()(),i.YNc(5,xx,1,0,"fast-progress",3),i.YNc(6,Hx,7,0,"div",4),i.YNc(7,Vx,2,1,"ul",5),i.YNc(8,Cx,1,0,"fast-progress",3),i.YNc(9,bx,3,0,"div",6),i.qZA()()),2&t&&(i.Q6J("options",n.optionScroll),i.xp6(5),i.Q6J("ngIf",!n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.showError),i.xp6(1),i.Q6J("ngIf",n.dataLoading),i.xp6(1),i.Q6J("ngIf",n.moreDataLoading),i.xp6(1),i.Q6J("ngIf",n.showButtonMore))},directives:[Y3,G2,R5,Qh],styles:["ngx-simplebar#premieres-page[_ngcontent-%COMP%]{width:100%;height:100%}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]{width:calc(100% - 30px);padding-right:20px;padding-left:10px}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]{width:100%}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-left:6px;margin-top:24px;margin-bottom:18px;font-size:24px;font-weight:700}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   fast-progress.loading[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   div.buttonMore[_ngcontent-%COMP%]{width:100%;--accent-fill-rest: #391648;padding-top:8px;padding-bottom:12px;display:flex;justify-content:center}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;padding-left:16px;--accent-fill-rest: #391648;display:flex;align-items:center;justify-content:flex-start;width:100%}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{fill:#fff;width:100px;height:100px;margin-right:20px}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:26px;margin-top:20px;margin-bottom:20px}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:8px}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%;padding:0}ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(20% - 10px);margin-left:10px;margin-top:8px;list-style:none;height:auto}@media only screen and (min-width: 900px){ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(16.6666666667% - 10px)}}@media only screen and (min-width: 1200px){ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(14.2857142857% - 10px)}}@media only screen and (min-width: 1500px){ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(12.5% - 10px)}}@media only screen and (min-width: 1700px){ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(11.1111111111% - 10px)}}@media only screen and (min-width: 2000px){ngx-simplebar#premieres-page[_ngcontent-%COMP%]   div.listPremieres[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(10% - 10px)}}"]}),e})();const Lx=["searchsContent"],Bx=["infoContent"];function Ex(e,a){if(1&e){const t=i.EpF();i.TgZ(0,"fast-option",18),i.NdJ("click",function(){const A=i.CHM(t).$implicit;return i.oxw().openInfoAnime(A.url)}),i._uU(1),i.qZA()}if(2&e){const t=a.$implicit;i.Q6J("value",t.url),i.xp6(1),i.Oqu(t.title)}}const Lm=It.create("accent-fill-rest"),Tx=It.create("accent-foreground-rest"),Sx=It.create("accent-foreground-hover"),Ox=It.create("accent-fill-hover"),Dx=It.create("accent-fill-active"),Ix=It.create("focus-stroke-outer");let Px=(()=>{class e{constructor(t,n,v){this.apiAnime=t,this.chatbroService=n,this.fGlobal=v,this.textSearch="",this.focusSearch=!1,this.lastTextSearch="",this.listSearch=[]}ngOnInit(){window.$=r1,window.apiAnime=this.apiAnime,new be.Titlebar({backgroundColor:be.Color.fromHex("#29153c"),titleHorizontalAlignment:"left",menu:new Zl.Menu,onMinimize:()=>j3.ipcRenderer.send("window-minimize"),onMaximize:()=>j3.ipcRenderer.send("window-maximize"),onClose:()=>j3.ipcRenderer.send("window-close"),isMaximized:()=>j3.ipcRenderer.sendSync("window-is-maximized"),onMenuItemClick:()=>{}}),j3.ipcRenderer.on("window-maximize",()=>this.calculeScreen()).on("window-restore",()=>this.calculeScreen()).on("window-resize",()=>this.calculeScreen()),this.calculeScreen(),setInterval(()=>{this.textSearch=r1("fast-text-field#text-search").attr("current-value"),1==this.focusSearch&&this.textSearch.length>=4?(this.lastTextSearch!==this.textSearch&&this.apiAnime.searchType(this.textSearch).then(v=>this.listSearch=v),0!==this.listSearch.length?r1("fast-listbox#listSearch").fadeIn(64):r1("fast-listbox#listSearch").fadeOut(128),this.lastTextSearch=this.textSearch):r1("fast-listbox#listSearch").fadeOut(128)},512);var n=r1("fast-design-system-provider").get(0);Lm.setValueFor(n,"#FFFFFF"),Tx.setValueFor(n,"#FFFFFF"),Sx.setValueFor(n,"#FFFFFF"),Ox.setValueFor(n,"#0084cc"),Dx.setValueFor(n,"#bc1eac"),Ix.setValueFor(n,"#bc1eac"),Lm.setValueFor(r1("fast-listbox#listSearch").get(0),"#BC1EAC"),r1("fast-text-field#text-search").on("focusin",v=>{this.focusSearch=!0,this.textSearch.length>=4&&0!==this.listSearch.length&&r1("fast-listbox#listSearch").fadeIn(64)}),r1("fast-text-field#text-search").on("focusout",v=>{r1("fast-listbox#listSearch").fadeOut(128),this.focusSearch=!1}),this.chatbroService.init()}ngAfterViewInit(){window.infoContent=this.infoContent}calculeScreen(){var t=window,n=document,v=n.documentElement,A=n.getElementsByTagName("body")[0],N=(t.innerHeight||v.clientHeight||A.clientHeight)-103+"px";r1("fast-tab-panel.tabpanel1").css({height:N}),r1("fast-tab-panel.tabpanel1").css({height:N}),r1("fast-tab-panel.tabpanel1").css({height:N})}goSearch(){var t=String(r1("fast-text-field#text-search").attr("current-value"));if(!(t.length<=1)){var n=t.replace(/\ /gi,"+");this.openSearchs(n,t),r1("fast-listbox#listSearch").fadeOut(128),this.focusSearch=!1}}openSearchs(t,n){var v,A=null===(v=this.searchsContent)||void 0===v?void 0:v.createComponent(mM);A.instance.search=t,A.instance.title=n,A.instance.close=()=>r1("#search-results").fadeOut("fast",()=>A.destroy()),r1("#search-results").fadeIn("fast")}openInfoAnime(t){return this.fGlobal.openInfoAnime(t)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c3),i.Y36(zM.T),i.Y36(O4))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-root"]],viewQuery:function(t,n){if(1&t&&(i.Gf(Lx,5,i.s_b),i.Gf(Bx,5,i.s_b)),2&t){let v;i.iGM(v=i.CRH())&&(n.searchsContent=v.first),i.iGM(v=i.CRH())&&(n.infoContent=v.first)}},decls:39,vars:1,consts:[["use-defaults",""],[1,"background"],[1,"header"],["slot","tab"],["name","home_24_filled",1,"beat"],["slot","tabpanel",1,"tabpanel1"],["slot","end"],["id","text-search","slot","start","placeholder","Buscar...","appearance","outline","name","search","type","text",3,"keyup.enter"],["id","listSearch"],[3,"value","click",4,"ngFor","ngForOf"],["slot","end","type","button","appearance","outline",3,"click"],["name","search_20_regular",1,"beat",2,"fill","#FFFFFF"],["id","search-results",1,"modal","search-result"],["searchsContent",""],["id","view-anime",1,"modal","view-anime"],["infoContent",""],["id","load-viewer",1,"modal","load-view"],[1,"content"],[3,"value","click"]],template:function(t,n){1&t&&(i.TgZ(0,"fast-design-system-provider",0)(1,"div",1)(2,"div",2)(3,"fast-tabs")(4,"fast-tab",3),i._UZ(5,"fluent-ui-icon",4),i.qZA(),i.TgZ(6,"fast-tab",3),i._uU(7,"EMISION"),i.qZA(),i.TgZ(8,"fast-tab",3),i._uU(9,"ANIMES"),i.qZA(),i.TgZ(10,"fast-tab",3),i._uU(11,"PELICULAS"),i.qZA(),i.TgZ(12,"fast-tab",3),i._uU(13,"ESTRENOS"),i.qZA(),i.TgZ(14,"fast-tab-panel",5),i._UZ(15,"page-home"),i.qZA(),i.TgZ(16,"fast-tab-panel",5),i._UZ(17,"page-emision"),i.qZA(),i.TgZ(18,"fast-tab-panel",5),i._UZ(19,"page-animes"),i.qZA(),i.TgZ(20,"fast-tab-panel",5),i._UZ(21,"page-movies"),i.qZA(),i.TgZ(22,"fast-tab-panel",5),i._UZ(23,"page-premieres"),i.qZA(),i.TgZ(24,"fast-toolbar",6)(25,"fast-text-field",7),i.NdJ("keyup.enter",function(){return n.goSearch()}),i.qZA(),i.TgZ(26,"fast-listbox",8),i.YNc(27,Ex,2,2,"fast-option",9),i.qZA(),i.TgZ(28,"fast-button",10),i.NdJ("click",function(){return n.goSearch()}),i._UZ(29,"fluent-ui-icon",11),i.qZA()()()()(),i.TgZ(30,"div",12),i._UZ(31,"template",null,13),i.qZA(),i.TgZ(33,"div",14),i._UZ(34,"template",null,15),i.qZA(),i.TgZ(36,"div",16)(37,"div",17),i._UZ(38,"fast-progress-ring"),i.qZA()()()),2&t&&(i.xp6(27),i.Q6J("ngForOf",n.listSearch))},directives:[w3,kM,lx,wx,Mx,yx,R5],styles:["div.background[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0;width:100%;height:100%;background-color:#18142f;overflow:hidden}div.background[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:73px;width:100%;background-color:#29153c;box-shadow:0 0 6px .5px #0006}div.background[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   fast-tabs[_ngcontent-%COMP%]   fast-tab[_ngcontent-%COMP%]   fluent-ui-icon[_ngcontent-%COMP%]{fill:#ffffffe6}div.background[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   fast-tabs[_ngcontent-%COMP%]   fast-tab-panel[_ngcontent-%COMP%]{width:100%;padding:0}div.background[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   fast-tabs[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:16px}div.background[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   fast-tabs[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   fast-text-field[_ngcontent-%COMP%]{width:240px}div.background[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   fast-tabs[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   fast-listbox[_ngcontent-%COMP%]{position:fixed;top:95px;width:240px;z-index:60;right:60px;display:none}div.background[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   fast-tabs[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]{margin-left:4px;position:relative}div.background[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   fast-tabs[_ngcontent-%COMP%]   fast-toolbar[_ngcontent-%COMP%]   fast-button[_ngcontent-%COMP%]   fluent-ui-icon[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;display:flex;align-items:center;justify-content:center}div.modal[_ngcontent-%COMP%]{position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;background-color:#18142f;display:none}div.modal[_ngcontent-%COMP%]   div.page[_ngcontent-%COMP%]{width:100%;height:100%}div.modal.search-result[_ngcontent-%COMP%]{z-index:10}div.modal.view-anime[_ngcontent-%COMP%]{z-index:11}div.modal.load-view[_ngcontent-%COMP%]{z-index:50;background-color:#000000a6!important}div.modal.load-view[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}div.modal.load-view[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   fast-progress-ring[_ngcontent-%COMP%]{width:56px;height:56px}"]}),e})(),kx=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e,bootstrap:[Px]}),e.\u0275inj=i.cJS({providers:[c3,O4],imports:[[se,eh,j8.pick({search_20_regular:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"/></svg>',play_24_filled:'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.27c0-1.7 1.83-2.79 3.33-1.97l12.36 6.72a2.25 2.25 0 010 3.96L8.33 20.7A2.25 2.25 0 015 18.73V5.27z"/></svg>',network_check_24_regular:'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.05 15.42l6.26-8.48a.7.7 0 011.23.57l-.03.1-3.87 9.8a2.07 2.07 0 11-3.74-1.76l.07-.12.08-.11 6.26-8.48-6.26 8.48zm3.8-2.62l-2.6 3.51-.03.06a.57.57 0 00.22.78l.07.03c.26.1.55 0 .7-.24l.04-.08 1.6-4.06zm-1.75-1.93l-1.23 1.66a3.33 3.33 0 00-2.29 3.03.75.75 0 01-1.5-.07 4.82 4.82 0 015.02-4.62zm4.17 2.75c.28.59.43 1.22.46 1.87a.75.75 0 01-1.38.44l.92-2.3zm-2.24-5.37l-.96 1.31a6.22 6.22 0 00-7.16 4.41.75.75 0 01-1.44-.4 7.7 7.7 0 019.56-5.32zm3.51 2.14a7.65 7.65 0 011.8 3.15.75.75 0 01-1.44.42 6.23 6.23 0 00-.88-1.84l-.1-.14.62-1.59zm-1.56-4.54l-.09.06c-.12.08-.23.18-.33.3l-.1.11-.54.73a9.14 9.14 0 00-11.54 5.32.75.75 0 11-1.4-.54 10.64 10.64 0 0114-5.97zm2.63 1.56a10.65 10.65 0 013.22 4.41.75.75 0 11-1.4.55 9.17 9.17 0 00-2.32-3.4l.38-.97c.07-.2.11-.39.12-.59z"/></svg>',home_24_filled:'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.55 2.53c.84-.7 2.06-.7 2.9 0l6.75 5.7c.5.43.8 1.05.8 1.72v9.8c0 .97-.78 1.75-1.75 1.75h-3c-.97 0-1.75-.78-1.75-1.75v-5a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v5c0 .97-.78 1.75-1.75 1.75h-3c-.97 0-1.75-.78-1.75-1.75v-9.8c0-.67.3-1.3.8-1.72l6.75-5.7z"/></svg>',window_new_20_regular:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.52 6a.5.5 0 000 1h2.77l-4.14 4.15a.5.5 0 00.7.7L13 7.71v2.77a.5.5 0 001 0V6.5a.5.5 0 00-.5-.5H9.52z"/><path d="M12.77 17a2.5 2.5 0 002.47-2.11A2.5 2.5 0 0017 12.5v-7A2.5 2.5 0 0014.5 3h-7a2.5 2.5 0 00-2.4 1.8A2.5 2.5 0 003 7.27v6.23A3.5 3.5 0 006.5 17h6.27zM4 7.27c0-.66.42-1.21 1-1.42v6.65A2.5 2.5 0 007.5 15h6.68c-.2.58-.76 1-1.41 1H6.5A2.5 2.5 0 014 13.5V7.27zM7.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 016 12.5v-7C6 4.67 6.67 4 7.5 4z"/></svg>',arrow_left_20_filled:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.73 16.8a.75.75 0 001.04-1.1l-5.24-4.95h12.72a.75.75 0 000-1.5H4.52l5.25-4.96A.75.75 0 008.73 3.2L2.32 9.27a1 1 0 000 1.45l6.41 6.07z"/></svg>',dismiss_28_filled:'<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M4.08 4.1a1 1 0 011.42 0l8.5 8.5 8.5-8.5a1 1 0 111.42 1.42l-8.5 8.5 8.46 8.46a1 1 0 11-1.41 1.42L14 15.43 5.53 23.9a1 1 0 01-1.41-1.42l8.47-8.46-8.5-8.5a1 1 0 010-1.42z"/></svg>'}),Ar]]}),e})();function B0(e,a,t,n){var S,v=arguments.length,A=v<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(e,a,t,n);else for(var N=e.length-1;N>=0;N--)(S=e[N])&&(A=(v<3?S(A):v>3?S(a,t,A):S(a,t))||A);return v>3&&A&&Object.defineProperty(a,t,A),A}const iv=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,a){return function(t){Reflect.defineMetadata(e,a,t)}},Reflect.defineMetadata=function(e,a,t){let n=iv.get(t);void 0===n&&iv.set(t,n=new Map),n.set(e,a)},Reflect.getOwnMetadata=function(e,a){const t=iv.get(a);if(void 0!==t)return t.get(e)});class Fx{constructor(a,t){this.container=a,this.key=t}instance(a){return this.registerResolver(0,a)}singleton(a){return this.registerResolver(1,a)}transient(a){return this.registerResolver(2,a)}callback(a){return this.registerResolver(3,a)}cachedCallback(a){return this.registerResolver(3,Nm(a))}aliasTo(a){return this.registerResolver(5,a)}registerResolver(a,t){const{container:n,key:v}=this;return this.container=this.key=void 0,n.registerResolver(v,new st(v,a,t))}}function Xh(e){const a=e.slice(),t=Object.keys(e),n=t.length;let v;for(let A=0;A<n;++A)v=t[A],Um(v)||(a[v]=e[v]);return a}const jx=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new st(e,1,e),transient:e=>new st(e,2,e)}),nv=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:jx.singleton})}),Tm=new Map;function Sm(e){return a=>Reflect.getOwnMetadata(e,a)}let Om=null;const y5=Object.freeze({createContainer:e=>new Jh(null,Object.assign({},nv.default,e)),findResponsibleContainer(e){const a=e.$$container$$;return a&&a.responsibleForOwnerRequests?a:y5.findParentContainer(e)},findParentContainer(e){const a=new CustomEvent(Rm,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(a),a.detail.container||y5.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,a)=>e?e.$$container$$||new Jh(e,Object.assign({},nv.default,a,{parentLocator:y5.findParentContainer})):Om||(Om=new Jh(null,Object.assign({},nv.default,a,{parentLocator:()=>null}))),getDesignParamtypes:Sm("design:paramtypes"),getAnnotationParamtypes:Sm("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let a=this.getAnnotationParamtypes(e);return void 0===a&&Reflect.defineMetadata("di:paramtypes",a=[],e),a},getDependencies(e){let a=Tm.get(e);if(void 0===a){const t=e.inject;if(void 0===t){const n=y5.getDesignParamtypes(e),v=y5.getAnnotationParamtypes(e);if(void 0===n)if(void 0===v){const A=Object.getPrototypeOf(e);a="function"==typeof A&&A!==Function.prototype?Xh(y5.getDependencies(A)):[]}else a=Xh(v);else if(void 0===v)a=Xh(n);else{a=Xh(n);let S,A=v.length;for(let g0=0;g0<A;++g0)S=v[g0],void 0!==S&&(a[g0]=S);const N=Object.keys(v);let o0;A=N.length;for(let g0=0;g0<A;++g0)o0=N[g0],Um(o0)||(a[o0]=v[o0])}}else a=Xh(t);Tm.set(e,a)}return a},defineProperty(e,a,t,n=!1){const v=`$di_${a}`;Reflect.defineProperty(e,a,{get:function(){let A=this[v];if(void 0===A&&(A=(this instanceof HTMLElement?y5.findResponsibleContainer(this):y5.getOrCreateDOMContainer()).get(t),this[v]=A,n&&this instanceof o3)){const N=this.$fastController,o0=()=>{y5.findResponsibleContainer(this).get(t)!==this[v]&&(this[v]=A,N.notify(a))};N.subscribe({handleChange:o0},"isConnected")}return A}})},createInterface(e,a){const t="function"==typeof e?e:a,n="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||jm,v="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),A=function(S,N,o0){if(null==S||void 0!==new.target)throw new Error(`No registration for interface: '${A.friendlyName}'`);N?y5.defineProperty(S,N,A,v):y5.getOrCreateAnnotationParamTypes(S)[o0]=A};return A.$isInterface=!0,A.friendlyName=null==n?"(anonymous)":n,null!=t&&(A.register=function(S,N){return t(new Fx(S,null!=N?N:A))}),A.toString=function(){return`InterfaceSymbol<${A.friendlyName}>`},A},inject:(...e)=>function(a,t,n){if("number"==typeof n){const v=y5.getOrCreateAnnotationParamTypes(a),A=e[0];void 0!==A&&(v[n]=A)}else if(t)y5.defineProperty(a,t,e[0]);else{const v=y5.getOrCreateAnnotationParamTypes(n?n.value:a);let A;for(let S=0;S<e.length;++S)A=e[S],void 0!==A&&(v[S]=A)}},transient:e=>(e.register=function(t){return qh.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,a=Ux)=>(e.register=function(n){return qh.singleton(e,e).register(n)},e.registerInRequestor=a.scoped,e)}),$x=y5.createInterface("Container");function on(e){return function(a){const t=function(n,v,A){y5.inject(t)(n,v,A)};return t.$isResolver=!0,t.resolve=function(n,v){return e(a,n,v)},t}}const Ux={scoped:!1};function lv(e,a,t){y5.inject(lv)(e,a,t)}function Im(e,a){return a.getFactory(e).construct(a)}on((e,a,t)=>()=>t.get(e)),on((e,a,t)=>{if(t.has(e,!0))return t.get(e)}),lv.$isResolver=!0,lv.resolve=()=>{},on((e,a,t)=>{const n=Im(e,a),v=new st(e,0,n);return t.registerResolver(e,v),n}),on((e,a,t)=>Im(e,a));class st{constructor(a,t,n){this.key=a,this.strategy=t,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(a){return a.registerResolver(this.key,this)}resolve(a,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=a.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=a.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(t)}case 3:return this.state(a,t,this);case 4:return this.state[0].resolve(a,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(a){var t,n,v;switch(this.strategy){case 1:case 2:return a.getFactory(this.state);case 5:return null!==(v=null===(n=null===(t=a.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===n?void 0:n.call(t,a))&&void 0!==v?v:null;default:return null}}}function Pm(e){return this.get(e)}function Wx(e,a){return a(e)}class Kx{constructor(a,t){this.Type=a,this.dependencies=t,this.transformers=null}construct(a,t){let n;return n=void 0===t?new this.Type(...this.dependencies.map(Pm,a)):new this.Type(...this.dependencies.map(Pm,a),...t),null==this.transformers?n:this.transformers.reduce(Wx,n)}registerTransformer(a){(this.transformers||(this.transformers=[])).push(a)}}const Yx={$isResolver:!0,resolve:(e,a)=>a};function cn(e){return"function"==typeof e.register}function km(e){return function Zx(e){return cn(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const Xx=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Rm="__DI_LOCATE_PARENT__",rv=new Map;class Jh{constructor(a,t){this.owner=a,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==a&&(a.$$container$$=this),this.resolvers=new Map,this.resolvers.set($x,Yx),a instanceof Node&&a.addEventListener(Rm,n=>{n.composedPath()[0]!==this.owner&&(n.detail.container=this,n.stopImmediatePropagation())})}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(a,...t){return this.context=a,this.register(...t),this.context=null,this}register(...a){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,n,v,A,S;const N=this.context;for(let o0=0,g0=a.length;o0<g0;++o0)if(t=a[o0],$m(t))if(cn(t))t.register(this,N);else if(void 0!==t.prototype)qh.singleton(t,t).register(this);else for(n=Object.keys(t),A=0,S=n.length;A<S;++A)v=t[n[A]],$m(v)&&(cn(v)?v.register(this,N):this.register(v));return--this.registerDepth,this}registerResolver(a,t){vn(a);const n=this.resolvers,v=n.get(a);return null==v?n.set(a,t):v instanceof st&&4===v.strategy?v.state.push(t):n.set(a,new st(a,4,[v,t])),t}registerTransformer(a,t){const n=this.getResolver(a);if(null==n)return!1;if(n.getFactory){const v=n.getFactory(this);return null!=v&&(v.registerTransformer(t),!0)}return!1}getResolver(a,t=!0){if(vn(a),void 0!==a.resolve)return a;let v,n=this;for(;null!=n;){if(v=n.resolvers.get(a),null!=v)return v;if(null==n.parent){const A=km(a)?this:n;return t?this.jitRegister(a,A):null}n=n.parent}return null}has(a,t=!1){return!!this.resolvers.has(a)||!(!t||null==this.parent)&&this.parent.has(a,!0)}get(a){if(vn(a),a.$isResolver)return a.resolve(this,this);let n,t=this;for(;null!=t;){if(n=t.resolvers.get(a),null!=n)return n.resolve(t,this);if(null==t.parent){const v=km(a)?this:t;return n=this.jitRegister(a,v),n.resolve(t,this)}t=t.parent}throw new Error(`Unable to resolve key: ${a}`)}getAll(a,t=!1){vn(a);const n=this;let A,v=n;if(t){let S=X7;for(;null!=v;)A=v.resolvers.get(a),null!=A&&(S=S.concat(Fm(A,v,n))),v=v.parent;return S}for(;null!=v;){if(A=v.resolvers.get(a),null!=A)return Fm(A,v,n);if(v=v.parent,null==v)return X7}return X7}getFactory(a){let t=rv.get(a);if(void 0===t){if(Jx(a))throw new Error(`${a.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);rv.set(a,t=new Kx(a,y5.getDependencies(a)))}return t}registerFactory(a,t){rv.set(a,t)}createChild(a){return new Jh(null,Object.assign({},this.config,a,{parentLocator:()=>this}))}jitRegister(a,t){if("function"!=typeof a)throw new Error(`Attempted to jitRegister something that is not a constructor: '${a}'. Did you forget to register this dependency?`);if(Xx.has(a.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${a.name}. Did you forget to add @inject(Key)`);if(cn(a)){const n=a.register(t);if(!(n instanceof Object)||null==n.resolve){const v=t.resolvers.get(a);if(null!=v)return v;throw new Error("A valid resolver was not returned from the static register method")}return n}if(a.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${a.friendlyName}`);{const n=this.config.defaultResolver(a,t);return t.resolvers.set(a,n),n}}}const ov=new WeakMap;function Nm(e){return function(a,t,n){if(ov.has(n))return ov.get(n);const v=e(a,t,n);return ov.set(n,v),v}}const qh=Object.freeze({instance:(e,a)=>new st(e,0,a),singleton:(e,a)=>new st(e,1,a),transient:(e,a)=>new st(e,2,a),callback:(e,a)=>new st(e,3,a),cachedCallback:(e,a)=>new st(e,3,Nm(a)),aliasTo:(e,a)=>new st(a,5,e)});function vn(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Fm(e,a,t){if(e instanceof st&&4===e.strategy){const n=e.state;let v=n.length;const A=new Array(v);for(;v--;)A[v]=n[v].resolve(a,t);return A}return[e.resolve(a,t)]}const jm="(anonymous)";function $m(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Jx=function(){const e=new WeakMap;let a=!1,t="",n=0;return function(v){return a=e.get(v),void 0===a&&(t=v.toString(),n=t.length,a=n>=29&&n<=100&&125===t.charCodeAt(n-1)&&t.charCodeAt(n-2)<=32&&93===t.charCodeAt(n-3)&&101===t.charCodeAt(n-4)&&100===t.charCodeAt(n-5)&&111===t.charCodeAt(n-6)&&99===t.charCodeAt(n-7)&&32===t.charCodeAt(n-8)&&101===t.charCodeAt(n-9)&&118===t.charCodeAt(n-10)&&105===t.charCodeAt(n-11)&&116===t.charCodeAt(n-12)&&97===t.charCodeAt(n-13)&&110===t.charCodeAt(n-14)&&88===t.charCodeAt(n-15),e.set(v,a)),a}}(),gn={};function Um(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const a=gn[e];if(void 0!==a)return a;const t=e.length;if(0===t)return gn[e]=!1;let n=0;for(let v=0;v<t;++v)if(n=e.charCodeAt(v),0===v&&48===n&&t>1||n<48||n>57)return gn[e]=!1;return gn[e]=!0}default:return!1}}function Gm(e){return`${e.toLowerCase()}:presentation`}const dn=new Map,Wm=Object.freeze({define(e,a,t){const n=Gm(e);void 0===dn.get(n)?dn.set(n,a):dn.set(n,!1),t.register(qh.instance(n,a))},forTag(e,a){const t=Gm(e),n=dn.get(t);return!1===n?y5.findResponsibleContainer(a).get(t):n||null}});class qx{constructor(a,t){this.template=a||null,this.styles=void 0===t?null:Array.isArray(t)?Q2.create(t):t instanceof Q2?t:Q2.create([t])}applyTo(a){const t=a.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}let S2=(()=>{class e extends o3{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Wm.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(n={})=>new tH(this===e?class extends e{}:this,t,n)}}return B0([j1],e.prototype,"template",void 0),B0([j1],e.prototype,"styles",void 0),e})();function ts(e,a,t){return"function"==typeof e?e(a,t):e}class tH{constructor(a,t,n){this.type=a,this.elementDefinition=t,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(a,t){const n=this.definition,v=this.overrideDefinition;t.tryDefineElement({name:`${n.prefix||t.elementPrefix}-${n.baseName}`,type:this.type,baseClass:this.elementDefinition.baseClass,callback:N=>{const o0=new qx(ts(n.template,N,n),ts(n.styles,N,n));N.definePresentation(o0);let g0=ts(n.shadowOptions,N,n);N.shadowRootMode&&(g0?v.shadowOptions||(g0.mode=N.shadowRootMode):null!==g0&&(g0={mode:N.shadowRootMode})),N.defineElement({elementOptions:ts(n.elementOptions,N,n),shadowOptions:g0,attributes:ts(n.attributes,N,n)})}})}}function wn(e){const a=e.parentElement;if(a)return a;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Z3=document.createElement("div");class cv{setProperty(a,t){W1.queueUpdate(()=>this.target.setProperty(a,t))}removeProperty(a){W1.queueUpdate(()=>this.target.removeProperty(a))}}class sH extends cv{constructor(){super();const a=new CSSStyleSheet;this.target=a.cssRules[a.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,a]}}class iH extends cv{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:a}=this.style;if(a){const t=a.insertRule(":root{}",a.cssRules.length);this.target=a.cssRules[t].style}}}let nH=(()=>{class e{constructor(t){this.store=new Map,this.target=null;const n=t.$fastController;this.style=document.createElement("style"),n.addStyles(this.style),a5.getNotifier(n).subscribe(this,"isConnected"),this.handleChange(n,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,n]of this.store.entries())this.target.setProperty(t,n)}setProperty(t,n){this.store.set(t,n),W1.queueUpdate(()=>{null!==this.target&&this.target.setProperty(t,n)})}removeProperty(t){this.store.delete(t),W1.queueUpdate(()=>{null!==this.target&&this.target.removeProperty(t)})}handleChange(t,n){const{sheet:v}=this.style;if(v){const A=v.insertRule(":host{}",v.cssRules.length);this.target=v.cssRules[A].style}else this.target=null}}return B0([j1],e.prototype,"target",void 0),e})();class lH{constructor(a){this.target=a.style}setProperty(a,t){W1.queueUpdate(()=>this.target.setProperty(a,t))}removeProperty(a){W1.queueUpdate(()=>this.target.removeProperty(a))}}class X2{setProperty(a,t){X2.properties[a]=t;for(const n of X2.roots.values())r6.getOrCreate(X2.normalizeRoot(n)).setProperty(a,t)}removeProperty(a){delete X2.properties[a];for(const t of X2.roots.values())r6.getOrCreate(X2.normalizeRoot(t)).removeProperty(a)}static registerRoot(a){const{roots:t}=X2;if(!t.has(a)){t.add(a);const n=r6.getOrCreate(this.normalizeRoot(a));for(const v in X2.properties)n.setProperty(v,X2.properties[v])}}static unregisterRoot(a){const{roots:t}=X2;if(t.has(a)){t.delete(a);const n=r6.getOrCreate(X2.normalizeRoot(a));for(const v in X2.properties)n.removeProperty(v)}}static normalizeRoot(a){return a===Z3?document:a}}X2.roots=new Set,X2.properties={};const vv=new WeakMap,rH=W1.supportsAdoptedStyleSheets?class hH extends cv{constructor(a){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,a.$fastController.addStyles(Q2.create([t]))}}:nH,r6=Object.freeze({getOrCreate(e){if(vv.has(e))return vv.get(e);let a;return a=e===Z3?new X2:e instanceof Document?W1.supportsAdoptedStyleSheets?new sH:new iH:function eH(e){return e instanceof o3}(e)?new rH(e):new lH(e),vv.set(e,a),a}});class B7 extends ga{constructor(a){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=a.name,null!==a.cssCustomPropertyName&&(this.cssCustomProperty=`--${a.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=B7.uniqueId(),B7.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(a){return new B7({name:"string"==typeof a?a:a.name,cssCustomPropertyName:"string"==typeof a?a:void 0===a.cssCustomPropertyName?a.name:a.cssCustomPropertyName})}static isCSSDesignToken(a){return"string"==typeof a.cssCustomProperty}static isDerivedDesignTokenValue(a){return"function"==typeof a}static getTokenById(a){return B7.tokensById.get(a)}getOrCreateSubscriberSet(a=this){return this.subscribers.get(a)||this.subscribers.set(a,new Set)&&this.subscribers.get(a)}createCSS(){return this.cssVar||""}getValueFor(a){const t=M2.getOrCreate(a).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${a} or an ancestor of ${a}.`)}setValueFor(a,t){return this._appliedTo.add(a),t instanceof B7&&(t=this.alias(t)),M2.getOrCreate(a).set(this,t),this}deleteValueFor(a){return this._appliedTo.delete(a),M2.existsFor(a)&&M2.getOrCreate(a).delete(this),this}withDefault(a){return this.setValueFor(Z3,a),this}subscribe(a,t){const n=this.getOrCreateSubscriberSet(t);t&&!M2.existsFor(t)&&M2.getOrCreate(t),n.has(a)||n.add(a)}unsubscribe(a,t){const n=this.subscribers.get(t||this);n&&n.has(a)&&n.delete(a)}notify(a){const t=Object.freeze({token:this,target:a});this.subscribers.has(this)&&this.subscribers.get(this).forEach(n=>n.handleChange(t)),this.subscribers.has(a)&&this.subscribers.get(a).forEach(n=>n.handleChange(t))}alias(a){return t=>a.getValueFor(t)}}B7.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),B7.tokensById=new Map;class cH{constructor(a,t,n){this.source=a,this.token=t,this.node=n,this.dependencies=new Set,this.observer=a5.binding(a,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,V4))}}class vH{constructor(){this.values=new Map}set(a,t){this.values.get(a)!==t&&(this.values.set(a,t),a5.getNotifier(this).notify(a.id))}get(a){return a5.track(this,a.id),this.values.get(a)}delete(a){this.values.delete(a)}all(){return this.values.entries()}}const as=new WeakMap,es=new WeakMap;class M2{constructor(a){this.target=a,this.store=new vH,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,n)=>{const v=B7.getTokenById(n);if(v&&(v.notify(this.target),B7.isCSSDesignToken(v))){const A=this.parent,S=this.isReflecting(v);if(A){const N=A.get(v),o0=t.get(v);N===o0||S?N===o0&&S&&this.stopReflectToCSS(v):this.reflectToCSS(v)}else S||this.reflectToCSS(v)}}},as.set(a,this),a5.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),a instanceof o3?a.$fastController.addBehaviors([this]):a.isConnected&&this.bind()}static getOrCreate(a){return as.get(a)||new M2(a)}static existsFor(a){return as.has(a)}static findParent(a){if(Z3!==a.target){let t=wn(a.target);for(;null!==t;){if(as.has(t))return as.get(t);t=wn(t)}return M2.getOrCreate(Z3)}return null}static findClosestAssignedNode(a,t){let n=t;do{if(n.has(a))return n;n=n.parent?n.parent:n.target!==Z3?M2.getOrCreate(Z3):null}while(null!==n);return null}get parent(){return es.get(this)||null}has(a){return this.assignedValues.has(a)}get(a){const t=this.store.get(a);if(void 0!==t)return t;const n=this.getRaw(a);return void 0!==n?(this.hydrate(a,n),this.get(a)):void 0}getRaw(a){var t;return this.assignedValues.has(a)?this.assignedValues.get(a):null===(t=M2.findClosestAssignedNode(a,this))||void 0===t?void 0:t.getRaw(a)}set(a,t){B7.isDerivedDesignTokenValue(this.assignedValues.get(a))&&this.tearDownBindingObserver(a),this.assignedValues.set(a,t),B7.isDerivedDesignTokenValue(t)?this.setupBindingObserver(a,t):this.store.set(a,t)}delete(a){this.assignedValues.delete(a),this.tearDownBindingObserver(a);const t=this.getRaw(a);t?this.hydrate(a,t):this.store.delete(a)}bind(){const a=M2.findParent(this);a&&a.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&es.get(this).removeChild(this)}appendChild(a){a.parent&&es.get(a).removeChild(a);const t=this.children.filter(n=>a.contains(n));es.set(a,this),this.children.push(a),t.forEach(n=>a.appendChild(n)),a5.getNotifier(this.store).subscribe(a);for(const[n,v]of this.store.all())a.hydrate(n,this.bindingObservers.has(n)?this.getRaw(n):v)}removeChild(a){const t=this.children.indexOf(a);return-1!==t&&this.children.splice(t,1),a5.getNotifier(this.store).unsubscribe(a),a.parent===this&&es.delete(a)}contains(a){return function aH(e,a){let t=a;for(;null!==t;){if(t===e)return!0;t=wn(t)}return!1}(this.target,a.target)}reflectToCSS(a){this.isReflecting(a)||(this.reflecting.add(a),M2.cssCustomPropertyReflector.startReflection(a,this.target))}stopReflectToCSS(a){this.isReflecting(a)&&(this.reflecting.delete(a),M2.cssCustomPropertyReflector.stopReflection(a,this.target))}isReflecting(a){return this.reflecting.has(a)}handleChange(a,t){const n=B7.getTokenById(t);!n||this.hydrate(n,this.getRaw(n))}hydrate(a,t){if(!this.has(a)){const n=this.bindingObservers.get(a);B7.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(a),this.setupBindingObserver(a,t)):this.setupBindingObserver(a,t):(n&&this.tearDownBindingObserver(a),this.store.set(a,t))}}setupBindingObserver(a,t){const n=new cH(t,a,this);return this.bindingObservers.set(a,n),n}tearDownBindingObserver(a){return!!this.bindingObservers.has(a)&&(this.bindingObservers.get(a).disconnect(),this.bindingObservers.delete(a),!0)}}M2.cssCustomPropertyReflector=new class oH{startReflection(a,t){a.subscribe(this,t),this.handleChange({token:a,target:t})}stopReflection(a,t){a.unsubscribe(this,t),this.remove(a,t)}handleChange(a){const{token:t,target:n}=a;this.add(t,n)}add(a,t){r6.getOrCreate(t).setProperty(a.cssCustomProperty,this.resolveCSSValue(M2.getOrCreate(t).get(a)))}remove(a,t){r6.getOrCreate(t).removeProperty(a.cssCustomProperty)}resolveCSSValue(a){return a&&"function"==typeof a.createCSS?a.createCSS():a}},B0([j1],M2.prototype,"children",void 0);const gv=Object.freeze({create:function gH(e){return B7.from(e)},notifyConnection:e=>!(!e.isConnected||!M2.existsFor(e)||(M2.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!M2.existsFor(e)||(M2.getOrCreate(e).unbind(),0)),registerRoot(e=Z3){X2.registerRoot(e)},unregisterRoot(e=Z3){X2.unregisterRoot(e)}}),dv=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),wv=new Map,pn=new Map;let o6=null;const hs=y5.createInterface(e=>e.cachedCallback(a=>(null===o6&&(o6=new Ym(null,a)),o6))),Km=Object.freeze({tagFor:e=>pn.get(e),responsibleFor:e=>e.$$designSystem$$||y5.findResponsibleContainer(e).get(hs),getOrCreate(e){if(!e)return null===o6&&(o6=y5.getOrCreateDOMContainer().get(hs)),o6;const a=e.$$designSystem$$;if(a)return a;const t=y5.getOrCreateDOMContainer(e);if(t.has(hs,!1))return t.get(hs);{const n=new Ym(e,t);return t.register(qh.instance(hs,n)),n}}});class Ym{constructor(a,t){this.owner=a,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>dv.definitionCallbackOnly,null!==a&&(a.$$designSystem$$=this)}withPrefix(a){return this.prefix=a,this}withShadowRootMode(a){return this.shadowRootMode=a,this}withElementDisambiguation(a){return this.disambiguate=a,this}withDesignTokenRoot(a){return this.designTokenRoot=a,this}register(...a){const t=this.container,n=[],v=this.disambiguate,A=this.shadowRootMode,S={elementPrefix:this.prefix,tryDefineElement(N,o0,g0){const A0=function dH(e,a,t){return"string"==typeof e?{name:e,type:a,callback:t}:e}(N,o0,g0),{name:E0,callback:j0,baseClass:s1}=A0;let{type:M1}=A0,O1=E0,q1=wv.get(O1),M5=!0;for(;q1;){const $1=v(O1,M1,q1);switch($1){case dv.ignoreDuplicate:return;case dv.definitionCallbackOnly:M5=!1,q1=void 0;break;default:O1=$1,q1=wv.get(O1)}}M5&&((pn.has(M1)||M1===S2)&&(M1=class extends M1{}),wv.set(O1,M1),pn.set(M1,O1),s1&&pn.set(s1,O1)),n.push(new wH(t,O1,M1,A,j0,M5))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&gv.registerRoot(this.designTokenRoot)),t.registerWithContext(S,...a);for(const N of n)N.callback(N),N.willDefine&&null!==N.definition&&N.definition.define();return this}}class wH{constructor(a,t,n,v,A,S){this.container=a,this.name=t,this.type=n,this.shadowRootMode=v,this.callback=A,this.willDefine=S,this.definition=null}definePresentation(a){Wm.define(this.name,a,this.container)}defineElement(a){this.definition=new Pe(this.type,Object.assign(Object.assign({},a),{name:this.name}))}tagFor(a){return Km.tagFor(a)}}class Zm extends S2{}class pv{constructor(){this.targetIndex=0}}class Qm extends pv{constructor(){super(...arguments),this.createPlaceholder=W1.createInterpolationPlaceholder}}class Xm extends pv{constructor(a,t,n){super(),this.name=a,this.behavior=t,this.options=n}createPlaceholder(a){return W1.createCustomAttributePlaceholder(this.name,a)}createBehavior(a){return new this.behavior(a,this.options)}}function uH(e,a){this.source=e,this.context=a,null===this.bindingObserver&&(this.bindingObserver=a5.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,a))}function mH(e,a){this.source=e,this.context=a,this.target.addEventListener(this.targetName,this)}function zH(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function _H(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function fH(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function MH(e){W1.setAttribute(this.target,this.targetName,e)}function xH(e){W1.setBooleanAttribute(this.target,this.targetName,e)}function HH(e){if(null==e&&(e=""),e.create){this.target.textContent="";let a=this.target.$fastView;void 0===a?a=e.create():this.target.$fastTemplate!==e&&(a.isComposed&&(a.remove(),a.unbind()),a=e.create()),a.isComposed?a.needsBindOnly&&(a.needsBindOnly=!1,a.bind(this.source,this.context)):(a.isComposed=!0,a.bind(this.source,this.context),a.insertBefore(this.target),this.target.$fastView=a,this.target.$fastTemplate=e)}else{const a=this.target.$fastView;void 0!==a&&a.isComposed&&(a.isComposed=!1,a.remove(),a.needsBindOnly?a.needsBindOnly=!1:a.unbind()),this.target.textContent=e}}function AH(e){this.target[this.targetName]=e}function VH(e){const a=this.classVersions||Object.create(null),t=this.target;let n=this.version||0;if(null!=e&&e.length){const v=e.split(/\s+/);for(let A=0,S=v.length;A<S;++A){const N=v[A];""!==N&&(a[N]=n,t.classList.add(N))}}if(this.classVersions=a,this.version=n+1,0!==n){n-=1;for(const v in a)a[v]===n&&t.classList.remove(v)}}class uv extends Qm{constructor(a){super(),this.binding=a,this.bind=uH,this.unbind=zH,this.updateTarget=MH,this.isBindingVolatile=a5.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(a){if(this.originalTargetName=a,void 0!==a)switch(a[0]){case":":if(this.cleanedTargetName=a.substr(1),this.updateTarget=AH,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(n,v)=>W1.createHTML(t(n,v))}break;case"?":this.cleanedTargetName=a.substr(1),this.updateTarget=xH;break;case"@":this.cleanedTargetName=a.substr(1),this.bind=mH,this.unbind=fH;break;default:this.cleanedTargetName=a,"class"===a&&(this.updateTarget=VH)}}targetAtContent(){this.updateTarget=HH,this.unbind=_H}createBehavior(a){return new CH(a,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class CH{constructor(a,t,n,v,A,S,N){this.source=null,this.context=null,this.bindingObserver=null,this.target=a,this.binding=t,this.isBindingVolatile=n,this.bind=v,this.unbind=A,this.updateTarget=S,this.targetName=N}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(a){w8(a);const t=this.binding(this.source,this.context);w8(null),!0!==t&&a.preventDefault()}}let mv=null;class zv{addFactory(a){a.targetIndex=this.targetIndex,this.behaviorFactories.push(a)}captureContentBinding(a){a.targetAtContent(),this.addFactory(a)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){mv=this}static borrow(a){const t=mv||new zv;return t.directives=a,t.reset(),mv=null,t}}function bH(e){if(1===e.length)return e[0];let a;const t=e.length,n=e.map(S=>"string"==typeof S?()=>S:(a=S.targetName||a,S.binding)),A=new uv((S,N)=>{let o0="";for(let g0=0;g0<t;++g0)o0+=n[g0](S,N);return o0});return A.targetName=a,A}const yH=wa.length;function Jm(e,a){const t=a.split(nh);if(1===t.length)return null;const n=[];for(let v=0,A=t.length;v<A;++v){const S=t[v],N=S.indexOf(wa);let o0;if(-1===N)o0=S;else{const g0=parseInt(S.substring(0,N));n.push(e.directives[g0]),o0=S.substring(N+yH)}""!==o0&&n.push(o0)}return n}function qm(e,a,t=!1){const n=a.attributes;for(let v=0,A=n.length;v<A;++v){const S=n[v],N=S.value,o0=Jm(e,N);let g0=null;null===o0?t&&(g0=new uv(()=>N),g0.targetName=S.name):g0=bH(o0),null!==g0&&(a.removeAttributeNode(S),v--,A--,e.addFactory(g0))}}function LH(e,a,t){const n=Jm(e,a.textContent);if(null!==n){let v=a;for(let A=0,S=n.length;A<S;++A){const N=n[A],o0=0===A?a:v.parentNode.insertBefore(document.createTextNode(""),v.nextSibling);"string"==typeof N?o0.textContent=N:(o0.textContent=" ",e.captureContentBinding(N)),v=o0,e.targetIndex++,o0!==a&&t.nextNode()}e.targetIndex--}}const _v=document.createRange();class EH{constructor(a,t){this.fragment=a,this.behaviors=t,this.source=null,this.context=null,this.firstChild=a.firstChild,this.lastChild=a.lastChild}appendTo(a){a.appendChild(this.fragment)}insertBefore(a){if(this.fragment.hasChildNodes())a.parentNode.insertBefore(this.fragment,a);else{const t=a.parentNode,n=this.lastChild;let A,v=this.firstChild;for(;v!==n;)A=v.nextSibling,t.insertBefore(v,a),v=A;t.insertBefore(n,a)}}remove(){const a=this.fragment,t=this.lastChild;let v,n=this.firstChild;for(;n!==t;)v=n.nextSibling,a.appendChild(n),n=v;a.appendChild(t)}dispose(){const a=this.firstChild.parentNode,t=this.lastChild;let v,n=this.firstChild;for(;n!==t;)v=n.nextSibling,a.removeChild(n),n=v;a.removeChild(t);const A=this.behaviors,S=this.source;for(let N=0,o0=A.length;N<o0;++N)A[N].unbind(S)}bind(a,t){const n=this.behaviors;if(this.source!==a)if(null!==this.source){const v=this.source;this.source=a,this.context=t;for(let A=0,S=n.length;A<S;++A){const N=n[A];N.unbind(v),N.bind(a,t)}}else{this.source=a,this.context=t;for(let v=0,A=n.length;v<A;++v)n[v].bind(a,t)}}unbind(){if(null===this.source)return;const a=this.behaviors,t=this.source;for(let n=0,v=a.length;n<v;++n)a[n].unbind(t);this.source=null}static disposeContiguousBatch(a){if(0!==a.length){_v.setStartBefore(a[0].firstChild),_v.setEndAfter(a[a.length-1].lastChild),_v.deleteContents();for(let t=0,n=a.length;t<n;++t){const v=a[t],A=v.behaviors,S=v.source;for(let N=0,o0=A.length;N<o0;++N)A[N].unbind(S)}}}}class tz{constructor(a,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=a,this.directives=t}create(a){if(null===this.fragment){let g0;const A0=this.html;if("string"==typeof A0){g0=document.createElement("template"),g0.innerHTML=W1.createHTML(A0);const j0=g0.content.firstElementChild;null!==j0&&"TEMPLATE"===j0.tagName&&(g0=j0)}else g0=A0;const E0=function BH(e,a){const t=e.content;document.adoptNode(t);const n=zv.borrow(a);qm(n,e,!0);const v=n.behaviorFactories;n.reset();const A=W1.createTemplateWalker(t);let S;for(;S=A.nextNode();)switch(n.targetIndex++,S.nodeType){case 1:qm(n,S);break;case 3:LH(n,S,A);break;case 8:W1.isMarker(S)&&n.addFactory(a[W1.extractDirectiveIndexFromMarker(S)])}let N=0;(W1.isMarker(t.firstChild)||1===t.childNodes.length&&a.length)&&(t.insertBefore(document.createComment(""),t.firstChild),N=-1);const o0=n.behaviorFactories;return n.release(),{fragment:t,viewBehaviorFactories:o0,hostBehaviorFactories:v,targetOffset:N}}(g0,this.directives);this.fragment=E0.fragment,this.viewBehaviorFactories=E0.viewBehaviorFactories,this.hostBehaviorFactories=E0.hostBehaviorFactories,this.targetOffset=E0.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,v=new Array(this.behaviorCount),A=W1.createTemplateWalker(t);let S=0,N=this.targetOffset,o0=A.nextNode();for(let g0=n.length;S<g0;++S){const A0=n[S],E0=A0.targetIndex;for(;null!==o0;){if(N===E0){v[S]=A0.createBehavior(o0);break}o0=A.nextNode(),N++}}if(this.hasHostBehaviors){const g0=this.hostBehaviorFactories;for(let A0=0,E0=g0.length;A0<E0;++A0,++S)v[S]=g0[A0].createBehavior(a)}return new EH(t,v)}render(a,t,n){"string"==typeof t&&(t=document.getElementById(t)),void 0===n&&(n=t);const v=this.create(n);return v.bind(a,V4),v.appendTo(t),v}}const TH=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d5(e,...a){const t=[];let n="";for(let v=0,A=e.length-1;v<A;++v){const S=e[v];let N=a[v];if(n+=S,N instanceof tz){const o0=N;N=()=>o0}if("function"==typeof N&&(N=new uv(N)),N instanceof Qm){const o0=TH.exec(S);null!==o0&&(N.targetName=o0[2])}N instanceof pv?(n+=N.createPlaceholder(t.length),t.push(N)):n+=N}return n+=e[e.length-1],new tz(n,t)}var Q3=(()=>{return(e=Q3||(Q3={})).ltr="ltr",e.rtl="rtl",Q3;var e})();function X3(e,a,t){return isNaN(e)||e<=a?a:e>=t?t:e}function fv(e,a,t){return isNaN(e)||e<=a?0:e>=t?1:e/(t-a)}function Ga(e,a,t){return isNaN(e)?a:a+e*(t-a)}function az(e){return e*(Math.PI/180)}function m7(e,a,t){return isNaN(e)||e<=0?a:e>=1?t:a+e*(t-a)}function Mv(e,a,t){if(e<=0)return a%360;if(e>=1)return t%360;const n=(a-t+360)%360;return n<=(t-a+360)%360?(a-n*e+360)%360:(a+n*e+360)%360}function F2(e,a){const t=Math.pow(10,a);return Math.round(e*t)/t}Math;class x2{constructor(a,t,n,v){this.r=a,this.g=t,this.b=n,this.a="number"!=typeof v||isNaN(v)?1:v}static fromObject(a){return!a||isNaN(a.r)||isNaN(a.g)||isNaN(a.b)?null:new x2(a.r,a.g,a.b,a.a)}equalValue(a){return this.r===a.r&&this.g===a.g&&this.b===a.b&&this.a===a.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Ga(this.r,0,255))},${Math.round(Ga(this.g,0,255))},${Math.round(Ga(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Ga(this.r,0,255))},${Math.round(Ga(this.g,0,255))},${Math.round(Ga(this.b,0,255))},${X3(this.a,0,1)})`}roundToPrecision(a){return new x2(F2(this.r,a),F2(this.g,a),F2(this.b,a),F2(this.a,a))}clamp(){return new x2(X3(this.r,0,1),X3(this.g,0,1),X3(this.b,0,1),X3(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(a){return function DH(e){const a=Math.round(X3(e,0,255)).toString(16);return 1===a.length?"0"+a:a}(Ga(a,0,255))}}class Wa{constructor(a,t,n){this.h=a,this.s=t,this.l=n}static fromObject(a){return!a||isNaN(a.h)||isNaN(a.s)||isNaN(a.l)?null:new Wa(a.h,a.s,a.l)}equalValue(a){return this.h===a.h&&this.s===a.s&&this.l===a.l}roundToPrecision(a){return new Wa(F2(this.h,a),F2(this.s,a),F2(this.l,a))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class ss{constructor(a,t,n){this.h=a,this.s=t,this.v=n}static fromObject(a){return!a||isNaN(a.h)||isNaN(a.s)||isNaN(a.v)?null:new ss(a.h,a.s,a.v)}equalValue(a){return this.h===a.h&&this.s===a.s&&this.v===a.v}roundToPrecision(a){return new ss(F2(this.h,a),F2(this.s,a),F2(this.v,a))}toObject(){return{h:this.h,s:this.s,v:this.v}}}let Vt=(()=>{class e{constructor(t,n,v){this.l=t,this.a=n,this.b=v}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new e(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new e(F2(this.l,t),F2(this.a,t),F2(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}return e.epsilon=216/24389,e.kappa=24389/27,e})();class c6{constructor(a,t,n){this.l=a,this.c=t,this.h=n}static fromObject(a){return!a||isNaN(a.l)||isNaN(a.c)||isNaN(a.h)?null:new c6(a.l,a.c,a.h)}equalValue(a){return this.l===a.l&&this.c===a.c&&this.h===a.h}roundToPrecision(a){return new c6(F2(this.l,a),F2(this.c,a),F2(this.h,a))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class R7{constructor(a,t,n){this.x=a,this.y=t,this.z=n}static fromObject(a){return!a||isNaN(a.x)||isNaN(a.y)||isNaN(a.z)?null:new R7(a.x,a.y,a.z)}equalValue(a){return this.x===a.x&&this.y===a.y&&this.z===a.z}roundToPrecision(a){return new R7(F2(this.x,a),F2(this.y,a),F2(this.z,a))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function xv(e){return.2126*e.r+.7152*e.g+.0722*e.b}function Hv(e){function a(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return xv(new x2(a(e.r),a(e.g),a(e.b),1))}R7.whitePoint=new R7(.95047,1,1.08883);const ez=(e,a)=>(e+.05)/(a+.05);function hz(e,a){const t=Hv(e),n=Hv(a);return t>n?ez(t,n):ez(n,t)}function is(e){const a=Math.max(e.r,e.g,e.b),t=Math.min(e.r,e.g,e.b),n=a-t;let v=0;0!==n&&(v=a===e.r?(e.g-e.b)/n%6*60:a===e.g?60*((e.b-e.r)/n+2):60*((e.r-e.g)/n+4)),v<0&&(v+=360);const A=(a+t)/2;let S=0;return 0!==n&&(S=n/(1-Math.abs(2*A-1))),new Wa(v,S,A)}function Cv(e,a=1){const t=(1-Math.abs(2*e.l-1))*e.s,n=t*(1-Math.abs(e.h/60%2-1)),v=e.l-t/2;let A=0,S=0,N=0;return e.h<60?(A=t,S=n,N=0):e.h<120?(A=n,S=t,N=0):e.h<180?(A=0,S=t,N=n):e.h<240?(A=0,S=n,N=t):e.h<300?(A=n,S=0,N=t):e.h<360&&(A=t,S=0,N=n),new x2(A+v,S+v,N+v,a)}function sz(e){const a=Math.max(e.r,e.g,e.b),n=a-Math.min(e.r,e.g,e.b);let v=0;0!==n&&(v=a===e.r?(e.g-e.b)/n%6*60:a===e.g?60*((e.b-e.r)/n+2):60*((e.r-e.g)/n+4)),v<0&&(v+=360);let A=0;return 0!==a&&(A=n/a),new ss(v,A,a)}function bv(e){function a(o0){return o0<=.04045?o0/12.92:Math.pow((o0+.055)/1.055,2.4)}const t=a(e.r),n=a(e.g),v=a(e.b);return new R7(.4124564*t+.3575761*n+.1804375*v,.2126729*t+.7151522*n+.072175*v,.0193339*t+.119192*n+.9503041*v)}function iz(e,a=1){function t(S){return S<=.0031308?12.92*S:1.055*Math.pow(S,1/2.4)-.055}const n=t(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),v=t(-.969266*e.x+1.8760108*e.y+.041556*e.z),A=t(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new x2(n,v,A,a)}function yv(e){return function NH(e){function a(o0){return o0>Vt.epsilon?Math.pow(o0,1/3):(Vt.kappa*o0+16)/116}const t=a(e.x/R7.whitePoint.x),n=a(e.y/R7.whitePoint.y),v=a(e.z/R7.whitePoint.z);return new Vt(116*n-16,500*(t-n),200*(n-v))}(bv(e))}function nz(e,a=1){return iz(function RH(e){const a=(e.l+16)/116,t=a+e.a/500,n=a-e.b/200,v=Math.pow(t,3),A=Math.pow(a,3),S=Math.pow(n,3);let N=0;N=v>Vt.epsilon?v:(116*t-16)/Vt.kappa;let o0=0;o0=e.l>Vt.epsilon*Vt.kappa?A:e.l/Vt.kappa;let g0=0;return g0=S>Vt.epsilon?S:(116*n-16)/Vt.kappa,N*=R7.whitePoint.x,o0*=R7.whitePoint.y,g0*=R7.whitePoint.z,new R7(N,o0,g0)}(e),a)}function Lv(e){return function kH(e){let a=0;(Math.abs(e.b)>.001||Math.abs(e.a)>.001)&&(a=function OH(e){return e*(180/Math.PI)}(Math.atan2(e.b,e.a))),a<0&&(a+=360);const t=Math.sqrt(e.a*e.a+e.b*e.b);return new c6(e.l,t,a)}(yv(e))}function lz(e,a=1){return nz(function PH(e){let a=0,t=0;return 0!==e.h&&(a=Math.cos(az(e.h))*e.c,t=Math.sin(az(e.h))*e.c),new Vt(e.l,a,t)}(e),a)}function Bv(e,a,t=18){const n=Lv(e);let v=n.c+a*t;return v<0&&(v=0),lz(new c6(n.l,v,n.h))}function Dv(e,a){return e*a}function Iv(e,a){return new x2(Dv(e.r,a.r),Dv(e.g,a.g),Dv(e.b,a.b),1)}function Pv(e,a){return X3(e<.5?2*a*e:1-2*(1-a)*(1-e),0,1)}function kv(e,a){return new x2(Pv(e.r,a.r),Pv(e.g,a.g),Pv(e.b,a.b),1)}var N7=(()=>{return(e=N7||(N7={}))[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH",N7;var e})();function ns(e,a,t,n){if(isNaN(e)||e<=0)return t;if(e>=1)return n;switch(a){case N7.HSL:return Cv(function QH(e,a,t){return isNaN(e)||e<=0?a:e>=1?t:new Wa(Mv(e,a.h,t.h),m7(e,a.s,t.s),m7(e,a.l,t.l))}(e,is(t),is(n)));case N7.HSV:return function IH(e,a=1){const t=e.s*e.v,n=t*(1-Math.abs(e.h/60%2-1)),v=e.v-t;let A=0,S=0,N=0;return e.h<60?(A=t,S=n,N=0):e.h<120?(A=n,S=t,N=0):e.h<180?(A=0,S=t,N=n):e.h<240?(A=0,S=n,N=t):e.h<300?(A=n,S=0,N=t):e.h<360&&(A=t,S=0,N=n),new x2(A+v,S+v,N+v,a)}(function XH(e,a,t){return isNaN(e)||e<=0?a:e>=1?t:new ss(Mv(e,a.h,t.h),m7(e,a.s,t.s),m7(e,a.v,t.v))}(e,sz(t),sz(n)));case N7.XYZ:return iz(function JH(e,a,t){return isNaN(e)||e<=0?a:e>=1?t:new R7(m7(e,a.x,t.x),m7(e,a.y,t.y),m7(e,a.z,t.z))}(e,bv(t),bv(n)));case N7.LAB:return nz(function qH(e,a,t){return isNaN(e)||e<=0?a:e>=1?t:new Vt(m7(e,a.l,t.l),m7(e,a.a,t.a),m7(e,a.b,t.b))}(e,yv(t),yv(n)));case N7.LCH:return lz(function tA(e,a,t){return isNaN(e)||e<=0?a:e>=1?t:new c6(m7(e,a.l,t.l),m7(e,a.c,t.c),Mv(e,a.h,t.h))}(e,Lv(t),Lv(n)));default:return function ZH(e,a,t){return isNaN(e)||e<=0?a:e>=1?t:new x2(m7(e,a.r,t.r),m7(e,a.g,t.g),m7(e,a.b,t.b),m7(e,a.a,t.a))}(e,t,n)}}class Ct{constructor(a){if(null==a||0===a.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(a)}static createBalancedColorScale(a){if(null==a||0===a.length)throw new Error("The colors argument must be non-empty");const t=new Array(a.length);for(let n=0;n<a.length;n++)t[n]=0===n?{color:a[n],position:0}:n===a.length-1?{color:a[n],position:1}:{color:a[n],position:n*(1/(a.length-1))};return new Ct(t)}getColor(a,t=N7.RGB){if(1===this.stops.length)return this.stops[0].color;if(a<=0)return this.stops[0].color;if(a>=1)return this.stops[this.stops.length-1].color;let n=0;for(let S=0;S<this.stops.length;S++)this.stops[S].position<=a&&(n=S);let v=n+1;return v>=this.stops.length&&(v=this.stops.length-1),ns(1/(this.stops[v].position-this.stops[n].position)*(a-this.stops[n].position),t,this.stops[n].color,this.stops[v].color)}trim(a,t,n=N7.RGB){if(a<0||t>1||t<a)throw new Error("Invalid bounds");if(a===t)return new Ct([{color:this.getColor(a,n),position:0}]);const v=[];for(let N=0;N<this.stops.length;N++)this.stops[N].position>=a&&this.stops[N].position<=t&&v.push(this.stops[N]);if(0===v.length)return new Ct([{color:this.getColor(a),position:a},{color:this.getColor(t),position:t}]);v[0].position!==a&&v.unshift({color:this.getColor(a),position:a}),v[v.length-1].position!==t&&v.push({color:this.getColor(t),position:t});const A=t-a,S=new Array(v.length);for(let N=0;N<v.length;N++)S[N]={color:v[N].color,position:(v[N].position-a)/A};return new Ct(S)}findNextColor(a,t,n=!1,v=N7.RGB,A=.005,S=32){isNaN(a)||a<=0?a=0:a>=1&&(a=1);const N=this.getColor(a,v),o0=n?0:1;if(hz(N,this.getColor(o0,v))<=t)return o0;let E0=n?0:a,j0=n?a:0,s1=o0,M1=0;for(;M1<=S;){s1=Math.abs(j0-E0)/2+E0;const q1=hz(N,this.getColor(s1,v));if(Math.abs(q1-t)<=A)return s1;q1>t?n?E0=s1:j0=s1:n?j0=s1:E0=s1,M1++}return s1}clone(){const a=new Array(this.stops.length);for(let t=0;t<a.length;t++)a[t]={color:this.stops[t].color,position:this.stops[t].position};return new Ct(a)}sortColorScaleStops(a){return a.sort((t,n)=>{const v=t.position,A=n.position;return v<A?-1:v>A?1:0})}}const cz=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function I4(e){const a=cz.exec(e);if(null===a)return null;let t=a[1];if(3===t.length){const v=t.charAt(0),A=t.charAt(1),S=t.charAt(2);t=v.concat(v,A,A,S,S)}const n=parseInt(t,16);return isNaN(n)?null:new x2(fv((16711680&n)>>>16,0,255),fv((65280&n)>>>8,0,255),fv(255&n,0,255),1)}class bt{constructor(a){this.config=Object.assign({},bt.defaultPaletteConfig,a),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(a){let t=!1;for(const n in a)this.config[n]&&(this.config[n].equalValue?this.config[n].equalValue(a[n])||(this.config[n]=a[n],t=!0):a[n]!==this.config[n]&&(this.config[n]=a[n],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){const a=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=a.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const a=is(this.config.baseColor),n=new Ct([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let S=n.getColor(0),N=n.getColor(1);if(a.s>=this.config.saturationAdjustmentCutoff&&(S=Bv(S,this.config.saturationLight),N=Bv(N,this.config.saturationDark)),0!==this.config.multiplyLight){const o0=Iv(this.config.baseColor,S);S=ns(this.config.multiplyLight,this.config.interpolationMode,S,o0)}if(0!==this.config.multiplyDark){const o0=Iv(this.config.baseColor,N);N=ns(this.config.multiplyDark,this.config.interpolationMode,N,o0)}if(0!==this.config.overlayLight){const o0=kv(this.config.baseColor,S);S=ns(this.config.overlayLight,this.config.interpolationMode,S,o0)}if(0!==this.config.overlayDark){const o0=kv(this.config.baseColor,N);N=ns(this.config.overlayDark,this.config.interpolationMode,N,o0)}return new Ct(this.config.baseScalePosition?this.config.baseScalePosition<=0?[{position:0,color:this.config.baseColor},{position:1,color:N.clamp()}]:this.config.baseScalePosition>=1?[{position:0,color:S.clamp()},{position:1,color:this.config.baseColor}]:[{position:0,color:S.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:N.clamp()}]:[{position:0,color:S.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:N.clamp()}])}}bt.defaultPaletteConfig={baseColor:I4("#808080"),steps:11,interpolationMode:N7.RGB,scaleColorLight:new x2(1,1,1,1),scaleColorDark:new x2(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},bt.greyscalePaletteConfig={baseColor:I4("#808080"),steps:11,interpolationMode:N7.RGB,scaleColorLight:new x2(1,1,1,1),scaleColorDark:new x2(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};class un{constructor(a){this.palette=[],this.config=Object.assign({},un.defaultPaletteConfig,a),this.regenPalettes()}regenPalettes(){let a=this.config.steps;(isNaN(a)||a<3)&&(a=3);const t=.14,v=new x2(t,t,t,1),N=new bt(Object.assign(Object.assign({},bt.greyscalePaletteConfig),{baseColor:v,baseScalePosition:86/94,steps:a})).palette,o0=xv(this.config.baseColor),g0=is(this.config.baseColor).l,j0=this.matchRelativeLuminanceIndex((o0+g0)/2,N)/(a-1),M1=this.matchRelativeLuminanceIndex(t,N)/(a-1),O1=is(this.config.baseColor),q1=Cv(Wa.fromObject({h:O1.h,s:O1.s,l:t})),M5=Cv(Wa.fromObject({h:O1.h,s:O1.s,l:.06})),$1=new Array(5);$1[0]={position:0,color:new x2(1,1,1,1)},$1[1]={position:j0,color:this.config.baseColor},$1[2]={position:M1,color:q1},$1[3]={position:.99,color:M5},$1[4]={position:1,color:new x2(0,0,0,1)};const $2=new Ct($1);this.palette=new Array(a);for(let A2=0;A2<a;A2++){const yt=$2.getColor(A2/(a-1),N7.RGB);this.palette[A2]=yt}}matchRelativeLuminanceIndex(a,t){let n=Number.MAX_VALUE,v=0,A=0;const S=t.length;for(;A<S;A++){const N=Math.abs(xv(t[A])-a);N<n&&(n=N,v=A)}return v}}function gz(e,a){return((e.relativeLuminance>a.relativeLuminance?e:a).relativeLuminance+.05)/((e.relativeLuminance>a.relativeLuminance?a:e).relativeLuminance+.05)}un.defaultPaletteConfig={baseColor:I4("#808080"),steps:94};const J3=Object.freeze({create:(e,a,t)=>new mn(e,a,t),from:e=>new mn(e.r,e.g,e.b)});class mn extends x2{constructor(a,t,n){super(a,t,n,1),this.toColorString=this.toStringHexRGB,this.contrast=gz.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Hv(this)}static fromObject(a){return new mn(a.r,a.g,a.b)}}function Fv(e,a,t=0,n=e.length-1){if(n===t)return e[t];const v=Math.floor((n-t)/2)+t;return a(e[v])?Fv(e,a,t,v):Fv(e,a,v+1,n)}const pA=(-.1+Math.sqrt(.21))/2;function Ka(e){return function uA(e){return e.relativeLuminance<=pA}(e)?-1:1}const zn=Object.freeze({create:function mA(e,a,t){return zn.from("number"==typeof e?J3.create(e,a,t):e)},from:function zA(e){return function wA(e){const a={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const t in a)if(typeof a[t]!=typeof e[t])return!1;return!0}(e)?_n.from(e):_n.from(J3.create(e.r,e.g,e.b))}});class _n{constructor(a,t){this.closestIndexCache=new Map,this.source=a,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(a,t,n,v){void 0===n&&(n=this.closestIndexOf(a));let A=this.swatches;const S=this.lastIndex;let N=n;return void 0===v&&(v=Ka(a)),-1===v&&(A=this.reversedSwatches,N=S-N),Fv(A,g0=>gz(a,g0)>=t,N,S)}get(a){return this.swatches[a]||this.swatches[X3(a,0,this.lastIndex)]}closestIndexOf(a){if(this.closestIndexCache.has(a.relativeLuminance))return this.closestIndexCache.get(a.relativeLuminance);let t=this.swatches.indexOf(a);if(-1!==t)return this.closestIndexCache.set(a.relativeLuminance,t),t;const n=this.swatches.reduce((v,A)=>Math.abs(A.relativeLuminance-a.relativeLuminance)<Math.abs(v.relativeLuminance-a.relativeLuminance)?A:v);return t=this.swatches.indexOf(n),this.closestIndexCache.set(a.relativeLuminance,t),t}static from(a){return new _n(a,Object.freeze(new un({baseColor:x2.fromObject(a)}).palette.map(t=>{const n=I4(t.toStringHexRGB());return J3.create(n.r,n.g,n.b)})))}}const dz=J3.create(1,1,1),MA=J3.create(0,0,0),xA=J3.from(I4("#808080")),HA=J3.from(I4("#DA1A5F"));function fn(e){return J3.create(e,e,e)}var Mn=(()=>{return(e=Mn||(Mn={}))[e.LightMode=1]="LightMode",e[e.DarkMode=.23]="DarkMode",Mn;var e})();function jv(e,a,t,n,v,A){return Math.max(e.closestIndexOf(fn(a))+t,n,v,A)}const{create:d1}=gv;function K1(e){return gv.create({name:e,cssCustomPropertyName:null})}const q3=d1("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),wz=d1("base-height-multiplier").withDefault(10),jA=d1("base-horizontal-spacing-multiplier").withDefault(3),Ya=d1("base-layer-luminance").withDefault(Mn.DarkMode),j2=d1("control-corner-radius").withDefault(4),v6=d1("density").withDefault(0),p5=d1("design-unit").withDefault(4),xn=d1("direction").withDefault(Q3.ltr),P4=d1("disabled-opacity").withDefault(.3),j5=d1("stroke-width").withDefault(1),$5=d1("focus-stroke-width").withDefault(2),m3=d1("type-ramp-base-font-size").withDefault("14px"),z3=d1("type-ramp-base-line-height").withDefault("20px"),$v=d1("type-ramp-minus-1-font-size").withDefault("12px"),Uv=d1("type-ramp-minus-1-line-height").withDefault("16px"),$A=d1("type-ramp-minus-2-font-size").withDefault("10px"),UA=d1("type-ramp-minus-2-line-height").withDefault("16px"),GA=d1("type-ramp-plus-1-font-size").withDefault("16px"),WA=d1("type-ramp-plus-1-line-height").withDefault("24px"),KA=d1("type-ramp-plus-2-font-size").withDefault("20px"),YA=d1("type-ramp-plus-2-line-height").withDefault("28px"),ZA=d1("type-ramp-plus-3-font-size").withDefault("28px"),QA=d1("type-ramp-plus-3-line-height").withDefault("36px"),XA=d1("type-ramp-plus-4-font-size").withDefault("34px"),JA=d1("type-ramp-plus-4-line-height").withDefault("44px"),qA=d1("type-ramp-plus-5-font-size").withDefault("46px"),tV=d1("type-ramp-plus-5-line-height").withDefault("56px"),aV=d1("type-ramp-plus-6-font-size").withDefault("60px"),eV=d1("type-ramp-plus-6-line-height").withDefault("72px"),hV=K1("accent-fill-rest-delta").withDefault(0),pz=K1("accent-fill-hover-delta").withDefault(4),uz=K1("accent-fill-active-delta").withDefault(-5),mz=K1("accent-fill-focus-delta").withDefault(0),zz=K1("accent-foreground-rest-delta").withDefault(0),_z=K1("accent-foreground-hover-delta").withDefault(6),fz=K1("accent-foreground-active-delta").withDefault(-4),Mz=K1("accent-foreground-focus-delta").withDefault(0),Za=K1("neutral-fill-rest-delta").withDefault(7),Qa=K1("neutral-fill-hover-delta").withDefault(10),Xa=K1("neutral-fill-active-delta").withDefault(5),Gv=K1("neutral-fill-focus-delta").withDefault(0),xz=K1("neutral-fill-input-rest-delta").withDefault(0),Hz=K1("neutral-fill-input-hover-delta").withDefault(0),Az=K1("neutral-fill-input-active-delta").withDefault(0),Vz=K1("neutral-fill-input-focus-delta").withDefault(0),Cz=K1("neutral-fill-stealth-rest-delta").withDefault(0),bz=K1("neutral-fill-stealth-hover-delta").withDefault(5),yz=K1("neutral-fill-stealth-active-delta").withDefault(3),Lz=K1("neutral-fill-stealth-focus-delta").withDefault(0),sV=K1("neutral-fill-strong-rest-delta").withDefault(0),Bz=K1("neutral-fill-strong-hover-delta").withDefault(8),Ez=K1("neutral-fill-strong-active-delta").withDefault(-5),Tz=K1("neutral-fill-strong-focus-delta").withDefault(0),Ja=K1("neutral-fill-layer-rest-delta").withDefault(3),Sz=K1("neutral-stroke-rest-delta").withDefault(25),Oz=K1("neutral-stroke-hover-delta").withDefault(40),Dz=K1("neutral-stroke-active-delta").withDefault(16),Iz=K1("neutral-stroke-focus-delta").withDefault(25),Pz=K1("neutral-stroke-divider-rest-delta").withDefault(8),kz=d1("neutral-color").withDefault(xA),l7=K1("neutral-palette").withDefault(e=>zn.from(kz.getValueFor(e))),Rz=d1("accent-color").withDefault(HA),Wv=K1("accent-palette").withDefault(e=>zn.from(Rz.getValueFor(e))),iV=K1("neutral-layer-card-container-recipe").withDefault({evaluate:e=>function OA(e,a,t){return e.get(e.closestIndexOf(fn(a))+t)}(l7.getValueFor(e),Ya.getValueFor(e),Ja.getValueFor(e))}),nV=(d1("neutral-layer-card-container").withDefault(e=>iV.getValueFor(e).evaluate(e)),K1("neutral-layer-floating-recipe").withDefault({evaluate:e=>function DA(e,a,t){const n=e.closestIndexOf(fn(a))-t;return e.get(n-t)}(l7.getValueFor(e),Ya.getValueFor(e),Ja.getValueFor(e))})),Hn=d1("neutral-layer-floating").withDefault(e=>nV.getValueFor(e).evaluate(e)),lV=K1("neutral-layer-1-recipe").withDefault({evaluate:e=>function IA(e,a){return e.get(e.closestIndexOf(fn(a)))}(l7.getValueFor(e),Ya.getValueFor(e))}),rV=d1("neutral-layer-1").withDefault(e=>lV.getValueFor(e).evaluate(e)),oV=K1("neutral-layer-2-recipe").withDefault({evaluate:e=>function PA(e,a,t,n,v,A){return e.get(jv(e,a,t,n,v,A))}(l7.getValueFor(e),Ya.getValueFor(e),Ja.getValueFor(e),Za.getValueFor(e),Qa.getValueFor(e),Xa.getValueFor(e))}),cV=d1("neutral-layer-2").withDefault(e=>oV.getValueFor(e).evaluate(e)),vV=K1("neutral-layer-3-recipe").withDefault({evaluate:e=>function kA(e,a,t,n,v,A){return e.get(jv(e,a,t,n,v,A)+t)}(l7.getValueFor(e),Ya.getValueFor(e),Ja.getValueFor(e),Za.getValueFor(e),Qa.getValueFor(e),Xa.getValueFor(e))}),Kv=d1("neutral-layer-3").withDefault(e=>vV.getValueFor(e).evaluate(e)),gV=K1("neutral-layer-4-recipe").withDefault({evaluate:e=>function RA(e,a,t,n,v,A){return e.get(jv(e,a,t,n,v,A)+2*t)}(l7.getValueFor(e),Ya.getValueFor(e),Ja.getValueFor(e),Za.getValueFor(e),Qa.getValueFor(e),Xa.getValueFor(e))}),J2=(d1("neutral-layer-4").withDefault(e=>gV.getValueFor(e).evaluate(e)),d1("fill-color").withDefault(e=>rV.getValueFor(e)));var g6=(()=>{return(e=g6||(g6={}))[e.normal=4.5]="normal",e[e.large=7]="large",g6;var e})();const An=d1({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,a)=>function _A(e,a,t,n,v,A,S,N,o0){const g0=e.source,j0=a.closestIndexOf(t)>=Math.max(S,N,o0)?-1:1,M1=e.closestIndexOf(g0),O1=M1+-1*j0*n,q1=O1+j0*v,M5=O1+j0*A;return{rest:e.get(O1),hover:e.get(M1),active:e.get(q1),focus:e.get(M5)}}(Wv.getValueFor(e),l7.getValueFor(e),a||J2.getValueFor(e),pz.getValueFor(e),uz.getValueFor(e),mz.getValueFor(e),Za.getValueFor(e),Qa.getValueFor(e),Xa.getValueFor(e))}),E7=d1("accent-fill-rest").withDefault(e=>An.getValueFor(e).evaluate(e).rest),k4=d1("accent-fill-hover").withDefault(e=>An.getValueFor(e).evaluate(e).hover),qa=d1("accent-fill-active").withDefault(e=>An.getValueFor(e).evaluate(e).active),ls=d1("accent-fill-focus").withDefault(e=>An.getValueFor(e).evaluate(e).focus),Nz=e=>(a,t)=>function AA(e,a){return e.contrast(dz)>=a?dz:MA}(t||E7.getValueFor(a),e),Vn=K1("foreground-on-accent-recipe").withDefault({evaluate:(e,a)=>Nz(g6.normal)(e,a)}),Cn=d1("foreground-on-accent-rest").withDefault(e=>Vn.getValueFor(e).evaluate(e,E7.getValueFor(e))),Yv=d1("foreground-on-accent-hover").withDefault(e=>Vn.getValueFor(e).evaluate(e,k4.getValueFor(e))),Fz=d1("foreground-on-accent-active").withDefault(e=>Vn.getValueFor(e).evaluate(e,qa.getValueFor(e))),Zv=d1("foreground-on-accent-focus").withDefault(e=>Vn.getValueFor(e).evaluate(e,ls.getValueFor(e))),bn=K1("foreground-on-accent-large-recipe").withDefault({evaluate:(e,a)=>Nz(g6.large)(e,a)}),dV=(d1("foreground-on-accent-rest-large").withDefault(e=>bn.getValueFor(e).evaluate(e,E7.getValueFor(e))),d1("foreground-on-accent-hover-large").withDefault(e=>bn.getValueFor(e).evaluate(e,k4.getValueFor(e))),d1("foreground-on-accent-active-large").withDefault(e=>bn.getValueFor(e).evaluate(e,qa.getValueFor(e))),d1("foreground-on-accent-focus-large").withDefault(e=>bn.getValueFor(e).evaluate(e,ls.getValueFor(e))),e=>(a,t)=>function fA(e,a,t,n,v,A,S){const o0=e.closestIndexOf(e.source),g0=Ka(a),A0=o0+(1===g0?Math.min(n,v):Math.max(g0*n,g0*v)),E0=e.colorContrast(a,t,A0,g0),j0=e.closestIndexOf(E0),s1=j0+g0*Math.abs(n-v);let O1,q1;return(1===g0?n<v:g0*n>g0*v)?(O1=j0,q1=s1):(O1=s1,q1=j0),{rest:e.get(O1),hover:e.get(q1),active:e.get(O1+g0*A),focus:e.get(O1+g0*S)}}(Wv.getValueFor(a),t||J2.getValueFor(a),e,zz.getValueFor(a),_z.getValueFor(a),fz.getValueFor(a),Mz.getValueFor(a))),yn=d1({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,a)=>dV(g6.normal)(e,a)}),_3=d1("accent-foreground-rest").withDefault(e=>yn.getValueFor(e).evaluate(e).rest),Ln=d1("accent-foreground-hover").withDefault(e=>yn.getValueFor(e).evaluate(e).hover),Bn=d1("accent-foreground-active").withDefault(e=>yn.getValueFor(e).evaluate(e).active),En=(d1("accent-foreground-focus").withDefault(e=>yn.getValueFor(e).evaluate(e).focus),d1({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,a)=>function VA(e,a,t,n,v,A){const S=e.closestIndexOf(a),o0=S>=Math.max(t,n,v,A)?-1:1;return{rest:e.get(S+o0*t),hover:e.get(S+o0*n),active:e.get(S+o0*v),focus:e.get(S+o0*A)}}(l7.getValueFor(e),a||J2.getValueFor(e),Za.getValueFor(e),Qa.getValueFor(e),Xa.getValueFor(e),Gv.getValueFor(e))})),t4=d1("neutral-fill-rest").withDefault(e=>En.getValueFor(e).evaluate(e).rest),rs=d1("neutral-fill-hover").withDefault(e=>En.getValueFor(e).evaluate(e).hover),jz=d1("neutral-fill-active").withDefault(e=>En.getValueFor(e).evaluate(e).active),Tn=(d1("neutral-fill-focus").withDefault(e=>En.getValueFor(e).evaluate(e).focus),d1({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,a)=>function CA(e,a,t,n,v,A){const S=Ka(a),N=e.closestIndexOf(a);return{rest:e.get(N-S*t),hover:e.get(N-S*n),active:e.get(N-S*v),focus:e.get(N-S*A)}}(l7.getValueFor(e),a||J2.getValueFor(e),xz.getValueFor(e),Hz.getValueFor(e),Az.getValueFor(e),Vz.getValueFor(e))})),$z=d1("neutral-fill-input-rest").withDefault(e=>Tn.getValueFor(e).evaluate(e).rest),Qv=d1("neutral-fill-input-hover").withDefault(e=>Tn.getValueFor(e).evaluate(e).hover),wV=d1("neutral-fill-input-active").withDefault(e=>Tn.getValueFor(e).evaluate(e).active),Sn=(d1("neutral-fill-input-focus").withDefault(e=>Tn.getValueFor(e).evaluate(e).focus),d1({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,a)=>function yA(e,a,t,n,v,A,S,N,o0,g0){const A0=Math.max(t,n,v,A,S,N,o0,g0),E0=e.closestIndexOf(a),j0=E0>=A0?-1:1;return{rest:e.get(E0+j0*t),hover:e.get(E0+j0*n),active:e.get(E0+j0*v),focus:e.get(E0+j0*A)}}(l7.getValueFor(e),a||J2.getValueFor(e),Cz.getValueFor(e),bz.getValueFor(e),yz.getValueFor(e),Lz.getValueFor(e),Za.getValueFor(e),Qa.getValueFor(e),Xa.getValueFor(e),Gv.getValueFor(e))})),os=d1("neutral-fill-stealth-rest").withDefault(e=>Sn.getValueFor(e).evaluate(e).rest),pV=d1("neutral-fill-stealth-hover").withDefault(e=>Sn.getValueFor(e).evaluate(e).hover),uV=d1("neutral-fill-stealth-active").withDefault(e=>Sn.getValueFor(e).evaluate(e).active),On=(d1("neutral-fill-stealth-focus").withDefault(e=>Sn.getValueFor(e).evaluate(e).focus),d1({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,a)=>function LA(e,a,t,n,v,A){const S=Ka(a),N=e.closestIndexOf(e.colorContrast(a,4.5)),o0=N+S*Math.abs(t-n);let A0,E0;return(1===S?t<n:S*t>S*n)?(A0=N,E0=o0):(A0=o0,E0=N),{rest:e.get(A0),hover:e.get(E0),active:e.get(A0+S*v),focus:e.get(A0+S*A)}}(l7.getValueFor(e),a||J2.getValueFor(e),sV.getValueFor(e),Bz.getValueFor(e),Ez.getValueFor(e),Tz.getValueFor(e))})),Uz=(d1("neutral-fill-strong-rest").withDefault(e=>On.getValueFor(e).evaluate(e).rest),d1("neutral-fill-strong-hover").withDefault(e=>On.getValueFor(e).evaluate(e).hover),d1("neutral-fill-strong-active").withDefault(e=>On.getValueFor(e).evaluate(e).active),d1("neutral-fill-strong-focus").withDefault(e=>On.getValueFor(e).evaluate(e).focus),K1("neutral-fill-layer-recipe").withDefault({evaluate:(e,a)=>function bA(e,a,t){const n=e.closestIndexOf(a);return e.get(n-(n<t?-1*t:t))}(l7.getValueFor(e),a||J2.getValueFor(e),Ja.getValueFor(e))})),mV=(d1("neutral-fill-layer-rest").withDefault(e=>Uz.getValueFor(e).evaluate(e)),K1("focus-stroke-outer-recipe").withDefault({evaluate:e=>function BA(e,a){return e.colorContrast(a,3.5)}(l7.getValueFor(e),J2.getValueFor(e))})),O2=d1("focus-stroke-outer").withDefault(e=>mV.getValueFor(e).evaluate(e)),zV=K1("focus-stroke-inner-recipe").withDefault({evaluate:e=>function EA(e,a,t){return e.colorContrast(t,3.5,e.closestIndexOf(e.source),-1*Ka(a))}(Wv.getValueFor(e),J2.getValueFor(e),O2.getValueFor(e))}),Xv=d1("focus-stroke-inner").withDefault(e=>zV.getValueFor(e).evaluate(e)),_V=K1("neutral-foreground-hint-recipe").withDefault({evaluate:e=>function SA(e,a){return e.colorContrast(a,4.5)}(l7.getValueFor(e),J2.getValueFor(e))}),cs=d1("neutral-foreground-hint").withDefault(e=>_V.getValueFor(e).evaluate(e)),fV=K1("neutral-foreground-recipe").withDefault({evaluate:e=>function TA(e,a){return e.colorContrast(a,14)}(l7.getValueFor(e),J2.getValueFor(e))}),U5=d1("neutral-foreground-rest").withDefault(e=>fV.getValueFor(e).evaluate(e)),Dn=d1({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function NA(e,a,t,n,v,A){const S=e.closestIndexOf(a),N=Ka(a),o0=S+N*t,g0=o0+N*(n-t),A0=o0+N*(v-t),E0=o0+N*(A-t);return{rest:e.get(o0),hover:e.get(g0),active:e.get(A0),focus:e.get(E0)}}(l7.getValueFor(e),J2.getValueFor(e),Sz.getValueFor(e),Oz.getValueFor(e),Dz.getValueFor(e),Iz.getValueFor(e))}),In=d1("neutral-stroke-rest").withDefault(e=>Dn.getValueFor(e).evaluate(e).rest),MV=(d1("neutral-stroke-hover").withDefault(e=>Dn.getValueFor(e).evaluate(e).hover),d1("neutral-stroke-active").withDefault(e=>Dn.getValueFor(e).evaluate(e).active),d1("neutral-stroke-focus").withDefault(e=>Dn.getValueFor(e).evaluate(e).focus),K1("neutral-stroke-divider-recipe").withDefault({evaluate:(e,a)=>function FA(e,a,t){return e.get(e.closestIndexOf(a)+Ka(a)*t)}(l7.getValueFor(e),a||J2.getValueFor(e),Pz.getValueFor(e))})),vs=d1("neutral-stroke-divider-rest").withDefault(e=>MV.getValueFor(e).evaluate(e));function Gz(e,a){const t=[];let n="";const v=[];for(let A=0,S=e.length-1;A<S;++A){n+=e[A];let N=a[A];if(N instanceof ga){const o0=N.createBehavior();N=N.createCSS(),o0&&v.push(o0)}N instanceof Q2||N instanceof CSSStyleSheet?(""!==n.trim()&&(t.push(n),n=""),t.push(N)):n+=N}return n+=e[e.length-1],""!==n.trim()&&t.push(n),{styles:t,behaviors:v}}function b1(e,...a){const{styles:t,behaviors:n}=Gz(e,a),v=Q2.create(t);return n.length&&v.withBehaviors(...n),v}class xV extends ga{constructor(a,t){super(),this.behaviors=t,this.css="";const n=a.reduce((v,A)=>("string"==typeof A?this.css+=A:v.push(A),v),[]);n.length&&(this.styles=Q2.create(n))}createBehavior(){return this}createCSS(){return this.css}bind(a){this.styles&&a.$fastController.addStyles(this.styles),this.behaviors.length&&a.$fastController.addBehaviors(this.behaviors)}unbind(a){this.styles&&a.$fastController.removeStyles(this.styles),this.behaviors.length&&a.$fastController.removeBehaviors(this.behaviors)}}function H2(e){return`:host([hidden]){display:none}:host{display:${e}}`}class gs extends class VV{constructor(a){this.listenerCache=new WeakMap,this.query=a}bind(a){const{query:t}=this,n=this.constructListener(a);n.bind(t)(),t.addListener(n),this.listenerCache.set(a,n)}unbind(a){const t=this.listenerCache.get(a);t&&(this.query.removeListener(t),this.listenerCache.delete(a))}}{constructor(a,t){super(a),this.styles=t}static with(a){return t=>new gs(a,t)}constructListener(a){let t=!1;const n=this.styles;return function(){const{matches:A}=this;A&&!t?(a.$fastController.addStyles(n),t=A):!A&&t&&(a.$fastController.removeStyles(n),t=A)}}unbind(a){super.unbind(a),a.$fastController.removeStyles(this.styles)}}const t2=gs.with(window.matchMedia("(forced-colors)"));gs.with(window.matchMedia("(prefers-color-scheme: dark)")),gs.with(window.matchMedia("(prefers-color-scheme: light)"));var I0=(()=>{return(e=I0||(I0={})).Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText",I0;var e})();const Pn="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));",yV=class bV extends Zm{connectedCallback(){super.connectedCallback();const a=wn(this);a&&J2.setValueFor(this,t=>Uz.getValueFor(t).evaluate(t,J2.getValueFor(a)))}}.compose({baseName:"card",baseClass:Zm,template:(e,a)=>d5`
    <slot></slot>
`,styles:(e,a)=>b1`
        ${H2("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${J2};
            border-radius: calc(${j2} * 1px);
            ${Pn}
        }
    `.withBehaviors(t2(b1`
                :host {
                    forced-color-adjust: none;
                    background: ${I0.Canvas};
                    box-shadow: 0 0 0 1px ${I0.CanvasText};
                }
            `))});let kn=(()=>{class e{}return B0([N0({attribute:"aria-atomic",mode:"fromView"})],e.prototype,"ariaAtomic",void 0),B0([N0({attribute:"aria-busy",mode:"fromView"})],e.prototype,"ariaBusy",void 0),B0([N0({attribute:"aria-controls",mode:"fromView"})],e.prototype,"ariaControls",void 0),B0([N0({attribute:"aria-current",mode:"fromView"})],e.prototype,"ariaCurrent",void 0),B0([N0({attribute:"aria-describedby",mode:"fromView"})],e.prototype,"ariaDescribedby",void 0),B0([N0({attribute:"aria-details",mode:"fromView"})],e.prototype,"ariaDetails",void 0),B0([N0({attribute:"aria-disabled",mode:"fromView"})],e.prototype,"ariaDisabled",void 0),B0([N0({attribute:"aria-errormessage",mode:"fromView"})],e.prototype,"ariaErrormessage",void 0),B0([N0({attribute:"aria-flowto",mode:"fromView"})],e.prototype,"ariaFlowto",void 0),B0([N0({attribute:"aria-haspopup",mode:"fromView"})],e.prototype,"ariaHaspopup",void 0),B0([N0({attribute:"aria-hidden",mode:"fromView"})],e.prototype,"ariaHidden",void 0),B0([N0({attribute:"aria-invalid",mode:"fromView"})],e.prototype,"ariaInvalid",void 0),B0([N0({attribute:"aria-keyshortcuts",mode:"fromView"})],e.prototype,"ariaKeyshortcuts",void 0),B0([N0({attribute:"aria-label",mode:"fromView"})],e.prototype,"ariaLabel",void 0),B0([N0({attribute:"aria-labelledby",mode:"fromView"})],e.prototype,"ariaLabelledby",void 0),B0([N0({attribute:"aria-live",mode:"fromView"})],e.prototype,"ariaLive",void 0),B0([N0({attribute:"aria-owns",mode:"fromView"})],e.prototype,"ariaOwns",void 0),B0([N0({attribute:"aria-relevant",mode:"fromView"})],e.prototype,"ariaRelevant",void 0),B0([N0({attribute:"aria-roledescription",mode:"fromView"})],e.prototype,"ariaRoledescription",void 0),e})();class LV{constructor(a,t){this.target=a,this.propertyName=t}bind(a){a[this.propertyName]=this.target}unbind(){}}function q2(e){return new Xm("fast-ref",LV,e)}class te{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const R4=(e,a)=>d5`
    <span
        part="end"
        ${q2("endContainer")}
        class=${t=>a.end?"end":void 0}
    >
        <slot name="end" ${q2("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${a.end||""}
        </slot>
    </span>
`,N4=(e,a)=>d5`
    <span
        part="start"
        ${q2("startContainer")}
        class="${t=>a.start?"start":void 0}"
    >
        <slot
            name="start"
            ${q2("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${a.start||""}
        </slot>
    </span>
`;function it(e,...a){a.forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}),t.attributes&&(e.attributes=(e.attributes||[]).concat(t.attributes))})}d5`
    <span part="end" ${q2("endContainer")}>
        <slot
            name="end"
            ${q2("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,d5`
    <span part="start" ${q2("startContainer")}>
        <slot
            name="start"
            ${q2("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;const d6="ArrowDown",Jv="ArrowLeft",qv="ArrowRight",w6="ArrowUp",tg="Enter",ds="Home",ws="End",Yz="form-associated-proxy",Zz="ElementInternals",Qz=Zz in window&&"setFormValue"in window[Zz].prototype,Xz=new Map;function Rn(e){const a=class extends e{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Qz}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,n=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),v=t?n.concat(Array.from(t)):n;return Object.freeze(v)}return X7}valueChanged(t,n){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,n){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),W1.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),W1.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Qz)return null;let t=Xz.get(this);return t||(t=this.attachInternals(),Xz.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,n,v){this.elementInternals?this.elementInternals.setValidity(t,n,v):"string"==typeof n&&this.proxy.setCustomValidity(n)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(n=>this.proxy.addEventListener(n,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Yz),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Yz)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,n){this.elementInternals&&this.elementInternals.setFormValue(t,n||t)}_keypressHandler(t){if(t.key===tg&&this.form instanceof HTMLFormElement){const n=this.form.querySelector("[type=submit]");null==n||n.click()}}stopPropagation(t){t.stopPropagation()}};return N0({mode:"boolean"})(a.prototype,"disabled"),N0({mode:"fromView",attribute:"value"})(a.prototype,"initialValue"),N0({attribute:"current-value"})(a.prototype,"currentValue"),N0(a.prototype,"name"),N0({mode:"boolean"})(a.prototype,"required"),j1(a.prototype,"value"),a}class BV extends S2{}class EV extends(Rn(BV)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let eg=(()=>{class e extends EV{constructor(){super(...arguments),this.handleClick=t=>{var n;this.disabled&&(null===(n=this.defaultSlottedContent)||void 0===n?void 0:n.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,n){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===n&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===n&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const n=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);n&&n.forEach(v=>{v.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const n=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);n&&n.forEach(v=>{v.removeEventListener("click",this.handleClick)})}}return B0([N0({mode:"boolean"})],e.prototype,"autofocus",void 0),B0([N0({attribute:"form"})],e.prototype,"formId",void 0),B0([N0],e.prototype,"formaction",void 0),B0([N0],e.prototype,"formenctype",void 0),B0([N0],e.prototype,"formmethod",void 0),B0([N0({mode:"boolean"})],e.prototype,"formnovalidate",void 0),B0([N0],e.prototype,"formtarget",void 0),B0([N0],e.prototype,"type",void 0),B0([j1],e.prototype,"defaultSlottedContent",void 0),e})(),Jz=(()=>{class e{}return B0([N0({attribute:"aria-expanded",mode:"fromView"})],e.prototype,"ariaExpanded",void 0),B0([N0({attribute:"aria-pressed",mode:"fromView"})],e.prototype,"ariaPressed",void 0),e})();function qz(e){return e?function(a,t,n){return 1===a.nodeType&&a.matches(e)}:function(a,t,n){return 1===a.nodeType}}it(Jz,kn),it(eg,te,Jz);class SV extends class TV{constructor(a,t){this.target=a,this.options=t,this.source=null}bind(a){const t=this.options.property;this.shouldUpdate=a5.getAccessors(a).some(n=>n.name===t),this.source=a,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(X7),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let a=this.getNodes();return void 0!==this.options.filter&&(a=a.filter(this.options.filter)),a}updateTarget(a){this.source[this.options.property]=a}}{constructor(a,t){super(a,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function f3(e){return"string"==typeof e&&(e={property:e}),new Xm("fast-slotted",SV,e)}const a4="not-allowed";function Nn(...e){return e.every(a=>a instanceof HTMLElement)}let F4;const e5=function PV(){if("boolean"==typeof F4)return F4;if(!function DV(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}())return F4=!1,F4;const e=document.createElement("style"),a=function IV(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==a&&e.setAttribute("nonce",a),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),F4=!0}catch(t){F4=!1}finally{document.head.removeChild(e)}return F4}()?"focus-visible":"focus",r7=(function HV(e,...a){const{styles:t,behaviors:n}=Gz(e,a);return new xV(t,n)})`(${wz} + ${v6}) * ${p5}`,kV=b1`
    ${H2("inline-flex")} :host {
        font-family: ${q3};
        outline: none;
        font-size: ${m3};
        line-height: ${z3};
        height: calc(${r7} * 1px);
        min-width: calc(${r7} * 1px);
        background-color: ${t4};
        color: ${U5};
        border-radius: calc(${j2} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (${p5} * 2 * ${v6})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${j5} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-weight: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${rs};
    }

    :host(:active) {
        background-color: ${jz};
    }

    .control:${e5} {
        border-color: ${O2};
        box-shadow: 0 0 0 calc((${$5} - ${j5}) * 1px) ${O2} inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(t2(b1`
            :host .control {
              background-color: ${I0.ButtonFace};
              border-color: ${I0.ButtonText};
              color: ${I0.ButtonText};
              fill: currentColor;
            }

            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${I0.Highlight};
              color: ${I0.HighlightText};
            }

            .control:${e5} {
              forced-color-adjust: none;
              background-color: ${I0.Highlight};
              border-color: ${I0.ButtonText};
              box-shadow: 0 0 0 calc((${$5} - ${j5}) * 1px) ${I0.ButtonText} inset;
              color: ${I0.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${I0.ButtonText};
            }

            :host([href]) .control {
                border-color: ${I0.LinkText};
                color: ${I0.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${e5}{
              forced-color-adjust: none;
              background: ${I0.ButtonFace};
              border-color: ${I0.LinkText};
              box-shadow: 0 0 0 1px ${I0.LinkText} inset;
              color: ${I0.LinkText};
              fill: currentColor;
            }
        `)),RV=b1`
    :host([appearance="accent"]) {
        background: ${E7};
        color: ${Cn};
    }

    :host([appearance="accent"]:hover) {
        background: ${k4};
        color: ${Yv};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${qa};
        color: ${Fz};
    }

    :host([appearance="accent"]) .control:${e5} {
        box-shadow: 0 0 0 calc((${$5} - ${j5}) * 1px) ${O2} inset,
            0 0 0 calc((${$5} + ${j5}) * 1px) ${Xv} inset;
    }
`.withBehaviors(t2(b1`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${I0.Highlight};
                color: ${I0.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${I0.HighlightText};
                border-color: ${I0.Highlight};
                color: ${I0.Highlight};
            }

            :host([appearance="accent"]) .control:${e5} {
                border-color: ${I0.Highlight};
                box-shadow: 0 0 0 calc(${$5} * 1px) ${I0.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${I0.LinkText};
                color: ${I0.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${I0.ButtonFace};
                border-color: ${I0.LinkText};
                box-shadow: none;
                color: ${I0.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${e5} {
                border-color: ${I0.LinkText};
                box-shadow: 0 0 0 calc(${$5} * 1px) ${I0.HighlightText} inset;
            }
        `)),NV=(b1`
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${_3};
        border-bottom: calc(${j5} * 1px) solid ${_3};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${Ln};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${Bn};
    }

    :host([appearance="hypertext"]) .control:${e5} {
        border-bottom: calc(${$5} * 1px) solid ${O2};
        margin-bottom: calc(calc(${j5} - ${$5}) * 1px);
    }
`.withBehaviors(t2(b1`
            :host([appearance="hypertext"]:hover) {
                background-color: ${I0.ButtonFace};
                color: ${I0.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${e5} {
                color: ${I0.LinkText};
                border-bottom-color: ${I0.LinkText};
                box-shadow: none;
            }
        `)),b1`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${_3};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        background: transparent;
        color: ${Ln};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${Bn};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${j5} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${Ln};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${Bn};
    }

    :host([appearance="lightweight"]) .control:${e5} .content::before {
        background: ${U5};
        height: calc(${$5} * 1px);
    }
`.withBehaviors(t2(b1`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${e5} {
                forced-color-adjust: none;
                background: ${I0.ButtonFace};
                color: ${I0.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${e5} .content::before {
                background: ${I0.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${e5} {
                background: ${I0.ButtonFace};
                box-shadow: none;
                color: ${I0.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${e5} .content::before {
                background: ${I0.LinkText};
            }
        `))),FV=b1`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${E7};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${k4};
    }

    :host([appearance="outline"]:active) {
        border-color: ${qa};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${e5} {
        box-shadow: 0 0 0 calc((${$5} - ${j5}) * 1px) ${O2} inset;
        border-color: ${O2};
    }
`.withBehaviors(t2(b1`
            :host([appearance="outline"]) .control {
                border-color: ${I0.ButtonText};
            }
            :host([appearance="outline"]) .control:${e5} {
              forced-color-adjust: none;
              background-color: ${I0.Highlight};
              border-color: ${I0.ButtonText};
              box-shadow: 0 0 0 calc((${$5} - ${j5}) * 1px) ${I0.ButtonText} inset;
              color: ${I0.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${I0.ButtonFace};
                border-color: ${I0.LinkText};
                color: ${I0.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${e5} {
              forced-color-adjust: none;
              border-color: ${I0.LinkText};
              box-shadow: 0 0 0 1px ${I0.LinkText} inset;
            }
        `)),jV=b1`
    :host([appearance="stealth"]) {
        background: ${os};
    }

    :host([appearance="stealth"]:hover) {
        background: ${pV};
    }

    :host([appearance="stealth"]:active) {
        background: ${uV};
    }
`.withBehaviors(t2(b1`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${I0.ButtonFace};
                border-color: transparent;
                color: ${I0.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${I0.Highlight};
                border-color: ${I0.Highlight};
                color: ${I0.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${e5}) .control {
                background: ${I0.Highlight};
                box-shadow: 0 0 0 1px ${I0.Highlight};
                color: ${I0.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${I0.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${e5}) .control {
                background: ${I0.LinkText};
                border-color: ${I0.LinkText};
                color: ${I0.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${e5}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${I0.LinkText};
            }
        `));class $V{constructor(a,t,n){this.propertyName=a,this.value=t,this.styles=n}bind(a){a5.getNotifier(a).subscribe(this,this.propertyName),this.handleChange(a,this.propertyName)}unbind(a){a5.getNotifier(a).unsubscribe(this,this.propertyName),a.$fastController.removeStyles(this.styles)}handleChange(a,t){a[t]===this.value?a.$fastController.addStyles(this.styles):a.$fastController.removeStyles(this.styles)}}function Fn(e,a){return new $V("appearance",e,a)}const GV=(()=>{class e extends eg{constructor(){super(...arguments),this.appearance="neutral"}defaultSlottedContentChanged(t,n){const v=this.defaultSlottedContent.filter(A=>A.nodeType===Node.ELEMENT_NODE);1===v.length&&v[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}return B0([N0],e.prototype,"appearance",void 0),e})().compose({baseName:"button",baseClass:eg,template:(e,a)=>d5`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${q2("control")}
    >
        ${N4(0,a)}
        <span class="content" part="content">
            <slot ${f3("defaultSlottedContent")}></slot>
        </span>
        ${R4(0,a)}
    </button>
`,styles:(e,a)=>b1`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${P4};
            background-color: ${t4};
            cursor: ${a4};
        }

        ${kV}
    `.withBehaviors(t2(b1`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${I0.ButtonFace};
                    border-color: ${I0.GrayText};
                    color: ${I0.GrayText};
                    cursor: ${a4};
                    opacity: 1;
                }
            `),Fn("accent",b1`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${E7};
                }

                ${RV}
            `.withBehaviors(t2(b1`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${I0.ButtonFace};
                            border-color: ${I0.GrayText};
                            color: ${I0.GrayText};
                        }
                    `))),Fn("lightweight",b1`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${_3};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${NV}
            `.withBehaviors(t2(b1`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${I0.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),Fn("outline",b1`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${E7};
                }

                ${FV}
            `.withBehaviors(t2(b1`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${I0.GrayText};
                        }
                    `))),Fn("stealth",b1`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${os};
                }

                ${jV}
            `.withBehaviors(t2(b1`
                        :host([appearance="stealth"][disabled]) {
                            background: ${I0.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${I0.ButtonFace};
                            border-color: transparent;
                            color: ${I0.GrayText};
                        }
                    `)))),shadowOptions:{delegatesFocus:!0}});class WV extends S2{}class KV extends(Rn(WV)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var jn=(()=>{return(e=jn||(jn={})).email="email",e.password="password",e.tel="tel",e.text="text",e.url="url",jn;var e})();let hg=(()=>{class e extends KV{constructor(){super(...arguments),this.type=jn.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&W1.queueUpdate(()=>{this.focus()})}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}return B0([N0({attribute:"readonly",mode:"boolean"})],e.prototype,"readOnly",void 0),B0([N0({mode:"boolean"})],e.prototype,"autofocus",void 0),B0([N0],e.prototype,"placeholder",void 0),B0([N0],e.prototype,"type",void 0),B0([N0],e.prototype,"list",void 0),B0([N0({converter:l1})],e.prototype,"maxlength",void 0),B0([N0({converter:l1})],e.prototype,"minlength",void 0),B0([N0],e.prototype,"pattern",void 0),B0([N0({converter:l1})],e.prototype,"size",void 0),B0([N0({mode:"boolean"})],e.prototype,"spellcheck",void 0),B0([j1],e.prototype,"defaultSlottedNodes",void 0),e})();class t_{}function YV(e,a,t){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}it(t_,kn),it(hg,te,t_);const XV=(()=>{class e extends hg{constructor(){super(...arguments),this.appearance="outline"}}return B0([N0],e.prototype,"appearance",void 0),e})().compose({baseName:"text-field",baseClass:hg,template:(e,a)=>d5`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${f3({property:"defaultSlottedNodes",filter:YV})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${N4(0,a)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${q2("control")}
            />
            ${R4(0,a)}
        </div>
    </template>
`,styles:(e,a)=>b1`
    ${H2("inline-block")} :host {
        font-family: ${q3};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${U5};
        background: ${$z};
        border-radius: calc(${j2} * 1px);
        border: calc(${j5} * 1px) solid ${E7};
        height: calc(${r7} * 1px);
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        border: 0;
        color: inherit;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(${p5} * 2px + 1px);
        font-size: ${m3};
        line-height: ${z3};
    }

    .control:hover,
    .control:${e5},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${U5};
        cursor: pointer;
        font-size: ${m3};
        line-height: ${z3};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .start,
    .end {
        display: flex;
        margin: auto;
        fill: currentcolor;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not([disabled])) .root {
        background: ${Qv};
        border-color: ${k4};
    }

    :host(:active:not([disabled])) .root {
        background: ${Qv};
        border-color: ${qa};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${O2};
        box-shadow: 0 0 0 calc(${$5} * 1px) ${O2} inset;
    }

    :host([appearance="filled"]) .root {
        background: ${t4};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${rs};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${a4};
    }

    :host([disabled]) {
        opacity: ${P4};
    }

    :host([disabled]) .control {
        border-color: ${In};
    }
`.withBehaviors(t2(b1`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${I0.Field};
                    border-color: ${I0.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${I0.Field};
                    border-color: ${I0.Highlight};
                }
                .start,
                .end {
                    fill: currentcolor;
                }
                :host([disabled]) {
                    opacity: 1;
                }
                :host([disabled]) .root,
                :host([appearance="filled"]:hover[disabled]) .root {
                    border-color: ${I0.GrayText};
                    background: ${I0.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${I0.Highlight};
                    box-shadow: 0 0 0 1px ${I0.Highlight} inset;
                }
                input::placeholder {
                    color: ${I0.GrayText};
                }
            `)),shadowOptions:{delegatesFocus:!0}}),sg=e=>{const a=e.closest("[dir]");return null!==a&&"rtl"===a.dir?Q3.rtl:Q3.ltr};var t7=(()=>{return(e=t7||(t7={})).menuitem="menuitem",e.menuitemcheckbox="menuitemcheckbox",e.menuitemradio="menuitemradio",t7;var e})();const JV={[t7.menuitem]:"menuitem",[t7.menuitemcheckbox]:"menuitemcheckbox",[t7.menuitemradio]:"menuitemradio"};let $n=(()=>{class e extends S2{constructor(){super(...arguments),this.role=t7.menuitem,this.hasSubmenu=!1,this.currentDirection=Q3.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case tg:case" ":return this.invoke(),!1;case qv:return this.expandAndFocus(),!1;case Jv:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{!this.focusSubmenuOnLoad||(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{!this.hasSubmenu||(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case t7.menuitemcheckbox:this.checked=!this.checked;break;case t7.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case t7.menuitemradio:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>"menu"===t.getAttribute("role")),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(t){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=sg(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,n){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),W1.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children)}}return B0([N0({mode:"boolean"})],e.prototype,"disabled",void 0),B0([N0({mode:"boolean"})],e.prototype,"expanded",void 0),B0([j1],e.prototype,"startColumnCount",void 0),B0([N0],e.prototype,"role",void 0),B0([N0({mode:"boolean"})],e.prototype,"checked",void 0),B0([j1],e.prototype,"submenuRegion",void 0),B0([j1],e.prototype,"hasSubmenu",void 0),B0([j1],e.prototype,"currentDirection",void 0),B0([j1],e.prototype,"submenu",void 0),e})();it($n,te);const eC=(()=>{class e extends S2{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&Nn(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const n=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[n].setAttribute("tabindex","0"),this.focusIndex=n}},this.handleItemFocus=t=>{const n=t.target;void 0!==this.menuItems&&n!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(n),n.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||null===t.target||void 0===this.menuItems||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const n=t.target;null===this.expandedItem||n!==this.expandedItem||!1!==n.expanded?n.expanded&&(null!==this.expandedItem&&this.expandedItem!==n&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=n,this.focusIndex=this.menuItems.indexOf(n),n.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const n=this.menuItems.filter(this.isMenuItemElement);n.length&&(this.focusIndex=0);const A=n.reduce((S,N)=>{const o0=function v(S){return!(S instanceof $n)||S.role!==t7.menuitem&&null===S.querySelector("[slot=start]")||S.role===t7.menuitem&&null!==S.querySelector("[slot=start]")?1:S.role!==t7.menuitem&&null!==S.querySelector("[slot=start]")?2:0}(N);return S>o0?S:o0},0);n.forEach((S,N)=>{S.setAttribute("tabindex",0===N?"0":"-1"),S.addEventListener("expanded-change",this.handleExpandedChanged),S.addEventListener("focus",this.handleItemFocus),S instanceof $n&&(S.startColumnCount=A)})},this.changeHandler=t=>{if(void 0===this.menuItems)return;const n=t.target,v=this.menuItems.indexOf(n);if(-1!==v&&"menuitemradio"===n.role&&!0===n.checked){for(let S=v-1;S>=0;--S){const N=this.menuItems[S],o0=N.getAttribute("role");if(o0===t7.menuitemradio&&(N.checked=!1),"separator"===o0)break}const A=this.menuItems.length-1;for(let S=v+1;S<=A;++S){const N=this.menuItems[S],o0=N.getAttribute("role");if(o0===t7.menuitemradio&&(N.checked=!1),"separator"===o0)break}}},this.isMenuItemElement=t=>Nn(t)&&e.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,n){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),W1.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented&&void 0!==this.menuItems)switch(t.key){case d6:return void this.setFocus(this.focusIndex+1,1);case w6:return void this.setFocus(this.focusIndex-1,-1);case ws:return void this.setFocus(this.menuItems.length-1,-1);case ds:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children)}setFocus(t,n){if(void 0!==this.menuItems)for(;t>=0&&t<this.menuItems.length;){const v=this.menuItems[t];if(this.isFocusableElement(v)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,v.setAttribute("tabindex","0"),v.focus();break}t+=n}}}return e.focusableElementRoles=JV,B0([j1],e.prototype,"items",void 0),e})().compose({baseName:"menu",template:(e,a)=>d5`
    <template
        slot="${t=>t.slot?t.slot:t.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(t,n)=>t.handleMenuKeyDown(n.event)}"
        @focusout="${(t,n)=>t.handleFocusOut(n.event)}"
    >
        <slot ${f3("items")}></slot>
    </template>
`,styles:(e,a)=>b1`
        ${H2("block")} :host {
            --elevation: 11;
            background: ${Hn};
            border: calc(${j5} * 1px) solid transparent;
            ${Pn}
            margin: 0;
            border-radius: calc(${j2} * 1px);
            padding: calc(${p5} * 1px) 0;
            max-width: 368px;
            min-width: 64px;
        }

        :host([slot="submenu"]) {
            width: max-content;
            margin: 0 calc(${p5} * 1px);
        }

        ::slotted(hr) {
            box-sizing: content-box;
            height: 0;
            margin: 0;
            border: none;
            border-top: calc(${j5} * 1px) solid ${vs};
        }
    `.withBehaviors(t2(b1`
                :host {
                    background: ${I0.Canvas};
                    border-color: ${I0.CanvasText};
                }
            `))});function $t(e,a){const t="function"==typeof a?a:()=>a;return(n,v)=>e(n,v)?t(n,v):null}class S5 extends S2{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Q3.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(S5.intersectionService.requestPosition(this,this.handleIntersection),S5.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&S5.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,S5.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&S5.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&S5.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=a=>{!this.pendingPositioningUpdate||(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(a)&&this.updateLayout())},this.applyIntersectionEntries=a=>{const t=a.find(A=>A.target===this),n=a.find(A=>A.target===this.anchorElement),v=a.find(A=>A.target===this.viewportElement);return void 0!==t&&void 0!==v&&void 0!==n&&!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,n.boundingClientRect)||this.isRectDifferent(this.viewportRect,v.boundingClientRect)||this.isRectDifferent(this.regionRect,t.boundingClientRect))&&(this.regionRect=t.boundingClientRect,this.anchorRect=n.boundingClientRect,this.viewportRect=this.viewportElement===document.documentElement?new DOMRectReadOnly(v.boundingClientRect.x+document.documentElement.scrollLeft,v.boundingClientRect.y+document.documentElement.scrollTop,v.boundingClientRect.width,v.boundingClientRect.height):v.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0)},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(a,t)=>Math.abs(a.top-t.top)>this.updateThreshold||Math.abs(a.right-t.right)>this.updateThreshold||Math.abs(a.bottom-t.bottom)>this.updateThreshold||Math.abs(a.left-t.left)>this.updateThreshold,this.handleResize=a=>{this.update()},this.reset=()=>{!this.pendingReset||(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=sg(this),this.startObservers())},this.updateLayout=()=>{let a,t;if("uncontrolled"!==this.horizontalPositioningMode){const A=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)t="center";else if("unset"!==this.horizontalDefaultPosition){let j0=this.horizontalDefaultPosition;if("start"===j0||"end"===j0){const s1=sg(this);if(s1!==this.currentDirection)return this.currentDirection=s1,void this.initialize();j0=this.currentDirection===Q3.ltr?"start"===j0?"left":"right":"start"===j0?"right":"left"}switch(j0){case"left":t=this.horizontalInset?"insetStart":"start";break;case"right":t=this.horizontalInset?"insetEnd":"end"}}const S=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,N=void 0!==this.anchorRect?this.anchorRect.left:0,o0=void 0!==this.anchorRect?this.anchorRect.right:0,g0=void 0!==this.anchorRect?this.anchorRect.width:0,A0=void 0!==this.viewportRect?this.viewportRect.left:0,E0=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===t||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(t,N,o0,g0,A0,E0)<S)&&(t=this.getAvailableSpace(A[0],N,o0,g0,A0,E0)>this.getAvailableSpace(A[1],N,o0,g0,A0,E0)?A[0]:A[1])}if("uncontrolled"!==this.verticalPositioningMode){const A=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)a="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":a=this.verticalInset?"insetStart":"start";break;case"bottom":a=this.verticalInset?"insetEnd":"end"}const S=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,N=void 0!==this.anchorRect?this.anchorRect.top:0,o0=void 0!==this.anchorRect?this.anchorRect.bottom:0,g0=void 0!==this.anchorRect?this.anchorRect.height:0,A0=void 0!==this.viewportRect?this.viewportRect.top:0,E0=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===a||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(a,N,o0,g0,A0,E0)<S)&&(a=this.getAvailableSpace(A[0],N,o0,g0,A0,E0)>this.getAvailableSpace(A[1],N,o0,g0,A0,E0)?A[0]:A[1])}const n=this.getNextRegionDimension(t,a),v=this.horizontalPosition!==t||this.verticalPosition!==a;if(this.setHorizontalPosition(t,n),this.setVerticalPosition(a,n),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),v&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(a,t)=>{if(void 0===a||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.horizontalScaling){case"anchor":case"fill":n=t.width,this.regionWidth=`${n}px`;break;case"content":n=this.regionRect.width,this.regionWidth="unset"}let v=0;switch(a){case"start":this.translateX=this.baseHorizontalOffset-n,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-n+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(v=(this.anchorRect.width-n)/2,this.translateX=this.baseHorizontalOffset+v,this.horizontalViewportLock){const A=this.anchorRect.left+v,S=this.anchorRect.right-v;A<this.viewportRect.left&&!(S>this.viewportRect.right)?this.translateX=this.translateX-(A-this.viewportRect.left):S>this.viewportRect.right&&!(A<this.viewportRect.left)&&(this.translateX=this.translateX-(S-this.viewportRect.right))}}this.horizontalPosition=a},this.setVerticalPosition=(a,t)=>{if(void 0===a||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.verticalScaling){case"anchor":case"fill":n=t.height,this.regionHeight=`${n}px`;break;case"content":n=this.regionRect.height,this.regionHeight="unset"}let v=0;switch(a){case"start":this.translateY=this.baseVerticalOffset-n,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-n+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(v=(this.anchorRect.height-n)/2,this.translateY=this.baseVerticalOffset+v,this.verticalViewportLock){const A=this.anchorRect.top+v,S=this.anchorRect.bottom-v;A<this.viewportRect.top&&!(S>this.viewportRect.bottom)?this.translateY=this.translateY-(A-this.viewportRect.top):S>this.viewportRect.bottom&&!(A<this.viewportRect.top)&&(this.translateY=this.translateY-(S-this.viewportRect.bottom))}}this.verticalPosition=a},this.getPositioningOptions=a=>a?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(a,t,n,v,A,S)=>{const N=t-A,o0=S-(t+v);switch(a){case"start":return N;case"insetStart":return N+v;case"insetEnd":return o0+v;case"end":return o0;case"center":return 2*Math.min(N,o0)+v}},this.getNextRegionDimension=(a,t)=>{const n={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==a&&"fill"===this.horizontalScaling?n.width=this.getAvailableSpace(a,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(n.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==t&&"fill"===this.verticalScaling?n.height=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(n.height=void 0!==this.anchorRect?this.anchorRect.height:0),n},this.startAutoUpdateEventListeners=()=>{window.addEventListener("resize",this.update,{passive:!0}),window.addEventListener("scroll",this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(a,t){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===a&&this.stopAutoUpdateEventListeners(),"auto"===t&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),W1.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}S5.intersectionService=new class hC{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(a,t)=>{var n;if(null!==this.intersectionDetector){if(this.observedElements.has(a))return void(null===(n=this.observedElements.get(a))||void 0===n||n.push(t));this.observedElements.set(a,[t]),this.intersectionDetector.observe(a)}},this.cancelRequestPosition=(a,t)=>{const n=this.observedElements.get(a);if(void 0!==n){const v=n.indexOf(t);-1!==v&&n.splice(v,1)}},this.initializeIntersectionDetector=()=>{!da.IntersectionObserver||(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=a=>{if(null===this.intersectionDetector)return;const t=[],n=[];a.forEach(v=>{var A;null===(A=this.intersectionDetector)||void 0===A||A.unobserve(v.target);const S=this.observedElements.get(v.target);void 0!==S&&(S.forEach(N=>{let o0=t.indexOf(N);-1===o0&&(o0=t.length,t.push(N),n.push([])),n[o0].push(v)}),this.observedElements.delete(v.target))}),t.forEach((v,A)=>{v(n[A])})},this.initializeIntersectionDetector()}},B0([N0],S5.prototype,"anchor",void 0),B0([N0],S5.prototype,"viewport",void 0),B0([N0({attribute:"horizontal-positioning-mode"})],S5.prototype,"horizontalPositioningMode",void 0),B0([N0({attribute:"horizontal-default-position"})],S5.prototype,"horizontalDefaultPosition",void 0),B0([N0({attribute:"horizontal-viewport-lock",mode:"boolean"})],S5.prototype,"horizontalViewportLock",void 0),B0([N0({attribute:"horizontal-inset",mode:"boolean"})],S5.prototype,"horizontalInset",void 0),B0([N0({attribute:"horizontal-threshold"})],S5.prototype,"horizontalThreshold",void 0),B0([N0({attribute:"horizontal-scaling"})],S5.prototype,"horizontalScaling",void 0),B0([N0({attribute:"vertical-positioning-mode"})],S5.prototype,"verticalPositioningMode",void 0),B0([N0({attribute:"vertical-default-position"})],S5.prototype,"verticalDefaultPosition",void 0),B0([N0({attribute:"vertical-viewport-lock",mode:"boolean"})],S5.prototype,"verticalViewportLock",void 0),B0([N0({attribute:"vertical-inset",mode:"boolean"})],S5.prototype,"verticalInset",void 0),B0([N0({attribute:"vertical-threshold"})],S5.prototype,"verticalThreshold",void 0),B0([N0({attribute:"vertical-scaling"})],S5.prototype,"verticalScaling",void 0),B0([N0({attribute:"fixed-placement",mode:"boolean"})],S5.prototype,"fixedPlacement",void 0),B0([N0({attribute:"auto-update-mode"})],S5.prototype,"autoUpdateMode",void 0),B0([j1],S5.prototype,"anchorElement",void 0),B0([j1],S5.prototype,"viewportElement",void 0),B0([j1],S5.prototype,"initialLayoutComplete",void 0);class h_{constructor(a,t){this.cache=new WeakMap,this.ltr=a,this.rtl=t}bind(a){this.attach(a)}unbind(a){const t=this.cache.get(a);t&&xn.unsubscribe(t)}attach(a){const t=this.cache.get(a)||new iC(this.ltr,this.rtl,a),n=xn.getValueFor(a);xn.subscribe(t),t.attach(n),this.cache.set(a,t)}}class iC{constructor(a,t,n){this.ltr=a,this.rtl=t,this.source=n,this.attached=null}handleChange({target:a,token:t}){this.attach(t.getValueFor(a))}attach(a){this.attached!==this[a]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[a],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const lC=$n.compose({baseName:"menu-item",template:(e,a)=>d5`
    <template
        role="${t=>t.role}"
        aria-haspopup="${t=>t.hasSubmenu?"menu":void 0}"
        aria-checked="${t=>t.role!==t7.menuitem?t.checked:void 0}"
        aria-disabled="${t=>t.disabled}"
        aria-expanded="${t=>t.expanded}"
        @keydown="${(t,n)=>t.handleMenuItemKeyDown(n.event)}"
        @click="${(t,n)=>t.handleMenuItemClick(n.event)}"
        @mouseover="${(t,n)=>t.handleMouseOver(n.event)}"
        @mouseout="${(t,n)=>t.handleMouseOut(n.event)}"
        class="${t=>t.disabled?"disabled":""} ${t=>t.expanded?"expanded":""} ${t=>`indent-${t.startColumnCount}`}"
    >
            ${$t(t=>t.role===t7.menuitemcheckbox,d5`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${a.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${$t(t=>t.role===t7.menuitemradio,d5`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${a.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${N4(0,a)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${R4(0,a)}
        ${$t(t=>t.hasSubmenu,d5`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${a.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${$t(t=>t.expanded,d5`
                <${e.tagFor(S5)}
                    :anchorElement="${t=>t}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${t=>t.currentDirection}"
                    @loaded="${t=>t.submenuLoaded()}"
                    ${q2("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${e.tagFor(S5)}>
            `)}
    </template>
`,styles:(e,a)=>b1`
    ${H2("grid")} :host {
        contain: layout;
        overflow: visible;
        font-family: ${q3};
        outline: none;
        box-sizing: border-box;
        height: calc(${r7} * 1px);
        grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        padding: 0;
        margin: 0 calc(${p5} * 1px);
        white-space: nowrap;
        color: ${U5};
        fill: currentcolor;
        cursor: pointer;
        font-size: ${m3};
        line-height: ${z3};
        border-radius: calc(${j2} * 1px);
        border: calc(${$5} * 1px) solid transparent;
    }

    :host(:hover) {
        position: relative;
        z-index: 1;
    }

    :host(.indent-0) {
        grid-template-columns: auto 1fr minmax(42px, auto);
    }
    :host(.indent-0) .content {
        grid-column: 1;
        grid-row: 1;
        margin-inline-start: 10px;
    }
    :host(.indent-0) .expand-collapse-glyph-container {
        grid-column: 5;
        grid-row: 1;
    }
    :host(.indent-2) {
        grid-template-columns: minmax(42px, auto) minmax(42px, auto) 1fr minmax(42px, auto) minmax(42px, auto);
    }
    :host(.indent-2) .content {
        grid-column: 3;
        grid-row: 1;
        margin-inline-start: 10px;
    }
    :host(.indent-2) .expand-collapse-glyph-container {
        grid-column: 5;
        grid-row: 1;
    }
    :host(.indent-2) .start {
        grid-column: 2;
    }
    :host(.indent-2) .end {
        grid-column: 4;
    }

    :host(:${e5}) {
        border-color: ${O2};
        background: ${Kv};
        color: ${U5};
    }

    :host(:hover) {
        background: ${Kv};
        color: ${U5};
    }

    :host([aria-checked="true"]),
    :host(:active),
    :host(.expanded) {
        background: ${cV};
        color: ${U5};
    }

    :host([disabled]) {
        cursor: ${a4};
        opacity: ${P4};
    }

    :host([disabled]:hover) {
        color: ${U5};
        fill: currentcolor;
        background: ${os};
    }

    :host([disabled]:hover) .start,
    :host([disabled]:hover) .end,
    :host([disabled]:hover)::slotted(svg) {
        fill: ${U5};
    }

    .expand-collapse-glyph {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
        fill: currentcolor;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end {
        display: flex;
        justify-content: center;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    :host(:hover) .start,
    :host(:hover) .end,
    :host(:hover)::slotted(svg),
    :host(:active) .start,
    :host(:active) .end,
    :host(:active)::slotted(svg) {
        fill: ${U5};
    }

    :host(.indent-0[aria-haspopup="menu"]) {
        display: grid;
        grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(42px, auto);
        align-items: center;
        min-height: 32px;
    }

    :host(.indent-1[aria-haspopup="menu"]),
    :host(.indent-1[role="menuitemcheckbox"]),
    :host(.indent-1[role="menuitemradio"]) {
        display: grid;
        grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(42px, auto);
        align-items: center;
        min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup="menu"])) .end {
        grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
        display: none;
    }

    :host([aria-haspopup="menu"]) .expand-collapse-glyph-container,
    :host([role="menuitemcheckbox"]) .input-container,
    :host([role="menuitemradio"]) .input-container {
        display: grid;
        margin-inline-end: 10px;
    }

    :host([aria-haspopup="menu"]) .content,
    :host([role="menuitemcheckbox"]) .content,
    :host([role="menuitemradio"]) .content {
        grid-column-start: 3;
    }

    :host([aria-haspopup="menu"].indent-0) .content {
        grid-column-start: 1;
    }

    :host([aria-haspopup="menu"]) .end,
    :host([role="menuitemcheckbox"]) .end,
    :host([role="menuitemradio"]) .end {
        grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        outline: none;
        margin-inline-start: 10px;
    }

    :host .checkbox,
    :host .radio {
        border: calc(${j5} * 1px) solid ${U5};
    }

    :host([aria-checked="true"]) .checkbox,
    :host([aria-checked="true"]) .radio {
        background: ${E7};
        border-color: ${E7};
    }

    :host .checkbox {
        border-radius: calc(${j2} * 1px);
    }

    :host .radio {
        border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    :host .expand-collapse-indicator,
    ::slotted([slot="checkbox-indicator"]),
    ::slotted([slot="radio-indicator"]),
    ::slotted([slot="expand-collapse-indicator"]) {
        display: none;
    }

    ::slotted([slot="end"]:not(svg)) {
        margin-inline-end: 10px;
        color: ${cs}
    }

    :host([aria-checked="true"]) .checkbox-indicator,
    :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]) {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${Cn};
        pointer-events: none;
    }

    :host([aria-checked="true"]) .radio-indicator {
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        border-radius: 999px;
        display: block;
        background: ${Cn};
        pointer-events: none;
    }

    :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
        display: block;
        pointer-events: none;
    }
`.withBehaviors(t2(b1`
            :host {
                border-color: transparent;
                color: ${I0.ButtonText};
                forced-color-adjust: none;
            }

            :host(:hover) {
                background: ${I0.Highlight};
                color: ${I0.HighlightText};
            }

            :host(:hover) .start,
            :host(:hover) .end,
            :host(:hover)::slotted(svg),
            :host(:active) .start,
            :host(:active) .end,
            :host(:active)::slotted(svg) {
                fill: ${I0.HighlightText};
            }

            :host(.expanded) {
                background: ${I0.Highlight};
                border-color: ${I0.Highlight};
                color: ${I0.HighlightText};
            }

            :host(:${e5}) {
                background: ${I0.Highlight};
                border-color: ${I0.ButtonText};
                box-shadow: 0 0 0 calc(${$5} * 1px) inset ${I0.HighlightText};
                color: ${I0.HighlightText};
                fill: currentcolor;
            }

            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:hover) .start,
            :host([disabled]:hover) .end,
            :host([disabled]:hover)::slotted(svg) {
                background: ${I0.Canvas};
                color: ${I0.GrayText};
                fill: currentcolor;
                opacity: 1;
            }

            :host .expanded-toggle,
            :host .checkbox,
            :host .radio{
                border-color: ${I0.ButtonText};
                background: ${I0.HighlightText};
            }

            :host([checked="true"]) .checkbox,
            :host([checked="true"]) .radio {
                background: ${I0.HighlightText};
                border-color: ${I0.HighlightText};
            }

            :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${e5}) .expanded-toggle,
            :host(:${e5}) .checkbox,
            :host(:${e5}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${e5}) .checkbox,
            :host([checked="true"]:${e5}) .radio {
                border-color: ${I0.HighlightText};
            }

            :host([aria-checked="true"]) {
                background: ${I0.Highlight};
                color: ${I0.HighlightText};
            }

            :host([aria-checked="true"]) .checkbox-indicator,
            :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]),
            :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
                fill: ${I0.Highlight};
            }

            :host([aria-checked="true"]) .radio-indicator {
                background: ${I0.Highlight};
            }

            ::slotted([slot="end"]:not(svg)) {
                color: ${I0.ButtonText};
            }

            :host(:hover) ::slotted([slot="end"]:not(svg)),
            :host(:${e5}) ::slotted([slot="end"]:not(svg)) {
                color: ${I0.HighlightText};
            }
        `),new h_(b1`
                .expand-collapse-glyph {
                    transform: rotate(0deg);
                }
            `,b1`
                .expand-collapse-glyph {
                    transform: rotate(180deg);
                }
            `)),checkboxIndicator:'\n        <svg\n            part="checkbox-indicator"\n            class="checkbox-indicator"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n            />\n        </svg>\n    ',expandCollapseGlyph:'\n        <svg\n            viewBox="0 0 16 16"\n            xmlns="http://www.w3.org/2000/svg"\n            class="expand-collapse-glyph"\n            part="expand-collapse-glyph"\n        >\n            <path\n                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n            />\n        </svg>\n    ',radioIndicator:'\n        <span part="radio-indicator" class="radio-indicator"></span>\n    '}),vC=(()=>{class e extends S2{constructor(){super(...arguments),this.shape="rect"}}return B0([N0],e.prototype,"fill",void 0),B0([N0],e.prototype,"shape",void 0),B0([N0],e.prototype,"pattern",void 0),B0([N0({mode:"boolean"})],e.prototype,"shimmer",void 0),e})().compose({baseName:"skeleton",template:(e,a)=>d5`
    <template
        class="${t=>"circle"===t.shape?"circle":"rect"}"
        pattern="${t=>t.pattern}"
        ?shimmer="${t=>t.shimmer}"
    >
        ${$t(t=>!0===t.shimmer,d5`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${t=>t.pattern}">
            <img class="pattern" src="${t=>t.pattern}" />
        </object>
        <slot></slot>
    </template>
`,styles:(e,a)=>b1`
        ${H2("block")} :host {
            --skeleton-fill-default: #e1dfdd;
            overflow: hidden;
            width: 100%;
            position: relative;
            background-color: var(--skeleton-fill, var(--skeleton-fill-default));
            --skeleton-animation-gradient-default: linear-gradient(
                270deg,
                var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
                #f3f2f1 51.13%,
                var(--skeleton-fill, var(--skeleton-fill-default)) 100%
            );
            --skeleton-animation-timing-default: ease-in-out;
        }

        :host([shape="rect"]) {
            border-radius: calc(${j2} * 1px);
        }

        :host([shape="circle"]) {
            border-radius: 100%;
            overflow: hidden;
        }

        object {
            position: absolute;
            width: 100%;
            height: auto;
            z-index: 2;
        }

        object img {
            width: 100%;
            height: auto;
        }

        ${H2("block")} span.shimmer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: var(
                --skeleton-animation-gradient,
                var(--skeleton-animation-gradient-default)
            );
            background-size: 0px 0px / 90% 100%;
            background-repeat: no-repeat;
            background-color: var(--skeleton-animation-fill, ${t4});
            animation: shimmer 2s infinite;
            animation-timing-function: var(
                --skeleton-animation-timing,
                var(--skeleton-timing-default)
            );
            animation-direction: normal;
            z-index: 1;
        }

        ::slotted(svg) {
            z-index: 2;
        }

        ::slotted(.pattern) {
            width: 100%;
            height: 100%;
        }

        @keyframes shimmer {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
            }
        }
    `.withBehaviors(t2(b1`
                :host {
                    forced-color-adjust: none;
                    background-color: ${I0.ButtonFace};
                    box-shadow: 0 0 0 1px ${I0.ButtonText};
                }

                ${H2("block")} span.shimmer {
                    display: none;
                }
            `))});let s_=(()=>{class e extends S2{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,n){this.scrollContainer&&this.$emit(1==this.scrolling?"scrollstart":"scrollend",this.scrollContainer.scrollLeft)}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,n){n&&!this.updatingItems&&W1.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((n,v)=>v instanceof HTMLSlotElement?n.concat(v.assignedElements()):(n.push(v),n),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops(),this.width=this.offsetWidth;let t=0,n=this.scrollItems.map(({offsetLeft:v,offsetWidth:A},S)=>{const N=v+A;return this.isRtl?-N:(t=N,0===S?0:v)}).concat(t);n=this.fixScrollMisalign(n),n.sort((v,A)=>Math.abs(v)-Math.abs(A)),this.scrollStops=n,this.setFlippers()}fixScrollMisalign(t){if(this.isRtl&&t.some(n=>n>0)){t.sort((v,A)=>A-v);const n=t[0];t=t.map(v=>v-n)}return t}setFlippers(){var t,n;const v=this.scrollContainer.scrollLeft;if(null===(t=this.previousFlipperContainer)||void 0===t||t.classList.toggle("disabled",0===v),this.scrollStops){const A=Math.abs(this.scrollStops[this.scrollStops.length-1]);null===(n=this.nextFlipperContainer)||void 0===n||n.classList.toggle("disabled",Math.abs(v)+this.width>=A)}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext()}}scrollToPrevious(){const t=this.scrollContainer.scrollLeft,n=this.scrollStops.findIndex((S,N)=>S<=t&&(this.isRtl||N===this.scrollStops.length-1||this.scrollStops[N+1]>t)),v=Math.abs(this.scrollStops[n+1]);let A=this.scrollStops.findIndex(S=>Math.abs(S)+this.width>v);(A>=n||-1===A)&&(A=n>0?n-1:0),this.scrollToPosition(this.scrollStops[A],t)}scrollToNext(){const t=this.scrollContainer.scrollLeft,n=this.scrollStops.findIndex(S=>Math.abs(S)>=Math.abs(t)),v=this.scrollStops.findIndex(S=>Math.abs(t)+this.width<=Math.abs(S));let A=n;v>n+2?A=v-2:n<this.scrollStops.length-2&&(A=n+1),this.scrollToPosition(this.scrollStops[A],t)}scrollToPosition(t,n=this.scrollContainer.scrollLeft){var v;if(this.scrolling)return;this.scrolling=!0;const A=null!==(v=this.duration)&&void 0!==v?v:Math.abs(t-n)/this.speed+"s";this.content.style.setProperty("transition-duration",A);const S=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),N=A0=>{A0&&A0.target!==A0.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",N),this.scrolling=!1)};if(0===S)return void N();this.content.addEventListener("transitionend",N);const o0=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let g0=this.scrollContainer.scrollLeft-Math.min(t,o0);this.isRtl&&(g0=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),o0)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${g0}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}}return B0([N0({converter:l1})],e.prototype,"speed",void 0),B0([N0],e.prototype,"duration",void 0),B0([N0],e.prototype,"easing",void 0),B0([N0({attribute:"flippers-hidden-from-at",converter:oh})],e.prototype,"flippersHiddenFromAT",void 0),B0([j1],e.prototype,"scrolling",void 0),B0([j1],e.prototype,"scrollItems",void 0),B0([N0({attribute:"view"})],e.prototype,"view",void 0),e})();var Un=(()=>{return(e=Un||(Un={})).next="next",e.previous="previous",Un;var e})();let Gn=(()=>{class e extends S2{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Un.next}keyupHandler(t){if(!this.hiddenFromAT){const n=t.key;"Enter"===n&&this.$emit("click",t),"Escape"===n&&this.blur()}}}return B0([N0({mode:"boolean"})],e.prototype,"disabled",void 0),B0([N0({attribute:"aria-hidden",converter:oh})],e.prototype,"hiddenFromAT",void 0),B0([N0],e.prototype,"direction",void 0),e})();const dC=b1`
    .scroll-prev {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before,
    .scroll-next .scroll-action {
        left: auto;
        right: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-next));
    }

    .scroll-next .scroll-action {
        transform: translate(50%, -50%);
    }
`,wC=b1`
    .scroll.scroll-next {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, var(--scroll-fade-next), transparent);
        left: auto;
        right: 0;
    }

    .scroll.scroll-prev::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
    }

    .scroll-prev .scroll-action {
        left: auto;
        right: 0;
        transform: translate(50%, -50%);
    }
`,pC=b1`
    .scroll-area {
        position: relative;
    }

    div.scroll-view {
        overflow-x: hidden;
    }

    .scroll {
        bottom: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        user-select: none;
        width: 100px;
    }

    .scroll.disabled {
        display: none;
    }

    .scroll::before,
    .scroll-action {
        left: 0;
        position: absolute;
    }

    .scroll::before {
        background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
        content: "";
        display: block;
        height: 100%;
        width: 100%;
    }

    .scroll-action {
        pointer-events: auto;
        right: auto;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`.withBehaviors(new h_(dC,wC)),zC=class mC extends s_{connectedCallback(){super.connectedCallback(),"mobile"!==this.view&&this.$fastController.addStyles(pC)}}.compose({baseName:"horizontal-scroll",baseClass:s_,template:(e,a)=>{var t,n;return d5`
    <template
        class="horizontal-scroll"
        @keyup="${(v,A)=>v.keyupHandler(A.event)}"
    >
        ${N4(0,a)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${v=>v.scrolled()}"
                ${q2("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${q2("content")}>
                    <slot
                        ${f3({property:"scrollItems",filter:qz()})}
                    ></slot>
                </div>
            </div>
            ${$t(v=>"mobile"!==v.view,d5`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${q2("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${a.previousFlipper instanceof Function?a.previousFlipper(e,a):null!==(t=a.previousFlipper)&&void 0!==t?t:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${q2("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${a.nextFlipper instanceof Function?a.nextFlipper(e,a):null!==(n=a.nextFlipper)&&void 0!==n?n:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${R4(0,a)}
    </template>
`},styles:(e,a)=>b1`
    ${H2("block")} :host {
        --scroll-align: center;
        --scroll-item-spacing: 5px;
        contain: layout;
        position: relative;
    }

    .scroll-view {
        overflow-x: auto;
        scrollbar-width: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .content-container {
        align-items: var(--scroll-align);
        display: inline-flex;
        flex-wrap: nowrap;
        position: relative;
    }

    .content-container ::slotted(*) {
        margin-right: var(--scroll-item-spacing);
    }

    .content-container ::slotted(*:last-child) {
        margin-right: 0;
    }
`,nextFlipper:e=>d5`
        <${e.tagFor(Gn)}
            @click="${a=>a.scrollToNext()}"
            aria-hidden="${a=>a.flippersHiddenFromAT}"
        ></${e.tagFor(Gn)}>
    `,previousFlipper:e=>d5`
        <${e.tagFor(Gn)}
            @click="${a=>a.scrollToPrevious()}"
            direction="previous"
            aria-hidden="${a=>a.flippersHiddenFromAT}"
        ></${e.tagFor(Gn)}>
    `});let i_=(()=>{class e extends S2{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t="number"==typeof this.min?this.min:0,A=("number"==typeof this.max?this.max:100)-t;this.percentComplete=0===A?0:Math.fround((("number"==typeof this.value?this.value:0)-t)/A*100)}}return B0([N0({converter:l1})],e.prototype,"value",void 0),B0([N0({converter:l1})],e.prototype,"min",void 0),B0([N0({converter:l1})],e.prototype,"max",void 0),B0([N0({mode:"boolean"})],e.prototype,"paused",void 0),B0([j1],e.prototype,"percentComplete",void 0),e})();const MC=i_.compose({baseName:"progress",template:(e,a)=>d5`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${$t(t=>"number"==typeof t.value,d5`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${t=>t.percentComplete}%"
                    ></div>
                </div>
            `)}
        ${$t(t=>"number"!=typeof t.value,d5`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${a.indeterminateIndicator1||""}
                        ${a.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(e,a)=>b1`
        ${H2("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${p5} * 1px);
            margin: calc(${p5} * 1px) 0;
        }

        .progress {
            background-color: ${t4};
            border-radius: calc(${p5} * 1px);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
        }

        .determinate {
            background-color: ${_3};
            border-radius: calc(${p5} * 1px);
            height: 100%;
            transition: all 0.2s ease-in-out;
            display: flex;
        }

        .indeterminate {
            height: 100%;
            border-radius: calc(${p5} * 1px);
            display: flex;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .indeterminate-indicator-1 {
            position: absolute;
            opacity: 0;
            height: 100%;
            background-color: ${_3};
            border-radius: calc(${p5} * 1px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            width: 40%;
            animation: indeterminate-1 2s infinite;
        }

        .indeterminate-indicator-2 {
            position: absolute;
            opacity: 0;
            height: 100%;
            background-color: ${_3};
            border-radius: calc(${p5} * 1px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            width: 60%;
            animation: indeterminate-2 2s infinite;
        }

        :host([paused]) .indeterminate-indicator-1,
        :host([paused]) .indeterminate-indicator-2 {
            animation-play-state: paused;
            background-color: ${t4};
        }

        :host([paused]) .determinate {
            background-color: ${cs};
        }

        @keyframes indeterminate-1 {
            0% {
                opacity: 1;
                transform: translateX(-100%);
            }
            70% {
                opacity: 1;
                transform: translateX(300%);
            }
            70.01% {
                opacity: 0;
            }
            100% {
                opacity: 0;
                transform: translateX(300%);
            }
        }

        @keyframes indeterminate-2 {
            0% {
                opacity: 0;
                transform: translateX(-150%);
            }
            29.99% {
                opacity: 0;
            }
            30% {
                opacity: 1;
                transform: translateX(-150%);
            }
            100% {
                transform: translateX(166.66%);
                opacity: 1;
            }
        }
    `.withBehaviors(t2(b1`
                .progress {
                    forced-color-adjust: none;
                    background-color: ${I0.Field};
                    box-shadow: 0 0 0 1px inset ${I0.FieldText};
                }
                .determinate,
                .indeterminate-indicator-1,
                .indeterminate-indicator-2 {
                    forced-color-adjust: none;
                    background-color: ${I0.FieldText};
                }
                :host([paused]) .determinate,
                :host([paused]) .indeterminate-indicator-1,
                :host([paused]) .indeterminate-indicator-2 {
                    background-color: ${I0.GrayText};
                }
            `)),indeterminateIndicator1:'\n        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n    ',indeterminateIndicator2:'\n        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n    '}),AC=i_.compose({baseName:"progress-ring",template:(e,a)=>d5`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${$t(t=>"number"==typeof t.value,d5`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>44*t.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${$t(t=>"number"!=typeof t.value,d5`
                <slot name="indeterminate" slot="indeterminate">
                    ${a.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,a)=>b1`
        ${H2("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${r7} * 1px);
            width: calc(${r7} * 1px);
            margin: calc(${r7} * 1px) 0;
        }

        .progress {
            height: 100%;
            width: 100%;
        }

        .background {
            stroke: ${t4};
            fill: none;
            stroke-width: 2px;
        }

        .determinate {
            stroke: ${_3};
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
        }

        .indeterminate-indicator-1 {
            stroke: ${_3};
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
            animation: spin-infinite 2s linear infinite;
        }

        :host([paused]) .indeterminate-indicator-1 {
            animation-play-state: paused;
            stroke: ${t4};
        }

        :host([paused]) .determinate {
            stroke: ${cs};
        }

        @keyframes spin-infinite {
            0% {
                stroke-dasharray: 0.01px 43.97px;
                transform: rotate(0deg);
            }
            50% {
                stroke-dasharray: 21.99px 21.99px;
                transform: rotate(450deg);
            }
            100% {
                stroke-dasharray: 0.01px 43.97px;
                transform: rotate(1080deg);
            }
        }
    `.withBehaviors(t2(b1`
                .indeterminate-indicator-1,
                .determinate {
                    stroke: ${I0.FieldText};
                }
                .background {
                    stroke: ${I0.Field};
                }
                :host([paused]) .indeterminate-indicator-1 {
                    stroke: ${I0.Field};
                }
                :host([paused]) .determinate {
                    stroke: ${I0.GrayText};
                }
            `)),indeterminateIndicator:'\n        <svg class="progress" part="progress" viewBox="0 0 16 16">\n            <circle\n                class="background"\n                part="background"\n                cx="8px"\n                cy="8px"\n                r="7px"\n            ></circle>\n            <circle\n                class="indeterminate-indicator-1"\n                part="indeterminate-indicator-1"\n                cx="8px"\n                cy="8px"\n                r="7px"\n            ></circle>\n        </svg>\n    '});function l_(e,a,t){return t<e?a:t>a?e:t}function Wn(e,a,t=0){return[a,t]=[a,t].sort((n,v)=>n-v),a<=e&&e<t}var ps=(()=>{return(e=ps||(ps={})).vertical="vertical",e.horizontal="horizontal",ps;var e})();let r_=(()=>{class e extends S2{constructor(){super(...arguments),this.orientation=ps.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t="gridColumn",n="gridRow",v=this.isHorizontal()?t:n;this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((A,S)=>{if("tab"===A.slot&&this.isFocusableElement(A)){this.activeindicator&&(this.showActiveIndicator=!0);const N=this.tabIds[S],o0=this.tabpanelIds[S];A.setAttribute("id","string"!=typeof N?`tab-${S+1}`:N),A.setAttribute("aria-selected",this.activeTabIndex===S?"true":"false"),A.setAttribute("aria-controls","string"!=typeof o0?`panel-${S+1}`:o0),A.addEventListener("click",this.handleTabClick),A.addEventListener("keydown",this.handleTabKeyDown),A.setAttribute("tabindex",this.activeTabIndex===S?"0":"-1"),this.activeTabIndex===S&&(this.activetab=A)}A.style[t]="",A.style[n]="",A.style[v]=`${S+1}`,this.isHorizontal()?A.classList.remove("vertical"):A.classList.add("vertical")})},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach((t,n)=>{const v=this.tabIds[n],A=this.tabpanelIds[n];t.setAttribute("id","string"!=typeof A?`panel-${n+1}`:A),t.setAttribute("aria-labelledby","string"!=typeof v?`tab-${n+1}`:v),this.activeTabIndex!==n?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const n=t.currentTarget;1===n.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(n),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Jv:t.preventDefault(),this.adjustBackward(t);break;case qv:t.preventDefault(),this.adjustForward(t)}else switch(t.key){case w6:t.preventDefault(),this.adjustBackward(t);break;case d6:t.preventDefault(),this.adjustForward(t)}switch(t.key){case ds:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case ws:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const n=this.tabs;let v=0;for(v=this.activetab?n.indexOf(this.activetab)+1:1,v===n.length&&(v=0);v<n.length&&n.length>1;){if(this.isFocusableElement(n[v])){this.moveToTabByIndex(n,v);break}if(this.activetab&&v===n.indexOf(this.activetab))break;v+1>=n.length?v=0:v+=1}},this.adjustBackward=t=>{const n=this.tabs;let v=0;for(v=this.activetab?n.indexOf(this.activetab)-1:0,v=v<0?n.length-1:v;v>=0&&n.length>1;){if(this.isFocusableElement(n[v])){this.moveToTabByIndex(n,v);break}v-1<0?v=n.length-1:v-=1}},this.moveToTabByIndex=(t,n)=>{const v=t[n];this.activetab=v,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=n,v.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,n){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(v=>v.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>t.getAttribute("id"))}getTabPanelIds(){return this.tabpanels.map(t=>t.getAttribute("id"))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===ps.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",n=this.isHorizontal()?"translateX":"translateY",v=this.isHorizontal()?"offsetLeft":"offsetTop",A=this.activeIndicatorRef[v];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const S=this.activeIndicatorRef[v];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`,this.activeIndicatorRef.style.transform=`${n}(${S-A}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${n}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=l_(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}return B0([N0],e.prototype,"orientation",void 0),B0([N0],e.prototype,"activeid",void 0),B0([j1],e.prototype,"tabs",void 0),B0([j1],e.prototype,"tabpanels",void 0),B0([N0({mode:"boolean"})],e.prototype,"activeindicator",void 0),B0([j1],e.prototype,"activeIndicatorRef",void 0),B0([j1],e.prototype,"showActiveIndicator",void 0),e})();it(r_,te);const bC=r_.compose({baseName:"tabs",template:(e,a)=>d5`
    <template class="${t=>t.orientation}">
        ${N4(0,a)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${f3("tabs")}></slot>

            ${$t(t=>t.showActiveIndicator,d5`
                    <div
                        ${q2("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${R4(0,a)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${f3("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,a)=>b1`
        ${H2("grid")} :host {
            box-sizing: border-box;
            font-family: ${q3};
            font-size: ${m3};
            line-height: ${z3};
            color: ${U5};
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto 1fr;
        }

        .tablist {
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: auto;
            position: relative;
            width: max-content;
            align-self: end;
            padding: calc(${p5} * 4px) calc(${p5} * 4px) 0;
            box-sizing: border-box;
        }

        .start,
        .end {
            align-self: center;
        }

        .activeIndicator {
            grid-row: 2;
            grid-column: 1;
            width: 100%;
            height: 5px;
            justify-self: center;
            background: ${E7};
            margin-top: 10px;
            border-radius: calc(${j2} * 1px)
                calc(${j2} * 1px) 0 0;
        }

        .activeIndicatorTransition {
            transition: transform 0.2s ease-in-out;
        }

        .tabpanel {
            grid-row: 2;
            grid-column-start: 1;
            grid-column-end: 4;
            position: relative;
        }

        :host([orientation="vertical"]) {
            grid-template-rows: auto 1fr auto;
            grid-template-columns: auto 1fr;
        }

        :host([orientation="vertical"]) .tablist {
            grid-row-start: 2;
            grid-row-end: 2;
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: auto 1fr;
            position: relative;
            width: max-content;
            justify-self: end;
            align-self: flex-start;
            width: 100%;
            padding: 0 calc(${p5} * 4px)
                calc((${r7} - ${p5}) * 1px) 0;
        }

        :host([orientation="vertical"]) .tabpanel {
            grid-column: 2;
            grid-row-start: 1;
            grid-row-end: 4;
        }

        :host([orientation="vertical"]) .end {
            grid-row: 3;
        }

        :host([orientation="vertical"]) .activeIndicator {
            grid-column: 1;
            grid-row: 1;
            width: 5px;
            height: 100%;
            margin-inline-end: 10px;
            align-self: center;
            background: ${E7};
            margin-top: 0;
            border-radius: 0 calc(${j2} * 1px)
                calc(${j2} * 1px) 0;
        }

        :host([orientation="vertical"]) .activeIndicatorTransition {
            transition: transform 0.2s linear;
        }
    `.withBehaviors(t2(b1`
                .activeIndicator,
                :host([orientation="vertical"]) .activeIndicator {
                    forced-color-adjust: none;
                    background: ${I0.Highlight};
                }
            `))}),EC=class yC extends S2{}.compose({baseName:"tab-panel",template:(e,a)=>d5`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,a)=>b1`
    ${H2("block")} :host {
        box-sizing: border-box;
        font-size: ${m3};
        line-height: ${z3};
        padding: 0 calc((6 + (${p5} * 2 * ${v6})) * 1px);
    }
`}),DC=(()=>{class e extends S2{}return B0([N0({mode:"boolean"})],e.prototype,"disabled",void 0),e})().compose({baseName:"tab",template:(e,a)=>d5`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`,styles:(e,a)=>b1`
    ${H2("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${q3};
        font-size: ${m3};
        line-height: ${z3};
        height: calc(${r7} * 1px);
        padding: calc(${p5} * 5px) calc(${p5} * 4px);
        color: ${cs};
        fill: currentcolor;
        border-radius: calc(${j2} * 1px);
        border: calc(${j5} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host(:hover) {
        color: ${U5};
        fill: currentcolor;
    }

    :host(:active) {
        color: ${U5};
        fill: currentcolor;
    }

    :host([disabled]) {
        cursor: ${a4};
        opacity: ${P4};
    }

    :host([disabled]:hover) {
        color: ${cs};
        background: ${os};
    }

    :host([aria-selected="true"]) {
        background: ${t4};
        color: ${_3};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:hover) {
        background: ${rs};
        color: ${Ln};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:active) {
        background: ${jz};
        color: ${Bn};
        fill: currentcolor;
    }

    :host(:${e5}) {
        outline: none;
        border: calc(${j5} * 1px) solid ${O2};
        box-shadow: 0 0 0 calc((${$5} - ${j5}) * 1px)
            ${O2};
    }

    :host(:focus) {
        outline: none;
    }

    :host(.vertical) {
        justify-content: end;
        grid-column: 2;
    }

    :host(.vertical[aria-selected="true"]) {
        z-index: 2;
    }

    :host(.vertical:hover) {
        color: ${U5};
    }

    :host(.vertical:active) {
        color: ${U5};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(t2(b1`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${I0.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: ${I0.Highlight};
                color: ${I0.HighlightText};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: ${I0.HighlightText};
                color: ${I0.Highlight};
                fill: currentcolor;
            }
            :host(:${e5}) {
                border-color: ${I0.ButtonText};
                box-shadow: none;
            }
            :host([disabled]),
            :host([disabled]:hover) {
                opacity: 1;
                color: ${I0.GrayText};
                background: ${I0.ButtonFace};
            }
        `))}),ig={toView(e){var a;return null==e?null:null===(a=e)||void 0===a?void 0:a.toColorString()},fromView(e){if(null==e)return null;const a=I4(e);return a?J3.create(a.r,a.g,a.b):null}},o_=b1`
    :host {
        background-color: ${J2};
        color: ${U5};
    }
`.withBehaviors(t2(b1`
            :host {
                background-color: ${I0.ButtonFace};
                box-shadow: 0 0 0 1px ${I0.CanvasText};
                color: ${I0.ButtonText};
            }
        `));function L1(e){return(a,t)=>{a[t+"Changed"]=function(n,v){null!=v?e.setValueFor(this,v):e.deleteValueFor(this)}}}const RC=(()=>{class e extends S2{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};a5.getNotifier(this).subscribe(t,"fillColor"),a5.getNotifier(this).subscribe(t,"baseLayerLuminance")}noPaintChanged(){this.noPaint||void 0===this.fillColor&&!this.baseLayerLuminance?this.$fastController.removeStyles(o_):this.$fastController.addStyles(o_)}}return B0([N0({attribute:"no-paint",mode:"boolean"})],e.prototype,"noPaint",void 0),B0([N0({attribute:"fill-color",converter:ig}),L1(J2)],e.prototype,"fillColor",void 0),B0([N0({attribute:"accent-color",converter:ig,mode:"fromView"}),L1(Rz)],e.prototype,"accentColor",void 0),B0([N0({attribute:"neutral-color",converter:ig,mode:"fromView"}),L1(kz)],e.prototype,"neutralColor",void 0),B0([N0({converter:l1}),L1(v6)],e.prototype,"density",void 0),B0([N0({attribute:"design-unit",converter:l1}),L1(p5)],e.prototype,"designUnit",void 0),B0([N0({attribute:"direction"}),L1(xn)],e.prototype,"direction",void 0),B0([N0({attribute:"base-height-multiplier",converter:l1}),L1(wz)],e.prototype,"baseHeightMultiplier",void 0),B0([N0({attribute:"base-horizontal-spacing-multiplier",converter:l1}),L1(jA)],e.prototype,"baseHorizontalSpacingMultiplier",void 0),B0([N0({attribute:"control-corner-radius",converter:l1}),L1(j2)],e.prototype,"controlCornerRadius",void 0),B0([N0({attribute:"stroke-width",converter:l1}),L1(j5)],e.prototype,"strokeWidth",void 0),B0([N0({attribute:"focus-stroke-width",converter:l1}),L1($5)],e.prototype,"focusStrokeWidth",void 0),B0([N0({attribute:"disabled-opacity",converter:l1}),L1(P4)],e.prototype,"disabledOpacity",void 0),B0([N0({attribute:"type-ramp-minus-2-font-size"}),L1($A)],e.prototype,"typeRampMinus2FontSize",void 0),B0([N0({attribute:"type-ramp-minus-2-line-height"}),L1(UA)],e.prototype,"typeRampMinus2LineHeight",void 0),B0([N0({attribute:"type-ramp-minus-1-font-size"}),L1($v)],e.prototype,"typeRampMinus1FontSize",void 0),B0([N0({attribute:"type-ramp-minus-1-line-height"}),L1(Uv)],e.prototype,"typeRampMinus1LineHeight",void 0),B0([N0({attribute:"type-ramp-base-font-size"}),L1(m3)],e.prototype,"typeRampBaseFontSize",void 0),B0([N0({attribute:"type-ramp-base-line-height"}),L1(z3)],e.prototype,"typeRampBaseLineHeight",void 0),B0([N0({attribute:"type-ramp-plus-1-font-size"}),L1(GA)],e.prototype,"typeRampPlus1FontSize",void 0),B0([N0({attribute:"type-ramp-plus-1-line-height"}),L1(WA)],e.prototype,"typeRampPlus1LineHeight",void 0),B0([N0({attribute:"type-ramp-plus-2-font-size"}),L1(KA)],e.prototype,"typeRampPlus2FontSize",void 0),B0([N0({attribute:"type-ramp-plus-2-line-height"}),L1(YA)],e.prototype,"typeRampPlus2LineHeight",void 0),B0([N0({attribute:"type-ramp-plus-3-font-size"}),L1(ZA)],e.prototype,"typeRampPlus3FontSize",void 0),B0([N0({attribute:"type-ramp-plus-3-line-height"}),L1(QA)],e.prototype,"typeRampPlus3LineHeight",void 0),B0([N0({attribute:"type-ramp-plus-4-font-size"}),L1(XA)],e.prototype,"typeRampPlus4FontSize",void 0),B0([N0({attribute:"type-ramp-plus-4-line-height"}),L1(JA)],e.prototype,"typeRampPlus4LineHeight",void 0),B0([N0({attribute:"type-ramp-plus-5-font-size"}),L1(qA)],e.prototype,"typeRampPlus5FontSize",void 0),B0([N0({attribute:"type-ramp-plus-5-line-height"}),L1(tV)],e.prototype,"typeRampPlus5LineHeight",void 0),B0([N0({attribute:"type-ramp-plus-6-font-size"}),L1(aV)],e.prototype,"typeRampPlus6FontSize",void 0),B0([N0({attribute:"type-ramp-plus-6-line-height"}),L1(eV)],e.prototype,"typeRampPlus6LineHeight",void 0),B0([N0({attribute:"accent-fill-rest-delta",converter:l1}),L1(hV)],e.prototype,"accentFillRestDelta",void 0),B0([N0({attribute:"accent-fill-hover-delta",converter:l1}),L1(pz)],e.prototype,"accentFillHoverDelta",void 0),B0([N0({attribute:"accent-fill-active-delta",converter:l1}),L1(uz)],e.prototype,"accentFillActiveDelta",void 0),B0([N0({attribute:"accent-fill-focus-delta",converter:l1}),L1(mz)],e.prototype,"accentFillFocusDelta",void 0),B0([N0({attribute:"accent-foreground-rest-delta",converter:l1}),L1(zz)],e.prototype,"accentForegroundRestDelta",void 0),B0([N0({attribute:"accent-foreground-hover-delta",converter:l1}),L1(_z)],e.prototype,"accentForegroundHoverDelta",void 0),B0([N0({attribute:"accent-foreground-active-delta",converter:l1}),L1(fz)],e.prototype,"accentForegroundActiveDelta",void 0),B0([N0({attribute:"accent-foreground-focus-delta",converter:l1}),L1(Mz)],e.prototype,"accentForegroundFocusDelta",void 0),B0([N0({attribute:"neutral-fill-rest-delta",converter:l1}),L1(Za)],e.prototype,"neutralFillRestDelta",void 0),B0([N0({attribute:"neutral-fill-hover-delta",converter:l1}),L1(Qa)],e.prototype,"neutralFillHoverDelta",void 0),B0([N0({attribute:"neutral-fill-active-delta",converter:l1}),L1(Xa)],e.prototype,"neutralFillActiveDelta",void 0),B0([N0({attribute:"neutral-fill-focus-delta",converter:l1}),L1(Gv)],e.prototype,"neutralFillFocusDelta",void 0),B0([N0({attribute:"neutral-fill-input-rest-delta",converter:l1}),L1(xz)],e.prototype,"neutralFillInputRestDelta",void 0),B0([N0({attribute:"neutral-fill-input-hover-delta",converter:l1}),L1(Hz)],e.prototype,"neutralFillInputHoverDelta",void 0),B0([N0({attribute:"neutral-fill-input-active-delta",converter:l1}),L1(Az)],e.prototype,"neutralFillInputActiveDelta",void 0),B0([N0({attribute:"neutral-fill-input-focus-delta",converter:l1}),L1(Vz)],e.prototype,"neutralFillInputFocusDelta",void 0),B0([N0({attribute:"neutral-fill-stealth-rest-delta",converter:l1}),L1(Cz)],e.prototype,"neutralFillStealthRestDelta",void 0),B0([N0({attribute:"neutral-fill-stealth-hover-delta",converter:l1}),L1(bz)],e.prototype,"neutralFillStealthHoverDelta",void 0),B0([N0({attribute:"neutral-fill-stealth-active-delta",converter:l1}),L1(yz)],e.prototype,"neutralFillStealthActiveDelta",void 0),B0([N0({attribute:"neutral-fill-stealth-focus-delta",converter:l1}),L1(Lz)],e.prototype,"neutralFillStealthFocusDelta",void 0),B0([N0({attribute:"neutral-fill-strong-hover-delta",converter:l1}),L1(Bz)],e.prototype,"neutralFillStrongHoverDelta",void 0),B0([N0({attribute:"neutral-fill-strong-active-delta",converter:l1}),L1(Ez)],e.prototype,"neutralFillStrongActiveDelta",void 0),B0([N0({attribute:"neutral-fill-strong-focus-delta",converter:l1}),L1(Tz)],e.prototype,"neutralFillStrongFocusDelta",void 0),B0([N0({attribute:"base-layer-luminance",converter:l1}),L1(Ya)],e.prototype,"baseLayerLuminance",void 0),B0([N0({attribute:"neutral-fill-layer-rest-delta",converter:l1}),L1(Ja)],e.prototype,"neutralFillLayerRestDelta",void 0),B0([N0({attribute:"neutral-stroke-divider-rest-delta",converter:l1}),L1(Pz)],e.prototype,"neutralStrokeDividerRestDelta",void 0),B0([N0({attribute:"neutral-stroke-rest-delta",converter:l1}),L1(Sz)],e.prototype,"neutralStrokeRestDelta",void 0),B0([N0({attribute:"neutral-stroke-hover-delta",converter:l1}),L1(Oz)],e.prototype,"neutralStrokeHoverDelta",void 0),B0([N0({attribute:"neutral-stroke-active-delta",converter:l1}),L1(Dz)],e.prototype,"neutralStrokeActiveDelta",void 0),B0([N0({attribute:"neutral-stroke-focus-delta",converter:l1}),L1(Iz)],e.prototype,"neutralStrokeFocusDelta",void 0),e})().compose({baseName:"design-system-provider",template:(e,a)=>d5`
    <slot></slot>
`,styles:(e,a)=>b1`
    ${H2("block")}
`});let FC=0;function c_(e=""){return`${e}${FC++}`}function v_(e){return Nn(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}let g_=(()=>{class e extends S2{constructor(t,n,v,A){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),n&&(this.initialValue=n),v&&(this.defaultSelected=v),A&&(this.selected=A),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,n){this.ariaChecked="boolean"!=typeof n?void 0:n?"true":"false"}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,n){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,n){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t,n;return null!==(n=null!==(t=this.value)&&void 0!==t?t:this.textContent)&&void 0!==n?n:""}get text(){return this.textContent}set value(t){this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=t),a5.notify(this,"value")}get value(){var t,n;return a5.track(this,"value"),null!==(n=null!==(t=this._value)&&void 0!==t?t:this.textContent)&&void 0!==n?n:""}get form(){return this.proxy?this.proxy.form:null}}return B0([j1],e.prototype,"checked",void 0),B0([j1],e.prototype,"defaultSelected",void 0),B0([N0({mode:"boolean"})],e.prototype,"disabled",void 0),B0([N0({attribute:"selected",mode:"boolean"})],e.prototype,"selectedAttribute",void 0),B0([j1],e.prototype,"selected",void 0),B0([N0({attribute:"value",mode:"fromView"})],e.prototype,"initialValue",void 0),e})(),d_=(()=>{class e{}return B0([j1],e.prototype,"ariaChecked",void 0),B0([j1],e.prototype,"ariaPosInSet",void 0),B0([j1],e.prototype,"ariaSelected",void 0),B0([j1],e.prototype,"ariaSetSize",void 0),e})();it(d_,kn),it(g_,te,d_);let us=(()=>{class e extends S2{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return null!==(t=this.selectedOptions[0])&&void 0!==t?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,n;return null!==(n=null===(t=this.options)||void 0===t?void 0:t.length)&&void 0!==n?n:0}get options(){return a5.track(this,"options"),this._options}set options(t){this._options=t,a5.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const n=t.target.closest("option,[role=option]");if(n&&!n.disabled)return this.selectedIndex=this.options.indexOf(n),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&null!==t&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),n=new RegExp(`^${t}`,"gi");return this.options.filter(v=>v.text.trim().match(n))}getSelectableIndex(t=this.selectedIndex,n){const v=t>n?-1:t<n?1:0,A=t+v;let S=null;switch(v){case-1:S=this.options.reduceRight((N,o0,g0)=>!N&&!o0.disabled&&g0<A?o0:N,S);break;case 1:S=this.options.reduce((N,o0,g0)=>!N&&!o0.disabled&&g0>A?o0:N,S)}return this.options.indexOf(S)}handleChange(t,n){"selected"===n&&(e.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions())}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,e.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const n=t.key;switch(n){case ds:t.shiftKey||(t.preventDefault(),this.selectFirstOption());break;case d6:t.shiftKey||(t.preventDefault(),this.selectNextOption());break;case w6:t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break;case ws:t.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case tg:case"Escape":return!0;case" ":if(this.typeaheadExpired)return!0;default:return 1===n.length&&this.handleTypeAhead(`${n}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,n){this.ariaMultiSelectable=n?"true":void 0}selectedIndexChanged(t,n){var v;if(this.hasSelectableOptions){if((null===(v=this.options[this.selectedIndex])||void 0===v?void 0:v.disabled)&&"number"==typeof t){const A=this.getSelectableIndex(t,n),S=A>-1?A:t;return this.selectedIndex=S,void(n===S&&this.selectedIndexChanged(n,S))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(t,n){var v;const A=n.filter(e.slottedOptionFilter);null===(v=this.options)||void 0===v||v.forEach(S=>{const N=a5.getNotifier(S);N.unsubscribe(this,"selected"),S.selected=A.includes(S),N.subscribe(this,"selected")})}selectFirstOption(){var t,n;this.disabled||(this.selectedIndex=null!==(n=null===(t=this.options)||void 0===t?void 0:t.findIndex(v=>!v.disabled))&&void 0!==n?n:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function NC(e,a){let t=e.length;for(;t--;)if(a(e[t],t,e))return t;return-1}(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t;if(this.$fastController.isConnected){const n=null===(t=this.options)||void 0===t?void 0:t.findIndex(v=>null!==v.getAttribute("selected"));if(-1!==n)return void(this.selectedIndex=n);this.selectedIndex=0}}setSelectedOptions(){var t,n,v;(null===(t=this.options)||void 0===t?void 0:t.length)&&!this.disabled&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(v=null===(n=this.firstSelectedOption)||void 0===n?void 0:n.id)&&void 0!==v?v:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,n){this.options=n.reduce((A,S)=>(v_(S)&&A.push(S),A),[]);const v=`${this.options.length}`;this.options.forEach((A,S)=>{A.id||(A.id=c_("option-")),A.ariaPosInSet=`${S+1}`,A.ariaSetSize=v}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,n){if(this.$fastController.isConnected){const v=this.getTypeaheadMatches();if(v.length){const A=this.options.indexOf(v[0]);A>-1&&(this.selectedIndex=A)}this.typeaheadExpired=!1}}}return e.slottedOptionFilter=a=>v_(a)&&!a.disabled&&!a.hidden,e.TYPE_AHEAD_TIMEOUT_MS=1e3,B0([N0({mode:"boolean"})],e.prototype,"disabled",void 0),B0([N0({mode:"boolean"})],e.prototype,"multiple",void 0),B0([j1],e.prototype,"selectedIndex",void 0),B0([j1],e.prototype,"selectedOptions",void 0),B0([j1],e.prototype,"slottedOptions",void 0),B0([j1],e.prototype,"typeaheadBuffer",void 0),e})(),ng=(()=>{class e{}return B0([j1],e.prototype,"ariaActiveDescendant",void 0),B0([j1],e.prototype,"ariaDisabled",void 0),B0([j1],e.prototype,"ariaExpanded",void 0),B0([j1],e.prototype,"ariaMultiSelectable",void 0),e})();it(ng,kn),it(us,ng);let w_=(()=>{class e extends us{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return null===(t=this.options)||void 0===t?void 0:t.filter(n=>n.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,n){var v,A;this.ariaActiveDescendant=null!==(A=null===(v=this.options[n])||void 0===v?void 0:v.id)&&void 0!==A?A:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((n,v)=>{n.checked=Wn(v,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((n,v)=>{n.checked=Wn(v,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((n,v)=>{n.checked=Wn(v,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((n,v)=>{n.checked=Wn(v,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var n;if(!this.multiple)return super.clickHandler(t);const v=null===(n=t.target)||void 0===n?void 0:n.closest("[role=option]");return v&&!v.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(v),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:n,shiftKey:v}=t;switch(this.shouldSkipFocus=!1,n){case ds:return void this.checkFirstOption(v);case d6:return void this.checkNextOption(v);case w6:return void this.checkPreviousOption(v);case ws:return void this.checkLastOption(v);case"Tab":return this.focusAndScrollOptionIntoView(),!0;case"Escape":return this.multiple&&(this.uncheckAllOptions(),this.checkActiveIndex()),!0;case" ":return t.preventDefault(),void(this.typeAheadExpired&&this.toggleSelectedForAllCheckedOptions());default:return 1===n.length&&this.handleTypeAhead(`${n}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,n){var v;super.multipleChanged(t,n),null===(v=this.options)||void 0===v||v.forEach(A=>{A.checked=!n&&void 0}),this.setSelectedOptions(),n&&!this.size&&(this.size=0)}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(t,n){const v=Math.max(0,parseInt(n.toFixed(),10));v!==n&&W1.queueUpdate(()=>{this.size=v})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(v=>!v.disabled),n=!t.every(v=>v.selected);t.forEach(v=>v.selected=n),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,n){if(this.multiple){if(this.$fastController.isConnected){if(this.getTypeaheadMatches()){const A=this.options.indexOf(this.getTypeaheadMatches[0]);A>-1&&(this.activeIndex=A,this.uncheckAllOptions(),this.checkActiveIndex())}this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(t,n)}uncheckAllOptions(t=!1){this.options.forEach(n=>n.checked=!this.multiple&&void 0),t||(this.rangeStartIndex=-1)}}return B0([j1],e.prototype,"activeIndex",void 0),B0([N0({converter:l1})],e.prototype,"size",void 0),e})();const KC=class WC extends w_{sizeChanged(a,t){super.sizeChanged(a,t),this.sizeStylesheet&&(this.sizeStylesheet=this.$fastController.removeStyles(this.sizeStylesheet)),this.size>0&&(this.sizeStylesheet=b1`
                :host {
                    --size: ${""+this.size};
                }
            `,this.$fastController.addStyles(this.sizeStylesheet))}}.compose({baseName:"listbox",template:(e,a)=>d5`
    <template
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        @focusin="${(t,n)=>t.focusinHandler(n.event)}"
        @keydown="${(t,n)=>t.keydownHandler(n.event)}"
        @mousedown="${(t,n)=>t.mousedownHandler(n.event)}"
    >
        <slot
            ${f3({filter:w_.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(e,a)=>b1`
        ${H2("inline-flex")} :host {
            background: ${Hn};
            border: calc(${j5} * 1px) solid ${In};
            border-radius: calc(${j2} * 1px);
            box-sizing: border-box;
            flex-direction: column;
            padding: calc(${p5} * 1px) 0;
        }

        :host(:focus-within:not([disabled])) {
            border-color: ${O2};
            box-shadow: 0 0 0 calc((${$5} - ${j5}) * 1px)
                ${O2} inset;
        }

        :host([disabled]) ::slotted(*) {
            opacity: ${P4};
            cursor: ${a4};
            pointer-events: none;
        }

        :host([size]) {
            max-height: calc(
                (var(--size) * ${r7} + ((${p5} + ${j5}) * 2)) *
                    1px
            );
            overflow-y: auto;
        }
    `.withBehaviors(t2(b1`
            :host(:${e5}) ::slotted([aria-selected="true"][role="option"]) {
                background: ${I0.Highlight};
                border-color: ${I0.ButtonText};
                box-shadow: 0 0 0 calc(${$5} * 1px) inset ${I0.HighlightText};
                color: ${I0.HighlightText};
                fill: currentcolor;
            }

            :host(:${e5}) ::slotted([aria-selected="true"][role="option"]) {
                background: ${I0.Highlight};
                border-color: ${I0.ButtonText};
                box-shadow: 0 0 0 calc(${$5} * 1px) inset ${I0.HighlightText};
                color: ${I0.HighlightText};
                fill: currentcolor;
            }
        `))}),QC=g_.compose({baseName:"option",template:(e,a)=>d5`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${N4(0,a)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${R4(0,a)}
    </template>
`,styles:(e,a)=>b1`
    ${H2("inline-flex")} :host {
        align-items: center;
        font-family: ${q3};
        border-radius: calc(${j2} * 1px);
        border: calc(${$5} * 1px) solid ${Hn};
        box-sizing: border-box;
        color: ${U5};
        cursor: pointer;
        flex: 0 0 auto;
        fill: currentcolor;
        font-size: ${m3};
        height: calc(${r7} * 1px);
        line-height: ${z3};
        margin: 0 calc((${p5} - ${$5}) * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 1ch;
        user-select: none;
        white-space: nowrap;
    }

    :host(:${e5}) {
        box-shadow: 0 0 0 calc(${$5} * 1px) inset ${Xv};
        border-color: ${O2};
        background: ${ls};
        color: ${Zv};
    }

    :host([aria-selected="true"]) {
        background: ${E7};
        color: ${Cn};
    }

    :host(:hover) {
        background: ${k4};
        color: ${Yv};
    }

    :host(:active) {
        background: ${qa};
        color: ${Fz};
    }

    :host(:not([aria-selected="true"]):hover),
    :host(:not([aria-selected="true"]):active) {
        background: ${rs};
        color: ${U5};
    }

    :host([disabled]) {
        cursor: ${a4};
        opacity: ${P4};
    }

    :host([disabled]:hover) {
        background-color: inherit;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
        display: flex;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        height: calc(${p5} * 4px);
        width: calc(${p5} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }

    :host([aria-checked="true"][aria-selected="false"]) {
        border-color: ${In};
        background: ${Kv};
        color: ${U5};
    }

    :host([aria-checked="true"][aria-selected="false"]:not([disabled]):hover) {
        background: ${rs};
    }

    :host([aria-checked="true"][aria-selected="true"]) {
        border-color: ${O2};
        background: ${ls};
        color: ${Zv};
    }

    :host([aria-checked="true"][aria-selected="true"]:hover) {
        background: ${k4};
        color: ${Yv};
    }

`.withBehaviors(t2(b1`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${I0.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${I0.Highlight};
                    color: ${I0.HighlightText};
                }

                :host([disabled]),
                :host([disabled][aria-selected="false"]:hover) {
                    background: ${I0.Canvas};
                    color: ${I0.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }

                :host([aria-checked="true"][aria-selected="false"]) {
                    background: ${I0.ButtonFace};
                    color: ${I0.ButtonText};
                    border-color: ${I0.ButtonText};
                }

                :host([aria-checked="true"][aria-selected="true"]),
                :host([aria-checked="true"][aria-selected="true"]:hover) {
                    background: ${I0.Highlight};
                    color: ${I0.HighlightText};
                    border-color: ${I0.ButtonText};
                }
            `))});var Kn=(()=>{return(e=Kn||(Kn={})).horizontal="horizontal",e.vertical="vertical",Kn;var e})(),Yn=(()=>{return(e=Yn||(Yn={})).separator="separator",e.presentation="presentation",Yn;var e})();const tb=(()=>{class e extends S2{constructor(){super(...arguments),this.role=Yn.separator,this.orientation=Kn.horizontal}}return B0([N0],e.prototype,"role",void 0),B0([N0],e.prototype,"orientation",void 0),e})().compose({baseName:"divider",template:(e,a)=>d5`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,styles:(e,a)=>b1`
        ${H2("block")} :host {
            box-sizing: content-box;
            height: 0;
            margin: calc(${p5} * 1px) 0;
            border-top: calc(${j5} * 1px) solid ${vs};
            border-left: none;
        }

        :host([orientation="vertical"]) {
            height: 100%;
            margin: 0 calc(${p5} * 1px);
            border-top: none;
            border-left: calc(${j5} * 1px) solid ${vs};
        }
    `});class ab extends us{}class eb extends(Rn(ab)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}var ae=(()=>{return(e=ae||(ae={})).above="above",e.below="below",ae;var e})();let p_=(()=>{class e extends eb{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.position=ae.below,this.listboxId=c_("listbox-"),this.maxHeight=0,this.displayValue=""}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void W1.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}get value(){return a5.track(this,"value"),this._value}set value(t){var n;const v=`${this._value}`;if(null===(n=this.options)||void 0===n?void 0:n.length){const A=this.options.findIndex(A0=>A0.value===t),S=this.options[this.selectedIndex],N=this.options[A],o0=S?S.value:null,g0=N?N.value:null;(-1===A||o0!==g0)&&(t="",this.selectedIndex=A),this.firstSelectedOption&&(t=this.firstSelectedOption.value)}v!==t&&(this._value=t,super.valueChanged(v,t),a5.notify(this,"value"))}updateValue(t){this.$fastController.isConnected&&(this.value=this.firstSelectedOption?this.firstSelectedOption.value:"",this.displayValue=this.firstSelectedOption?this.firstSelectedOption.textContent||this.firstSelectedOption.value:this.value),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,n){super.selectedIndexChanged(t,n),this.updateValue()}positionChanged(){this.positionAttribute=this.position,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),v=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>v?ae.above:ae.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===ae.above?~~t.top:~~v}maxHeightChanged(){this.listbox&&this.listbox.style.setProperty("--max-height",`${this.maxHeight}px`)}disabledChanged(t,n){super.disabledChanged&&super.disabledChanged(t,n),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.value=this.firstSelectedOption.value}clickHandler(t){if(!this.disabled){if(this.open){const n=t.target.closest("option,[role=option]");if(n&&n.disabled)return}return super.clickHandler(t),this.open=!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var n;if(!this.open)return!0;const v=t.relatedTarget;this.isSameNode(v)?this.focus():(null===(n=this.options)||void 0===n?void 0:n.includes(v))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}slottedOptionsChanged(t,n){super.slottedOptionsChanged(t,n),this.setProxyOptions(),this.updateValue()}setDefaultSelectedOption(){var t;const n=null!==(t=this.options)&&void 0!==t?t:Array.from(this.children).filter(us.slottedOptionFilter),v=null==n?void 0:n.findIndex(A=>A.hasAttribute("selected")||A.selected||A.value===this.value);this.selectedIndex=-1===v?0:v}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const n=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);n&&this.proxy.appendChild(n)}))}keydownHandler(t){switch(super.keydownHandler(t),t.key||t.key.charCodeAt(0)){case" ":this.typeaheadExpired&&(t.preventDefault(),this.open=!this.open);break;case"Enter":t.preventDefault(),this.open=!this.open;break;case"Escape":this.open&&(t.preventDefault(),this.open=!1);break;case"Tab":if(!this.open)return!0;t.preventDefault(),this.open=!1}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!0}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute}}return B0([N0({attribute:"open",mode:"boolean"})],e.prototype,"open",void 0),B0([N0({attribute:"position"})],e.prototype,"positionAttribute",void 0),B0([j1],e.prototype,"position",void 0),B0([j1],e.prototype,"maxHeight",void 0),B0([j1],e.prototype,"displayValue",void 0),e})(),u_=(()=>{class e{}return B0([j1],e.prototype,"ariaControls",void 0),e})();it(u_,ng),it(p_,te,u_);const ib=p_.compose({baseName:"select",template:(e,a)=>d5`
    <template
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="listbox"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        @focusout="${(t,n)=>t.focusoutHandler(n.event)}"
        @keydown="${(t,n)=>t.keydownHandler(n.event)}"
    >
        <div class="control" part="control" ?disabled="${t=>t.disabled}">
            ${N4(0,a)}
            <slot name="button-container">
                <div class="selected-value" part="selected-value">
                    <slot name="selected-value">${t=>t.displayValue}</slot>
                </div>
                <div aria-hidden="true" class="indicator" part="indicator">
                    <slot name="indicator">
                        ${a.indicator||""}
                    </slot>
                </div>
            </slot>
            ${R4(0,a)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${q2("listbox")}
        >
            <slot
                ${f3({filter:us.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,a)=>b1`
    ${H2("inline-flex")} :host {
        --elevation: 14;
        background: ${$z};
        border-radius: calc(${j2} * 1px);
        border: calc(${j5} * 1px) solid ${E7};
        box-sizing: border-box;
        color: ${U5};
        font-family: ${q3};
        height: calc(${r7} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        outline: none;
        vertical-align: top;
    }

    .listbox {
        ${Pn}
        background: ${Hn};
        border: calc(${j5} * 1px) solid ${In};
        border-radius: calc(${j2} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${r7} * 1px));
        padding: calc(${p5} * 1px) 0;
        overflow-y: auto;
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    .listbox[hidden] {
        display: none;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: ${m3};
        font-family: inherit;
        line-height: ${z3};
        min-height: 100%;
        padding: 0 calc(${p5} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${Qv};
        border-color: ${k4};
    }

    :host(:${e5}) {
        border-color: ${O2};
        box-shadow: 0 0 0 calc(${$5} * 1px) ${O2};
    }

    :host(:${e5}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${$5} * 1px) inset ${Xv};
        border-color: ${O2};
        background: ${ls};
        color: ${Zv};
    }

    :host([disabled]) {
        cursor: ${a4};
        opacity: ${P4};
    }

    :host([disabled]) .control {
        cursor: ${a4};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${os};
        color: ${U5};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${wV};
        border-color: ${qa};
        border-radius: calc(${j2} * 1px);
    }

    :host([open][position="above"]) .listbox {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :host([open][position="below"]) .listbox {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    :host([open][position="above"]) .listbox {
        border-bottom: 0;
        bottom: calc(${r7} * 1px);
    }

    :host([open][position="below"]) .listbox {
        border-top: 0;
        top: calc(${r7} * 1px);
    }

    .selected-value {
        flex: 1 1 auto;
        font-family: inherit;
        text-align: start;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .indicator {
        flex: 0 0 auto;
        margin-inline-start: 1em;
    }

    slot[name="listbox"] {
        display: none;
        width: 100%;
    }

    :host([open]) slot[name="listbox"] {
        display: flex;
        position: absolute;
        ${Pn}
    }

    .end {
        margin-inline-start: auto;
    }

    .start,
    .end,
    .indicator,
    .select-indicator,
    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        fill: currentcolor;
        height: 1em;
        min-height: calc(${p5} * 4px);
        min-width: calc(${p5} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]),
    ::slotted(option) {
        flex: 0 0 auto;
    }

`.withBehaviors(t2(b1`
            :host(:not([disabled]):hover),
            :host(:not([disabled]):active) {
                border-color: ${I0.Highlight};
            }

            :host(:not([disabled]):${e5}) {
                background-color: ${I0.ButtonFace};
                box-shadow: 0 0 0 calc(${$5} * 1px) ${I0.Highlight};
                color: ${I0.ButtonText};
                fill: currentcolor;
                forced-color-adjust: none;
            }

            :host(:not([disabled]):${e5}) .listbox {
                background: ${I0.ButtonFace};
            }

            :host([disabled]) {
                border-color: ${I0.GrayText};
                background-color: ${I0.ButtonFace};
                color: ${I0.GrayText};
                fill: currentcolor;
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${I0.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${I0.GrayText};
                border-color: ${I0.GrayText};
            }

            :host([disabled]) .control .select-indicator {
                fill: ${I0.GrayText};
            }

            :host(:${e5}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${e5}) ::slotted(option[aria-selected="true"]),
            :host(:${e5}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${I0.Highlight};
                border-color: ${I0.ButtonText};
                box-shadow: 0 0 0 calc(${$5} * 1px) inset ${I0.HighlightText};
                color: ${I0.HighlightText};
                fill: currentcolor;
            }

            .start,
            .end,
            .indicator,
            .select-indicator,
            ::slotted(svg) {
                color: ${I0.ButtonText};
                fill: currentcolor;
            }
        `)),indicator:'\n        <svg\n            class="select-indicator"\n            part="select-indicator"\n            viewBox="0 0 12 7"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"\n            />\n        </svg>\n    '});let Zn=(()=>{class e extends S2{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}return B0([N0({attribute:"heading-level",mode:"fromView",converter:l1})],e.prototype,"headinglevel",void 0),B0([N0({mode:"boolean"})],e.prototype,"expanded",void 0),B0([N0],e.prototype,"id",void 0),e})();it(Zn,te);var ms=(()=>{return(e=ms||(ms={})).single="single",e.multi="multi",ms;var e})();const ob=(()=>{class e extends S2{constructor(){super(...arguments),this.expandmode=ms.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{var t;0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((n,v)=>{n instanceof Zn&&(n.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(n.expanded=this.activeItemIndex===v));const A=this.accordionIds[v];n.setAttribute("id","string"!=typeof A?`accordion-${v+1}`:A),this.activeid=this.accordionIds[this.activeItemIndex],n.addEventListener("keydown",this.handleItemKeyDown),n.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&(null!==(t=this.findExpandedItem())&&void 0!==t?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((n,v)=>{n.removeEventListener("change",this.activeItemChange),n.removeEventListener("keydown",this.handleItemKeyDown),n.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{const n=t.target;this.activeid=n.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),n.expanded=!0,n.setAttribute("aria-disabled","true"),this.accordionItems.forEach(v=>{!v.hasAttribute("disabled")&&v.id!==this.activeid&&v.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(n),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case w6:t.preventDefault(),this.adjust(-1);break;case d6:t.preventDefault(),this.adjust(1);break;case ds:this.activeItemIndex=0,this.focusItem();break;case ws:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const n=t.target,v=this.activeItemIndex=Array.from(this.accordionItems).indexOf(n);this.activeItemIndex!==v&&-1!==v&&(this.activeItemIndex=v,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,n){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if("true"===this.accordionItems[t].getAttribute("expanded"))return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,n)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===ms.single}adjust(t){this.activeItemIndex=l_(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof Zn&&t.expandbutton.focus()}}return B0([N0({attribute:"expand-mode"})],e.prototype,"expandmode",void 0),B0([j1],e.prototype,"accordionItems",void 0),e})().compose({baseName:"accordion",template:(e,a)=>d5`
    <template>
        <slot ${f3({property:"accordionItems",filter:qz()})}></slot>
        <slot name="item" part="item" ${f3("accordionItems")}></slot>
    </template>
`,styles:(e,a)=>b1`
        ${H2("flex")} :host {
            box-sizing: border-box;
            flex-direction: column;
            font-family: ${q3};
            font-size: ${$v};
            line-height: ${Uv};
            color: ${U5};
            border-top: calc(${j5} * 1px) solid ${vs};
        }
    `}),gb=Zn.compose({baseName:"accordion-item",template:(e,a)=>d5`
    <template class="${t=>t.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${t=>t.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${q2("expandbutton")}
                aria-expanded="${t=>t.expanded}"
                aria-controls="${t=>t.id}-panel"
                id="${t=>t.id}"
                @click="${(t,n)=>t.clickHandler(n.event)}"
            >
                <span class="heading">
                    <slot name="heading" part="heading"></slot>
                </span>
            </button>
            ${N4(0,a)}
            ${R4(0,a)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${a.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${a.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${t=>t.id}-panel"
            role="region"
            aria-labelledby="${t=>t.id}"
        >
            <slot></slot>
        </div>
    </template>
`,styles:(e,a)=>b1`
    ${H2("flex")} :host {
        box-sizing: border-box;
        font-family: ${q3};
        flex-direction: column;
        font-size: ${$v};
        line-height: ${Uv};
        border-bottom: calc(${j5} * 1px) solid ${vs};
    }

    .region {
        display: none;
        padding: calc((6 + (${p5} * 2 * ${v6})) * 1px);
    }

    .heading {
        display: grid;
        position: relative;
        grid-template-columns: auto 1fr auto calc(${r7} * 1px);
    }

    .button {
        appearance: none;
        border: none;
        background: none;
        grid-column: 2;
        grid-row: 1;
        outline: none;
        padding: 0 calc((6 + (${p5} * 2 * ${v6})) * 1px);
        text-align: left;
        height: calc(${r7} * 1px);
        color: ${U5};
        cursor: pointer;
        font-family: inherit;
    }

    .button:hover {
        color: ${U5};
    }

    .button:active {
        color: ${U5};
    }

    .button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
    }

    .button:${e5}::before {
        outline: none;
        border: calc(${$5} * 1px) solid ${O2};
        border-radius: calc(${j2} * 1px);
    }

    :host([expanded]) .region {
        display: block;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column: 4;
        pointer-events: none;
        position: relative;
    }

    slot[name="expanded-icon"],
    slot[name="collapsed-icon"] {
        fill: ${E7};
    }

    slot[name="collapsed-icon"] {
        display: flex;
    }

    :host([expanded]) slot[name="collapsed-icon"] {
        display: none;
    }

    slot[name="expanded-icon"] {
        display: none;
    }

    :host([expanded]) slot[name="expanded-icon"] {
        display: flex;
    }

    .start {
        display: flex;
        align-items: center;
        padding-inline-start: calc(${p5} * 1px);
        justify-content: center;
        grid-column: 1;
        position: relative;
    }

    .end {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column: 3;
        position: relative;
    }
`.withBehaviors(t2(b1`
            .button:${e5}::before {
                border-color: ${I0.Highlight};
            }
            :host slot[name="collapsed-icon"],
            :host([expanded]) slot[name="expanded-icon"] {
                fill: ${I0.ButtonText};
            }