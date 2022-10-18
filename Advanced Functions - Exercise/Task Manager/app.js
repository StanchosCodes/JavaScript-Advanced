function solve() {
    document.getElementsByTagName('form')[0].addEventListener('submit', creatTask);
    let sectionsArr = document.getElementsByTagName('section');
    let openSection = sectionsArr[1];
    let inProgressSection = sectionsArr[2];
    let completeSection = sectionsArr[3];

    function creatTask(event) {
        event.preventDefault();

        let form = event.target;
        let title = form.elements[0].value;
        let description = form.elements[1].value;
        let date = form.elements[2].value;

        if (title.length === 0 || description.length === 0 || date.length === 0) {
            return;
        }

        let newArticle = createArticle(title, description, date, {class: "green", text: "Start"}, {class: "red", text: "Delete"});
        openSection.children[1].appendChild(newArticle);
    }

    function createArticle(titleParam, descriptionParam, dataParam, button1,  button2) {
        let buttons = createButtons(button1, button2);
        let article = document.createElement('article');

        let htmlData = `<h3>${titleParam}</h3>` +
                        `<p>Description: ${descriptionParam}</p>` +
                        `<p>Due Date: ${dataParam}</p>` +
                                buttons;

        article.innerHTML = htmlData;

        article.addEventListener('click', dispatchHandler)
        return article;
    }

    function createButtons(btn1Info, btn2Info) {
        let buttons = `<div class = flex>` +
                            `<button class = "${btn1Info.class}">${btn1Info.text}</button>` +
                            `<button class = "${btn2Info.class}">${btn2Info.text}</button>` +
                      `</div>`;
        
        return buttons;
    }

    function dispatchHandler(event) {
        if (event.target.tagName !== "BUTTON") {
            return;
        }

        let commandObj = commands();
        let text = event.target.innerText.toLowerCase();
        
        commandObj[text](event);
    }

    function commands() {
        return {
            start: function (event) {
                inProgressSection.children[1].appendChild(event.currentTarget);
                event.target.parentElement.remove();
                let buttons = createButtons({class: "red", text: "Delete"}, {class: "orange", text: "Finish"});
                event.currentTarget.innerHTML += buttons;
            },
            delete: function (event) {
                event.currentTarget.remove();
             // event.target.parentElement.parentElement.remove(); // other option to remove it
            },
            finish: function (event) {
                completeSection.children[1].appendChild(event.currentTarget);
                event.target.parentElement.remove();
            }
        }
    }
}