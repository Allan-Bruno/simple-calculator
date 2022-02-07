function msg() {
  alert("Click!");
}

function EventListener() {
  document.getElementById("dv1").addEventListener("click", msg);
}

window.addEventListener("load", EventListener);
