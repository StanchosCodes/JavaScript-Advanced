function calc(arg1, arg2, operand)
{
    let result = 0;

    if (operand === '+')
    {
        result = arg1 + arg2;
    }
    else if (operand === '-')
    {
        result = arg1 - arg2;
    }
    else if (operand === '*')
    {
        result = arg1 * arg2;
    }
    else if (operand === '/')
    {
        result = arg1 / arg2;
    }
    else if (operand === '%')
    {
        result = arg1 % arg2;
    }
    else if (operand === '**')
    {
        result = arg1 ** arg2;
    }

    console.log(result);
}

calc(5, 6, '+');
calc(3, 5.5, '*');
calc(2, 3, '**');
calc(4, 2, '/');
calc(4, 3, '-');
calc(6, 2, '%');