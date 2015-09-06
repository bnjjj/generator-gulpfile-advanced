var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('ngAnnotate', function () {
  return gulp.src('<%= src %>/**/*.js')
      .pipe(ngAnnotate())
      .pipe(gulp.dest('<%= dist %>'));
});