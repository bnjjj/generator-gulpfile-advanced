'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  scope: ['dependencies']
});
 
 
gulp.task('minify-js', function () {
  return gulp.src([<% var tab = src.split(','); for(var i = 0; i < tab.length; i++) { %>'<%=tab[i].replace(' ', '')%>'<% if (i !== tab.length - 1) {%>,<% } %>
    <%}%>])
    .pipe($.uglify())
    <% if(concat) {%>.pipe($.concat('<%= concatFile %>'))<%}%>
    .pipe(gulp.dest('<%= dist %>'));
});

gulp.task('minify-js:watch', function () {
  gulp.watch([<% var tab = src.split(','); for(var i = 0; i < tab.length; i++) { %>'<%=tab[i].replace(' ', '')%>'<% if (i !== tab.length - 1) {%>,<% } %>
    <%}%>], ['minify-js']);
});