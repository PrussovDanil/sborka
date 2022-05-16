
//Инициализация 


const del = require("del");

//Конфигурация 

const path = require("../config/path.js");

//Удаленик директории 

const clear = ()=>{
  return del (path.root);
 
 }
 
 module.exports = clear;