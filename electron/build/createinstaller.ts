import { createWindowsInstaller } from 'electron-winstaller';
import * as path from 'path';
import * as pkg from '../../package.json';

(async()=>{
    console.log('Creando instalador...');
    try {
        await createWindowsInstaller({
            appDirectory: path.resolve(__dirname, './packager/henaojara-win32-ia32/'),
            outputDirectory: path.resolve(__dirname, './installer'),
            authors: pkg.author,
            exe: 'Henaojara.exe',
            description: pkg.description,
            version: pkg.version,
            name: pkg.name.charAt(0).toUpperCase()+pkg.name.slice(1),
            iconUrl: path.resolve(__dirname, '../icons/win/icon.ico'),
            setupIcon: path.resolve(__dirname, '../icons/win/icon.ico'),
            setupExe: `${pkg.name}-${pkg.version}.exe`,
            setupMsi: `${pkg.name}-${pkg.version}.msi`,
            noMsi: true,
            loadingGif: path.resolve(__dirname, '../installing.gif')
        });
        console.log('Instalador creado exitosamente!!!');
    } catch (error) {
        console.log('Ocurrio un error...');
        console.log(error);
    }
})();