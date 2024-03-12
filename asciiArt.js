/* 
Name: Mary Nansikombi
Date:1/20/2022
Description:Program that transforms text from a command line argument  into ascii art
sources
https://www.npmjs.com/package/figlet?activeTab=readme
https://nodejs.org/dist/latest-v18.x/docs/api/process.html#processargv
*/
import { argv } from 'node:process';
import figlet from 'figlet';
console.log(process.argv[2]);
figlet(argv[2], function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
}); 
