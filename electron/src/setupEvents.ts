import { app } from 'electron';
import * as ChildProcess from 'child_process';
import * as path from 'path';

export class SetupEvents {
    constructor() {}
    handleSquirrelEvent(): any {
        if (process.argv.length === 1) return false;
        const appFolder = path.resolve(process.execPath, '..');
        const rootAtomFolder = path.resolve(appFolder, '..');
        const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
        const exeName = path.basename(process.execPath);
        const spawn = (command: string, args: string[])=>{
            var spawnedProcess: any = undefined;
            spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
            return spawnedProcess;
        };
        const spawnUpdate = (args: string[])=>spawn(updateDotExe, args);
        const squirrelEvent = process.argv[1];
        switch (squirrelEvent) {
            case '--squirrel-install':
            case '--squirrel-updated':
                spawnUpdate(['--createShortcut', exeName]);
                setTimeout(app.quit, 1000);
                return true;
            case '--squirrel-uninstall':
                spawnUpdate(['--removeShortcut', exeName]);
                setTimeout(app.quit, 1000);
                return true;
            case '--squirrel-obsolete':
                app.quit();
                return true;
        }
    }
}