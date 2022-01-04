(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{427:function(e,s,t){"use strict";t.r(s);var r=t(31),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installer-symfony-et-son-environnement-de-travail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installer-symfony-et-son-environnement-de-travail"}},[e._v("#")]),e._v(" Installer Symfony et son environnement de travail")]),e._v(" "),t("p",[e._v("Avant de pouvoir travailler concrètement sur Symfony, il faut mettre en place notre environnement de travail.")]),e._v(" "),t("p",[e._v("Pour cela, nous allons installer :")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://getcomposer.org/doc/00-intro.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer, gestionnaire de paquet pour PHP"),t("OutboundLink")],1),e._v(" (ou "),t("a",{attrs:{href:"https://getcomposer.org/Composer-Setup.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("lien direct vers l'installeur"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://symfony.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("l'outil en ligne de commande de Symfony"),t("OutboundLink")],1),e._v(" (ou "),t("a",{attrs:{href:"https://get.symfony.com/cli/setup.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("lien direct vers l'installeur"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("p",[e._v("Si vous utilisez Windows, je vous conseille d'utiliser Powershell pour éviter des erreurs de rendu.")]),e._v(" "),t("p",[e._v("Pour créer un projet Symfony, nous pouvons maintenant utiliser notre ligne de commande (PowerShell dans mon cas) :")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("  symfony new --full my_project\n")])])]),t("p",[e._v("Vous pouvez alors ouvrir ce nouveau dossier avec votre IDE favori. Les deux sous-parties suivantes sont consacrées à la gestion d'un projet Symfony dans notre IDE. Pour la base de données, nous aurons besoin de Wamp/Mamp.")]),e._v(" "),t("h2",{attrs:{id:"plugins-utiles-pour-nos-ide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins-utiles-pour-nos-ide"}},[e._v("#")]),e._v(" Plugins utiles pour nos IDE")]),e._v(" "),t("h3",{attrs:{id:"phpstorm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpstorm"}},[e._v("#")]),e._v(" PHPStorm")]),e._v(" "),t("p",[e._v("Pour installer un plugin dans PHPStorm, aller dans les options, partie "),t("code",[e._v("plugins")]),e._v(" ("),t("code",[e._v("File")]),e._v(" > "),t("code",[e._v("Settings")]),e._v(" > "),t("code",[e._v("Plugins")]),e._v(") et chercher dans la partie "),t("code",[e._v("Marketplace")])]),e._v(" "),t("ul",[t("li",[e._v("Symfony Support")]),e._v(" "),t("li",[e._v(".env files support")]),e._v(" "),t("li",[e._v("OpenAPI (Swagger) Editor")])]),e._v(" "),t("p",[e._v("Voir également la "),t("a",{attrs:{href:"https://www.loom.com/share/8660523dee7141a18461dec7a65e3850",target:"_blank",rel:"noopener noreferrer"}},[e._v("vidéo dédiée à la configuration de PHPStorm"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"vs-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[e._v("#")]),e._v(" VS Code")]),e._v(" "),t("p",[e._v("Pour installer un plugin dans VSCode, aller dans le menu de gauche, partie Extensions (avec 4 petits carrés). Pour chacun de ces plugins, je vous conseille d'en regarder la doc et de suivre son processus d'installation.")]),e._v(" "),t("ul",[t("li",[e._v("DotENV pour mettre de la couleurs dans les fichiers d'environnement ("),t("code",[e._v(".env")]),e._v(")")]),e._v(" "),t("li",[e._v("MySQL (de cweijan) pour faire le lien avec votre base de données ("),t("a",{attrs:{href:"https://www.loom.com/share/09f79db6bd6b4226972ac1017d048257",target:"_blank",rel:"noopener noreferrer"}},[e._v("je vous ai fait une vidéo d'installation et de configuration"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("php cs fixer (de junstyle)")]),e._v(" "),t("li",[e._v("PHP Debug (de Felix Becker)")]),e._v(" "),t("li",[e._v("PHP Getters & Setters (de phproberto)")]),e._v(" "),t("li",[e._v("PHP Intelephense (de Ben Mewburn)")]),e._v(" "),t("li",[e._v("Symfony for VSCode (de TheNouillet)")]),e._v(" "),t("li",[e._v("Twig Language 2 (de mblode)")])]),e._v(" "),t("h2",{attrs:{id:"outils-d-amelioration-du-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outils-d-amelioration-du-code"}},[e._v("#")]),e._v(" Outils d'amélioration du code")]),e._v(" "),t("h3",{attrs:{id:"php-cs-fixer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-cs-fixer"}},[e._v("#")]),e._v(" Php CS Fixer")]),e._v(" "),t("p",[e._v("Symfony suit "),t("a",{attrs:{href:"https://www.php-fig.org/psr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("les conventions d'écriture PSR"),t("OutboundLink")],1),e._v(", mais il n'est pas toujours aisé de les appliquer au quotidien. Heureusement, des outils comme "),t("a",{attrs:{href:"https://cs.symfony.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Php CS Fixer"),t("OutboundLink")],1),e._v(" ont été créé pour nous aider dans cette tâche. Vous pouvez l'ajouter en dépendance de développement de votre projet avec la commande :")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require --dev friendsofphp/php-cs-fixer\n")])])]),t("p",[e._v("Vous pourrez ensuite le lancer avec "),t("code",[e._v("vendor/bin/php-cs-fixer fix")]),e._v(" pour mettre à jour votre code, pour respecter les standards de code de Symfony.")]),e._v(" "),t("p",[e._v("Vous pouvez également trouver la configuration par défaut dans le fichier "),t("code",[e._v(".php-cs-fixer.dist.php")]),e._v(" qui a été créé. Si vous souhaitez la modifier, vous pouvez le faire dans ce fichier, ou dans un fichier "),t("code",[e._v(".php-cs-fixer.php")]),e._v(" à la racine de votre projet (il ne sera pas versionné).")]),e._v(" "),t("h3",{attrs:{id:"phpstan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpstan"}},[e._v("#")]),e._v(" PHPStan")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://phpstan.org/blog/find-bugs-in-your-code-without-writing-tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHPStan est un analyseur statique de code"),t("OutboundLink")],1),e._v(". Son but est de détecter autant d'erreurs que possible, simplement en relisant votre code, vérifiant la cohérence des types (de vos variables, paramètres, retours, etc.), des appels, des classes, etc.")]),e._v(" "),t("p",[e._v("Il aide également à écrire un code solide et compréhensible pour les autres développeurs, en renforçant les typages et d'autres bonnes pratiques.")]),e._v(" "),t("p",[e._v("PHPStan fournit 10 niveaux de tests (de 0 à 9), plus ou moins exigeants et nécessitant plus ou moins de modifications dans votre code, pour le rendre meilleur. Je recommande un niveau de 5, au minimum, sur les projets Symfony.")]),e._v(" "),t("p",[e._v("Pour l'installer sur un projet Symfony :")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require --dev phpstan/extension-installer phpstan/phpstan-symfony phpstan/phpstan-doctrine phpstan/phpstan-strict-rules\n")])])]),t("p",[e._v("Je vous conseille de créer un fichier "),t("code",[e._v("phpstan.neon")]),e._v(" à la racine de votre projet, pour configurer l'exécution de PHPStan et le lancer plus simplement :")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("parameters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" src\n")])])]),t("p",[e._v("Bien sûr, si vous ne voulez pas affronter le niveau 9 directement, remplacez par le niveau souhaité (il est utile de corriger les problèmes en augmentant le niveau progressivement).")]),e._v(" "),t("p",[e._v("Pour lancer PHPStan : "),t("code",[e._v("vendor/bin/phpstan analyse")])]),e._v(" "),t("h3",{attrs:{id:"lancer-nos-outils-avec-composer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lancer-nos-outils-avec-composer"}},[e._v("#")]),e._v(" Lancer nos outils avec Composer")]),e._v(" "),t("p",[e._v("Pour éviter de retenir des chemins complexes, nous pouvons préciser des scripts dans notre "),t("code",[e._v("composer.json")]),e._v(" (⚠️ ne remplacez pas les scripts existants, ajoutez seulement les vôtres) :")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"fix"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"php-cs-fixer fix"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"analyse"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phpstan analyse"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Ajouter les 2 lignes "),t("code",[e._v("fix")]),e._v(" et "),t("code",[e._v("analyse")]),e._v(" dans vos scripts, permet de définir des raccourcis pour lancer Php CS Fixer et PHPStan, sans avoir à se rappeler le détail des commandes 😉 .")]),e._v(" "),t("p",[e._v("Ces commandes peuvent $etre lancées avec "),t("code",[e._v("composer fix")]),e._v(" et "),t("code",[e._v("composer analyse")])])])}),[],!1,null,null,null);s.default=a.exports}}]);