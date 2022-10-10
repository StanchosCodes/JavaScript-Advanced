function solve() {
  let buttons = document.querySelectorAll('button');
  let textAreas = document.querySelectorAll('textarea');

  let generateButton = buttons[0];
  let buyButton = buttons[1];

  let inputArea = textAreas[0];
  let outputArea = textAreas[1];

  // document.querySelectorAll('tbody tr')[0].querySelectorAll('td input')[0].disabled = false;

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate() {
    let input = JSON.parse(inputArea.value);

    for (let item of input) {
      let tableRow = document.createElement('tr');
      let imageTd = document.createElement('td');
      let image = document.createElement('img');

      image.setAttribute('src', item.img);

      imageTd.appendChild(image);
      tableRow.appendChild(imageTd);

      let nameTd = document.createElement('td');
      let nameP = document.createElement('p');

      nameP.textContent = item.name;

      nameTd.appendChild(nameP);
      tableRow.appendChild(nameTd);

      let priceTd = document.createElement('td');
      let priceP = document.createElement('p');

      priceP.textContent = item.price;

      priceTd.appendChild(priceP);
      tableRow.appendChild(priceTd);

      let decTd = document.createElement('td');
      let decP = document.createElement('p');

      decP.textContent = item.decFactor;

      decTd.appendChild(decP);
      tableRow.appendChild(decTd);

      let checkboxTd = document.createElement('td');
      let checkboxInput = document.createElement('input');

      checkboxInput.type = 'checkbox';
      // checkboxInput.disabled = true;

      checkboxTd.appendChild(checkboxInput);
      tableRow.appendChild(checkboxTd);

      let tableBody = document.getElementsByTagName('tbody')[0];

      tableBody.appendChild(tableRow);
    }
  }

  function buy() {
    let names = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    let tableRows = document.querySelectorAll('tbody tr');

    for (let row of tableRows) {
      if (row.querySelector("input[type = checkbox]:checked")) // if it return element it will be true
      {
        names.push(row.querySelectorAll('td')[1].children[0].textContent);
        totalPrice += Number(row.querySelectorAll('td')[2].children[0].textContent);
        totalDecFactor += Number(row.querySelectorAll('td')[3].children[0].textContent);
      }
    }

    averageDecFactor = totalDecFactor / names.length;

    let output = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`;
    outputArea.value = output;
  }
}