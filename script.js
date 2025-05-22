

function xx_an_aus() {
  const elements = document.querySelectorAll(".xx");
  elements.forEach(element => {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
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