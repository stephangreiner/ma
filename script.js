let greekLoaded = false;

document.addEventListener('DOMContentLoaded', () => {
  // JSON laden
  fetch('greek.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(greek => {
      // Inhalte in globale Variablen schreiben
      for (let i = 1; i <= 17; i++) {
        window[`g1_${i}`] = greek[`g1_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`g2_${i}`] = greek[`g2_${i}`] || "";
      }

      greekLoaded = true;
    })
    .catch(error => {
      console.error('Could not load JSON:', error);
    });

  // Event-Listener für g1
  for (let i = 1; i <= 17; i++) {
    document.getElementById(`b1_${i}`)?.addEventListener("click", () =>
      toggleText(`x1_${i}`, window[`g1_${i}`])
    );
  }

  // Event-Listener für g2
  for (let i = 1; i <= 16; i++) {
    document.getElementById(`b2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`g2_${i}`])
    );
  }
});

// Text ein-/ausblenden
function toggleText(id, content) {
  const e = document.getElementById(id);
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : content;
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
