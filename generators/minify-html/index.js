'use strict';
var generators = require('yeoman-generator');
var config = require('./config');
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
      message: 'What is your relative path for your html in order to minify them ?',
      default: './html/**/*.html'
    }, {
      type: 'value',
      name: 'dist',
      message: 'Where do you want to put your html minified files ?',
      default: './dist/html'
    }, {
      type: 'checkbox',
      name: 'opts',
      message: 'Which options would you like to use to minify html (more information on https://www.npmjs.com/package/gulp-minify-html) ?',
      choices: config.opts
    }], function (answers) {
      _.assign(self.vars, answers);
      config.opts.forEach(function (opt) {
        self.vars[opt.value] = self.vars.opts.indexOf(opt.value) !== -1 ? true : false;
      });
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
    self.npmInstall(['gulp-minify-html'], { 'saveDev': true });
  },

  end: function () {

  }
});
