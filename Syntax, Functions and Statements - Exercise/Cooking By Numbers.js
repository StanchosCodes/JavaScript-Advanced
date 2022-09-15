function cook(entry, act1, act2, act3, act4, act5)
{
    let operations = new Array(act1, act2, act3, act4, act5);
    let result = Number(entry);

    for (let i = 0; i < operations.length; i++)
    {
        let currOperation = operations[i];

        if (currOperation === 'chop')
        {
            result /= 2;
        }
        else if (currOperation === 'dice')
        {
            result = Math.sqrt(result);
        }
        else if (currOperation === 'spice')
        {
            result++;
        }
        else if (currOperation === 'bake')
        {
            result *= 3;
        }
        else if (currOperation === 'fillet')
        {
            result *= 0.80;
        }

        console.log(result);
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');