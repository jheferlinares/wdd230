document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); 
  
    if (currentDay >= 0 && currentDay <= 8) {
      const banner = document.getElementById("chamberBanner");
      banner.style.display = "block";
  
      const closeBannerBtn = document.getElementById("closeBannerBtn");
      closeBannerBtn.addEventListener("click", function() {
        banner.style.display = "none";
      });
    }
  });