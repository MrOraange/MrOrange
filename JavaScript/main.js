//Function for menu bar
function myFunction() {
  var x = document.getElementById("menulink");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Theme toggle function
function toggleCSS() {
    var styleLink = document.querySelector('link[href="/styles/style-dark.css"]');

    if (styleLink) {
        // If the link exists, remove it
        styleLink.remove();
    } else {
        // If the link doesn't exist, add it
        styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.type = 'text/css';
        styleLink.href = '/styles/style-dark.css';

        document.head.appendChild(styleLink);
    }
}

// Assuming you have an anchor element with the ID "toggleLink"
var toggleLink = document.getElementById("toggleLink");

// Attach the click event to the anchor
if (toggleLink) {
    toggleLink.addEventListener("click", toggleCSS);
}