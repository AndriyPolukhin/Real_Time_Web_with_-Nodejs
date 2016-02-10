// write some node code finally!
function printHelp() { 
	console.log("3.js David Judilla");
	console.log("");
	console.log("usage:");
	console.log("--help 			print this help");
	console.log("--file 			read and print this {NAME}");
}

var args = require('minimist')(process.argv.slice(2), { string: "file"});

if (args.help || !args.file){
	printHelp();
	process.exit(1);
}

var hello = require("./helloworld3.js");

hello.say(args.file)
.val(function(contents){
	console.log(contents.toString());
})
.or(function(err){
	console.error("Error:" + err);
})