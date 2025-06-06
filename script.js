let greekLoaded = false;
let longLoaded = false;
let hilaireLoaded = false;
let casaubonLoaded = false;


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
      }
      longLoaded = true;
    })
    .catch(error => {
      console.error('Could not load long.json:', error);
    });

  // hilaire JSON laden
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
      }
      hilaireLoaded = true;
    })
    .catch(error => {
      console.error('Could not load hilaire.json:', error);
    });


  // casaubon JSON laden    
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
      }
      casaubonLoaded = true;
    })
    .catch(error => {
      console.error('Could not load causaubon.json:', error);
    });





  // Event-Listener für Buch1
  for (let i = 1; i <= 17; i++) {
    document.getElementById(`bg1_${i}`)?.addEventListener("click", () =>
      toggleText(`x1_${i}`, window[`g1_${i}`])
    );
    document.getElementById(`bl1_${i}`)?.addEventListener("click", () =>
      toggleText(`x1_${i}`, window[`l1_${i}`])
    );
    document.getElementById(`hg1_${i}`)?.addEventListener("click", () =>
      toggleText(`x1_${i}`, window[`h1_${i}`])
    );
    document.getElementById(`cl1_${i}`)?.addEventListener("click", () =>
      toggleText(`x1_${i}`, window[`c1_${i}`])
    );
  }

  // Event-Listener für Buch 2
  for (let i = 1; i <= 17; i++) {
    document.getElementById(`bg2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`g2_${i}`])
    );
    document.getElementById(`bl2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`l2_${i}`])
    );
    document.getElementById(`hg2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`h2_${i}`])
    );
    document.getElementById(`cl2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`c2_${i}`])
    );
  }



    // Event-Listener für Buch 3
  for (let i = 1; i <= 16; i++) {
    document.getElementById(`bg2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`g2_${i}`])
    );
    document.getElementById(`bl2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`l2_${i}`])
    );
    document.getElementById(`hg2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`h2_${i}`])
    );
    document.getElementById(`cl2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`c2_${i}`])
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

// Scrollposition beim Verlassen der Seite speichern
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// Beim Laden der Seite zur gespeicherten Position scrollen
document.addEventListener("DOMContentLoaded", () => {
  const scrollPos = localStorage.getItem("scrollPosition");
  if (scrollPos !== null) {
    window.scrollTo(0, parseInt(scrollPos, 10));
  }
});


const buttons = document.querySelectorAll('.bu_lang');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});