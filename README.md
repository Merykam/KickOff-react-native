# KickOff - Application de suivi des matchs de football en direct

## Description
KickOff est une application mobile développée avec React Native Expo qui permet aux utilisateurs de visualiser les matchs de football en direct. Les utilisateurs peuvent suivre leurs équipes et joueurs préférés, obtenir des mises à jour en temps réel sur les scores des matchs et consulter les statistiques détaillées des joueurs. L'application offre une expérience complète aux passionnés de football pour rester connectés avec l'action des matchs les plus récents.

## Fonctionnalités

### Écran 1: Matchs
- Affichage d'une liste des matchs de football.
- Filtrage des matchs par "Tous les matchs" ou "Matchs en direct".
- Sauvegarde d'un match avec toutes les informations dans l'écran des favoris.

### Écran 2: Détails du Match
- Affichage des informations détaillées sur un match sélectionné (équipes, date, heure, ligues, saison, tour, etc.).
- Option pour revenir à l'écran des matchs.

### Écran 3: Joueurs
- Affichage d'une liste de tous les joueurs avec leur photo et leur nom complet.
- Recherche d'un joueur par son nom.

### Écran 4: Détails du Joueur
- Affichage des détails du joueur tels que sa taille, son poids, sa date de naissance, son pays, etc.
- Option pour revenir à l'écran des joueurs.

## Technologies Utilisées
- React Native Expo
- Redux pour la gestion de l'état de l'application
- Jest et Jest-Expo pour les tests unitaires
- Docker pour la conteneurisation de l'application

## Installation et Exécution

### Prérequis
- Node.js
- Expo CLI
- Docker

### Instructions
1. Clonez ce dépôt sur votre machine locale.
2. Accédez au répertoire du projet.
3. Exécutez `npm install` pour installer les dépendances.
4. Exécutez `npm start` pour démarrer l'application avec Expo.
5. Pour exécuter les tests, utilisez la commande `npm test`.
6. Pour dockeriser l'application, exécutez `docker build -t foot-app .` dans le répertoire du projet.

