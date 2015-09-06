'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');
var yosay = require('yosay');

var gulpfileGenerator = module.exports = generators.Base.extend({
  initializing: function () {
    this.vars = {};
    this.log(yosay('Welcome in your favorite gulpfile generator by Bnjjj'));
  },

  prompting: function () {
    var self = this;
    var done = self.async();

    self.prompt({
      type: 'checkbox',
      name: 'modules',
      message: 'Which modules would you like to use ?',
      choices: [{
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
          value : 'jslint',
          name: 'gulp-jslint',
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
          value : 'minify-html',
          name: 'gulp-minify-html',
          checked: false
        },
        {
          value : 'ngAnnotate',
          name: 'gulp-ng-annotate',
          checked: false
        },
        {
          value : 'minify-js',
          name: 'gulp-uglify',
          checked: false
        },
        {
          value : 'minify-css',
          name: 'gulp-minify-css',
          checked: false
        }
      ]
    }, function (answers) {
      _.assign(self.vars, answers);
      done();
    });
  },

  configuring: function () {
    var self = this;

    if (self.vars.modules.indexOf('webserver') !== -1) {
      self.composeWith('gulpfile:webserver');
    }

    if (self.vars.modules.indexOf('jshint') !== -1) {
      self.composeWith('gulpfile:jshint');
    }
  },

  writing: function () {
    var self = this;
    self.template(self.templatePath(), self.destinationPath(), self.vars);
  },

  install: function () {
    var self = this;
    self.installDependencies();
  },

  end: function () {
    this.log('Have fun !');
  }
});
