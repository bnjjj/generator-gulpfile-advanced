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
      name: 'src',
      message: 'What is your relative path for your js in order to minify them ?',
      default: './app/**/*.js, ./bower_components/**/*.min.js'
    }, {
      type: 'value',
      name: 'dist',
      message: 'Where do you want to put your js minified files ?',
      default: './dist/js'
    }, {
      type: 'value',
      name: 'concat',
      message: 'Do you want to concat your js files into one file (minify-js) ?',
      default: 'yes'
    }], function (answers) {
      answers.concat = answers.concat.indexOf('no') !== -1 ? false : true;
      _.assign(self.vars, answers);
      done();
    });
  },

  configuring: function () {
    var self = this;

    if (self.vars.concat) {
      var done = self.async();
      self.prompt([{
        type: 'value',
        name: 'concatFile',
        message: 'What is the name of your main js file for dist (minify-js) ?',
        default: 'index.js'
      }], function (answer) {
        _.assign(self.vars, answer);
        done();
      });
    }
  },

  writing: function () {
    var self = this;
    self.template(self.templatePath(), self.destinationPath('./gulp-scripts'), self.vars);
  },

  install: function () {
    var self = this;

    self.installDependencies();
    self.npmInstall(['gulp-uglify'], { 'save': true });
  },

  end: function () {

  }
});