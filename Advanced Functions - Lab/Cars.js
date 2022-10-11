function solve(input) {
    let currObject = {};

    let innerObject = {
        create: (name1, inherits, name2) => (currObject[name1] = inherits ? 
            Object.create(currObject[name2]) : {}),
        
        set: (name1, key, value) => (currObject[name1][key] = value),

        print: name1 => {
            let resultToPrint = [];

            for (let key in currObject[name1]) {
                resultToPrint.push(`${key}:${currObject[name1][key]}`)
            }

            console.log(resultToPrint.join(','));
        }
    }

    for (let data of input) {
        let [command, name, key, value] = data.split(' ');
        innerObject[command](name, key, value);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);