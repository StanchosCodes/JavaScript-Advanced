function extract(content) {
    let elementText = document.getElementById(content).textContent;

    let pattern = /\(([^)]+)\)/g;
    
    let allResults = elementText.matchAll(pattern);
    let matches = [];

    for (let text of allResults) {
        matches.push(text[1]); 
    }

    let result = matches.join('; ');

    return result;
}