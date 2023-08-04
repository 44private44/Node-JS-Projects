// Common JS Module
// const data = require('./moduleFirst');

// data();


// ES6 JS Module  => "type": "module" must in package.json
// 1) 
// import {tempCommon} from "./moduleFirst.mjs";
// tempCommon()

// 2) 
import {tempCommon as data} from "./moduleFirst.mjs";
data()