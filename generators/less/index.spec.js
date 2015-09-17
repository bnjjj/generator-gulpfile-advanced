'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

describe('gulpfile:less', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../less'))
      .withPrompts({ modules: ['less'] }) // Mock the prompt answers
      .on('ready', function (generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('generate a less.js file', function () {
    assert.file(['./gulp-scripts/less.js']);
  });
});