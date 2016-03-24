'use strict';
var 
  gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  fs = require('fs');

module.exports = function() {

  var esLog = fs.createWriteStream('./eslint_output.log');

  return gulp.src(['./public/src/js/!(vendor|partials)**/**/*.js'])
    .pipe(eslint({
      rulePaths: [
        './'
      ],
      globals: {
        '$': true
      },
//      parser: "babel-eslint",
      ecmaFeatures: {
        modules: true,
        blockBindings: true,
        templateStrings: true
      },
      envs: [
        'browser'
      ]
    }))
    .pipe(eslint.format())
    .pipe(eslint.format('compact', esLog));
};