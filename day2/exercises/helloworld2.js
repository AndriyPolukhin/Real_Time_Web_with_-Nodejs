function readFile(filename, cb) {
	var sq = ASQ();

	fs.readFile( filename, sq.errfcb() );
		//error first call back with checks for err, if not it returns that contents
	return sq;
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
