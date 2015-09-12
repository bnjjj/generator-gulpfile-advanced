var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('ng-annotate', function () {
  return gulp.src('<%= src %>/**/*.js')
      .pipe(ngAnnotate())
      .pipe(gulp.dest('<%= dist %>'));
});

gulp.task('ng-annotate:watch', function () {
  gulp.watch('<=% src %>/**/*.js', ['ng-annotate']);
});