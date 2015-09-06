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
      name: 'configFile',
      message: 'What is your relative path for your config file for your angular constants (ngConstant) ?',
      default: './config.json'
    }, {
      type: 'value',
      name: 'dist',
      message: 'What is your relative directory path for your angular constants declaration (ngConstant) ?',
      default: './dist'
    }], function (answers) {
      _.assign(self.vars, answers);
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
    self.npmInstall(['gulp-ng-constant'], { 'save': true });
  },

  end: function () {

  }
});
