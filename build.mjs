// Genere les pages statiques du calendrier dans public/ :
//   public/<annee>/index.html  pour chaque annee de YEARS
//   public/index.html          annee en cours (canonical vers /<annee>/)
//   public/sitemap.xml
// Usage : node build.mjs

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import {
  YEARS, MONTHS, DAYS_SHORT, SAINTS, pad, iso, getFeries, isVacances,
  vacancesOfYear, zoneRange, getISOWeek, daysInMonth
} from "./src/calendar.mjs";

const SITE = "https://www.calendrier-annuel.fr";
const CSS = readFileSync(new URL("./src/style.css", import.meta.url), "utf8");
const today = new Date();
const BUILD_DATE = iso(today.getFullYear(), today.getMonth() + 1, today.getDate());

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function parseIso(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

// "sam. 13 févr." (+ annee si differente de l'annee de la page)
function shortDate(s, pageYear) {
  const date = parseIso(s);
  const opts = { weekday: "short", day: "numeric", month: "short" };
  if (date.getFullYear() !== pageYear) opts.year = "numeric";
  return new Intl.DateTimeFormat("fr-FR", opts).format(date)
    .replace(/ 1 /, " 1er ");
}

// "jeudi 6 mai"
function longDate(s) {
  return new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" })
    .format(parseIso(s)).replace(/ 1 /, " 1er ");
}

function renderHalf(year, startMonth, endMonth, feries) {
  const label = `${MONTHS[startMonth]} à ${MONTHS[endMonth].toLowerCase()} ${year}`;
  let html = `<table>\n<caption class="visually-hidden">Calendrier ${esc(label)}</caption>\n<thead><tr>`;
  for (let m = startMonth; m <= endMonth; m++) html += `<th scope="col">${MONTHS[m]}</th>`;
  html += "</tr></thead>\n<tbody>\n";

  for (let d = 1; d <= 31; d++) {
    let row = "<tr>";
    for (let m = startMonth; m <= endMonth; m++) {
      const month = m + 1;
      const maxD = daysInMonth(year, month);
      if (d > maxD) {
        row += '<td class="empty"></td>';
        continue;
      }
      const date = new Date(year, m, d);
      const dow = date.getDay(); // 0=Sun
      const dateStr = iso(year, month, d);
      const isFerie = dateStr in feries;

      const cls = [];
      if (dow === 0 || dow === 6) cls.push("weekend");
      if (isFerie) cls.push("ferie");

      const saint = isFerie ? feries[dateStr] : SAINTS[month][d - 1];
      const weekBadge = dow === 1
        ? ` <span class="week-num">S${pad(getISOWeek(date))}</span>` : "";

      // Always render 3 fixed slots so bar positions never shift.
      // Start/end detection stays within the month column.
      const bars = ["A", "B", "C"].map(z => {
        if (!isVacances(z, year, month, d)) return '<span class="bar"></span>';
        let bc = `bar bar-${z.toLowerCase()}`;
        if (d === 1 || !isVacances(z, year, month, d - 1)) bc += " bar-start";
        if (d === maxD || !isVacances(z, year, month, d + 1)) bc += " bar-end";
        return `<span class="${bc}"></span>`;
      }).join("");

      row += `<td${cls.length ? ` class="${cls.join(" ")}"` : ""} data-date="${dateStr}">` +
        `<span class="zone-bars">${bars}</span>` +
        `<span class="day-name">${DAYS_SHORT[dow]}</span> ` +
        `<span class="day-num">${d}</span> ` +
        `<span class="saint">${esc(saint)}</span>` +
        `${weekBadge}</td>`;
    }
    html += row + "</tr>\n";
  }
  return html + "</tbody>\n</table>";
}

function renderFeries(year, feries) {
  const rows = Object.entries(feries).map(([date, name]) =>
    `<tr><th scope="row">${esc(name)}</th><td>${longDate(date)}</td></tr>`).join("\n");
  return `<section>
<h2>Jours fériés ${year}</h2>
<table>
<thead><tr><th scope="col">Jour férié</th><th scope="col">Date</th></tr></thead>
<tbody>
${rows}
</tbody>
</table>
</section>`;
}

function renderVacances(year) {
  const range = r => `du ${shortDate(r[0], year)} au ${shortDate(r[1], year)}`;
  const rows = vacancesOfYear(year).map(p => {
    const cells = p.all
      ? `<td colspan="3">${range(p.all)}</td>`
      : ["A", "B", "C"].map(z => `<td>${range(zoneRange(p, z))}</td>`).join("");
    return `<tr><th scope="row">${esc(p.name)}</th>${cells}</tr>`;
  }).join("\n");
  return `<section>
<h2>Vacances scolaires ${year}</h2>
<table>
<thead><tr><th scope="col">Période</th><th scope="col">Zone A</th><th scope="col">Zone B</th><th scope="col">Zone C</th></tr></thead>
<tbody>
${rows}
</tbody>
</table>
<p>Dates week-ends inclus ; la reprise des cours a lieu le lendemain du dernier jour.
Zone A : Besançon, Bordeaux, Clermont-Ferrand, Dijon, Grenoble, Limoges, Lyon, Poitiers.
Zone B : Aix-Marseille, Amiens, Caen, Lille, Nancy-Metz, Nantes, Nice, Orléans-Tours, Reims, Rennes, Rouen, Strasbourg.
Zone C : Créteil, Montpellier, Paris, Toulouse, Versailles.</p>
</section>`;
}

function renderPage(year, { isRoot }) {
  const pageUrl = `${SITE}/${year}/`;
  const title = `Calendrier ${year} : jours fériés et vacances scolaires`;
  const description = `Calendrier ${year} gratuit avec jours fériés, vacances scolaires zones A, B et C, numéros de semaine et saints du jour. Dates officielles.`;
  const feries = getFeries(year);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": pageUrl,
    "inLanguage": "fr",
    "dateModified": BUILD_DATE,
    "isPartOf": { "@type": "WebSite", "name": "calendrier-annuel.fr", "url": `${SITE}/` }
  };

  const nav = YEARS.map(y => y === year
    ? `<a href="/${y}/" aria-current="page">${y}</a>`
    : `<a href="/${y}/">${y}</a>`).join("\n  ");

  // A la racine : anciens liens /#2027 et annee en cours si la page n'a pas
  // ete regeneree depuis le changement d'annee.
  const rootScript = isRoot ? `
  const years = ${JSON.stringify(YEARS)};
  const fromHash = Number(location.hash.slice(1));
  const target = years.includes(fromHash) ? fromHash : new Date().getFullYear();
  if (target !== ${year} && years.includes(target)) location.replace("/" + target + "/");` : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${pageUrl}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="theme-color" content="#2c3e50">
<meta property="og:type" content="website">
<meta property="og:site_name" content="calendrier-annuel.fr">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="${pageUrl}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${SITE}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Calendrier annuel avec jours fériés et vacances scolaires">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${SITE}/og-image.png">
<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
</script>
<style>
${CSS}</style>
</head>
<body>
<header>
<h1>Calendrier ${year}</h1>
<nav class="year-switch" aria-label="Choisir l'année">
  ${nav}
</nav>
<div class="legend">
  <div class="legend-item"><div class="legend-color" style="background:#eaf0fb"></div> Week-end</div>
  <div class="legend-item"><div class="legend-color" style="background:#fce4ec"></div> Jour férié</div>
  <div class="legend-item"><span class="legend-bar bar-a"></span> Vacances Zone A</div>
  <div class="legend-item"><span class="legend-bar bar-b"></span> Vacances Zone B</div>
  <div class="legend-item"><span class="legend-bar bar-c"></span> Vacances Zone C</div>
  <div class="legend-item"><div class="legend-color" style="background:#3498db"></div> <span style="color:#3498db;font-weight:700">S03</span> = N° de semaine (lundi)</div>
</div>
</header>
<main>
<div class="calendar-container">
${renderHalf(year, 0, 5, feries)}
</div>
<div class="calendar-container" style="margin-top: 20px;">
${renderHalf(year, 6, 11, feries)}
</div>
<div class="infos">
${renderFeries(year, feries)}
${renderVacances(year)}
</div>
</main>
<footer>
<p>Sources : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F31952">service-public.gouv.fr</a> · Mis à jour le ${new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(today).replace(/^1 /, "1er ")}</p>
</footer>
<script>${rootScript}
  const t = new Date();
  const key = t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  const cell = document.querySelector('td[data-date="' + key + '"]');
  if (cell) cell.classList.add("today");
</script>
</body>
</html>
`;
}

function write(path, content) {
  const url = new URL(`./public/${path}`, import.meta.url);
  mkdirSync(new URL(".", url), { recursive: true });
  writeFileSync(url, content);
  console.log(`  public/${path}`);
}

const current = Math.min(Math.max(today.getFullYear(), YEARS[0]), YEARS[YEARS.length - 1]);

for (const y of YEARS) write(`${y}/index.html`, renderPage(y, { isRoot: false }));
write("index.html", renderPage(current, { isRoot: true }));

write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${YEARS.map(y => `  <url>
    <loc>${SITE}/${y}/</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`).join("\n")}
</urlset>
`);
