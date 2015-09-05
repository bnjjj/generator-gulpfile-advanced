'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');

var gulpfileGenerator = module.exports = generators.Base.extend({
  initializing: function () {
    this.vars = {};
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
          value : 'livereload',
          name: 'gulp-webserver',
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
      self.log(answers);
      _.assign(self.vars, answers);
      done();
    });
  },

  configuring: function () {
    var self = this;
    var done = self.async();

    self.prompt([{
      type: 'value',
      name: 'srcCss',
      message: 'What is your relative css directory path ?',
      default: './style/css'
    },
    {
      type: 'value',
      name: 'srcHosting',
      message: 'What is your relative directory path for hosting and livereload ?',
      default: './app'
    }], function (answer) {
      _.assign(self.vars, answer);
      done();
    });
  },

  writing: function () {
    var self = this;

    self.fs.copyTpl(
      self.templatePath('../../../templates'),
      self.destinationPath(),
      self.vars
    );
  },

  install: function () {
    var self = this;

    self.installDependencies();
    self.npmInstall(self.vars.modules, { 'save': true });
  },

  end: function () {

  }
});
