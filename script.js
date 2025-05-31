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
      g1_7 = greek.g1_7;
      g1_8 = greek.g1_8;
      g1_9 = greek.g1_9;
      g1_10 = greek.g1_10;
      g1_11 = greek.g1_11;
      g1_12 = greek.g1_12;
      g1_13 = greek.g1_13;
      g1_14 = greek.g1_14;
      g1_15 = greek.g1_15;
      g1_16 = greek.g1_16;
      g1_17 = greek.g1_17;

      g2_1 = greek.g2_1;
      g2_2 = greek.g2_2;
      g2_3 = greek.g2_3;
      g2_4 = greek.g2_4;
      g2_5 = greek.g2_5;
      g2_6 = greek.g2_6;
      g2_7 = greek.g2_7;
      g2_8 = greek.g2_8;
      g2_9 = greek.g2_9;
      g2_10 = greek.g2_10;
      g2_11 = greek.g2_11;
      g2_12 = greek.g2_12;
      g2_13 = greek.g2_13;
      g2_14 = greek.g2_14;
      g2_15 = greek.g2_15;
      g2_16 = greek.g2_16;





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
function tg1_6() {
const e = document.getElementById("x1_6");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_6;
}
function tg1_7() {
const e = document.getElementById("x1_7");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_7;
}
function tg1_8() {
const e = document.getElementById("x1_8");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_8;
}
function tg1_9() {
const e = document.getElementById("x1_9");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_9;
}
function tg1_10() {
const e = document.getElementById("x1_10");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_10;
}
function tg1_11() {
const e = document.getElementById("x1_11");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_11;
}
function tg1_12() {
const e = document.getElementById("x1_12");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_12;
}
function tg1_13() {
const e = document.getElementById("x1_13");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_13;
}
function tg1_14() {
const e = document.getElementById("x1_14");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_14;
}
function tg1_15() {
const e = document.getElementById("x1_15");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_15;
}
function tg1_16() {
const e = document.getElementById("x1_16");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_16;
}
function tg1_17() {
const e = document.getElementById("x1_17");
e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_17;
}


function tg2_1() {
const e = document.getElementById("x2_1");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_1;
}
function tg2_2() {
 const e = document.getElementById("x2_2");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_2;
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
  

