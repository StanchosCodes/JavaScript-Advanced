function editElement(reference, match, replacer) {

    // let text = reference.textContent; // works, but judge is not working with it

    // text = text.replaceAll(match, replacer);
    
    // reference.textContent = text;

    while(reference.textContent.includes(match)) {
        reference.textContent = reference.textContent.replace(match, replacer);
    }
}