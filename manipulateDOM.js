//req. 5 functions manipulate 5 div elements w IDs setting bg

document.getElementById("d1").addEventListener("click", clickEvent);

function clickEvent() {
  document.getElementById("d1").innerHTML = "<h3>clicked, used once</h3>";
}

document.getElementById("d2").addEventListener("mouseover", mouseoverEvent);

function mouseoverEvent() {
  document.getElementById("d2").innerHTML = "<h3>mouseover, used once</h3>";
}

document.getElementById("d3").addEventListener("wheel", wheelEvent);

function wheelEvent() {
  document.getElementById("d3").innerHTML = "<h3>wheel, used once</h3>";
}

document.getElementById("d4").addEventListener("mouseout", mouseoutEvent);

function mouseoutEvent() {
  document.getElementById("d4").innerHTML = "<h3>mouse moved out of div placement, used once</h3>";
}

document.getElementById("d5").addEventListener("mouseenter", mouseenterEvent);

function mouseenterEvent() {
  document.getElementById("d5").innerHTML = "<h3>mouse entered div placement, used once</h3>";
}