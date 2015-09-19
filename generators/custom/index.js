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
      name: 'customName',
      message: 'What would you call your custom task?',
      default: 'myCustomTask'
    }, {
      type: 'value',
      name: 'tasks',
      message: 'Which tasks do you want in your custom task?',
      default: 'webserver, sass, minify-html'
    }], function (answers) {
      _.assign(self.vars, answers);
      done();
    });
  },

  writing: function () {
    var self = this;
    self.template(self.templatePath('custom.js'), self.destinationPath('./gulp-scripts/' + self.vars.customName + '.js'), self.vars);
  },

  install: function () {
    var self = this;

    self.installDependencies();
  },

  end: function () {

  }
});
