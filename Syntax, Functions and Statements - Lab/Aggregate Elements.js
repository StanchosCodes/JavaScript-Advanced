function operate(array)
{
    console.log(aggregate(array, x => x));
    console.log(aggregate(array, x => 1 / x));
    console.log(aggregate(array, x => x.toString()));

    function aggregate(array, func)
    {
        let result = func(array[0]);

        for(let i = 1; i < array.length; i++)
        {
            result += func(array[i]);
        }

        return result;
    }
}

operate([1, 2, 4]);
operate([2, 4, 8, 16]);