function solve(arr) {
    let result = [];

    let mainInner = (function innerFunc() { // assigning mainInner with the
        // function innerFunc wich returns an object
        return { // the object that will work with the input and output the result
            add: (string) => result.push(string),
            remove: (string) => result = result.filter(e => e !== string),
            print: () => console.log(result.join(','))
        }
    })(); // we have to call it imediatly with '()' syntax because otherwise it will be an object
    // because it is assigned with innerFunc that returns an object

    for (let data of arr) {
        let [command, word] = data.split(' '); // getting the command and the string that the object
        // above will work with
        mainInner[command](word); // mainInner returns an object so we can call it by a property of the
        // object by using indexing breckets and giving it the word(string) that it will work with
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);