'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

describe('gulpfile:minify-html', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../minify-html'))
      .withPrompts({ modules: ['minify-html'] }) // Mock the prompt answers
      .on('ready', function (generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('generate a minify-html.js file', function () {
    assert.file(['./gulp-scripts/minify-html.js']);
  });
});