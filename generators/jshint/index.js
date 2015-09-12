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

    self.prompt([{
      type: 'value',
      name: 'srcLint',
      message: 'What is your relative directories path do you want to lint (jshint)? (ie: ./lib/*.js, ./app/**/*.js)',
      default: './app/**/*.js'
    }], function (answer) {
      _.assign(self.vars, answer);
      done();
    });
  },

  writing: function () {
    var self = this;

    self.template(self.templatePath(), self.destinationPath('./gulp-scripts'), self.vars);
  },

  install: function () {
    var self = this;

    self.installDependencies();
    self.npmInstall(['gulp-jshint'], { 'saveDev': true });
  },

  end: function () {

  }
});
