function createObject(arr) {
    let resultObject = {};

    for (let i = 0; i < arr.length; i += 2) {
        resultObject[arr[i]] = Number(arr[i + 1]);
    }

    console.log(resultObject);
}

createObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

createObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);