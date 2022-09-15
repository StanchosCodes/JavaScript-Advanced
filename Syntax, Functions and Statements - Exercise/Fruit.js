function calc(type, weight, price)
{
    let weightInKg = weight / 1000;
    let neededMoney = weightInKg * price;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`)
}

calc('orange', 2500, 1.80);
calc('apple', 1563, 2.35);