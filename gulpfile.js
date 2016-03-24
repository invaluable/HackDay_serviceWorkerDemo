var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');

// Part of the build process
var copy = require('./gulp/copy');
var scripts = require('./gulp/scripts');
var markup = require('./gulp/markup');
var lint = require('./gulp/lint');
var test = require('./gulp/test');
var swCopy = require('./gulp/swCopy');

gulp.task('lint', lint);

gulp.task('copy', copy);

gulp.task('markup', markup);

gulp.task('test', test);

gulp.task('swCopy', swCopy);

gulp.task('markup:watch', function(){
  gulp.watch('public/src/**/*.html', ['markup']);
});

gulp.task('sw:watch', function(){
  gulp.watch('public/src/js/sw.js', ['swCopy']);
});

gulp.task('scripts:build', function(){
  scripts.build();
});

gulp.task('scripts:watch', function(){
  scripts.watch();
});

gulp.task('clean', function(cb) {
  del(['public/dist', 'public/temp'], cb);
});

gulp.task('dev', function(callback){

  runSequence('scripts:watch', 'sw:watch', 'markup', 'markup:watch', 'copy', callback);

});

gulp.task('default', function(callback){

  runSequence('lint', 'scripts:build', 'swCopy', 'markup', 'copy', callback);

});
