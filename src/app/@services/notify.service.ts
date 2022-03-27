import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';

type notification = {
  title?: string;
  body: string;
  sound?: boolean;
  icon?: string;
};

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor() { }
  push(data: notification) {
    ipcRenderer.send('notify', data);
  }
}
