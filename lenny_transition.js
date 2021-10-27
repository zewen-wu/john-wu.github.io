
function move_lenny() {
  const grad_back = document.querySelector(".intro-background");
  grad_back.style.opacity = "0";

  this.classList.add("hidden-lenny");
  /* TODO: find better way to add listener on end of lenny transition */
  lenny.addEventListener("transitionend", open_gallery);
}

function open_gallery() {
  window.open("gallery.html", "_self")
}

const lenny = document.querySelector(".lenny");
lenny.addEventListener("click", move_lenny);