function inventory(heroData) {
    let register = [];

    for (let hero of heroData) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        //items = items ? items.split(', ') : [];

        if (items !== undefined) { // for more readability
            items = items.split(', ');
        }
        else {
            items = [];
        }

        register.push({name, level, items});
    }

    console.log(JSON.stringify(register));
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);