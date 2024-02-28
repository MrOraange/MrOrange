// Hamburger Function
function myFunction() {
  var menu = document.getElementsByClassName("topmenu")[0];
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Theme toggle function
function toggleCSS() {
  var styleLink = document.querySelector('link[href="/styles/style-dark.css"]');

  if (styleLink) {styleLink.remove();}
  else {
    styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.type = 'text/css';
    styleLink.href = '/styles/style-dark.css';

    document.head.appendChild(styleLink);
  }
}
var toggleLink = document.getElementById("toggleLink");
if (toggleLink) {
  toggleLink.addEventListener("click", toggleCSS);
}

//Function scroll
function handleScroll(elementClass, scrollThreshold) {
    var menu = document.querySelector('.' + elementClass);

    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > scrollThreshold) {
            menu.classList.add(elementClass + '-scroll');
        } else {
            menu.classList.remove(elementClass + '-scroll');
        }
    });
}
// Usage
handleScroll('topbar', 200);
handleScroll('topline', 200);
handleScroll('topmenu', 100); 