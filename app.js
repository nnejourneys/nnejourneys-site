const tours = [
  {
    title: "Cycle Tour of Assam",
    subtitle: "The Brahmaputra Explorer",
    category: "cycling",
    tag: "Cycling",
    duration: "6 to 16 days",
    image: "assets/images/tours/cycling/brahmaputra-explorer/cycle-tour-of-assam-brahmaputra-explore.webp",
    href: "cycle-tour-assam.html",
  },
  {
    title: "Cycling in Eastern Arunachal",
    subtitle: "Watershed of the Brahmaputra",
    category: "cycling",
    tag: "Cycling",
    duration: "6 to 12 days",
    region: "Assam & Arunachal Pradesh",
    image: "assets/images/tours/cycling/watershed-brahmaputra/cycle-tour-of-eastern-arunachal-pradesh.webp",
    href: "watershed-of-the-brahmaputra.html",
  },
  {
    title: "Cycle Tour of Meghalaya",
    subtitle: "The Abode of clouds",
    category: "cycling",
    duration: "6 to 12 days",
    image: "assets/images/tours/cycling/abode-of-clouds/Cycle-tour-of-meghalaya-india.webp",
    href: "cycle-tour-of-meghalaya.html",
  },
  {
    title: "Cycling Tour of Arunachal Pradesh",
    subtitle: "The Mishmi Hills Explorer",
    category: "cycling",
    duration: "11 to 15 days",
    region: "Assam & Arunachal Pradesh",
    image: "assets/tours/Anini-Cycle-Tour-Mishmi-hills.webp",
    href: "cycle-tour-of-mishmi-hills-arunachal-pradesh.html",
  },
  {
    title: "Cycling in Western Arunachal",
    subtitle: "The Road to Tawang",
    category: "cycling",
    duration: "10 to 15 days",
    region: "Assam & Arunachal Pradesh",
    image: "assets/tours/Cycle-tour-western-arunachal-pradesh.webp",
    href: "road-to-tawang.html",
  },
  {
    title: "Walkers Tour of Meghalaya",
    subtitle: "Walks in the Clouds",
    category: "trekking",
    duration: "5 to 9 days",
    image: "assets/tours/Walkers-tour-of-meghalaya.webp",
    href: "walking-tour-meghalaya.html",
  },
  {
    title: "Walking Holiday in Eastern Arunachal Pradesh",
    subtitle: "Walks in India's far east",
    category: "trekking",
    duration: "7 to 12 days",
    image: "assets/tours/Eastern-Arunachal-Pradesh-Walking-Holiday.webp",
    href: "walking-holiday-eastern-arunachal-pradesh.html",
  },
  {
    title: "The Rainforest Trek",
    subtitle: "Trekking in Namdapha National Park",
    category: "trekking",
    duration: "6 days",
    image: "assets/tours/trekking-in-namdapha-rainforest-arunachal-pradesh.webp",
    href: "trekking-in-namdapha-rainforest.html",
  },
  {
    title: "Aeyo Valley Trek",
    subtitle: "Trekking in Arunachal Pradesh",
    category: "trekking",
    duration: "10 to 14 days",
    image: "assets/tours/Aeyo-valley-easternmost-trek-of-himalayas.webp",
    href: "aeyo-valley-trek.html",
  },
  {
    title: "Assam Family Holiday",
    subtitle: "Jewels of the Brahmaputra",
    category: "family",
    duration: "6 to 10 days",
    image: "assets/tours/Assam-Family-Holiday.webp",
    href: "family-holiday-assam.html",
  },
  {
    title: "Meghalaya and Assam Family Holiday",
    subtitle: "Nature, Culture, Adventure",
    category: "family",
    duration: "7 to 12 days",
    image: "assets/tours/Meghalaya-Assam-Family-Holiday.webp",
    href: "family-holiday-meghalaya-assam.html",
  },
  {
    title: "Western Arunachal Family Holiday",
    subtitle: "",
    category: "family",
    duration: "7 to 10 days",
    region: "Assam & Arunachal Pradesh",
    image: "assets/tours/Western-Arunachal-Family-Holiday.webp",
    href: "family-holiday-western-arunachal.html",
  },
  {
    title: "Eastern Arunachal Family Adventure",
    subtitle: "Adventure, Nature, Culture",
    category: "family",
    tag: "Family",
    duration: "7 to 12 days",
    region: "Assam & Arunachal Pradesh",
    image: "assets/tours/Eastern-Arunachal-Pradesh-Family-Holiday.webp",
    href: "family-adventure-eastern-arunachal.html",
  },
  {
    title: "Multi-Activity Tour of Assam",
    subtitle: "Adventure, Wildlife & Culture",
    category: "multi",
    duration: "6 to 9 days",
    image: "assets/tours/Activity-tour-assam.webp",
    href: "multi-activity-holiday-assam.html",
  },
  {
    title: "Multi-Activity Tour of Meghalaya",
    subtitle: "Hike, Cycle, Nature & Culture",
    category: "multi",
    duration: "6 to 10 days",
    image: "assets/tours/Meghalaya-multi-activity-tour.webp",
    href: "multi-activity-tour-meghalaya.html",
  },
  {
    title: "Multi-Activity Tour of Eastern Arunachal Pradesh",
    subtitle: "Hike, Bike, Raft & Culture",
    category: "multi",
    duration: "Custom duration",
    region: "Assam & Arunachal Pradesh",
    image: "assets/tours/Eastern-arunachal-pradesh-activity-tour.webp",
    href: "multi-activity-tour-eastern-arunachal-pradesh.html",
  },
  {
    title: "Trans-Meghalaya Motorcycle & Overland Tour",
    subtitle: "Backroads of Meghalaya",
    category: "motorcycle",
    duration: "7 to 10 days",
    image: "assets/tours/Motorcycle-tour-of-meghalaya.webp",
    href: "motorcycle-overland-trans-meghalaya.html",
  },
  {
    title: "Motorcycle Tour of Western Arunachal Pradesh",
    subtitle: "High roads of the Monyul",
    category: "motorcycle",
    duration: "8 to 12 days",
    image: "assets/tours/motorcycle-tour-of-western-arunachal-pradesh-tawang.webp",
    href: "motorcycle-overland-western-arunachal-pradesh.html",
  },
  {
    title: "Motorcycle Tour of 4 States Northeast India",
    subtitle: "The Eastern Arc",
    category: "motorcycle",
    duration: "15 to 17 days",
    region: "Assam, Arunachal Pradesh, Nagaland & Meghalaya",
    image: "assets/tours/Motorcycle-tour-of-4-States-Northeast-India.webp",
    href: "motorcycle-tour-4-states-northeast-india.html",
  },
  {
    title: "5 States Northeast India Motorcycle Tour",
    subtitle: "South of the Brahmaputra",
    category: "motorcycle",
    duration: "16 to 20 days",
    region: "Assam, Meghalaya, Tripura, Mizoram & Nagaland",
    image: "assets/tours/motorcycle-tour-of-5-states-northeast-india.webp",
    href: "motorcycle-tour-5-states-northeast-india.html",
  },
  {
    title: "Tribes of the East",
    subtitle: "A Journey across the eastern states",
    category: "culture",
    duration: "12 to 18 days",
    region: "Assam, Nagaland & Arunachal Pradesh",
    image: "assets/tours/tribes-of-the-east-hero.webp",
    href: "tribes-of-the-east.html",
  },
  {
    title: "People of the Brahmaputra Valley",
    subtitle: "Exploring the Brahmaputra Valley",
    category: "culture",
    duration: "10 days",
    region: "Assam & Arunachal Pradesh",
    image: "assets/tours/people-of-the-brahmaputra-valley-hero.webp",
    href: "people-of-the-brahmaputra-valley.html",
  },
  {
    title: "Arunachal Unravelled",
    subtitle: "Of Buddhism and Animism",
    category: "culture",
    duration: "8 to 16 days",
    region: "Arunachal Pradesh",
    image: "assets/tours/arunachal-unravelled-hero.webp",
    href: "arunachal-unravelled.html",
  },
  {
    title: "Meghalaya Youth Expedition",
    subtitle: "Rainfall, root bridges and local economy",
    category: "youth-travel",
    tag: "Youth Expedition",
    duration: "7 days",
    region: "Meghalaya",
    image: "assets/tours/youth-educational-travel-meghalaya-northeast-india.webp",
    href: "meghalaya-youth-expedition.html",
  },
  {
    title: "Arunachal Pradesh Active Youth Expedition",
    subtitle: "Active learning through rivers, forests and communities",
    category: "youth-travel",
    tag: "Youth Expedition",
    duration: "Custom duration",
    region: "Arunachal Pradesh",
    image: "assets/tours/Youth-expedition-arunachal-pradesh.webp",
    href: "arunachal-pradesh-active-youth-expedition.html",
  },
];

const departureTours = [
  {
    title: "The Road to Tawang",
    subtitle: "Cycling in Western Arunachal Pradesh",
    category: "departure",
    tag: "Cycling",
    duration: "2 - 10 Oct 2026 and 20 - 28 Feb 2027 · 9 days",
    image: "assets/tours/departure-road-to-tawang-2026.webp",
    href: "road-to-tawang-2026.html",
  },
  {
    title: "Watershed of the Brahmaputra",
    subtitle: "Cycling in Eastern Arunachal Pradesh",
    category: "departure",
    tag: "Cycling",
    duration: "17 - 23 Oct 2026 · 7 days",
    image: "assets/tours/departure-watershed-of-the-brahmaputra-2026.webp",
    href: "watershed-of-the-brahmaputra-2026.html",
  },
  {
    title: "Eastern Arunachal Multi-Activity Tour",
    subtitle: "Hike, Bike, Raft",
    category: "departure",
    tag: "Multi-Activity",
    duration: "24-30 Oct 2026 · 7 days",
    image: "assets/tours/departure-eastern-arunachal-multi-activity-tour-2026.webp",
    href: "eastern-arunachal-multi-activity-tour-2026.html",
  },
  {
    title: "Walkers Tour of Meghalaya",
    subtitle: "Walks in the Clouds",
    category: "departure",
    tag: "Walks & Treks",
    duration: "15 - 21 Nov 2026 · 7 days",
    image: "assets/tours/departure-walkers-tour-of-meghalaya-2026.webp",
    href: "walkers-tour-of-meghalaya-2026.html",
  },
  {
    title: "The Hornbill Express",
    subtitle: "Cycling from Shillong to Kohima",
    category: "departure",
    tag: "Cycling",
    duration: "28 Nov - 6 Dec 2026 · 9 days",
    image: "assets/tours/departure-hornbill-express-2026.webp",
    href: "hornbill-express-2026.html",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".site-footer");
  if (footer && !document.querySelector(".back-to-top-wrap")) {
    const wrap = document.createElement("div");
    wrap.className = "back-to-top-wrap";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "back-to-top";
    button.textContent = "Back to top";
    button.setAttribute("aria-label", "Scroll back to the top of the page");

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    wrap.appendChild(button);
    footer.parentNode.insertBefore(wrap, footer);
  }
});

const grid = document.querySelector("#tour-grid");
const filters = document.querySelectorAll(".filter[data-filter]");
const departureFilters = document.querySelectorAll("[data-departure-filter]");
const departureCards = document.querySelectorAll("[data-departure-category]");
const departureEmpty = document.querySelector(".departure-empty");
const tourCount = document.querySelector("#tour-count");
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const allHeroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const allHeroDots = Array.from(document.querySelectorAll(".hero-dots button"));
const heroArrows = document.querySelectorAll("[data-slide-direction]");
const hero = document.querySelector(".hero");
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");
const testimonialTrack = document.querySelector(".testimonial-grid");
const testimonialCards = testimonialTrack ? Array.from(testimonialTrack.querySelectorAll("article")) : [];
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let activeHeroSlide = 0;
let heroSlideTimer;
let activeTestimonialSlide = 0;
let testimonialTimer;
let lightboxTrigger = null;
const useLiteMobileHero = window.matchMedia("(max-width: 640px)").matches;
const mobileHeroKeepIndexes = [0, 2, 3];
let heroSlides = allHeroSlides;
let heroDots = allHeroDots;

if (useLiteMobileHero && allHeroSlides.length > mobileHeroKeepIndexes.length) {
  heroSlides = allHeroSlides.filter((slide, index) => mobileHeroKeepIndexes.includes(index));
  heroDots = allHeroDots.filter((dot, index) => mobileHeroKeepIndexes.includes(index));

  allHeroSlides.forEach((slide, index) => {
    if (!mobileHeroKeepIndexes.includes(index)) slide.remove();
  });

  allHeroDots.forEach((dot, index) => {
    if (!mobileHeroKeepIndexes.includes(index)) dot.remove();
  });
}

function ensureHeroSlideLoaded(index) {
  const slide = heroSlides[index];
  if (!slide) return;
  const queuedSrc = slide.dataset.src;
  if (queuedSrc && !slide.getAttribute("src")) {
    slide.setAttribute("src", queuedSrc);
  }
}

function labelFor(category) {
  return {
    cycling: "Cycling",
    trekking: "Walks and Treks",
    multi: "Multi-Activity",
    motorcycle: "Motorcycle & Overland",
    family: "Family",
    culture: "Nature & Culture",
    "youth-travel": "Youth Travel",
  }[category];
}

function regionFor(tour) {
  if (tour.region) return tour.region;

  const text = `${tour.title} ${tour.subtitle}`.toLowerCase();
  if (text.includes("meghalaya") && text.includes("assam")) return "Meghalaya & Assam";
  if (text.includes("meghalaya")) return "Meghalaya";
  if (text.includes("sikkim") || text.includes("west bengal")) return "Sikkim & West Bengal";
  if (text.includes("namdapha")) return "Assam & Arunachal";
  if (text.includes("arunachal") || text.includes("tawang") || text.includes("mishmi") || text.includes("aeyo")) return "Arunachal Pradesh";
  if (text.includes("assam") || text.includes("brahmaputra")) return "Assam";
  return "Northeast India";
}

function imageAltFor(tour) {
  if (tour.alt) return tour.alt;

  const region = regionFor(tour);
  const category = tour.tag || labelFor(tour.category) || "tour";
  return `${tour.title}, ${category} in ${region}`;
}

function renderTours(filter = "all") {
  if (!grid) return;

  const visibleTours =
    filter === "all"
      ? tours
      : tours.filter((tour) => tour.category === filter || (tour.tag || "").toLowerCase() === filter);
  if (tourCount) {
    const label = visibleTours.length === 1 ? "journey" : "journeys";
    tourCount.textContent = `Showing ${visibleTours.length} ${label}`;
  }

  grid.innerHTML = visibleTours
    .map(
      (tour) => `
        <article class="tour-card">
          <div class="tour-card-media">
            <img src="${tour.image}" alt="${imageAltFor(tour)}" loading="lazy" width="1280" height="720" />
            <span class="tag">${tour.tag || labelFor(tour.category)}</span>
          </div>
          <div class="body">
            <h3>${tour.title}</h3>
            <p>${tour.subtitle}</p>
            <div class="tour-meta">
              <span>${tour.duration}</span>
              <span>${regionFor(tour)}</span>
            </div>
            ${
              tour.href
                ? `<a class="tour-link" href="${tour.href}">View tour</a>`
                : `<a class="tour-link" href="mailto:nnejourneys@gmail.com?subject=${encodeURIComponent(`Enquiry: ${tour.title}`)}">Enquire</a>`
            }
          </div>
        </article>
      `
    )
    .join("");
}

function similarTourHeading(category) {
  return {
    cycling: "More cycling tours",
    trekking: "More walks and treks",
    multi: "More multi-activity tours",
    motorcycle: "More motorcycle and overland tours",
    family: "More family holidays",
    culture: "More nature and culture tours",
    departure: "Other fixed departures",
  }[category] || "Similar tours";
}

function renderSimilarTours() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const currentDeparture = departureTours.find((tour) => tour.href === currentPath);
  const currentTour = tours.find((tour) => tour.href === currentPath);
  const category = currentDeparture ? "departure" : currentTour?.category;

  if (!category || document.querySelector(".similar-tours")) return;

  const source = currentDeparture ? departureTours : tours;
  const matches = source
    .filter((tour) => tour.href && tour.href !== currentPath && tour.category === category)
    .slice(0, 3);

  if (!matches.length) return;

  const section = document.createElement("section");
  section.className = "similar-tours section-pad";
  section.innerHTML = `
    <div class="section-heading compact">
      <p class="eyebrow">Similar tours</p>
      <h2>${similarTourHeading(category)}</h2>
    </div>
    <div class="similar-tour-grid">
      ${matches
        .map(
          (tour) => `
            <article class="similar-tour-card">
              <img src="${tour.image}" alt="${imageAltFor(tour)}" loading="lazy" width="1280" height="720" />
              <div>
                <span>${tour.tag || labelFor(tour.category)}</span>
                <h3>${tour.title}</h3>
                <p>${tour.subtitle}</p>
                <a href="${tour.href}">${tour.duration}</a>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const contactForm = document.querySelector(".tour-contact-form");
  const footer = document.querySelector(".site-footer");
  if (contactForm) {
    contactForm.insertAdjacentElement("afterend", section);
  } else if (footer) {
    footer.insertAdjacentElement("beforebegin", section);
  }
}

function showHeroSlide(index) {
  if (!heroSlides.length) return;

  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  ensureHeroSlideLoaded(activeHeroSlide);
  ensureHeroSlideLoaded((activeHeroSlide + 1) % heroSlides.length);
  heroSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeHeroSlide;
    slide.classList.toggle("active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });
  heroDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeHeroSlide;
    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function startHeroSlider() {
  if (heroSlides.length < 2 || reducedMotionQuery.matches) return;

  hero?.classList.add("js-slider-ready");
  ensureHeroSlideLoaded(0);
  ensureHeroSlideLoaded(1);
  clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    showHeroSlide(activeHeroSlide + 1);
  }, 3000);
}

function moveHeroSlide(direction) {
  showHeroSlide(activeHeroSlide + direction);
  startHeroSlider();
}

heroDots.forEach((dot, visibleIndex) => {
  dot.addEventListener("click", () => {
    showHeroSlide(visibleIndex);
    startHeroSlider();
  });
});

heroArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    moveHeroSlide(arrow.dataset.slideDirection === "next" ? 1 : -1);
  });
});

function visibleTestimonialCards() {
  if (window.matchMedia("(max-width: 640px)").matches) return 1;
  if (window.matchMedia("(max-width: 980px)").matches) return 2;
  return 3;
}

function updateTestimonialSlider() {
  if (!testimonialTrack || !testimonialCards.length) return;

  const visibleCards = visibleTestimonialCards();
  const maxIndex = Math.max(0, testimonialCards.length - visibleCards);
  activeTestimonialSlide = Math.min(activeTestimonialSlide, maxIndex);

  const gap = parseFloat(window.getComputedStyle(testimonialTrack).gap) || 0;
  const cardWidth = testimonialCards[0].getBoundingClientRect().width;
  testimonialTrack.style.transform = `translateX(-${activeTestimonialSlide * (cardWidth + gap)}px)`;
}

function startTestimonialSlider() {
  if (!testimonialTrack || testimonialCards.length <= visibleTestimonialCards() || reducedMotionQuery.matches) return;

  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    const visibleCards = visibleTestimonialCards();
    const maxIndex = Math.max(0, testimonialCards.length - visibleCards);
    activeTestimonialSlide = activeTestimonialSlide >= maxIndex ? 0 : activeTestimonialSlide + 1;
    updateTestimonialSlider();
  }, 4500);
}

let testimonialResizeFrame;
window.addEventListener("resize", () => {
  cancelAnimationFrame(testimonialResizeFrame);
  testimonialResizeFrame = requestAnimationFrame(updateTestimonialSlider);
}, { passive: true });

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTours(button.dataset.filter);
    if (grid && button.dataset.filter) {
      const url = new URL(window.location.href);
      if (button.dataset.filter === "all") {
        url.searchParams.delete("filter");
      } else {
        url.searchParams.set("filter", button.dataset.filter);
      }
      window.history.replaceState({}, "", url);
    }
  });
});

function applyDepartureFilter(selectedButton) {
  if (!departureCards.length) return;

  if (!selectedButton) {
    departureFilters.forEach((item) => item.classList.remove("active"));
    departureCards.forEach((card) => {
      card.hidden = false;
    });
    if (departureEmpty) {
      departureEmpty.hidden = true;
    }
    return;
  }

  const filter = selectedButton.dataset.departureFilter;
  let visibleCount = 0;

  departureFilters.forEach((item) => item.classList.toggle("active", item === selectedButton));
  departureCards.forEach((card) => {
    const isVisible = card.dataset.departureCategory === filter;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (departureEmpty) {
    departureEmpty.hidden = visibleCount > 0;
  }
}

departureFilters.forEach((button) => {
  button.addEventListener("click", () => {
    applyDepartureFilter(button);
  });
});

function initialTourFilter() {
  if (!grid || !filters.length) return "all";

  const filter = new URLSearchParams(window.location.search).get("filter") || "all";
  const selected = Array.from(filters).find((button) => button.dataset.filter === filter);
  filters.forEach((button) => button.classList.toggle("active", button === (selected || filters[0])));
  return selected?.dataset.filter || "all";
}

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open navigation");
  });
});

galleryItems.forEach((image) => {
  image.parentElement.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;

    lightboxTrigger = image.parentElement;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose?.focus();
  });
});

function closeLightbox() {
  if (!lightbox || !lightbox.classList.contains("open")) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxTrigger?.focus();
  lightboxTrigger = null;
}

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && lightbox?.classList.contains("open")) {
    event.preventDefault();
    lightboxClose?.focus();
  }

  if (event.key !== "Escape") return;

  closeLightbox();
  if (header?.classList.contains("open")) {
    header.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open navigation");
    toggle?.focus();
  }
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
renderTours(initialTourFilter());
renderSimilarTours();
applyDepartureFilter(document.querySelector("[data-departure-filter].active"));
showHeroSlide(0);
startHeroSlider();
updateTestimonialSlider();
startTestimonialSlider();
