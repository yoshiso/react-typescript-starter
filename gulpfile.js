var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var sourcemaps = require("gulp-sourcemaps");
var mocha = require("gulp-mocha");
var mochaBabel = require('babel/register');

var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');

var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var react = require('gulp-react');

var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var browserSync =require('browser-sync');


var config = {
  src: {
    js: './__build__/lib/main.js'
  },
  dest: {
    js: './__build__/dest'
  },
  extensions: ['.js', '.json'],
  debug: true
}

function build(isWatch) {
  var browserifier =  browserify({
    entries: [config.src.js],
    extensions: config.extensions,
    debug: config.debug
  })

  function bundle() {
    browserifier
      .bundle()
      .on('error', function(e){ gutil.log.bind(gutil, e.toString())})
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest.js))
  }

  if(isWatch) {
    browserifier = watchify(browserifier)
      .on('update', bundle)
      .on('log', gutil.log);
  }

  return bundle();
}

var tsProject = ts.createProject('tsconfig.json');


// typescript builder
gulp.task('build:ts', function() {
  return gulp.src('src/**/*.{ts,tsx}')
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>") //<-
      }))
      .pipe(buffer())
      .pipe(sourcemaps.init())
        .pipe(ts(tsProject)).js
        .pipe(babel())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./__build__/lib'));
});

gulp.task('build:js', function() {
  return gulp.src('src/**/*.{js,jsx}')
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>") //<-
      }))
      .pipe(buffer())
      .pipe(sourcemaps.init())
        .pipe(babel())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./__build__/lib'));
});


gulp.task('watch:ts', function() {
  gulp.watch('src/**/*.{ts,tsx}', ['build:ts'])
})

gulp.task('watch:js', function() {
  gulp.watch('src/**/*.{js,jsx}', ['build:js'])
})


gulp.task('build:browserify', function(){
  return build(false)
});

gulp.task('watch:browserify', function(){
  return build(true)
});

gulp.task('watch', ['watch:ts', 'watch:js', 'watch:browserify'])

gulp.task('build', ['build:ts', 'build:js', 'build:browserify'])

gulp.task('serve', function() {
    browserSync({
        server: {
             baseDir: ".",       //対象ディレクトリ
             index  : "index.html"      //インデックスファイル
        }
    });
    gulp.watch("./intx.html", ['bs-reload']);
    gulp.watch("./__build__/dest/*",    ['bs-reload']);
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('test', function() {
  return gulp.src('test/**/*.test.js', {read: false})
            .pipe(mocha({
              reporter: 'spec',
              ui: 'bdd',
              compilers: {
                js: require('espower-babel')
              },
              require: [
                "./test/setup.js"
              ]
            }))
})

gulp.task('tdd', function() {
  gulp.watch('__build__/lib/**/*.js', ['test'])
  gulp.watch('test/**/*.js', ['test'])

})

gulp.task('default', ['serve', 'watch', 'tdd']);
