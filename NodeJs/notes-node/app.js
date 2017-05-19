console.log("Starting App.js");

const fs = require("fs");
const _  =require("lodash");
const yargs = require("yargs");

const argv = yargs.argv;
const notes = require("./notes.js")
console.log(argv);
