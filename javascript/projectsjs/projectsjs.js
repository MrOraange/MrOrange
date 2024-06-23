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
   