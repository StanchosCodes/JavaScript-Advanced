function square(size = 5)
{
    for (let i = 0; i < size; i++)
    {
        console.log('* '.repeat(size));
    }
}

square(3);
square(1);
square(7);
square(5);
square();