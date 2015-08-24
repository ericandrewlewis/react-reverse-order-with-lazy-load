var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./index.js');
  return b.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./dist'));
});