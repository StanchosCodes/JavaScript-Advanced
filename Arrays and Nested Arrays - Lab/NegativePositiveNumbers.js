function sortArray(arr) {
    let newArr = [];
    
    arr.forEach(element => {
        if (element < 0)
        {
            newArr.unshift(element);
        }
        else
        {
            newArr.push(element);
        }
    });

    newArr.forEach(num => {
        console.log(num);
    });
}

sortArray([7, -2, 8, 9]);
sortArray([3, -2, 0, -1]);