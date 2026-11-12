# Portfolio · Matteo Godart

Site portfolio en React (Vite), en français et en anglais, avec thème clair et sombre.

## Lancer en local

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:5173.

## Modifier le contenu

Tous les textes (projets, compétences, parcours) sont dans `src/data.js`, avec une version `fr` et une version `en`.
Les captures d'écran des projets sont dans `public/projects/`.

## Mise en ligne

Le workflow `.github/workflows/deploy.yml` publie le site sur GitHub Pages à chaque push sur `main`.
À activer une fois dans le dépôt : **Settings → Pages → Source : GitHub Actions**.
