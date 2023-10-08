var Actualurl = window.location.href;

var enlNav = document.querySelectorAll("nav a");

enlNav.forEach(function (enl) {
  if (enl.href === Actualurl) {
    enl.classList.add("active");
  }
});