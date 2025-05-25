const g1_1 = "";



fetch('greek.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Converts JSON text into JavaScript object
  })
  .then(data => {
    // Access the JSON object here
    console.log(data);              // Logs the entire object 
    const g1_1 = data.g1_1;
    // Logs: Hello, Stefan!

    // Optional: use it in the DOM
    document.getElementById('output').textContent = data.greeting;
  })
  .catch(error => {
    console.error('Could not load JSON:', error);
  });


function tg1_1() {
  const e = document.getElementById("g1.1");
  e.style.color = "red";
  if (e.innerHTML.trim() !== "") {
    e.innerHTML = "";
  } else {
    e.innerHTML = g1_1;
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