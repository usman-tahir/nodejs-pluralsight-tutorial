
(function () {
  'use strict';
  
  var gulp = require('gulp'),
    jsHint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    jsFiles = ['*.js', 'src/**/*.js'];
  
  gulp.task('style', function () {
    return gulp.src(jsFiles)
      .pipe(jsHint())
      .pipe(jsHint.reporter('jshint-stylish', {
        verbose: true
      }))
      .pipe(jscs());
  });
  
}());