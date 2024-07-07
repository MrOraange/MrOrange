//google
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
//table-gen
function tableG() {
      let n = document.querySelector('.tableInput').value;
      if (n=="") {
        alert('Please type something before printing');
      } else {
        let tableDiv = document.querySelector('.table');
      tableDiv.innerHTML = "";
      for (let i = 1; i <= 10; i++) {
        tableDiv.innerHTML += n + ' × ' + i + ' = ' + n*i +'<br>';
      }
      }
    }