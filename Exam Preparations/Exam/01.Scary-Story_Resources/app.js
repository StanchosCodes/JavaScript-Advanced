window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', takeStory);

  let previewSection = document.getElementById('preview-list');
  let firstNameField = document.getElementById('first-name');
  let lastNameField = document.getElementById('last-name');
  let ageField = document.getElementById('age');
  let storyTitleField = document.getElementById('story-title');
  let genreField = document.getElementById('genre');
  let storyField = document.getElementById('story');
  let mainDiv = document.getElementById('main');

  function takeStory(event) {
    event.preventDefault();
    
    if (!firstNameField.value || !lastNameField.value || !ageField.value || !storyTitleField.value || !storyField.value) {
      return;
    }
    
    event.target.disabled = true;

    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let age = ageField.value;
    let storyTitle = storyTitleField.value;
    let genre = genreField.value;
    let story = storyField.value;

    firstNameField.value = '';
    lastNameField.value = '';
    ageField.value = '';
    storyTitleField.value = '';
    storyField.value = '';

    sendValues(firstName, lastName, age, storyTitle, genre, story);
  }

  function sendValues(firstName, lastName, age, storyTitle, genre, story) {
    let liItem = document.createElement('li');
    liItem.classList.add('story-info');

    let article = document.createElement('article');

    let articleContent = `<h4>Name: ${firstName} ${lastName}</h4>\n` +
    `<p>Age: ${age}</p>\n` +
    `<p>Title: ${storyTitle}</p>\n` +
    `<p>Genre: ${genre}</p>\n` +
    `<p>${story}</p>`;

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';

    editBtn.addEventListener('click', editStory);
    saveBtn.addEventListener('click', saveStory);
    deleteBtn.addEventListener('click', deleteStory);

    article.innerHTML += articleContent;
    liItem.appendChild(article);
    liItem.appendChild(saveBtn);
    liItem.appendChild(editBtn);
    liItem.appendChild(deleteBtn);

    previewSection.appendChild(liItem);
  }

  function editStory(event) {
    let elementsArr = Array.from(event.target.parentElement.children[0].children);

    let namesArr = elementsArr[0].textContent.split(' ');
    let firstName = namesArr[1];
    let lastName = namesArr[2];
    let age = elementsArr[1].textContent;
    let title = elementsArr[2].textContent;
    let genre = elementsArr[3].textContent;
    let story = elementsArr[4].textContent;

    age = age.substring(5);
    title = title.substring(7);
    genre = genre.substring(7);

    firstNameField.value = firstName;
    lastNameField.value = lastName;
    ageField.value = age;
    storyTitleField.value = title;
    genreField.value = genre;
    storyField.value = story;
    
    publishBtn.disabled = false;
    event.target.parentElement.remove();
  }

  function saveStory() {
    let h1Tag = document.createElement('h1');
    h1Tag.textContent = 'Your scary story is saved!';

    let divChildrenArr = Array.from(mainDiv.children);

    divChildrenArr.forEach(child => child.remove());
    mainDiv.appendChild(h1Tag);
  }

  function deleteStory(event) {
    publishBtn.disabled = false;
    event.target.parentElement.remove();
  }
}
