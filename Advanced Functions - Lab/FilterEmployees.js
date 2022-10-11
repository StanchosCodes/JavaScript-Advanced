function solve(data, criteria) {
    data = JSON.parse(data);
    let indexOfSeparator = criteria.indexOf('-');
    let searchedValue = '';
    let result = [];
    
    if (indexOfSeparator !== -1) {
        searchedValue = criteria.substring(indexOfSeparator + 1)
        criteria = criteria.substring(0, indexOfSeparator);
    }

    for (let i = 0; i < data.length; i++) {
        
        if (criteria === 'id' && searchedValue === data[i].id) {
            result.push(data[i]);
        }
        else if (criteria === 'first_name' && searchedValue === data[i].first_name) {
            result.push(data[i]);
        }
        else if (criteria === 'last_name' && searchedValue === data[i].last_name) {
            result.push(data[i]);
        }
        else if (criteria === 'email' && searchedValue === data[i].email) {
            result.push(data[i]);
        }
        else if (criteria === 'gender' && searchedValue === data[i].gender) {
            result.push(data[i]);
        }
        else if (criteria === 'all') {
            result.push(data[i]);
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(`${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`)
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    },
    {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`, 'gender-Male');