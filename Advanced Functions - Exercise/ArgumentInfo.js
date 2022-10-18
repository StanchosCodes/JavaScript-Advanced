function solve(...params) {
    let result = {};

    for (let param of params) {
        let type = typeof(param);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        console.log(`${type}: ${param}`);
        result[type]++;
    }

    let resultOutput = '';

    for (let [type, value] of Object.entries(result)) {
        resultOutput += `${type} = ${value}\n`;
    }

    console.log(resultOutput.trimEnd());
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob'}, 3.333, 9.999);