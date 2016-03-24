var gulp = require('gulp');
var merge = require('merge-stream');

module.exports = function(){

  return gulp.src('public/src/js/sw.js')
    .pipe(gulp.dest('public/dist'));

};
