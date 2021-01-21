const button = document.getElementById("btn");
button.addEventListener("click", function() {
    if (document.body.classList.contains("lightmode")) {
        document.body.classList.remove("lightmode");
        document.body.classList.add("darkmode");
    } else {
        document.body.classList.remove("darkmode");
        document.body.classList.add("lightmode")
    }
});