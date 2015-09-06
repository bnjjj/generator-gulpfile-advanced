var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('eslint', function () {
  return gulp.src([<% var tab = srcLint.split(','); for(var i = 0; i < tab.length; i++) { %>'<%=tab[i].replace(' ', '')%>'<% if (i !== tab.length - 1) {%>,<% } %>
    <%}%>])
    .pipe(eslint.eslint())
    .pipe(eslint.eslint.format());
});

gulp.task('eslint:watch', function () {
  gulp.watch([<% var tab = srcLint.split(','); for(var i = 0; i < tab.length; i++) { %>'<%=tab[i].replace(' ', '')%>'<% if (i !== tab.length - 1) {%>,<% } %>
    <%}%>], ['eslint']);
});