(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{425:function(s,t,e){"use strict";e.r(t);var n=e(31),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"structure-et-utilisation-d-un-projet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#structure-et-utilisation-d-un-projet"}},[s._v("#")]),s._v(" Structure et utilisation d'un projet")]),s._v(" "),e("h2",{attrs:{id:"pour-resumer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pour-resumer"}},[s._v("#")]),s._v(" Pour résumer")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("composer install")]),s._v(" pour télécharger le contenu du dossier "),e("code",[s._v("vendor")]),s._v(" (non versionné) ou le mettre à jour à partir du "),e("code",[s._v("composer.lock")])]),s._v(" "),e("li",[e("code",[s._v("composer update")]),s._v(" pour mettre à jour le contenu du dossier "),e("code",[s._v("vendor")]),s._v(" avec les dernières versions disponibles (modifie le "),e("code",[s._v("composer.lock")]),s._v(" et "),e("code",[s._v("symfony.lock")]),s._v(")")]),s._v(" "),e("li",[s._v("La configuration d'un projet Symfony se passe dans "),e("code",[s._v(".env")]),s._v(" ou "),e("code",[s._v(".env.local")]),s._v(" (configuration liée à la machine qui lance le projet) ou dans le dossier "),e("code",[s._v("config")]),s._v(" (configuration des librairies utilisées)")]),s._v(" "),e("li",[e("strong",[s._v("Tous")]),s._v(" les fichiers visibles par les utilisateurs du site (css, js, etc.) sont dans le dossier "),e("code",[s._v("public")])]),s._v(" "),e("li",[s._v("Le code Php que nous allons produire se trouve dans "),e("code",[s._v("src")])]),s._v(" "),e("li",[s._v("Les vues (templates Twig) se trouvent dans "),e("code",[s._v("templates")])])]),s._v(" "),e("h2",{attrs:{id:"structure-d-un-projet-symfony"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#structure-d-un-projet-symfony"}},[s._v("#")]),s._v(" Structure d'un projet Symfony")]),s._v(" "),e("p",[s._v("Regardons le contenu du projet que nous venons de créer. Il contient déjà de nombreux fichiers et dossiers :")]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/img/php/symfony_fichiers.png",alt:""}})]),s._v(" "),e("p",[s._v("Prenons d'abord les dossiers dans l'ordre d'apparition :")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("bin")]),s._v(' : contient les "binaires", des fichiers exécutables en ligne de commande, qui vont nous être utiles dans le développement, mais aussi pour notre application ('),e("code",[s._v("bin/console")]),s._v(" en particulier va beaucoup nous servir)")]),s._v(" "),e("li",[e("code",[s._v("config")]),s._v(" : La configuration des différents éléments du site. Les routes, les services et les configurations des librairies utilisées")]),s._v(" "),e("li",[e("code",[s._v("migrations")]),s._v(" : je l'ai évoqué avec PDO, les fichiers permettant de passer d'une version à l'autre de notre base de données seront rangés ici")]),s._v(" "),e("li",[e("code",[s._v("public")]),s._v(" : la face visible de notre site. Ce dossier est le seul visible par le serveur. Tout se passe autour de l'appel du fichier "),e("code",[s._v("index.php")]),s._v(" (qui est notre front controller)")]),s._v(" "),e("li",[e("code",[s._v("src")]),s._v(" : c'est ici que nous allons travailler la plupart du temps. Ce dossier aura sa présentation à part")]),s._v(" "),e("li",[e("code",[s._v("templates")]),s._v(" : un autre dossier essentiel et que l'on va tout le temps utiliser (sauf si on code une API), car il contient toutes les vues du site (tout le HTML, pour simplifier 😉 )")]),s._v(" "),e("li",[e("code",[s._v("tests")]),s._v(" : le repaire des tests unitaires et fonctionnels")]),s._v(" "),e("li",[e("code",[s._v("translations")]),s._v(" : les traductions de vos textes iront dans ce dossier")]),s._v(" "),e("li",[e("code",[s._v("var")]),s._v(" : des fichiers temporaires (cache, logs, etc.) qui vont servir de ressources pour l'exécution de notre site. Il est géré par Symfony et nous n'avons pas souvent besoin d'y modifier des éléments")]),s._v(" "),e("li",[e("code",[s._v("vendor")]),s._v(" : les librairies dont nous allons nous servir (dont Symfony !). Il est géré par composer et nous n'allons pas souvent en voir le contenu (même si l'on s'en sert 😉 )")])]),s._v(" "),e("p",[s._v("Ensuite, nous avons quelques fichiers à regarder de plus près :")]),s._v(" "),e("ul",[e("li",[e("code",[s._v(".env")]),s._v(" et "),e("code",[s._v(".env.test")]),s._v(" : ces fichiers contiennent des variables d'environnement, qui vont nous permettre de configurer notre site (identifiants de base de données, etc.) pour les différents "),e("strong",[s._v("environnements")]),s._v(" que nous allons utiliser")]),s._v(" "),e("li",[e("code",[s._v("composer.json")]),s._v(", "),e("code",[s._v("composer.lock")]),s._v(" et "),e("code",[s._v("symfony.lock")]),s._v(" : nous permettent de gérer les versions de nos dépendances PHP (librairies externes). Ils sont en général modifiés lors de l'utilisation de commandes "),e("code",[s._v("composer require")]),s._v(", ou "),e("code",[s._v("composer update")]),s._v(" (mais jamais lors d'un "),e("code",[s._v("composer install")]),s._v(")")]),s._v(" "),e("li",[e("code",[s._v(".gitignore")]),s._v(" : liste les fichiers qui ne sont pas versionnés par git dans le projet. Ajouter les vôtres peut être utile (configuration de l'IDE, images uploadées, etc.)")])]),s._v(" "),e("h2",{attrs:{id:"composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[s._v("#")]),s._v(" Composer")]),s._v(" "),e("p",[s._v("Comme nous n'en avons pas parlé jusqu'à maintenant, prenons le temps de voir ce qu'est Composer.")]),s._v(" "),e("p",[s._v("Ils s'agit d'un outil de gestion de dépendances (dependency manager) pour PHP. Tout comme "),e("code",[s._v("npm")]),s._v(" (javascript) et bien d'autres, il permet de choisir les paquets (librairies) dont nous allons avoir besoin et d'en choisir des versions plus ou moins précise. L'intérêt est ici de :")]),s._v(" "),e("ul",[e("li",[s._v("télécharger les librairies dont on a besoin, dans les bonnes versions, et de s'assurer de pouvoir facilement les mettre à jour")]),s._v(" "),e("li",[s._v("s'assurer facilement que les dépendances de notre projet sont toujours bien compatibles entre elles")])]),s._v(" "),e("p",[s._v("Ouvrons maintenant un fichier "),e("code",[s._v("composer.json")]),s._v(" (morceaux choisis) :")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"require"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"php"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('">=7.2.5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ext-ctype"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ext-iconv"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sensio/framework-extra-bundle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^5.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/asset"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/console"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/dotenv"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/expression-language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/flex"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.3.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/form"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/framework-bundle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/http-client"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/intl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/mailer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/mime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/monolog-bundle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^3.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/notifier"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/orm-pack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/process"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/security-bundle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/serializer-pack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/string"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/translation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/twig-pack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/validator"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/web-link"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/yaml"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"require-dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/debug-pack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/maker-bundle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/profiler-pack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony/test-pack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"autoload"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"psr-4"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"App\\\\"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"autoload-dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"psr-4"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"App\\\\Tests\\\\"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tests/"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"auto-scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cache:clear"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"symfony-cmd"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"assets:install %PUBLIC_DIR%"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"symfony-cmd"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"post-install-cmd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@auto-scripts"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"post-update-cmd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@auto-scripts"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extra"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"symfony"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allow-contrib"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"require"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5.2.*"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("Les fichiers "),e("code",[s._v(".lock")]),s._v(" sont là pour assurer les versions précises de nos dépendances. Ils sont versionnés afin d'assurer la cohérence entre développeurs et entre serveurs (on s'assure d'avoir exactement les mêmes versions partout).")]),s._v(" "),e("h3",{attrs:{id:"installer-les-dependances-d-un-projet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installer-les-dependances-d-un-projet"}},[s._v("#")]),s._v(" Installer les dépendances d'un projet")]),s._v(" "),e("p",[s._v("La commande "),e("code",[s._v("composer install")]),s._v(" permet de récupérer les versions définies dans le fichier "),e("code",[s._v(".lock")]),s._v(" (et de mettre à jour votre projet si ce fichier a été modifié).")]),s._v(" "),e("p",[s._v("La commande "),e("code",[s._v("composer update")]),s._v(" tente de mettre à jour vos dépendances, en fonction des contraintes définies dans le fichier "),e("code",[s._v("composer.json")]),s._v(". "),e("strong",[s._v("Attention")]),s._v(", cette commande met à jour le fichier "),e("code",[s._v(".lock")]),s._v(".")]),s._v(" "),e("p",[s._v("Si vous avez besoin d'installer une nouvelle dépendance, il faudra utiliser "),e("code",[s._v("composer require nomDuPaquetAInstaller")]),s._v(". La commande exacte est en général fournie dans la documentation d'installation de la dépendance (et il est préférable de suivre cette source). Certains bundles utilisent des recettes pour créer des fichiers supplémentaires, mettre en place une configuration de base, etc. et il vaut mieux les y autoriser ! Ces recettes sont là pour vous faire gagner du temps, et elles le font bien 😉 .")])])}),[],!1,null,null,null);t.default=r.exports}}]);