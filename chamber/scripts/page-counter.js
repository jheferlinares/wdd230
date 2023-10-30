document.addEventListener("DOMContentLoaded", function () {
    // Check if localStorage has a 'lastVisit' value
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = Date.now();

    if (!lastVisit) {
        // First visit
        localStorage.setItem("lastVisit", currentTime);
        document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the time difference
        const timeDifference = currentTime - lastVisit;
        const oneDayMilliseconds = 24 * 60 * 60 * 1000;

        if (timeDifference < oneDayMilliseconds) {
            // Less than a day
            document.getElementById("message").textContent = "Back so soon! Awesome!";
        } else {
            // More than a day
            const days = Math.floor(timeDifference / oneDayMilliseconds);
            const dayOrDays = days === 1 ? "day" : "days";
            document.getElementById("message").textContent = `You last visited ${days} ${dayOrDays} ago.`;
        }
        
        // Update the 'lastVisit' value in localStorage
        localStorage.setItem("lastVisit", currentTime);
    }
});