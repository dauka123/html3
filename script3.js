var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    // Add a click event listener to each "accordion" element.
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        // Check if the "panel" is currently displayed.
        if (panel.style.display === "block") {
            // If it's displayed, hide it by setting its display property to "none."
            panel.style.display = "none";
        } else {
            // If it's hidden, show it by setting its display property to "block."
            panel.style.display = "block";
        }
    });
}
