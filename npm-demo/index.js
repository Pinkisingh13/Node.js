
/// ---- NODE PACKAGE MANAGER - Section 2 ----

// Video no: 1 - Introduction
// Npm is a command line tool as well as a registery of third party libraries that we can  add in our applications. It is a free open-source library or package or node module.
// npm -v --> to know the version of npm
// npm i -g npm@5.5.1 --> to install the npm globally with specific version.


/// Video no: 2 - Package.json
//Before adding any packages in the application we have to first create package.json file. Package.json is a json file that basically includes some basic information about our application Its basically a bunch of meta data about our application. 
// To create a package.json file run --> npm init. It is going to ask a bunch of questions if you want to skip questions press enter and at the end it ask you to enter yes and then you have your package.json file ready. And after creating it you can chage its data.
// And there is one more way if you dont want to write anything in your package.json while creating it you can run --> npm init --yes this will create package.json directly without asking questions. 


///Vide no: 3 - Installing Node Package
// i m going to install a popular js library called underscore. 
// go to npmjs.com --> search package name underscore --> npm i underscore in your terminal to istall it
// it will add this dependency name in your package.json's dependecies property. And  then it will store it inside a folder called node_modules


/// Video no:4 - Using a Package
var underscore = require('underscore');

// when we supply the module name, first require function assumes that this module is a Core Module, But in Node, we don't have a core module called underscore. So the require function thinks may be this underscore is a file, or a folder in this project. However, we know that in order to reference a file and folder we use ./ so if the requirement to the require function ./ underscore, then the require function would assume that here we have a file called underscore.js in the same folder. 
// But there is no module called underscore.js so require function jump to the third step. It assumes that this module we have specified here exists inside tthe node modules folder.

// var result = _.contains([1,2,3],2);
// console.log(result);


///Video no: 5 - Package Dependencies
// node_modules folder contains all the dependencies which we install from npm and also contains their  dependecies. 

///Video no: 6 - NPM Packages and Source Control
// Since it contains so many dependency if we add in our application and the size of node_modules folder will grow significantly. SO, we should exclude node_modules folder from our source control repository. 


///Video no: 7 - Sementic Versioning
// Sementic versioning is also called SemVer. In sementic versioning, the version of a Node package has three components,  Suppose, version is ^4.13.6 -->
// ^ this character at the starting of the version is called carot character that tell npm that we're interested in any version of Mongoose as long as the major version is 4. 
// The first number is what we call the major version.
//second is called minor version.
// And the third one is what we call the patch version or patch realese, ehich is used for bug fixes.

///Video no: 8 - Listing the Installed Package
// npm list ---> is the command to  get  all the installed dependecies list and their exact version. It show all the dependencies and their dependencies. 
// But if you want to get only dependencies of application. Not the dependencies of these other packages, then you run ---> npm list --depth=0


///Video no: 9 - Viewing Registery Info for a Package
// if you want to learn about a package you an search package name.
// you can run ---> npm view <package name> it show you package.json file of that npm package.  Or
// you can run ---> npm view <package name> dependencies. to get only dependencies of that package


///Video no: 10 -Installing a Specific Version of a Package

///Video no: 11 - Dev Dependencies
// npm i jshint --save-dev ---> to install dependencies as dev-dependency


///Video no: 12 -   Uninsatalling a Package 
// run npm un mongoose ---> to uninstall a package.




///Video no: 10 -Updating Local Packages


