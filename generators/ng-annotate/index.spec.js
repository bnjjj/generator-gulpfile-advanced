'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

describe('gulpfile:ng-annotate', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../ng-annotate'))
      .withPrompts({ modules: ['ng-annotate'] }) // Mock the prompt answers
      .on('ready', function (generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('generate a ng-annotate.js file', function () {
    assert.file(['./gulp-scripts/ng-annotate.js']);
  });
});