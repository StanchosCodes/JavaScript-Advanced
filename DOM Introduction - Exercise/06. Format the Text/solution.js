function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');
  output.innerHTML = "";

  let sentences = input.split('.').filter(word => word.length > 0);

  for (let i = 0; i < sentences.length; i += 3) { // through the sentences with step 3
    let paragraphArray = [];
    for (let j = 0; j < 3; j++) { //getting every sentence from the 3 that we got from the outer loop
      if (sentences[i + j]) {
        paragraphArray.push(sentences[i + j].trim());
      }
    }
    let result = paragraphArray.join('. ') + '.';
    output.innerHTML += `<p>${result}</p>`;
  }
}