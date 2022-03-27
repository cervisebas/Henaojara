import { Injectable } from '@angular/core';
import { NotifyService } from './notify.service';
import * as $ from 'jquery';

type chats = {
  encodedChatId?: string;
  encodedChatGuid?: string;
  chatAlias?: string;
  chatTitle?: string;
  chatLanguage?: string;
  parentEncodedChatId?: string;
  chatGreeting?: string;
  chatHeaderBackgroundColor?: string;
  chatHeaderTextColor?: string;
  chatBodyBackgroundColor?: string;
  chatInputTextColor?: string;
  chatLinksTextColor?: string;
  coloredUserNames?: boolean;
  isStatic?: boolean;
  chatState?: string;
  containerDivId?: string;
  chatHeight?: string;
  chatWidth?: string;
  chatTop?: string;
  chatLeft?: string;
  chatBottom?: string;
  chatRight?: string;
  showChatBorder?: boolean;
  showChatShadow?: boolean;
  minimizedChatTitle?: string;
  minimizedChatIcon?: string;
  minimizedChatBorderRadius?: string;
  minimizedChatPosition?: string;
  minimizedChatRight?: string;
  minimizedChatLeft?: string;
  minimizedChatBottom?: string;
  messageFontSise?: string;
  showUsersAvatars?: boolean;
  avatarBorderRadius?: string;
  showDateOfMessage?: boolean;
  highlightReplies?: boolean;
  allowLinkToProfile?: boolean;
  showBorderBetweenMessages?: boolean;
  menuItems?: { url: string, title: string, iconUrl: string, isBlank: boolean }[];
  allowUploadMessages?: boolean;
  allowSendMessages?: boolean;
  allowResizeChat?: boolean;
  allowMinimizeChat?: boolean;
  allowUploadFile?: boolean;
  showParticipantCount?: boolean;
  showMinimizedParticipantCount?: boolean;
  allowFullScreenImage?: boolean;
  showTitleNotification?: boolean;
  disableImages?: boolean;
  siteDomain?: string;
  siteUserExternalId?: string;
  siteUserFullName?: string;
  siteUserFullNameColor?: string;
  siteUserAvatarUrl?: string;
  siteProfileUrl?: string;
  allowedLoginMethods?: string[];
  customLoginLink?: string;
  signature?: string;
  permission?: string[];
  useStandardHistoryWidgetSettings?: boolean;
  chatPaginatorUrlPrefix?: string;
  hideMessagesOverflow?: boolean;
  showChatOuterFrame?: boolean;
  batchId?: string;
};

@Injectable({
  providedIn: 'root'
})
export class ChatbroService {
  constructor(private notify: NotifyService) { }
  private showError: boolean = false;
  private retryIntents: number = 0;

  chatbroLoader(chats: chats, async?: any) {
    return new Promise((resolve, reject)=>{
      var async1: boolean = !1!==async;
      var params = {
        embedChatsParameters: chats instanceof Array?chats:[chats],
        lang: navigator.language,
        needLoadCode: true,
        embedParamsVersion: localStorage['embedParamsVersion'],
        chatbroScriptVersion: localStorage['chatbroScriptVersion']
      };
      var processParams: string = btoa(unescape(encodeURIComponent(JSON.stringify(params))));
      $.ajax({
        url: `https://chatbro.com/embed.js?${processParams}`,
        method: 'GET',
        data: {},
        xhrFields: {
          withCredentials: !0
        },
        async: async1,
        success: (response)=>{
          resolve(true);
          eval(response);
        },
        error: (error)=>{
          reject(error);
        }
      });
    });
  }
  chatBroStart(chats: chats, async?: any) {
    this.chatbroLoader(chats).then(()=>{
      if (this.showError) {
        this.notify.push({
          title: 'Chat en linea cargado.',
          body: `Se recupero el chat en línea luego de ${String(this.retryIntents)} ${(this.retryIntents >= 1)? 'intento': 'intentos'}.`
        });
        this.retryIntents = 0;
        this.showError = false;
      }
    }).catch(()=>{
      if (!this.showError) {
        this.notify.push({
          title: '¡¡¡Atención!!!',
          body: 'Ocurrió un error al cargar el chat en línea.'
        });
        this.showError = true;
      }
      this.retryIntents += 1;
      setTimeout(()=>this.chatBroStart(chats), 1500);
    });
  }
  init() {
    this.chatBroStart({
      encodedChatId: '062UM',
      chatLanguage: 'es',
      chatState: 'minimized',
      chatBottom: '12px',
      chatRight: '12px',
      minimizedChatBorderRadius: '6px',
      minimizedChatBottom: '16px',
      minimizedChatRight: '16px',
      showChatBorder: false,
      allowResizeChat: false,
      minimizedChatTitle: 'Chat'
    });
  }
}
