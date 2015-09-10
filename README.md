#Prerequisites
```
$ npm install -g yo generator-gulpfile
```

#Development installation
```
$ git clone ...
$ cd generator-gulpfile
$ npm link
```

#Utilisation
+ Go to the root path of your project
+ To launch global generator
```
$ yo gulpfile
```
+ To launch sub-generator in order to add new tasks (after launching the global generator)
```
$ yo gulpfile:taskName
```

#Contributing
TODO...

#Roadmap

+ Typescript, jade, react, browserify, html-replace, jsx, karma
+ Créer un générateur personnalisé permettant de créer ses propres tasks à partir des autres, (créer des workflows perso)
+ Créer un guide de contribution pour créer des sous générateurs
+ Continuer de réfléchir à un système facilitant l'intégration de ces sous générateurs
+ Sortir tous les sous générateurs et en faire des sub modules