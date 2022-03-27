const minify = require('@node-minify/core');
const uglifyjs = require('@node-minify/uglify-js');


minify({
    compressor: uglifyjs,
    input: './electron/app/mainElectron.js',
    output: './electron/app/mainElectron.js',
    callback: function(err, min) {
        console.log('"mainElectron.js" minify!!!');
    }
});
minify({
    compressor: uglifyjs,
    input: './electron/app/setupEvents.js',
    output: './electron/app/setupEvents.js',
    callback: function(err, min) {
        console.log('"setupEvents.js" minify!!!');
    }
});
minify({
    compressor: uglifyjs,
    input: './electron/app/windowOpenPreload.js',
    output: './electron/app/windowOpenPreload.js',
    callback: function(err, min) {
        console.log('"windowOpenPreload.js" minify!!!');
    }
});