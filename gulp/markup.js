var gulp = require('gulp');
var argv = require('yargs').argv;
var lazypipe = require('lazypipe');
var useRef = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function() {

  var
    shouldSourcmap =  function() {
      return argv.sourcemap && !argv.debug;
    },
    jsPipe = lazypipe()
      .pipe(function() {
        return gulpif(shouldSourcmap, sourcemaps.init({loadMaps: true}));
        })
      .pipe(function() {
        return gulpif(!argv.debug, uglify());
        })
      .pipe(function() {
        return gulpif(shouldSourcmap, sourcemaps.write());
        });

  return gulp.src('public/src/*.html')
    .pipe(useRef())
    .pipe(gulpif('*.js', jsPipe()))
    .pipe(gulp.dest('public/dist'));
}
