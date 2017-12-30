var Jimp = require("jimp");
var fs = require('fs');

var base = "C:/Users/Daniel/Google Drive/Chaotic_Backup/Mugic/"
var tribe = "UnderWorld/";
var directory = base + "Card/" + tribe;

var files = fs.readdirSync(directory);

files.forEach(function(item) {
	Jimp.read(directory+item).then(function (image) {
		image.crop(12, 37, 239-12, 206-37)
		image.cover(100, 96);
		if (!fs.existsSync(base+"Thumbnail/"+tribe+item)) {
			// console.log("write")
			image.write(base+"Thumbnail/"+tribe+item);
		}
	}).catch(function (err) {
	    // handle an exception
	    console.log(item, err);
	});;
});

