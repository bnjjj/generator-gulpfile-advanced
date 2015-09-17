'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

describe('gulpfile:jshint', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../jshint'))
      .withPrompts({ modules: ['jshint'] }) // Mock the prompt answers
      .on('ready', function (generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('generate a jshint.js file', function () {
    assert.file(['./gulp-scripts/jshint.js']);
  });
});