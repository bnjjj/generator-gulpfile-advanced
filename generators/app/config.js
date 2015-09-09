'use strict';

module.exports = {
  modules : [{
      value : 'jshint',
      name: 'gulp-jshint',
      checked: true
    },
    {
      value : 'eslint',
      name: 'gulp-eslint',
      checked: false
    },
    {
      value : 'sass',
      name: 'gulp-sass',
      checked: false
    },
    {
      value: 'less',
      name: 'gulp-less',
      checked: false
    },
    {
      value: 'babel',
      name: 'gulp-babel',
      checked: false
    },
    {
      value : 'webserver',
      name: 'gulp-webserver with livereload',
      checked: false
    },
    {
      value : 'ngConstant',
      name: 'gulp-ng-constant',
      checked: false
    },
    {
      value : 'ngAnnotate',
      name: 'gulp-ng-annotate',
      checked: false
    },
    {
      value : 'minify-html',
      name: 'gulp-minify-html',
      checked: false
    },
    {
      value : 'uglify',
      name: 'gulp-uglify (minify-js)',
      checked: false
    },
    {
      value : 'minify-css',
      name: 'gulp-minify-css',
      checked: false
    }
  ]
};