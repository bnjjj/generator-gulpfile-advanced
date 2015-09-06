var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function () {
  return gulp.src([<% var tab = srcLint.split(','); for(var i = 0; i < tab.length; i++) { %>'<%=tab[i].replace(' ', '')%>'<% if (i !== tab.length - 1) {%>,<% } %>
    <%}%>])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});