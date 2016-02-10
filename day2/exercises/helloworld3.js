function readFile(filename, cb) {
	return ASQ(function(done){

		var stream = fs.createReadStream(filename);
		var contents = "";

		stream.pipe(fs.createWriteStream(filename+".backup"));

		stream.on("data", function(chunk){
			console.log("data");
			contents += chunk;
		})

		stream.on("end", function(){
			done(contents);
		})
	})
}
// (done, contents) is much like the 
// Promise convention of (resolve, reject) 


function delayMsg(done, contents) { 
	setTimeout(function(){
		done(contents); //done just returns the contents
	}, 1000)
}

function say(filename) {
	return readFile(filename)
		.then(delayMsg);
}

var fs = require('fs');
var ASQ = require('asynquence');
require('asynquence-contrib');

module.exports.say = say;
