"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var packager = require("electron-packager");
var pkg = require("../../package.json");
var options = {
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
    name: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1),
    win32metadata: {
        CompanyName: pkg.author,
        ProductName: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1),
        FileDescription: pkg.description,
        OriginalFilename: "".concat(pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1), ".exe")
    }
};
console.log("Compilando app Electron: \"".concat(options.name, "-V").concat(options.appVersion, "\""));
packager(options).then(function (value) {
    console.log('Compilacion terminada!!!');
    console.log(value);
}).catch(function (reason) {
    console.log('Ocurrio un error.');
    console.log(reason);
});
