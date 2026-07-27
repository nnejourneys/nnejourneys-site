const fs = require("fs");
const path = require("path");

const sourceBase = "/Users/apple/Documents/Websites/North by Northeast Journeys";
const roots = [
  process.cwd(),
  "/private/tmp/nnejourneys-site-git/site",
].filter((root, index, arr) => fs.existsSync(root) && arr.indexOf(root) === index);

const assets = [
  {
    src: `${sourceBase}/Home Page/Hero/Active-holidays-northeast-india.webp`,
    dest: "assets/images/home/hero/Active-holidays-northeast-india.webp",
    names: ["Active-holidays-northeast-india"],
  },
  {
    src: `${sourceBase}/Home Page/Hero/North-by-Northeast-Journeys.webp`,
    dest: "assets/images/home/hero/North-by-Northeast-Journeys.webp",
    names: ["North-by-Northeast-Journeys"],
  },
  {
    src: `${sourceBase}/Home Page/Hero/Culture-tours-in-northeast-india.webp`,
    dest: "assets/images/home/hero/Culture-tours-in-northeast-india.webp",
    names: ["Culture-tours-in-northeast-india"],
  },
  {
    src: `${sourceBase}/Home Page/Hero/Adventure-tours-northeast-india.webp`,
    dest: "assets/images/home/hero/Adventure-tours-northeast-india.webp",
    names: ["Adventure-tours-northeast-india"],
  },
  {
    src: `${sourceBase}/Home Page/Hero/culture-holidays-northeast-India.webp`,
    dest: "assets/images/home/hero/culture-holidays-northeast-India.webp",
    names: ["culture-holidays-northeast-India"],
  },
  {
    src: `${sourceBase}/Home Page/What we do/Active-adventure-tours-northeast-india.webp`,
    dest: "assets/images/home/what-we-do/Active-adventure-tours-northeast-india.webp",
    names: ["Active-adventure-tours-northeast-india"],
  },
  {
    src: `${sourceBase}/Home Page/What we do/Nature-culture-tours-northeast-india.webp`,
    dest: "assets/images/home/what-we-do/Nature-culture-tours-northeast-india.webp",
    names: ["Nature-culture-tours-northeast-india", "Nature-culture-tours-northeast-inida"],
  },
  {
    src: `${sourceBase}/Home Page/What we do/Leisure-tours-northeast-india.webp`,
    dest: "assets/images/home/what-we-do/Leisure-tours-northeast-india.webp",
    names: ["Leisure-tours-northeast-india"],
  },
  {
    src: `${sourceBase}/Tours/active-interactive-authentic-tours-in-northeast-india.webp`,
    dest: "assets/images/tours/active-interactive-authentic-tours-in-northeast-india.webp",
    names: ["active-interactive-authentic-tours-in-northeast-india"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-BRAHMAPUTRA EXPLORER/cycle-tour-of-assam-brahmaputra-explore.webp`,
    dest: "assets/images/tours/cycling/brahmaputra-explorer/cycle-tour-of-assam-brahmaputra-explore.webp",
    names: ["cycle-tour-of-assam-brahmaputra-explore", "cycle-tour-of-assam-brahmaputra-explorer"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-BRAHMAPUTRA EXPLORER/Map-cycle-tour-Assam.webp`,
    dest: "assets/images/tours/cycling/brahmaputra-explorer/Map-cycle-tour-Assam.webp",
    names: ["Map-cycle-tour-Assam"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-BRAHMAPUTRA EXPLORER/Assam-Brahmaputra-cycle-tour.webp`,
    dest: "assets/images/tours/cycling/brahmaputra-explorer/Assam-Brahmaputra-cycle-tour.webp",
    names: ["Assam-Brahmaputra-cycle-tour"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-BRAHMAPUTRA EXPLORER/Assam-cycle-tour.webp`,
    dest: "assets/images/tours/cycling/brahmaputra-explorer/Assam-cycle-tour.webp",
    names: ["Assam-cycle-tour"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-BRAHMAPUTRA EXPLORER/Brahmaputra-valley-cycle-tour.webp`,
    dest: "assets/images/tours/cycling/brahmaputra-explorer/Brahmaputra-valley-cycle-tour.webp",
    names: ["Brahmaputra-valley-cycle-tour"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-BRAHMAPUTRA EXPLORER/Cycling-holiday-assam.webp`,
    dest: "assets/images/tours/cycling/brahmaputra-explorer/Cycling-holiday-assam.webp",
    names: ["Cycling-holiday-assam"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-BRAHMAPUTRA EXPLORER/Cycling-in-assam.webp`,
    dest: "assets/images/tours/cycling/brahmaputra-explorer/Cycling-in-assam.webp",
    names: ["Cycling-in-assam"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-Abode of the clouds/Cycle-tour-of-meghalaya.webp`,
    dest: "assets/images/tours/cycling/abode-of-clouds/Cycle-tour-of-meghalaya.webp",
    names: ["Cycle-tour-of-meghalaya", "cycle-tour-of-meghalaya"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-Abode of the clouds/map-meghalay-cycle-tour.webp`,
    dest: "assets/images/tours/cycling/abode-of-clouds/map-meghalay-cycle-tour.webp",
    names: ["map-meghalay-cycle-tour"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-Abode of the clouds/cycle-tour-meghalaya.webp`,
    dest: "assets/images/tours/cycling/abode-of-clouds/cycle-tour-meghalaya.webp",
    names: ["cycle-tour-meghalaya"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-Abode of the clouds/cycling-holiday-meghalaya.webp`,
    dest: "assets/images/tours/cycling/abode-of-clouds/cycling-holiday-meghalaya.webp",
    names: ["cycling-holiday-meghalaya"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-Abode of the clouds/cycling-in-meghalaya.webp`,
    dest: "assets/images/tours/cycling/abode-of-clouds/cycling-in-meghalaya.webp",
    names: ["cycling-in-meghalaya"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-Abode of the clouds/Meghalaya-cycle-tour.webp`,
    dest: "assets/images/tours/cycling/abode-of-clouds/Meghalaya-cycle-tour.webp",
    names: ["Meghalaya-cycle-tour"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-Abode of the clouds/meghalaya-tour.webp`,
    dest: "assets/images/tours/cycling/abode-of-clouds/meghalaya-tour.webp",
    names: ["meghalaya-tour"],
  },
  {
    src: `${sourceBase}/Tours/Cycling/C-Watershed of the Brahmaputra/cycle-tour-of-eastern-arunachal-pradesh.webp`,
    dest: "assets/images/tours/cycling/watershed-brahmaputra/cycle-tour-of-eastern-arunachal-pradesh.webp",
    names: ["cycle-tour-of-eastern-arunachal-pradesh"],
  },
];

const brahmaputraGallery = [
  "assets/images/tours/cycling/brahmaputra-explorer/Map-cycle-tour-Assam.webp",
  "assets/images/tours/cycling/brahmaputra-explorer/Assam-Brahmaputra-cycle-tour.webp",
  "assets/images/tours/cycling/brahmaputra-explorer/Assam-cycle-tour.webp",
  "assets/images/tours/cycling/brahmaputra-explorer/Brahmaputra-valley-cycle-tour.webp",
  "assets/images/tours/cycling/brahmaputra-explorer/Cycling-holiday-assam.webp",
  "assets/images/tours/cycling/brahmaputra-explorer/Cycling-in-assam.webp",
];

const meghalayaGallery = [
  "assets/images/tours/cycling/abode-of-clouds/map-meghalay-cycle-tour.webp",
  "assets/images/tours/cycling/abode-of-clouds/cycle-tour-meghalaya.webp",
  "assets/images/tours/cycling/abode-of-clouds/cycling-holiday-meghalaya.webp",
  "assets/images/tours/cycling/abode-of-clouds/cycling-in-meghalaya.webp",
  "assets/images/tours/cycling/abode-of-clouds/Meghalaya-cycle-tour.webp",
  "assets/images/tours/cycling/abode-of-clouds/meghalaya-tour.webp",
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function copyAssets(root) {
  for (const asset of assets) {
    if (!fs.existsSync(asset.src)) continue;
    const to = path.join(root, asset.dest);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(asset.src, to);
  }
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(html|js|css|json)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function replaceKnownPaths(text) {
  for (const asset of assets) {
    for (const name of asset.names) {
      const re = new RegExp(`(?:\\.\\.?\\/)?(?:[A-Za-z0-9_ .%()&+\\-/]*\\/)?${escapeRegExp(name)}\\.(?:jpe?g|png|webp|JPG|JPEG|PNG|WEBP)`, "g");
      text = text.replace(re, asset.dest);
    }
  }
  return text;
}

function arrayLiteral(items, quote = '"') {
  return `[\n      ${items.map((item) => `${quote}${item}${quote}`).join(",\n      ")}\n    ]`;
}

function replaceGalleryArrays(text, marker, items) {
  const props = "(?:gallery|galleryImages|photos)";
  const patterns = [
    new RegExp(`(${props}\\s*[:=]\\s*)\\[[\\s\\S]*?\\]`, "g"),
    new RegExp(`("${props}"\\s*:\\s*)\\[[\\s\\S]*?\\]`, "g"),
  ];
  for (const pattern of patterns) {
    text = text.replace(pattern, (match, prefix) => {
      if (!marker.test(match)) return match;
      return `${prefix}${arrayLiteral(items)}`;
    });
  }
  return text;
}

function replaceHomeHeroOrder(text) {
  const marker = /Active-holidays-northeast-india|North-by-Northeast-Journeys|Culture-tours-in-northeast-india|Adventure-tours-northeast-india|culture-holidays-northeast-India/;
  const ordered = [
    "assets/images/home/hero/Active-holidays-northeast-india.webp",
    "assets/images/home/hero/North-by-Northeast-Journeys.webp",
    "assets/images/home/hero/Culture-tours-in-northeast-india.webp",
    "assets/images/home/hero/Adventure-tours-northeast-india.webp",
    "assets/images/home/hero/culture-holidays-northeast-India.webp",
  ];
  const patterns = [
    /((?:heroSlides|homeHeroSlides|homeSlides)\s*[:=]\s*)\[[\s\S]*?\]/g,
    /("(?:heroSlides|homeHeroSlides|homeSlides)"\s*:\s*)\[[\s\S]*?\]/g,
  ];
  for (const pattern of patterns) {
    text = text.replace(pattern, (match, prefix) => {
      if (!marker.test(match)) return match;
      return `${prefix}${arrayLiteral(ordered)}`;
    });
  }
  return text;
}

function replaceFindUsMap(text) {
  const link = '<a class="button button-primary map-link" href="https://maps.app.goo.gl/RZGttK2hmMWYSo9P7" target="_blank" rel="noopener">Find us on map</a>';
  return text.replace(/<iframe[\s\S]*?(?:google\.com\/maps|maps\.app\.goo\.gl|maps)[\s\S]*?<\/iframe>/gi, link);
}

for (const root of roots) {
  copyAssets(root);
  for (const file of walk(root)) {
    let text = fs.readFileSync(file, "utf8");
    const original = text;
    text = replaceKnownPaths(text);
    text = replaceGalleryArrays(text, /Map-cycle-tour-Assam|Assam-Brahmaputra-cycle-tour|Cycling-in-assam/i, brahmaputraGallery);
    text = replaceGalleryArrays(text, /map-meghalay-cycle-tour|cycle-tour-meghalaya|meghalaya-tour/i, meghalayaGallery);
    text = replaceHomeHeroOrder(text);
    text = replaceFindUsMap(text);
    if (text !== original) fs.writeFileSync(file, text);
  }
}
