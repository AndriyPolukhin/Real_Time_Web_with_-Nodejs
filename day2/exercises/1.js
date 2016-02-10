// write some node code finally!
function printHelp() { 
	console.log("1.js David Judilla");
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

var hello = require("./helloworld.js");

var contents = hello.say(args.file, function(err, contents){
	if (err){
		console.error("Error" + err);
	}else{
		console.log(contents.toString());
	}
});
