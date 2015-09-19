#gulpfile-generator-advanced [![Build Status](https://travis-ci.org/bnjjj/generator-gulpfile-advanced?branch=master)](https://travis-ci.org/bnjjj/generator-gulpfile-advanced)

> A generator powered by [Yeoman](http://yeoman.io/) which gives a user the abilitiy to create all [Gulp](http://gulpjs.com) tasks they need to build, run or develop one's application. 

[![NPM](https://nodei.co/npm/generator-gulpfile-advanced.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/generator-gulpfile-advanced/)

#Prerequisites
```
$ npm install -g yo generator-gulpfile-advanced
```

#Usage
+ Go to the root path of your project
+ To launch global generator:
```
$ yo gulpfile-advanced
```
+ Then select the tasks you want in your application
+ To launch sub-generator in order to add new tasks (after launching the global generator):
```
$ yo gulpfile-advanced:taskName
```
+ And now you can launch your task with gulp:
```
$ gulp taskName
```
+ Or launch in watch mode:
```
$ gulp taskName:watch
```

+ With the "custom" sub-generator you have the ability to make a custom task with existant tasks in your gulpfiles
+ For example if I want to create a task named "dev" which can transpile less, create a webserver and minify html:
```
$ yo gulpfile:custom
What would you call your custom task?
> dev
Which tasks do you want in your custom task ?
> less:watch, webserver:watch, minify-html:watch
```

#Sub-generators
+ [gulpfile-advanced:webserver](https://github.com/bnjjj/gulpfile-subgenerator-webserver)
+ [gulpfile-advanced:babel](https://github.com/bnjjj/gulpfile-subgenerator-babel)
+ [gulpfile-advanced:eslint](https://github.com/bnjjj/gulpfile-subgenerator-eslint)
+ [gulpfile-advanced:jshint](https://github.com/bnjjj/gulpfile-subgenerator-jshint)
+ [gulpfile-advanced:less](https://github.com/bnjjj/gulpfile-subgenerator-less)
+ [gulpfile-advanced:sass](https://github.com/bnjjj/gulpfile-subgenerator-sass)
+ [gulpfile-advanced:minify-html](https://github.com/bnjjj/gulpfile-subgenerator-minify-html)
+ [gulpfile-advanced:uglify](https://github.com/bnjjj/gulpfile-subgenerator-uglify)
+ [gulpfile-advanced:ng-annotate](https://github.com/bnjjj/gulpfile-subgenerator-ng-annotate)
+ [gulpfile-advanced:ng-constant](https://github.com/bnjjj/gulpfile-subgenerator-ng-constant)
+ [gulpfile-advanced:mocha](https://github.com/bnjjj/gulpfile-subgenerator-mocha)
+ And so much more if you contribute and create your own sub-generator

#Development installation
```
$ git clone https://github.com/bnjjj/gulpfile-generator.git
$ git submodule init
$ git submodule update
$ cd generator-gulpfile
$ npm link
```

#Contributing

+ The long goal of this generator is for it to be used with other sub-generators - ones I haven't developed too. Each sub-generator is isolated in its own git repository so that everyone can request pulls or file more precise issues.

+ Furthermore you can develop your own sub-generator; after you have tested don't hesitate to request a pull so that I can integrate it as a sub-module in the main generator. This way you will still be the sole owner of your work and are free to edit it as you please.

+ Here are the pre-requisites for your pull requests to be accepted:
  - Have your files well documented
  - Have automated tests
  - Keep the same structure so as to keep everything unified

+ The structure of the sub-generators has to be as follows:
  - One file per task
  - Task files have to be located in the "templates" directory et bear the same name as the task
  - An "index.js" file at the root of your sub-generator will allow for configuration


+ If you're interested in developing:
  - Clone the project and integrate your own generator in the "generators" directory
  - When you're done with development, integrate as a Git sub-module


-------------

Made by [Coenen Benjamin](https://twitter.com/BnJ25) with love

