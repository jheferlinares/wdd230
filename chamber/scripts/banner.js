document.addEventListener("DOMContentLoaded", function() {
    // Get the current day
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  
    // Check if the current day is Monday, Tuesday, or Wednesday
    if (currentDay >= 1 && currentDay <= 3) {
      // Show the banner
      const banner = document.getElementById("chamberBanner");
      banner.style.display = "block";
  
      // Add event listener to close the banner
      const closeBannerBtn = document.getElementById("closeBannerBtn");
      closeBannerBtn.addEventListener("click", function() {
        banner.style.display = "none";
      });
    }
  });