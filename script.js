let greekLoaded = false;
let longLoaded = false;
let hilaireLoaded = false;
let casaubonLoaded = false;

// Farbdefinitionen für aktive Buttons (einfach hier anpassen)
const activeColors = {
  greek: { color: "darkred" },
  long: {  color: "darkblue" },
  hilaire: { color: "green" },
  casaubon: { color: "orange" }
};

document.addEventListener('DOMContentLoaded', () => {
  // Greek JSON laden
  fetch('greek.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(greek => {
      for (let i = 1; i <= 17; i++) {
        window[`g1_${i}`] = greek[`g1_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`g2_${i}`] = greek[`g2_${i}`] || "";
        window[`g3_${i}`] = greek[`g3_${i}`] || "";
      }
      greekLoaded = true;
    })
    .catch(error => {
      console.error('Could not load greek.json:', error);
    });

  // Long JSON laden
  fetch('long.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(long => {
      for (let i = 1; i <= 17; i++) {
        window[`l1_${i}`] = long[`l1_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`l2_${i}`] = long[`l2_${i}`] || "";
        window[`l3_${i}`] = long[`l3_${i}`] || "";
      }
      longLoaded = true;
    })
    .catch(error => {
      console.error('Could not load long.json:', error);
    });

  // Hilaire JSON laden
  fetch('hilaire.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(hilaire => {
      for (let i = 1; i <= 17; i++) {
        window[`h1_${i}`] = hilaire[`h1_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`h2_${i}`] = hilaire[`h2_${i}`] || "";
        window[`h3_${i}`] = hilaire[`h3_${i}`] || "";
      }
      hilaireLoaded = true;
    })
    .catch(error => {
      console.error('Could not load hilaire.json:', error);
    });

  // Casaubon JSON laden
  fetch('casaubon.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(casaubon => {
      for (let i = 1; i <= 17; i++) {
        window[`c1_${i}`] = casaubon[`c1_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`c2_${i}`] = casaubon[`c2_${i}`] || "";
        window[`c3_${i}`] = casaubon[`c3_${i}`] || "";
      }
      casaubonLoaded = true;
    })
    .catch(error => {
      console.error('Could not load casaubon.json:', error);
    });

  // Event-Listener für Buch 1
  for (let i = 1; i <= 17; i++) {
    document.getElementById(`bg1_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x1_${i}`, window[`g1_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl1_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x1_${i}`, window[`l1_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh1_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x1_${i}`, window[`h1_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc1_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x1_${i}`, window[`c1_${i}`], "casaubon", e.currentTarget)
    );
  }

  // Event-Listener für Buch 2
  for (let i = 1; i <= 17; i++) {
    document.getElementById(`bg2_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x2_${i}`, window[`g2_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl2_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x2_${i}`, window[`l2_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh2_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x2_${i}`, window[`h2_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc2_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x2_${i}`, window[`c2_${i}`], "casaubon", e.currentTarget)
    );
  }

  // Event-Listener für Buch 3
  for (let i = 1; i <= 16; i++) {
    document.getElementById(`bg3_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x3_${i}`, window[`g3_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl3_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x3_${i}`, window[`l3_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh3_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x3_${i}`, window[`h3_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc3_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x3_${i}`, window[`c3_${i}`], "casaubon", e.currentTarget)
    );
  }
});

// Text ein-/ausblenden mit Farbänderung am Button
function toggleText(id, content, className, button) {
  const e = document.getElementById(id);
  if (!e) return;

  // Prüfen, ob der Button aktuell aktiv ist
  const isActive = button.dataset.active === "true";

  if (isActive) {
    // Text ausblenden
    e.innerHTML = "";
    button.dataset.active = "false";
    // Button Style zurücksetzen
    button.style.backgroundColor = "";
    button.style.color = "";
  } else {
    // Text einblenden
    e.innerHTML = `<span class="${className}">${content}</span>`;
    button.dataset.active = "true";
    // Button einfärben
    const colors = activeColors[className];
    button.style.backgroundColor = colors.background;
    button.style.color = colors.color;
  }
}

// Deutsch ein-/ausblenden
function de_an_aus() {
  toggleClassDisplay("de");
}

// Sprachbuttons ein-/ausblenden
function lang_an_aus() {
  toggleClassDisplay("bu_lang");
}

// Beliebige Klasse umschalten
function toggleClassDisplay(className) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(el => {
    el.style.display = (el.style.display === "none") ? "block" : "none";
  });
}

// Buchabschnitte ein-/ausblenden
function buchAnAus(id) {
  const e = document.getElementById(id);
  e.style.display = (e.style.display === "none") ? "block" : "none";
}

// Scrollposition beim Verlassen der Seite speichern
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// Scrollposition beim Laden der Seite wiederherstellen
window.addEventListener("load", () => {
  const scrollPos = localStorage.getItem("scrollPosition");
  if (scrollPos !== null) {
    window.scrollTo(0, parseInt(scrollPos, 10));
  }
});
