function calc(arg)
{
    if (typeof(arg) === 'number')
    {
        let area = Math.pow(arg, 2) * Math.PI;

        console.log(area.toFixed(2));
    }
    else
    {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`);
    }
}

calc(5);
calc('name');