function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value;
      let allRows = Array.from(document.querySelectorAll('tbody tr'));

      for (let row of allRows) {
         if (row.innerText.includes(input)) {
            row.className = 'select'; // because if it is select it will turn yellow by the css file
         }
         else {
            row.classList.remove('select');
         }
      }
   }
}