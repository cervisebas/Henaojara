import { app, BrowserWindow, ipcMain, WebRequest } from 'electron';
import { enable as enableWebContents, initialize as initializeRemote } from '@electron/remote/main';
import { SetupEvents } from './setupEvents';
import { notify } from 'node-notifier';
import * as isDev from 'electron-is-dev';
import * as serve from 'electron-serve';
import * as path from 'path';
import * as url from 'url';

const setupEvents = new SetupEvents();
const loadURL = serve({ directory: path.join(__dirname, './app/'), scheme: 'app' });

var appWindow: BrowserWindow;
var splashWindow: BrowserWindow;

type notification = {
    title?: string;
    body: string;
    sound?: boolean;
    icon?: string;
};

function init() {
    initializeRemote();
    if (setupEvents.handleSquirrelEvent()) return false;
    splashWindow = new BrowserWindow({
        width: 260,
        height: 360,
        darkTheme: true,
        frame: false,
        titleBarStyle: 'hidden',
        alwaysOnTop: true,
        fullscreenable: false,
        maximizable: false,
        minimizable: false,
        resizable: false,
        movable: false,
        transparent: false,
        webPreferences: {
            devTools: isDev
        }
    });
    splashWindow.loadURL(url.pathToFileURL(path.join(__dirname, './splash/index.html')).href.toLowerCase());
    splashWindow.webContents.once('dom-ready', ()=>{
        appWindow = new BrowserWindow({
            fullscreenable: false,
            minHeight: 619,
            minWidth: 886,
            darkTheme: true,
            frame: false,
            titleBarStyle: 'hidden',
            show: false,
            webPreferences: {
                nodeIntegration: true,
                devTools: isDev,
                contextIsolation: false,
                webSecurity: false,
                nativeWindowOpen: true
            }
        });
        loadURL(appWindow);
        appWindow.webContents.setWindowOpenHandler((details)=>{
            return {
                action: 'allow',
                overrideBrowserWindowOptions: {
                    fullscreenable: false,
                    titleBarStyle: 'default',
                    autoHideMenuBar: true,
                    frame: true,
                    darkTheme: true,
                    backgroundColor: '#FFFFFF',
                    webPreferences: {
                        nodeIntegration: true,
                        contextIsolation: false,
                        devTools: isDev,
                        preload: path.join(__dirname, 'windowOpenPreload.js')
                    }
                }
            }
        });
        appWindow.webContents.once('dom-ready', ()=>{
            setTimeout(()=>{
                splashWindow.hide();
                splashWindow.destroy();
                appWindow.show();
            }, 2048);
        });
        appWindow.on('maximize', ()=>appWindow.webContents.send('window-maximize', 'true'));
        appWindow.on('unmaximize', ()=>appWindow.webContents.send('window-restore', 'true'));
        appWindow.on('resize', ()=>appWindow.webContents.send('window-resize', 'true'));
        enableWebContents(appWindow.webContents);
        const filters = { urls: ["app://www.chatbro.com/*", "app://chatbro.com/*", "app://*.chatbro.com/*", "http://www.chatbro.com/*", "http://chatbro.com/*", "http://*.chatbro.com/*"] };
        appWindow.webContents.session.webRequest.onBeforeRequest(filters, (details, callback)=>{
            if (details.url.indexOf('app://') !== -1) details.url = `https${details.url.replace('app://', '://')}`;
            if (details.url.indexOf('http') !== -1 && details.url.indexOf('https') === -1) details.url = details.url.replace('http', 'https');
            callback({ cancel: false, redirectURL: details.url });
        });
    });
    ipcMain.on('reload', ()=>{
        appWindow.destroy();
        app.relaunch();
    });
    ipcMain.on('notify', (data, args: notification)=>{
        notify({
            appID: 'Henaojara',
            title: (args.title !== undefined)? args.title : undefined,
            message: args.body,
            sound: (args.sound !== undefined)? args.sound : true,
            icon: (args.icon !== undefined)? args.icon : path.join(__dirname, './icons/64x64.png'),
            wait: false
        });
    });
    ipcMain.on('window-minimize', (event)=>BrowserWindow.fromWebContents(event.sender).minimize());
    ipcMain.on('window-maximize', (event)=>{
        const window = BrowserWindow.fromWebContents(event.sender);
        (window.isMaximized())? window.unmaximize(): window.maximize();
    });
    ipcMain.on('window-close', (event)=>BrowserWindow.fromWebContents(event.sender).close());
    ipcMain.on('window-is-maximized', (event)=>event.returnValue = BrowserWindow.fromWebContents(event.sender).isMaximized());
}

app.setAppUserModelId('Henaojara');
app.on('ready', init);
app.on('activate', ()=>(appWindow === null) && init());