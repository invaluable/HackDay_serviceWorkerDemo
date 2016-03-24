var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var livereload = require('gulp-livereload');

function compile(watch) {

  var bundler = (function(){

    if (watch) {
      return watchify(browserify('public/src/js/app.js', { debug: true }).transform(babel.configure({
        presets: ["es2015"]
      })));
    }

    return browserify('public/src/js/app.js', { debug: true }).transform(babel.configure({
      presets: ["es2015"]
    }));

  })();

  function rebundle() {

    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/dist/js'))
      .pipe(livereload());
  }


  function bundle() {

    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/dist/js'));
  }

  if (watch) {
    livereload.listen();
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }
  else {
    console.log('building........');
  }

  bundle();
}

function watch() {
  return compile(true);
}

module.exports = {

  build: compile,
  watch: watch

};
