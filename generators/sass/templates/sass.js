'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  scope: ['dependencies']
});
 
gulp.task('sass', function () {
  gulp.src('<%= srcCss %>')
    .pipe($.sass().on('error', $.sass.logError))
    <% if(concat) {%>.pipe($.concat('<%= concatFile %>'))<%}%>
    .pipe(gulp.dest('<%= distCss %>'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('<%= srcCss %>', ['sass']);
});