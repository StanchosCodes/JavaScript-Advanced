function sum(arg1, arg2)
{
    let n = Number(arg1);
    let m = Number(arg2);

    let sum = 0;

    for (let i = n; i <= m; i++)
    {
       sum += i;    
    }

    console.log(sum);
}

sum('1', '5');
sum('-8', '20');