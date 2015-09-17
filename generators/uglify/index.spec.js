'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

describe('gulpfile:uglify', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../uglify'))
      .withPrompts({ modules: ['uglify'] }) // Mock the prompt answers
      .on('ready', function (generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('generate a uglify.js file', function () {
    assert.file(['./gulp-scripts/uglify.js']);
  });
});