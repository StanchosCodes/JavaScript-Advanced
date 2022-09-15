function check(num)
{
    let sum = Number(num.toString()[0]);
    let isSame = true;
    let firstDigit = num.toString()[0];

    for (let i = 1; i < num.toString().length; i++)
    {    
        let currDigit = Number(num.toString()[i]);
        
        if (currDigit != firstDigit)
        {
            isSame = false;
        }

        sum += Number(currDigit);
    }

    console.log(isSame);
    console.log(sum);
}

check(2222222);
check(1234);