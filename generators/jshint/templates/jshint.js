var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  scope: ['dependencies']
});

gulp.task('jshint', function () {
  return gulp.src([<% var tab = srcLint.split(','); for(var i = 0; i < tab.length; i++) { %>'<%=tab[i].replace(' ', '')%>'<% if (i !== tab.length - 1) {%>,<% } %>
    <%}%>])
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'));
});