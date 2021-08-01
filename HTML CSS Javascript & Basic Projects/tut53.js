console.log("This page is working");
let name1 = "Bhairu";
let name2 = "Anshuman";
let name3 = "Pratik";
let name4 = "CyberZeal";

let prof1 = "hacker";
let prof2 = "gamer";
let prof3 = "Youtuber";
let prof4 = "teacher";
// We will create a function here to perform a single task whenever the function is called or invoked.
// function greet(para1){
// 	// console.log(para1 + " is a hacker")
// }
// greet(name1);
// Syntax Explained: function *function_name*(parameter){
	// *action to be performed*
	// Here it is console.log(para1 + "*some text*")} WHILE DECLARING A FUNCTION THE PARA SHOULD BE SAME OR ELSE THE FUNTION WILL THROW AN ERROR
function job(name, profession){
	let output = console.log(name + " is a " + profession + " by profession");
	return output;
}
let returnVal = job(name1, prof1);
console.log(returnVal);