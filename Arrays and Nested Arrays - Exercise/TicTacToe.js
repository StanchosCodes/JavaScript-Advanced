function play(commands) {
    let dashboard = [[false, false, false],

                     [false, false, false],

                     [false, false, false]];

    let isFirstPlayer = true;

    for (let coordinates of commands) {
        let [row, col] = coordinates.split(' ');

        if (dashboard[row][col]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        let marker = isFirstPlayer ? 'X' : 'O';

        dashboard[row][col] = marker;

        if (checkForWin(dashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            printDashboard(dashboard);
            return;
        }

        if (!checkFreeSpace(dashboard)) {
            console.log("The game ended! Nobody wins :(");
            printDashboard(dashboard);
            return;
        }

        isFirstPlayer = !isFirstPlayer;
    }

    function checkForWin(dashboard, marker) {
        for (let row = 0; row < dashboard.length; row++) {
            if (dashboard[row][0] === marker && // check if a row is done
                dashboard[row][1] === marker &&
                dashboard[row][2] === marker) {
                return true;
            }
            else if (dashboard[0][row] === marker && // check if a column is done
                dashboard[1][row] === marker &&
                dashboard[2][row] === marker) {
                return true;
            }
            else if (dashboard[0][0] === marker && // check if main diagonal is done
                dashboard[1][1] === marker &&
                dashboard[2][2] === marker) {
                return true;
            }
            else if (dashboard[0][2] === marker && // check if secondary diagonal is done
                dashboard[1][1] === marker &&
                dashboard[2][0] === marker) {
                return true;
            }
        }
    }
    
    function checkFreeSpace(dashboard) {
        for (let row = 0; row < dashboard.length; row++) {
            for (let col = 0; col < dashboard[row].length; col++) {
                if (!dashboard[row][col]) {
                    return true;
                }
            }
        }
    
        return false;
    }
    
    function printDashboard(dashboard) {
        dashboard.forEach(row => console.log(row.join('\t')));
    }
}

play(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
console.log('END!');
play(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
console.log('END!');
play(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);