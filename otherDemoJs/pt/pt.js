var pictureTube = require('picture-tube');
var tube = pictureTube();
tube.pipe(process.stdout);
 
var fs = require('fs');
fs.createReadStream('1188187342903.png').pipe(tube);