function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = '';

  let textArray = text.split(' ');

  for (let i = 0; i < textArray.length; i++) {
    textArray[i] = textArray[i].toLowerCase();
  }

  if (convention === "Camel Case") {
    result = textArray[0];
    for (let i = 1; i < textArray.length; i++) {
        result += textArray[i][0].toUpperCase() + textArray[i].substring(1);
    }
  }
  else if (convention === "Pascal Case") {
    textArray.forEach(word => {
      result += word[0].toUpperCase() + word.substring(1);
    });
  }
  else {
    result = "Error!";
  }

  document.getElementById("result").textContent = result;
}