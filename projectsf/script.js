function urlConvert() {
  let search = document.getElementById("sq").value;
  let queryPlus = search.replace(/\+/g, '%2B');
  let querySpace = queryPlus.replace(/ /g, '+');
  queryFinal = 'https://google.com/search?q=' + querySpace;
  window.location.href = queryFinal;
}
function enter(event) {
  if (event.key === "Enter") {
    urlConvert();
  }
}