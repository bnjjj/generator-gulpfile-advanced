var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src([<% var tab = srcLint.split(','); for(var i = 0; i < tab.length; i++) { %>'<%=tab[i].replace(' ', '')%>'<% if (i !== tab.length - 1) {%>,<% } %>
        <%}%>])
        .pipe(eslint.eslint())
        .pipe(eslint.eslint.format());
});
