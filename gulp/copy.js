var gulp = require('gulp');
var merge = require('merge-stream');

module.exports = function(){

  var images = gulp.src('public/src/img/**')
    .pipe(gulp.dest('public/dist/img'));

  var css = gulp.src('public/src/css/**')
    .pipe(gulp.dest('public/dist/css'));

  var languages = gulp.src('public/src/languages/**')
    .pipe(gulp.dest('public/dist/languages'));

  var robots = gulp.src('public/src/robots.txt')
    .pipe(gulp.dest('public/dist'));

  var sw = gulp.src('public/src/js/sw.js')
    .pipe(gulp.dest('public/src/js'));

  return merge(images, css, languages, robots);

};
