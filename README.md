# BrotherProject

BrotherProject est une application Electron permettant d'importer des images, de les modifier et de télécharger les images modifiées dans un fichier ZIP.

## Fonctionnalités

- **Glisser-déposer d'images** : Vous pouvez glisser et déposer ou importer des images directement dans l'application.
- **Modification automatique** : Après l'importation des images, une modification est appliquée automatiquement à chaque image.
- **Capture d'écran** : Une capture d'écran de chaque image modifiée est effectuée.
- **Téléchargement en ZIP** : Toutes les images modifiées sont compressées dans un fichier ZIP et automatiquement téléchargées.

## Technologies utilisées

- **Electron** : Utilisé pour créer l'application de bureau.
- **React** : Utilisé pour le rendu des composants et la gestion de l'interface utilisateur.
- **JSZip** : Utilisé pour créer le fichier ZIP contenant les images modifiées.
- **html2canvas** : Utilisé pour générer les captures d'écran des images modifiées.

## Installation

### Avec Yarn

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/ton-utilisateur/brotherProject.git
   ```

2. Allez dans le dossier du projet :

   ```bash
   cd brotherProject
   ```

3. Installez les dépendances :

   ```bash
   yarn install
   ```

### Avec npm

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/ton-utilisateur/brotherProject.git
   ```

2. Allez dans le dossier du projet :

   ```bash
   cd brotherProject
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

## Démarrage de l'application

### Avec Yarn

Pour lancer l'application en mode développement, exécutez :

```bash
yarn electron:serve
```

### Avec npm

Pour lancer l'application en mode développement, exécutez :

```bash
npm run electron:serve
```

L'application sera disponible à l'adresse `http://localhost:3000`.

## Build de l'application

### Avec Yarn

Pour créer une version exécutable de l'application, exécutez :

```bash
yarn electron:build
```

### Avec npm

Pour créer une version exécutable de l'application, exécutez :

```bash
npm run electron:build
```

Cela générera un fichier exécutable pour votre système d'exploitation.

## Structure du projet

- `src/` : Contient les composants React et la logique de l'application.
- `public/` : Contient les fichiers statiques et le script Electron principal (`main.js`).
- `build/` : Contient les fichiers générés après le build de l'application.
- `assets/` : Contient les ressources graphiques pour l'application.

## Dépendances principales

- `electron`: ^22.0.0
- `react`: ^18.2.0
- `jszip`: ^3.10.1
- `html2canvas`: ^1.4.1
- `react-dropzone`: ^14.2.3

## DevDependencies

- `concurrently`: ^7.6.0
- `cross-env`: ^7.0.3
- `electron-builder`: ^23.6.0
