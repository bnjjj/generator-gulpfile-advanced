'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

describe('gulpfile:eslint', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../eslint'))
      .withPrompts({ modules: ['eslint'] }) // Mock the prompt answers
      .on('ready', function (generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('generate a eslint.js file', function () {
    assert.file(['./gulp-scripts/eslint.js']);
  });
});