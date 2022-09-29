function solve(arr) {
    let result = []; // will be array of town objects

    for (let i = 1; i < arr.length; i++) {
        let [Town, Latitude, Longitude] = arr[i].split(' | ');
        
        Town = Town.split('| ')[1]; // because the split will return empty string at 0 and the town at 1
        Latitude = Math.round(Number(Latitude) * 100) / 100;
        Longitude = Math.round(Number(Longitude.split(' |')[0]) * 100) / 100; // because the split will
        // return the longitude at 0 index and empty string at 1 index
        
        result.push({Town, Latitude, Longitude});
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

solve(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);