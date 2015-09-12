'use strict';
var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');

gulp.task('ng-constant', function () {
  gulp.src('<%= configFile %>')
    .pipe(ngConstant())
    .pipe(gulp.dest('<%= dist %>'));
});