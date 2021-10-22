
function move_lenny() {
  const grad_back = document.querySelector(".grad-back");
  grad_back.style.opacity = "0";

  this.classList.add("hidden-lenny");
  lenny.addEventListener("transitionend", open_gallery);
}

function open_gallery() {
  window.open("gallery.html", "_self")
}

const lenny = document.querySelector(".lenny");
lenny.addEventListener("click", move_lenny);