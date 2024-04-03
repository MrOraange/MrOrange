function ham() {
  let nav = document.querySelector('.navigations');
  let menu = document.querySelector('.ri-menu-line');
  let close = document.querySelector('.ri-close-line');
  
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    close.classList.add('ri-menu-line');
    close.classList.remove('ri-close-line');
  } else {
    nav.style.display = 'flex';
    nav.style.animation = 'popup 0.1s ease';
    menu.classList.add('ri-close-line');
    menu.classList.remove('ri-menu-line');
  }
}

let darkAdded, head, link;
function theme() {
  if (!darkAdded) {
    head = document.head;
    link = document.createElement("link"); 

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '/css/style-dark.css';

    head.appendChild(link);
    darkAdded = true;
  } else {
    head.removeChild(link);
    darkAdded = false;
  }
}