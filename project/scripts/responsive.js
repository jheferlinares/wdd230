const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hambutton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
	var imagen = document.getElementById("banner");
  
	window.addEventListener("scroll", function() {
	  var scrollPos = window.scrollY;
	  var opacityValue = 1 - scrollPos / 500; // Ajusta el divisor para cambiar la velocidad del efecto
  
	  // Asegura que la opacidad esté dentro del rango [0, 1]
	  opacityValue = Math.min(1, Math.max(0, opacityValue));
  
	  // Aplica la opacidad al elemento de la imagen
	  imagen.style.opacity = opacityValue;
	});
  });