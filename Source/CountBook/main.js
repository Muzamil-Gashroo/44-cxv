let counter = 0;

function count() {
  counter++;
  document.getElementById("count-button").innerHTML = "Click: " + counter;

  if (counter >= 50) {

    document.getElementById("count-button").style.color = "white";
    document.getElementById("count-button").style.backgroundColor = "black";

  } else if (counter > 40) {
    document.getElementById("count-button").style.backgroundColor = "brown";
  } else if (counter > 35) {
    document.getElementById("count-button").style.backgroundColor = "violet";
  } else if (counter > 30) {
    document.getElementById("count-button").style.backgroundColor = "olive";
  } else if (counter > 25) {
    document.getElementById("count-button").style.backgroundColor = "pink";
  } else if (counter > 20) {
    document.getElementById("count-button").style.backgroundColor = "yellow";
  } else if (counter > 15) {
    document.getElementById("count-button").style.backgroundColor = "orange";
  } else if (counter > 10) {

    document.getElementById("count-button").style.color = "black";
    document.getElementById("count-button").style.backgroundColor = "white";

  } else if (counter > 5) {
    document.getElementById("count-button").style.backgroundColor = "purple";
  }
}
