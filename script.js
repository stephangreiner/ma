for (let i = 1; i <= 17; i++) {
  window[`g1_${i}`] = "";
}

let greekLoaded = false;

document.addEventListener('DOMContentLoaded', () => {
  fetch('greek.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(greek => {
      g1_1 = greek.g1_1;
      g1_2 = greek.g1_2;
      g1_3 = greek.g1_3;
      g1_4 = greek.g1_4;
      g1_5 = greek.g1_5;
      g1_6 = greek.g1_6;
      greekLoaded = true;
      document.getElementById("b1_1").disabled = false;
    })
    .catch(error => {
      console.error('Could not load JSON:', error);
    });
});

function tg1_1() {
  if (!greekLoaded) {
    console.warn("Greek text not loaded yet.");
    return;
  }
const e = document.getElementById("x1_1");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_1;
}

function tg1_2() {
 const e = document.getElementById("x1_2");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_2;
}

function tg1_3() {
const e = document.getElementById("x1_3");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_3;
}

function tg1_4() {
 const e = document.getElementById("x1_4");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_4;
}

function tg1_5() {
const e = document.getElementById("x1_5");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_5;
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
  

