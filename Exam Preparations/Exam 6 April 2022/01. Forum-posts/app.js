window.addEventListener("load", solve);

function solve() {
    let publishBtn = document.getElementById('publish-btn');
    let titleInput = document.getElementById('post-title');
    let categoryInput = document.getElementById('post-category');
    let contentInput = document.getElementById('post-content');
    let ulToAppendTo = document.getElementById('review-list');
    let ulPublished = document.getElementById('published-list');
    let clearBtn = document.getElementById('clear-btn');

    let liItem = document.createElement('li');
    liItem.classList.add('rpost');

    let editBtn = document.createElement('button');
    let approveBtn = document.createElement('button');

    editBtn.classList.add('action-btn', 'edit');
    approveBtn.classList.add('action-btn', 'approve');

    editBtn.innerText = 'Edit';
    approveBtn.innerText = 'Approve';

    publishBtn.addEventListener('click', appendUl);
    editBtn.addEventListener('click', editValues);
    approveBtn.addEventListener('click', approveValues);
    clearBtn.addEventListener('click', clearPosts);

    function appendUl() {
        if (!titleInput.value || !categoryInput.value || !contentInput.value) {
            return;
        }

        let title = titleInput.value;
        let category = categoryInput.value;
        let content = contentInput.value;

        let article = '<article>\n' +
            `<h4>${title}</h4>\n` +
            `<p>Category: ${category}</p>\n` +
            `<p>Content: ${content}</p>\n` +
            '</article>';

        liItem.innerHTML = article;
        liItem.appendChild(approveBtn);
        liItem.appendChild(editBtn);

        ulToAppendTo.appendChild(liItem);

        titleInput.value = '';
        categoryInput.value = '';
        contentInput.value = '';
    }

    function editValues(event) {
        // Take the values again because they are now out of scope and are unaccecable (event.target.parentElement)
        let articleChildren = event.target.parentElement.getElementsByTagName('article')[0].children;

        let title = articleChildren[0].textContent;
        let category = articleChildren[1].textContent;
        let content = articleChildren[2].textContent;

        titleInput.value = title;
        categoryInput.value = category.substring(10);
        contentInput.value = content.substring(9);

        //ulToAppendTo.removeChild(liItem); // works the same
        liItem.remove(); // as this one
    }

    function approveValues() {
        liItem.removeChild(editBtn);
        liItem.removeChild(approveBtn);
        ulPublished.appendChild(liItem);
    }

    function clearPosts() {
        ulPublished.removeChild(liItem);
    }
}