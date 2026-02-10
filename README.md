# Calendrier 2026

Calendrier annuel 2026 en HTML, avec jours fériés, vacances scolaires et saints du jour. Déployé sur [www.calendrier-annuel.fr](https://www.calendrier-annuel.fr/).

## Fonctionnalités

- **Grille 12 mois** en colonnes avec les jours en lignes (1-31)
- **Jours fériés** surlignés en rouge
- **Vacances scolaires** pour les trois zones académiques, indiquées par des barres colorées :
  - **Zone A** (vert) — Besançon, Bordeaux, Clermont-Ferrand, Dijon, Grenoble, Limoges, Lyon, Poitiers
  - **Zone B** (orange) — Aix-Marseille, Amiens, Caen, Lille, Nancy-Metz, Nantes, Nice, Orléans-Tours, Reims, Rennes, Rouen, Strasbourg
  - **Zone C** (violet) — Créteil, Montpellier, Paris, Toulouse, Versailles
- **Saints du jour** pour chaque date
- **Numéros de semaine ISO** affichés le lundi
- **Week-ends** surlignés en bleu

## Vacances scolaires 2025-2026 (dans l'année 2026)

| Période | Zone A | Zone B | Zone C |
|---|---|---|---|
| Noël 2025-2026 | 1-4 janv. | 1-4 janv. | 1-4 janv. |
| Hiver | 7-22 fév. | 14 fév. - 1 mars | 21 fév. - 8 mars |
| Printemps | 4-19 avr. | 11-26 avr. | 18 avr. - 3 mai |
| Pont de l'Ascension | 15-16 mai | 15-16 mai | 15-16 mai |
| Été | à partir du 4 juil. | à partir du 4 juil. | à partir du 4 juil. |

## Vacances scolaires 2026-2027 (dans l'année 2026)

| Période | Toutes zones |
|---|---|
| Toussaint | 17 oct. - 1 nov. |
| Noël | 19-31 déc. |

## Jours fériés 2026

| Date | Jour férié |
|---|---|
| 1er janvier | Jour de l'An |
| 5 avril | Dimanche de Pâques |
| 6 avril | Lundi de Pâques |
| 1er mai | Fête du Travail |
| 8 mai | Victoire 1945 |
| 14 mai | Ascension |
| 25 mai | Lundi de Pentecôte |
| 14 juillet | Fête nationale |
| 15 août | Assomption |
| 1er novembre | Toussaint |
| 11 novembre | Armistice 1918 |
| 25 décembre | Noël |

## Déploiement

Le site est hébergé sur **Cloudflare Pages**. Le dossier `public/` contient tous les fichiers servis :

- `index.html` — le calendrier (généré côté client en JavaScript)
- `robots.txt` et `sitemap.xml` — pour le référencement
- `_headers` et `_redirects` — configuration Cloudflare Pages

## Utilisation locale

Ouvrir `public/index.html` dans un navigateur. Aucun serveur ni dépendance nécessaire.

## Sources

Dates des jours fériés et vacances scolaires : [service-public.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F31952).
