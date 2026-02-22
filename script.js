function showDate() {
    const now = new Date();
    document.getElementById("dateOutput").innerHTML =
        "Current Date & Time: " + now.toString();
}

document.getElementById("year").innerHTML =
    "© " + new Date().getFullYear();