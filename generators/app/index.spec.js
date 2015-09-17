'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');
var genOptions = {
  'appPath': 'generators',
  'skip-install': true,
  'skip-welcome-message': true,
  'skip-message': true
};

describe('gulpfile', function () {
  describe('without modules', function () {
    before(function (done) {
      helpers.run(path.join( __dirname, '../app'))
        .withPrompts({ modules: [] }) // Mock the prompt answers
        .on('ready', function (generator) {
          // This is called right before `generator.run()` is called
        })
        .on('end', done);
    });

    it('generate a gulpfile.js file', function () {
      assert.file(['gulpfile.js']);
    });
  });

  // describe('with jshint and uglify modules', function () {
  //   before(function (done) {
  //     var jshintGen = helpers.createGenerator('gulpfile:jshint', [
  //       '../jshint'
  //     ]);
      
  //     jshintGen.run({})
  //       // .withGenerators([
  //       //   'gulpfile:jshint'
  //       // ])
  //       .withPrompts({ modules: ['jshint'] }) // Mock the prompt answers
  //       .on('ready', function (generator) {
 
  //         // This is called right before `generator.run()` is called
  //       })
  //       .on('end', done);
  //   });

  //   it('generate a gulpfile.js file and tasks files', function () {
  //     assert.file(['gulpfile.js', 'gulp-scripts/jshint.js']);
  //   });
  // });
});