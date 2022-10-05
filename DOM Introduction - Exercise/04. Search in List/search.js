function search() {
   let towns = Array.from(document.querySelectorAll("ul li"));
   let searchText = document.getElementById("searchText").value;
   let count = 0;
   
   for (let town of towns) {
      if (town.textContent.includes(searchText)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++;
      }
      else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = '';
      }
   }

   document.getElementById('result').textContent = `${count} matches found`;
}
