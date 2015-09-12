'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({scope: ['devDependencies']});

gulp.task('mocha', function () {
  gulp.src('<%= src %>', {read: false})
    .pipe($.mocha())<%if (!notify) {%>;<%}%>
    <% if (notify) {%>.on('error', function(err) {
      return $.notify().write(err);
    });<%}%>
});

gulp.task('mocha:watch', function () {
  gulp.watch('<%= srcWatch %>', ['mocha']);
});