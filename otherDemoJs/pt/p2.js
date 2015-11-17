var pictureTube = require('picture-tube')
var tube = pictureTube();
var url
tube.pipe(process.stdout);

var request = require("request");
request('http://i.imgur.com/5X2wo.png').pipe(tube);
