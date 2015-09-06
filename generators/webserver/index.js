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

    self.template(self.templatePath(), self.destinationPath('./gulp-scripts'), self.vars);
  },

  install: function () {
    var self = this;

    self.installDependencies();
    self.npmInstall(['gulp-webserver'], { 'save': true });
  },

  end: function () {

  }
});
