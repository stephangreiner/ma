let greekLoaded = false;

document.addEventListener('DOMContentLoaded', () => {
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
      document.getElementById("b1_1").disabled = false;
    })
    .catch(error => {
      console.error('Could not load JSON:', error);
    });

  // Event Listener hinzufügen – nachdem das DOM vollständig geladen wurde
  for (let i = 1; i <= 17; i++) {
    document.getElementById(`b1_${i}`)?.addEventListener("click", () =>
      toggleText(`x1_${i}`, window[`g1_${i}`])
    );
  }

  for (let i = 1; i <= 16; i++) {
    document.getElementById(`b2_${i}`)?.addEventListener("click", () =>
      toggleText(`x2_${i}`, window[`g2_${i}`])
    );
  }
});

function toggleText(id, content) {
  const e = document.getElementById(id);
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : content;
}




function de_an_aus() {
  const elements = document.querySelectorAll(".de");
  elements.forEach(element => {
    element.style.display = (element.style.display === "none") ? "block" : "none";
  });
}

function lang_an_aus() {
  const elements = document.querySelectorAll(".bu_lang"); // Note the dot for class
  elements.forEach(element => {
    element.style.display = (element.style.display === "none") ? "block" : "none";
  });
}


function b1ausblenden(){
  const e = document.getElementById ("Buch1")
  e.style.display = (e.style.display === "none") ? "block" : "none";
  };

  function b2ausblenden(){
  const e = document.getElementById ("Buch2")
  e.style.display = (e.style.display === "none") ? "block" : "none";
  };

function b3ausblenden(){
  const e = document.getElementById ("Buch3")
  e.style.display = (e.style.display === "none") ? "block" : "none";
  };

  function b4ausblenden(){
  const e = document.getElementById ("Buch4")
  e.style.display = (e.style.display === "none") ? "block" : "none";
  };

  function b5ausblenden(){
  const e = document.getElementById ("Buch5")
  e.style.display = (e.style.display === "none") ? "block" : "none";
  };

  function b6ausblenden(){
  const e = document.getElementById ("Buch6")
  e.style.display = (e.style.display === "none") ? "block" : "none";
  };
  

// Scroll-Position speichern, wenn die Seite verlassen wird
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// Beim Laden der Seite zur gespeicherten Position scrollen
document.addEventListener("DOMContentLoaded", () => {
  const savedScroll = localStorage.getItem("scrollPosition");
  if (savedScroll !== null) {
    window.scrollTo(0, parseInt(savedScroll, 10));
  }
});