function changeText() {
    const pElement = document.getElementById("text");
    const windowWidth = window.innerWidth;

    if (windowWidth <= 999) {
        pElement.textContent = "Small";
	} else if (windowWidth <= 1999) {
			pElement.textContent = "Medium";
    } else {
        pElement.textContent = "Large";
    }
}

window.addEventListener('load', changeText);
window.addEventListener('resize', changeText);
