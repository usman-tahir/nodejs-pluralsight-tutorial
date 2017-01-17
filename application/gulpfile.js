
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
  
  gulp.task('inject', function () {
    var wiredep = require('wiredep').stream,
      options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
      };
    return gulp.src('./src/views/*.html')
      .pipe(wiredep(options))
      .pipe(gulp.dest('./src/views'));
  });
  
}());