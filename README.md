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

