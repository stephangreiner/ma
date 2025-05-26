let g1_1 = "";
let g1_2 = "";
let g1_3 = "";


fetch('greek.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Converts JSON text into JavaScript object
  })
  .then(greek => {
    // Access the JSON object here
    console.log(greek);              // Logs the entire object 
   g1_1 = greek.g1_1;
    // Logs: Hello, Stefan!


  })
  .catch(error => {
    console.error('Could not load JSON:', error);
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
