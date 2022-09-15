function speeding(speed, area)
{
    let status;
    let difference = 0;
    let speedLimit = 0;

    switch (area)
    {
        case 'motorway':
            speedLimit = 130;
            if (speed > 130)
            {
                difference = speed - 130;
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed > 90)
            {
                difference = speed - 90;
            }
            break;
        case 'city':
            speedLimit = 50;
            if (speed > 50)
            {
                difference = speed - 50;
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (speed > 20)
            {
                difference = speed - 20;
            }
            break;
    }

    if (difference == 0)
    {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    else
    {
        if (difference <= 20)
        {
            status = 'speeding';
        }
        else if (difference <= 40)
        {
            status = 'excessive speeding';
        }
        else
        {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

speeding(40, 'city');
speeding(21, 'residential');
speeding(120, 'interstate');
speeding(200, 'motorway');