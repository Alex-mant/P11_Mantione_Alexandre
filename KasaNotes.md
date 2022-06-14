🛠  Outils et contraintes techniques ⚙️

  🛠 Outils standards
    ● Create React App
    ● React Router
    ● Styling: L’utilisation de Sass est optionnelle. CSS est à utiliser par
    défaut.
    ● Pas de librairie React externe
    
  ⚙️ Contraintes techniques
    React :
      Il est impératif d’utiliser ces éléments de React pour un code de qualité :
      ● Découpage en composants modulaires et réutilisables ;
      ● Un composant par fichier ;
      ● Structure logique des différents fichiers ;
      ● Utilisation des props entre les composants ;
      ● Utilisation du state dans les composants quand c'est nécessaire ;
      ● Gestion des événements ;
      ● Listes : React permet de faire des choses vraiment intéressantes avec
      les listes, en itérant dessus, par exemple avec map. Il faut les utiliser
      autant que possible.
      Il est également recommandé, mais pas imposé, d’utiliser des composants
      fonctionnels plutôt que des composants classes.

    React Router :
      ● Les paramètres des routes sont gérés par React Router dans l'URL
      pour récupérer les informations de chaque logement.
      ● Il existe une page par route.
      ● La page 404 est renvoyée pour chaque route inexistante, ou si une
      valeur présente dans l’URL ne fait pas partie des données
      renseignées.
      ● La logique du routeur est réunie dans un seul fichier.

    Général :
      ● Le code ne doit pas produire d'erreur ou de warning dans la console.