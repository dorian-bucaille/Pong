# Projet de Jeu Pong

## Aperçu

Ce projet est une version moderne du jeu classique Pong, avec une esthétique néon et un design stylé. Le jeu est construit en utilisant HTML, CSS et JavaScript, offrant une expérience visuellement attrayante avec des couleurs néon et des effets d'ombre pour lui donner un aspect artistique et stylé.

## Fonctionnalités

- **Esthétique Néon** : Utilise une palette de couleurs néon pour les raquettes, la balle et les bordures du jeu.
- **Effets d'Ombre** : Ajoute des effets de lueur aux éléments du jeu pour une expérience plus immersive.
- **Suivi des Scores** : Affiche les scores des deux joueurs avec des couleurs néon.

## Configuration

Pour exécuter ce jeu, il suffit de cloner le dépôt et d'ouvrir [index.html](https://github.com/dorian-bucaille/Pong/blob/main/index.html) dans votre navigateur web.

## Structure des Fichiers

- [index.html](https://github.com/dorian-bucaille/Pong/blob/main/index.html) : Le fichier HTML principal.
- [style.css](https://github.com/dorian-bucaille/Pong/blob/main/style.css) : Contient les styles du jeu, y compris les effets néon.
- [pong.js](https://github.com/dorian-bucaille/Pong/blob/main/pong.js) : Le fichier JavaScript qui contient la logique du jeu.

## Modifications pour l'Esthétique Néon

Pour obtenir l'aspect néon, des modifications ont été apportées aux fichiers [style.css](https://github.com/dorian-bucaille/Pong/blob/main/style.css) et [pong.js](https://github.com/dorian-bucaille/Pong/blob/main/pong.js).

### style.css

```css
body {
  background-color: #000; /* Fond noir */
}

canvas {
  border: 5px solid #2ecc71; /* Bordure néon verte */
  box-shadow: 0 0 20px #2ecc71; /* Effet de lueur néon */
}
```

### pong.js

Des changements ont été apportés aux fonctions `drawPaddle` et `drawBall` pour intégrer des couleurs néon et des effets d'ombre.

```javascript
function drawPaddle(x, y) {
  // Vert néon pour les raquettes
  ctx.fillStyle = "#2ECC71";
  ctx.shadowColor = "#2ECC71";
}

function drawBall() {
  // Rose néon pour la balle
  ctx.fillStyle = "#FF0062";
  ctx.shadowColor = "#FF0062";
}

function displayScores() {
  // Texte blanc pour les scores
  ctx.fillStyle = "#FFF";
}
```

## Lancement du Jeu

Ouvrez `index.html` dans un navigateur web pour démarrer le jeu. Utilisez les touches fléchées (`Haut` et `Bas`) pour déplacer la raquette de droite et les touches `Z` et `S` pour déplacer la raquette de gauche.

Profitez du jeu et de son esthétique néon !
