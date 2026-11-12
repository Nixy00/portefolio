# Portfolio · Matteo Godart

Site en ligne : **https://matteogodart.tech**

Site portfolio en React (Vite), en français et en anglais, avec thème clair et sombre.

## Comment ce site a été fait

Ce site a été réalisé par des agents IA, pilotés par moi-même.

- **Moi (Matteo Godart)** : architecture du site, choix techniques (React, Vite, GitHub Pages), contenu, sélection des projets et des compétences, direction artistique à partir de sites de référence, relecture et validation de chaque étape.
- **Agents IA ([Claude Code](https://claude.com/claude-code))** : écriture du code (composants React, styles, animations), tests dans le navigateur et mise en place du déploiement, selon mes instructions.

## Lancer en local

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:5173.

## Modifier le contenu

Tous les textes (projets, compétences, parcours) sont dans `src/data.js`, avec une version `fr` et une version `en`.
Les liens et logos des technologies sont dans `src/tech.js`.
Les captures d'écran des projets sont dans `public/projects/`.

## Mise en ligne

Le workflow `.github/workflows/deploy.yml` publie le site sur GitHub Pages à chaque push sur `main`.
Le domaine `matteogodart.tech` est configuré dans **Settings → Pages → Custom domain**.
