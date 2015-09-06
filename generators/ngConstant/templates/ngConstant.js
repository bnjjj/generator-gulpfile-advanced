'use strict';
var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');

gulp.task('ngConstant', function () {
  gulp.src('<%= configFile %>')
    .pipe(ngConstant())
    .pipe(gulp.dest('<%= dist %>'));
});