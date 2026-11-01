# Calendrier annuel

Calendrier annuel 2026 et 2027 en HTML, avec jours fériés, vacances scolaires et saints du jour. Déployé sur [www.calendrier-annuel.fr](https://www.calendrier-annuel.fr/).

## Fonctionnalités

- **Grille 12 mois** en colonnes avec les jours en lignes (1-31)
- **Une page par année** (`/2026/`, `/2027/`), la page d'accueil affiche l'année en cours
- **Jours fériés** surlignés en rouge (Pâques, Ascension et Pentecôte calculés automatiquement)
- **Vacances scolaires** pour les trois zones académiques, indiquées par des barres colorées :
  - **Zone A** (vert) — Besançon, Bordeaux, Clermont-Ferrand, Dijon, Grenoble, Limoges, Lyon, Poitiers
  - **Zone B** (orange) — Aix-Marseille, Amiens, Caen, Lille, Nancy-Metz, Nantes, Nice, Orléans-Tours, Reims, Rennes, Rouen, Strasbourg
  - **Zone C** (violet) — Créteil, Montpellier, Paris, Toulouse, Versailles
- **Tableaux récapitulatifs** des jours fériés et des vacances sous le calendrier
- **Saints du jour** pour chaque date
- **Numéros de semaine ISO** affichés le lundi
- **Week-ends** surlignés en bleu, **jour courant** en bleu foncé

## Structure

- `src/calendar.mjs` — données : années disponibles, saints, jours fériés, vacances scolaires
- `src/style.css` — styles (intégrés dans chaque page générée)
- `src/og-image.html` — source de l'image de partage `public/og-image.png`
- `build.mjs` — génère les pages statiques dans `public/`
- `public/` — fichiers servis par Cloudflare Pages

Les pages sont générées en HTML statique (contenu lisible sans JavaScript, pour le référencement). Le JavaScript sert uniquement à surligner le jour courant et, sur la page d'accueil, à rediriger vers l'année en cours.

## Générer les pages

```
node build.mjs
```

Produit `public/index.html`, `public/<année>/index.html` et `public/sitemap.xml`. Les fichiers générés sont versionnés : Cloudflare Pages sert `public/` tel quel, sans étape de build.

**À relancer :**
- après toute modification de `src/`
- en début d'année, pour que la page d'accueil pointe sur la nouvelle année

**Ajouter une année :** ajouter l'année dans `YEARS` et ses vacances dans `VACANCES` (`src/calendar.mjs`), puis relancer le build.

## Utilisation locale

```
python3 -m http.server 8000 -d public
```

Puis ouvrir http://localhost:8000.

## Sources

Dates des jours fériés et vacances scolaires : [service-public.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F31952).
