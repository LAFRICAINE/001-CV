# TP JAVA : Création d'un CV avec Vite et React

## 1. Présentation du projet

Ce projet consiste à créer un Curriculum Vitae (CV) sous forme de site web en utilisant Vite, React, JavaScript et CSS.

Le projet s'appelle **001**.

Il est composé de trois composants principaux :
- Informations personnelles
- Expériences professionnelles
- Compétences

## 2. Objectifs du TP

Les objectifs de ce TP sont :
- Créer un projet avec Vite.
- Découvrir l'organisation d'un projet React.
- Comprendre le rôle des fichiers et des dossiers indispensables.
- Créer et utiliser des composants React.
- Utiliser le CSS pour améliorer l'apparence du CV.
- Afficher les trois composants dans une seule application.

## 3. Étapes de création du projet

### Étape 1 : Vérification de Node.js et npm

Node.js permet d'exécuter JavaScript en dehors du navigateur.

npm est un outil qui permet d'installer et de gérer les dépendances d'un projet.

### Étape 2 : Création du projet avec Vite

La commande utilisée est :

```bash
npm create vite@latest 001
```

Cette commande permet de créer un nouveau projet appelé `001` avec Vite.

### Étape 3 : Choix du framework et de la variante

Les choix effectués sont :
- Framework : React
- Variant : JavaScript
- Linter : ESLint

React permet de créer des interfaces utilisateur à l'aide de composants.

JavaScript est le langage utilisé pour développer l'application.

ESLint permet de détecter certaines erreurs et de signaler les problèmes de style dans le code.

### Étape 4 : Installation des dépendances

La commande utilisée est :

```bash
npm install
```

Elle permet d'installer les dépendances nécessaires au fonctionnement du projet.

### Étape 5 : Lancement du projet

La commande utilisée est :

```bash
npm run dev
```

Elle permet de démarrer le serveur de développement.

Vite affiche ensuite une adresse locale permettant d'ouvrir le projet dans un navigateur.

## 4. Organisation des dossiers et fichiers

### Le dossier `node_modules`

Ce dossier contient les bibliothèques et les dépendances installées pour le projet.

Il est créé automatiquement lors de l'installation des dépendances.

### Le dossier `public`

Ce dossier contient les fichiers statiques qui peuvent être utilisés directement dans le projet, comme certaines images ou icônes.

### Le dossier `src`

Le dossier `src` contient le code source de l'application.

C'est dans ce dossier que se trouvent principalement les composants React, les fichiers JavaScript et les fichiers CSS.

### Le dossier `src/components`

Ce dossier contient les composants créés pour construire le CV.

Dans ce projet, il contient :
- `InfoPerso.jsx`
- `Experiences.jsx`
- `Competences.jsx`

### Le fichier `App.jsx`

Ce fichier est le composant principal de l'application.

Il importe et affiche les trois composants du CV.

### Le fichier `App.css`

Ce fichier contient les styles CSS utilisés pour personnaliser l'apparence du CV.

Il permet notamment de modifier les couleurs, les marges, les espacements et la présentation des sections.

### Le fichier `index.css`

Ce fichier contient les styles CSS généraux de l'application.

### Le fichier `main.jsx`

Ce fichier constitue le point d'entrée de l'application React.

Il permet de connecter le composant principal `App` à la page HTML.

### Le fichier `index.html`

Ce fichier contient la structure HTML de départ de la page web.

Il permet notamment d'accueillir l'application React.

### Le fichier `package.json`

Ce fichier contient les informations du projet, les dépendances et les commandes disponibles, comme `npm run dev`.

### Le fichier `package-lock.json`

Ce fichier conserve les informations précises sur les versions des dépendances installées.

Il permet de faciliter la reproduction de la même installation.

### Le fichier `eslint.config.js`

Ce fichier contient la configuration d'ESLint, utilisé pour analyser le code et repérer certaines erreurs.

### Le fichier `.gitignore`

Ce fichier indique à Git les fichiers et dossiers qui ne doivent généralement pas être suivis dans le dépôt, par exemple `node_modules`.

### Le fichier `README.md`

Ce fichier présente le projet, ses objectifs, les étapes de réalisation et les informations utiles pour comprendre son fonctionnement.

## 5. Les trois composants du CV

### 5.1. Composant InfoPerso

Fichier : `src/components/InfoPerso.jsx`

Ce composant présente les informations personnelles du candidat, notamment :
- Le nom
- Le prénom
- L'adresse e-mail
- Le numéro de téléphone

### 5.2. Composant Experiences

Fichier : `src/components/Experiences.jsx`

Ce composant présente les expériences professionnelles ou les projets réalisés par le candidat.

Il peut contenir le nom de l'entreprise, la période et une description des activités réalisées.

### 5.3. Composant Competences

Fichier : `src/components/Competences.jsx`

Ce composant présente les compétences du candidat, par exemple :
- HTML
- CSS
- JavaScript
- React
- Python
- MySQL

Les informations utilisées dans les composants sont des exemples et peuvent être modifiées.

## 6. Assemblage des composants

Le fichier `App.jsx` importe les trois composants :

- `InfoPerso`
- `Experiences`
- `Competences`

Il les affiche ensuite dans une seule page afin de former le CV complet.

Cette organisation permet de séparer les différentes parties du CV et de rendre le code plus facile à comprendre et à modifier.

## 7. Personnalisation du CV avec CSS

Le CSS permet de modifier l'apparence du CV.

Dans ce projet, il est utilisé pour :
- Modifier la couleur de fond de la page.
- Personnaliser le titre principal.
- Ajouter un fond blanc aux sections.
- Modifier les couleurs des titres.
- Ajouter des marges et des espacements.
- Améliorer la présentation générale du CV.

## 8. Commandes importantes

| Commande | Rôle |
|---|---|
| `npm create vite@latest 001` | Créer le projet avec Vite |
| `npm install` | Installer les dépendances |
| `npm run dev` | Lancer le serveur de développement |
| `Ctrl + C` dans le terminal | Arrêter le serveur de développement |

## 9. Résultat attendu

Le résultat est une page web présentant un Curriculum Vitae organisé en trois sections :
1. Informations personnelles
2. Expériences professionnelles
3. Compétences

Le projet permet de mettre en pratique la création d'un projet React avec Vite, l'utilisation de composants et la personnalisation d'une interface avec CSS.

## 10. Conclusion

Ce TP m'a permis de découvrir la création d'un projet React avec Vite, de comprendre l'organisation des fichiers et des dossiers et de réaliser une page web à l'aide de trois composants.

J'ai également appris à utiliser le CSS pour personnaliser la présentation de mon CV.