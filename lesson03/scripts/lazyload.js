function updateCopyrightYear() {
    const copyrightYearElement = document.getElementById("copyright-year");
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = currentYear;
}

function updateLastModifiedDate() {
    const lastModifiedDateElement = document.getElementById("last-modified-date");
    const lastModified = document.lastModified;
    lastModifiedDateElement.textContent = lastModified;
}

updateCopyrightYear();
updateLastModifiedDate();