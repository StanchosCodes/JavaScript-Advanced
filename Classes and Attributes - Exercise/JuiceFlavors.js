function solve(input) {
    let bottles = new Map();
    let flavours = {};

    for (let info of input) {
        let [flavour, quantity] = info.split(' => ');
        quantity = Number(quantity);

        if (!flavours.hasOwnProperty(flavour)) {
            flavours[flavour] = 0;
        }

        flavours[flavour] += quantity;

        let fullBottles = 0;
        let leftOverJuice = 0;

        if (flavours[flavour] >= 1000) {
            fullBottles = Math.floor(flavours[flavour] / 1000);
            leftOverJuice = flavours[flavour] % 1000;
            flavours[flavour] = leftOverJuice;

            if (!bottles.hasOwnProperty(flavour)) {
                bottles[flavour] = 0;
            }
    
            bottles[flavour] += fullBottles;
        }
    }

    return Object.entries(bottles).map(x => x.join(' => ')).join('\n');
}

console.log(solve(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600',
'Strawberry => 549']));


console.log(solve(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678',
'Watermelon => 6789']));