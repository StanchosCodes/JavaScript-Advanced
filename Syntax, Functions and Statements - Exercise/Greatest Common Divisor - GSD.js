function gcd(a,b)
{
    while (true) {
        if (b == 0) 
        {
            console.log(a);
            break;
        }
        
        a %= b;
        
        if (a == 0)
        {
            console.log(b);
            break;
        }

        b %= a;
    }
}

gcd(15, 5);
gcd(2154, 458);