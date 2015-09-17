#gulpfile-generator [![Build Status](https://travis-ci.org/bnjjj/generator-gulpfile.svg?branch=master)](https://travis-ci.org/bnjjj/generator-gulpfile)
> Here is a [Yeoman](http://yeoman.io/) generator which gives the abilities to create all gulp tasks you need to build, run or develop your application. 

#Prerequisites
```
$ npm install -g yo generator-gulpfile-advanced
```

#Usage
+ Go to the root path of your project
+ To launch global generator
```
$ yo gulpfile-advanced
```
+ Then select the tasks you want in your application
+ To launch sub-generator in order to add new tasks (after launching the global generator)
```
$ yo gulpfile-advanced:taskName
```
+ And now you can launch your task with gulp
```
$ gulp taskName
```
+ Or launch in watch mode
```
$ gulp taskName:watch
```

+ With the sub-generator custom you have the ability to make a custom task with existant tasks in your gulpfiles
+ For example if I want to create a task named "dev" which can transpile less, create a webserver and minify html
```
$ yo gulpfile:custom
What is the name of your custom task do you want to create ?
> dev
What do you want as tasks in your custom task ?
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

+ Le but de ce générateur n'est pas de se cantoner aux sous générateurs que j'ai développé. Chaque sous générateur est isolé dans un repository git séparé (submodules), ce qui permet à tout le monde d'effectuer des pull requests ou des issues plus précises.

+ De plus vous avez la possibilité de développer votre propre sous générateurs, lorsqu'ils sont tous testés et utilisables n'hésitez pas à me faire une pull request afin que je les intègre en tant que submodule dans le générateur. De cette manière vous rester complètement propriétaire de votre sous générateur et vous êtes libre de le modifier quand vous le souhaitez.

+ Voici les pré-requis pour que vos pull-requests soient acceptées : 
  - Avoir une bonne documentation
  - Avoir mis en place des tests automatisés
  - Garder la même structure que mes sous générateurs afin de garder une uniformité

+ La structure des sous générateur doit être de cette forme :
  - Un fichier par task
  - Les fichiers des tasks doivent se situer dans le répertoire templates et doit porter le même nom que la task
  - Un fichier index.js à la racine de votre sous générateur afin de configurer votre sous générateur

+ Pour développer :
  - Cloner le projet et y intégrer votre générateur dans le dossier "generators"
  - Lorsque votre développement est terminé, l'intégrer en tant que submodules git

#Roadmap

+ Typescript, jade, react, browserify, html-replace, jsx, karma
+ Créer un générateur personnalisé permettant de créer ses propres tasks à partir des autres, (créer des workflows perso)
+ Créer un guide de contribution pour créer des sous générateurs
+ Continuer de réfléchir à un système facilitant l'intégration de ces sous générateurs
+ Sortir tous les sous générateurs et en faire des sub modules

-------------

Made by [Coenen Benjamin](https://twitter.com/BnJ25) with love

