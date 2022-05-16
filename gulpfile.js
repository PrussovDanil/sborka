//Инициализация 

const {watch, series,parallel }= require("gulp");
const browserSyns  = require("browser-sync").create(); 


//Конфигурация 

const path = require("../config/path.js");


//Задачи 
const clear = require ('./task/clear.js')
const pug = require ('./task/pug.js')

//Сервер

const server = () =>{
  browserSyns.init({
    server:{
      baseDir: path.root
    }
  });
}


//Наблбдатель
const watcher = ()=>{
  watch(path.pug.watch, pug).on("all", browserSyns.reload);
}


//ЗАДАЧИ
exports.pug = pug;
exports.watch = watcher;
exports.clear = clear;

//Сборка 

exports.dev = series(clear,pug, parallel(watcher, server) );