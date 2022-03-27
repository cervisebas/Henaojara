import * as packager from 'electron-packager';
import * as pkg from '../../package.json';

const options = {
    overwrite: true,
    asar: true,
    platform: 'win32',
    arch: 'ia32',
    icon: './electron/icons/win/icon.ico',
    prune: true,
    dir: './electron/app',
    out: './electron/build/packager',
    appVersion: pkg.version,
    appCopyright: pkg.copyright,
    name: pkg.name.charAt(0).toUpperCase()+pkg.name.slice(1),
    win32metadata: {
    	CompanyName: pkg.author,
    	ProductName: pkg.name.charAt(0).toUpperCase()+pkg.name.slice(1),
    	FileDescription: pkg.description,
    	OriginalFilename: `${pkg.name.charAt(0).toUpperCase()+pkg.name.slice(1)}.exe`
    }
};

console.log(`Compilando app Electron: "${options.name}-V${options.appVersion}"`);

packager(options).then((value)=>{
    console.log('Compilacion terminada!!!');
    console.log(value);
}).catch((reason)=>{
    console.log('Ocurrio un error.');
    console.log(reason);
});