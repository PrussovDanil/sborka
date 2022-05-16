//Инициализация 

const {src, dest,watch, series,parallel }= require("gulp");



//Плагин 

const plumber= require("gulp-plumber");
const notify =require("gulp-notify");
const fileInclude= require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");

//Конфигурация 

const path = require("../config/path.js");
const app = require("../config/app.js");

//Обработка Htmll


const html = () =>{
  return src(path.html.src)
  .pipe(plumber({
    errorHandler : notify.onError()
  }))
  .pipe(fileInclude())
  .pipe(size({title :"After min"}))
  .pipe(htmlmin(app.htmlmin))
  .pipe(size({title :"Before min"}))
  .pipe(dest(path.html.dest));
}

module.exports = html;