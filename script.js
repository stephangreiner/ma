let g1_1 = "";
let g1_2 = "";
let g1_3 = "";
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
      greekLoaded = true;
    })
    .catch(error => {
      console.error('Could not load JSON:', error);
    });
});


function tg1_1() {
  const e = document.getElementById("x1_1");

  if (e.innerHTML.trim() !== "") {
    e.innerHTML = "";
  } else {
    e.innerHTML = g1_1;
  }
}


function tg1_2() {
  const e = document.getElementById("x1_2");

  if (e.innerHTML.trim() !== "") {
    e.innerHTML = "";
  } else {
    e.innerHTML = g1_2;
  }
}

function tg1_3() {
  const e = document.getElementById("x1_3");

  if (e.innerHTML.trim() !== "") {
    e.innerHTML = "";
  } else {
    e.innerHTML = g1_3;
  }
}

function tg1_1() {
  if (!greekLoaded) {
    console.warn("Greek text not loaded yet.");
    return;
  }

  const e = document.getElementById("x1_1");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_1;
}

function tg1_2() {
  if (!greekLoaded) {
    console.warn("Greek text not loaded yet.");
    return;
  }

  const e = document.getElementById("x1_2");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_2;
}

function tg1_3() {
  if (!greekLoaded) {
    console.warn("Greek text not loaded yet.");
    return;
  }

  const e = document.getElementById("x1_3");
  e.innerHTML = e.innerHTML.trim() !== "" ? "" : g1_3;
}
  document.getElementById("b1_1").disabled = false;

function de_an_aus() {
  const elements = document.querySelectorAll(".de");
  elements.forEach(element => {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
