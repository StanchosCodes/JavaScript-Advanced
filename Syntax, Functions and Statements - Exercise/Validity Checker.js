function check(x1, y1, x2, y2)
{
    let x1Y1ToBegining = 0;
    let x2Y2ToBegining = 0;
    let x1Y1ToX2Y2 = 0;

    x1Y1ToBegining = Math.sqrt(((x1 - 0) ** 2) + ((y1 - 0) ** 2));
    x2Y2ToBegining = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
    x1Y1ToX2Y2 = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));

    let isX1Y1Valid = Number.isInteger(x1Y1ToBegining);
    let isX2Y2Valid = Number.isInteger(x2Y2ToBegining);
    let isX1Y1ToX2Y2Valid = Number.isInteger(x1Y1ToX2Y2);

    if (isX1Y1Valid)
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isX2Y2Valid)
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isX1Y1ToX2Y2Valid)
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

check(3, 0, 0, 4);
check(2, 1, 1, 1);