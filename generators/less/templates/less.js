'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  scope: ['devDependencies']
});

gulp.task('less', function () {
  return gulp.src('<%= srcCss %>')
    .pipe($.less())
    <% if(concat) {%>.pipe($.concat('<%= concatFile %>'))<%}%>
    .pipe(gulp.dest('<%= distCss %>'));
});

gulp.task('less:watch', function () {
  gulp.watch('<%= srcCss %>', ['less']);
});