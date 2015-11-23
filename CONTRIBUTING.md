# Development installation
```
$ git clone https://github.com/bnjjj/gulpfile-generator.git
$ git submodule init
$ git submodule update
$ cd generator-gulpfile
$ npm link
```

# Contributing

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