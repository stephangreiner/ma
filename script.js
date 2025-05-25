

function xx_an_aus() {
  const elements = document.querySelectorAll(".xx");
  elements.forEach(element => {
    const currentDisplay = getComputedStyle(element).display;
    if (currentDisplay === "none") {
      element.style.display = "block";
      element.innerHTML = "testtesttest";
    } else {
      element.style.display = "none";
    }
  });
}



function id1() {
  const e = document.getElementById("x1.1");
  const greekText = "Παρὰ τοῦ πάππου Οὐήρου τὸ καλόηθες καὶ ἀόργητον.";
  e.style.color = "red";
  if (e.innerHTML.trim() !== "") {
    e.innerHTML = "";
  } else {
    e.innerHTML = greekText;
  }
}

function id2() {
  const e = document.getElementById("x1.2");
  e.innerHTML = "Ἀλλὰ καὶ τὸν ἄλλον ἔχοντα τὸν αὐτὸν πατέρα, ὃς ἦν ἐν τῷ οἴκῳ, οὐκ ἐπείρασεν αὐτὸν οὐδὲ ἐκώλυσε αὐτὸν τοῦτο ποιεῖν.";
  e.style.color = "blue";
}
function id3() {
  const e = document.getElementById("x1.3");
  e.innerHTML = "Ἐπεὶ δὲ ἔλαβεν τὸν πατέρα αὐτοῦ, ἐξῆλθεν εἰς τὴν ἑαυτοῦ γῆν, καὶ οὐκ ἐπείρασεν αὐτὸν οὐδὲ ἐκώλυσε αὐτὸν τοῦτο ποιεῖν.";
  e.style.color = "green";
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