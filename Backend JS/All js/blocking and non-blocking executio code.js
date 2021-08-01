//Sychronous or Blocking
// Line by line execution

// Aychronous or non-blocking
// Line by line execution not guranteed
//callbacks will fire

const fs = require("fs");

let reader = fs.readFile("module_test.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log(reader);
console.log("This is a message");