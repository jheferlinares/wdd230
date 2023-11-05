function setTimestamp() {
    var currentTimestamp = new Date().toISOString();
    document.getElementById("timestamp").value = currentTimestamp;
}
setTimestamp();