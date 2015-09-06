'use strict';

var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');

gulp.task('minify-html', function() {
  var opts = {
    conditionals: <%= !conditionals %>,
    spare: <%= !spare %>,
    cdata: <%= !cdata %>,
    comments: <%= !comments %>,
    quotes: <%= !quotes %>,
    loose: <%= !loose %>
  };
 
  return gulp.src('<%= src %>')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('<%= dist %>'));
});

gulp.task('minify-html:watch', function () {
  gulp.watch('<%= src %>', ['minify-html']);
});