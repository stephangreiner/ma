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
function tg2_3() {
const e = document.getElementById("x2_3");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_3;
}
function tg2_4() {
const e = document.getElementById("x2_4");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_4;
}
function tg2_5() {
const e = document.getElementById("x2_5");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_5;
}
function tg2_6() {
const e = document.getElementById("x2_6");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_6;
}
function tg2_7() {
const e = document.getElementById("x2_7");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_7;
}
function tg2_8() {
const e = document.getElementById("x2_8");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_8;
}
function tg2_9() {
const e = document.getElementById("x2_9");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_9;
}
function tg2_10() {
const e = document.getElementById("x2_10");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_10;
}
function tg2_11() {
const e = document.getElementById("x2_11");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_11;
}
function tg2_12() {
const e = document.getElementById("x2_12");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_12;
}
function tg2_13() {
const e = document.getElementById("x2_13");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_13;
}
function tg2_14() {
const e = document.getElementById("x2_14");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_14;
}
function tg2_15() {
const e = document.getElementById("x2_15");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_15;
}
function tg2_16() {
const e = document.getElementById("x2_16");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g2_16;
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
  

