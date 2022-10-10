function create(words) {
   for (let word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none';

      div.addEventListener('click', showParagraph);
      div.appendChild(paragraph);

      document.getElementById('content').appendChild(div);
   }

   function showParagraph(event) {
      if (event.target.nodeName === 'P')
      {
         return;
      }
      event.target.children[0].style.display = 'block';
   }
}