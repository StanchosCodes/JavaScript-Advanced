function sorting(names) {
    names.sort((a, b) => a.localeCompare(b));

    for (let i = 1; i <= names.length; i++) {
        console.log(`${i}.${names[i - 1]}`);
    }
}

sorting(["John", "Bob", "Christina", "Ema"]);
sorting(["John"]);
sorting([""]);