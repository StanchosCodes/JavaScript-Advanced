function previusDay(year, month, day)
{
    let newDate = new Date(year, month - 1, day - 1);

    console.log(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`);
}

previusDay(2016, 9, 30);
previusDay(2016, 10, 1);