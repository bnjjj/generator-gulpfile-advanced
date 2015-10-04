'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');
var yosay = require('yosay');
var fs = require('fs');

var gulpfileGenerator = module.exports = generators.Base.extend({
  initializing: function () {
    var self = this;
    var done = self.async();
    self.vars = {};
    self.log(yosay('Welcome to your favorite gulpfile generator by Bnjjj'));

    fs.readdir(self.templatePath('./../..'), function (err, files) {
      if (err) {
        self.log('Error : ' + err);
        return done();
      }
      self.modules = createModulesConfig(files);
      return done();
    });
  },

  prompting: function () {
    var self = this;
    var done = self.async();

    self.prompt({
      type: 'checkbox',
      name: 'modules',
      message: 'Which modules would you like to use?',
      choices: self.modules
    }, function (answers) {
      _.assign(self.vars, answers);
      done();
    });
  },

  configuring: function () {
    var self = this;

    _.forEach(self.vars.modules, function (module) {
      self.composeWith('gulpfile:' + module);
    });
  },

  writing: function () {
    var self = this;
    self.template(self.templatePath(), self.destinationPath(), self.vars);
  },

  install: function () {
    var self = this;
    self.npmInstall(['gulp-concat', 'gulp-load-plugins', 'lodash', 'require-dir'], { 'saveDev': true });
    self.installDependencies();
  },

  end: function () {
    this.log(yosay('Have fun !'));
  }
});

function createModulesConfig(files) {
  return _.map(_.without(files, 'app'), function (generatorDir) {
    return {
      value: generatorDir,
      name:  generatorDir === 'custom' ? generatorDir : ['gulp', generatorDir].join('-'),
      checked: false
    };
  });
}
