//Importing a module, here i.e. fs-module
const fs = require("fs");

//using the fs module to read the "module_test.txt" file.
let test = fs.readFileSync("module_test.txt", "utf-8");

//This will change the data of the "module_test.txt" file.
test = test.replace("his file is created to run a module and ", "This is again another new file created for test purpose only");
console.log(test);

//This will create a new file that includes the overwritten data.
console.log("Creating a new file");
fs.writeFileSync("test2.txt", test);