var gulp = require('gulp'),
  requireDir = require('require-dir'),
  $ = require('gulp-load-plugins')({scope: ['devDependencies']});

requireDir('./gulp-scripts', {recurse: true});

gulp.task('default', ['server']);
