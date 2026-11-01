// Donnees du calendrier : mois, saints, jours feries, vacances scolaires.
// Utilise par build.mjs pour generer les pages statiques.

export const YEARS = [2026, 2027];

export const MONTHS = ["Janvier","F\u00e9vrier","Mars","Avril","Mai","Juin",
  "Juillet","Ao\u00fbt","Septembre","Octobre","Novembre","D\u00e9cembre"];
export const DAYS_SHORT = ["Di","Lu","Ma","Me","Je","Ve","Sa"];

export const SAINTS = {
  1: ["Marie","Basile","Genevi\u00e8ve","Odilon","\u00c9douard","Melchior","Raymond","Lucien","Alix","Guillaume",
      "Paulin","Tatiana","Yvette","Nina","R\u00e9mi","Marcel","Roseline","Prisca","Marius","S\u00e9bastien",
      "Agn\u00e8s","Vincent","Barnard","Fr. de Sales","Conv. Paul","Paule","Ang\u00e8le","Thomas d'A.","Gildas","Martine","Marcelle"],
  2: ["Ella","Pr\u00e9sentation","Blaise","V\u00e9ronique","Agathe","Gaston","Eug\u00e9nie","Jacqueline","Apolline","Arnaud",
      "N-D Lourdes","F\u00e9lix","B\u00e9atrice","Valentin","Claude","Julienne","Alexis","Bernadette","Gabin","Aim\u00e9e",
      "P. Damien","Isabelle","Lazare","Modeste","Rom\u00e9o","Nestor","Honorine","Romain"],
  3: ["Aubin","Ch. le Bon","Gu\u00e9nol\u00e9","Casimir","Olive","Colette","F\u00e9licit\u00e9","Jean de Dieu","Fran\u00e7oise","Vivien",
      "Rosine","Justine","Rodrigue","Mathilde","Louise","B\u00e9n\u00e9dicte","Patrick","Cyrille","Joseph","Herbert",
      "Cl\u00e9mence","L\u00e9a","Victorien","Cath. de S.","Annonciation","Larissa","Habib","Gontran","Gwladys","Am\u00e9d\u00e9e","Benjamin"],
  4: ["Hugues","Sandrine","Richard","Isidore","Ir\u00e8ne","Marcellin","J-B de la S.","Julie","Gautier","Fulbert",
      "Stanislas","Jules","Ida","Maxime","Paterne","Beno\u00eet-J.","Anicet","Parfait","Emma","Odette",
      "Anselme","Alexandre","Georges","Fid\u00e8le","Marc","Alida","Zita","Val\u00e9rie","Cath. de Sienne","Robert"],
  5: ["J\u00e9r\u00e9mie","Boris","Philippe","Sylvain","Judith","Prudence","Gis\u00e8le","D\u00e9sir\u00e9","Pac\u00f4me","Solange",
      "Estelle","Achille","Rolande","Matthias","Denise","Honor\u00e9","Pascal","\u00c9ric","Yves","Bernardin",
      "Constantin","Emile","Didier","Donatien","Sophie","B\u00e9renger","Augustin","Germain","Aymar","Ferdinand","P\u00e9tronille"],
  6: ["Justin","Blandine","K\u00e9vin","Clotilde","Igor","Norbert","Gilbert","M\u00e9dard","Diane","Landry",
      "Barnab\u00e9","Guy","Ant. de Padoue","\u00c9lis\u00e9e","Germaine","J-F R\u00e9gis","Herv\u00e9","L\u00e9once","Romuald","Silv\u00e8re",
      "Rodolphe","Alban","Audrey","Jean-Baptiste","Prosper","Anthelme","Fernand","Ir\u00e9n\u00e9e","Pierre, Paul","Martial"],
  7: ["Thierry","Martinien","Thomas","Florent","Antoine","Mariette","Raoul","Thibaut","Amandine","Ulrich",
      "Beno\u00eet","Olivier","Henri","Camille","Donald","N-D Mt Carmel","Charlotte","Fr\u00e9d\u00e9ric","Ars\u00e8ne","Marina",
      "Victor","Marie-Madeleine","Brigitte","Christine","Jacques","Anne","Nathalie","Samson","Marthe","Juliette","Ignace de L."],
  8: ["Alphonse","Julien E.","Lydie","J-M Vianney","Abel","Transfig.","Ga\u00ebtan","Dominique","Amour","Laurent",
      "Claire","Clarisse","Hippolyte","Evrard","Assomption","Armel","Hyacinthe","H\u00e9l\u00e8ne","Jean Eudes","Bernard",
      "Christophe","Fabrice","Rose de Lima","Barth\u00e9lemy","Louis","Natacha","Monique","Augustin","Sabine","Fiacre","Aristide"],
  9: ["Gilles","Ingrid","Gr\u00e9goire","Rosalie","Ra\u00efssa","Bertrand","Reine","Nativ. Marie","Alain","In\u00e8s",
      "Adelphe","Apollinaire","Aim\u00e9","La Ste Croix","Roland","\u00c9dith","Renaud","Nad\u00e8ge","\u00c9milie","Davy",
      "Matthieu","Maurice","Constance","Th\u00e8cle","Hermann","C\u00f4me, Damien","Vincent de P.","Venceslas","Michel","J\u00e9r\u00f4me"],
  10:["Th\u00e9r\u00e8se de l'E-J","L\u00e9ger","G\u00e9rard","Fr. d'Assise","Fleur","Bruno","Serge","P\u00e9lagie","Denis","Ghislain",
      "Firmin","Wilfrid","G\u00e9raud","Juste","Th. d'Avila","Edwige","Baudouin","Luc","Ren\u00e9","Adeline",
      "C\u00e9line","\u00c9lodie","Jean de C.","Florentin","Cr\u00e9pin","Dimitri","\u00c9meline","Simon, Jude","Narcisse","Bienvenu","Quentin"],
  11:["Toussaint","D\u00e9funts","Hubert","Charles","Sylvie","Bertille","Carine","Geoffrey","Th\u00e9odore","L\u00e9on",
      "Martin","Christian","Brice","Sidoine","Albert","Marguerite","\u00c9lisabeth","Aude","Tanguy","Edmond",
      "Pr\u00e9s. Marie","C\u00e9cile","Cl\u00e9ment","Flora","Catherine","Delphine","S\u00e9vrin","Jacq. de la M.","Saturnin","Andr\u00e9"],
  12:["Florence","Viviane","Fr. Xavier","Barbara","G\u00e9rald","Nicolas","Ambroise","Imm. Concept.","Pierre F.","Romaric",
      "Daniel","Jeanne de Ch.","Lucie","Odile","Ninon","Alice","Ga\u00ebl","Gatien","Urbain","Abraham",
      "Pierre Canisius","Fr.-Xavi\u00e8re","Armand","Ad\u00e8le","No\u00ebl","Etienne","Jean","Innocents","David","Roger","Sylvestre"]
};

export function pad(n) { return n < 10 ? "0" + n : "" + n; }
export function iso(y, m, d) { return `${y}-${pad(m)}-${pad(d)}`; }

// Dimanche de Paques (algorithme de Meeus/Butcher)
function easter(y) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100;
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(y, month - 1, day);
}

// Jours feries de l'annee, dans l'ordre chronologique : { "AAAA-MM-JJ": nom }
export function getFeries(y) {
  const e = easter(y);
  const rel = n => {
    const d = new Date(e.getFullYear(), e.getMonth(), e.getDate() + n);
    return iso(d.getFullYear(), d.getMonth() + 1, d.getDate());
  };
  const list = [
    [iso(y, 1, 1), "Jour de l'An"],
    [rel(0), "Pâques"],
    [rel(1), "Lundi de Pâques"],
    [iso(y, 5, 1), "Fête du Travail"],
    [iso(y, 5, 8), "Victoire 1945"],
    [rel(39), "Ascension"],
    [rel(50), "Lundi de Pentecôte"],
    [iso(y, 7, 14), "Fête nationale"],
    [iso(y, 8, 15), "Assomption"],
    [iso(y, 11, 1), "Toussaint"],
    [iso(y, 11, 11), "Armistice 1918"],
    [iso(y, 12, 25), "Noël"]
  ];
  list.sort((a, b) => a[0].localeCompare(b[0]));
  return Object.fromEntries(list);
}

// Vacances scolaires : plages inclusives, du samedi de debut a la veille
// de la reprise des cours. "all" = identique pour les zones A, B et C.
// Source : service-public.gouv.fr (arretes publies au Journal officiel).
export const VACANCES = [
  { name: "Noël 2025-2026", all: ["2025-12-20", "2026-01-04"] },
  { name: "Hiver 2026",
    A: ["2026-02-07", "2026-02-22"], B: ["2026-02-14", "2026-03-01"], C: ["2026-02-21", "2026-03-08"] },
  { name: "Printemps 2026",
    A: ["2026-04-04", "2026-04-19"], B: ["2026-04-11", "2026-04-26"], C: ["2026-04-18", "2026-05-03"] },
  { name: "Pont de l'Ascension 2026", all: ["2026-05-15", "2026-05-17"] },
  { name: "Été 2026", all: ["2026-07-04", "2026-08-31"] },
  { name: "Toussaint 2026", all: ["2026-10-17", "2026-11-01"] },
  { name: "Noël 2026-2027", all: ["2026-12-19", "2027-01-03"] },
  { name: "Hiver 2027",
    A: ["2027-02-13", "2027-02-28"], B: ["2027-02-20", "2027-03-07"], C: ["2027-02-06", "2027-02-21"] },
  { name: "Printemps 2027",
    A: ["2027-04-10", "2027-04-25"], B: ["2027-04-17", "2027-05-02"], C: ["2027-04-03", "2027-04-18"] },
  { name: "Pont de l'Ascension 2027", all: ["2027-05-07", "2027-05-09"] },
  { name: "Été 2027", all: ["2027-07-03", "2027-09-01"] },
  { name: "Toussaint 2027", all: ["2027-10-23", "2027-11-07"] },
  { name: "Noël 2027-2028", all: ["2027-12-18", "2028-01-02"] }
];

export function zoneRange(period, zone) {
  return period.all || period[zone];
}

export function isVacances(zone, y, m, d) {
  const s = iso(y, m, d);
  return VACANCES.some(p => {
    const [from, to] = zoneRange(p, zone);
    return s >= from && s <= to;
  });
}

// Periodes de vacances qui touchent l'annee y
export function vacancesOfYear(y) {
  const from = iso(y, 1, 1), to = iso(y, 12, 31);
  return VACANCES.filter(p => ["A", "B", "C"].some(z => {
    const r = zoneRange(p, z);
    return r[1] >= from && r[0] <= to;
  }));
}

export function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

export function daysInMonth(y, m) {
  return new Date(y, m, 0).getDate();
}
