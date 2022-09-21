function action(commands) {
    let resultArray = [];
    let initialNum = 1;

    commands.forEach(command => {
        if (command === 'add') {
            resultArray.push(initialNum);
            initialNum++;
        }
        else if (command === 'remove') {
            resultArray.pop();
            initialNum++;
        }
    });

    if (resultArray.length === 0) {
        console.log('Empty');
    }
    else {
        resultArray.forEach(num => console.log(num));
    }
}

action(['add', 'add', 'add', 'add']);