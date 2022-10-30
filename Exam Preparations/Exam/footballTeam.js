class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;

        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        // "{name}/{age}/{playerValue}"

        let buff = 'You successfully invite ';
        let namesArr = [];

        for (let player of footballPlayers) {
            let playerInfo = player.split('/');

            let name = playerInfo[0];
            let age = Number(playerInfo[1]);
            let value = Number(playerInfo[2]);

            let currPlayerIndex = this.invitedPlayers.findIndex(p => p.name === name);

            if (currPlayerIndex === -1) {
                this.invitedPlayers.push({ name: name, age: age, playerValue: value });
            }
            else {
                if (this.invitedPlayers[currPlayerIndex].playerValue < value) {
                    this.invitedPlayers[currPlayerIndex].playerValue = value;
                }
            }

            if (!namesArr.includes(name)) {
                namesArr.push(name);
            }
        }

        buff += namesArr.join(', ');

        return buff + '.';
    }

    signContract(selectedPlayer) {
        // "{name}/{playerOffer}"

        let playerInfo = selectedPlayer.split('/');

        let name = playerInfo[0];
        let offer = Number(playerInfo[1]);

        let currPlayerIndex = this.invitedPlayers.findIndex(p => p.name === name);

        if (currPlayerIndex === -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (this.invitedPlayers[currPlayerIndex].playerValue > offer) {
            let price = this.invitedPlayers[currPlayerIndex].playerValue;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${price - offer} million more are needed to sign the contract!`);
        }

        this.invitedPlayers[currPlayerIndex].playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        let currPlayerIndex = this.invitedPlayers.findIndex(p => p.name === name);

        if (currPlayerIndex === -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (this.invitedPlayers[currPlayerIndex].age < age) {
            let diff = age - this.invitedPlayers[currPlayerIndex].age;

            if (diff < 5) {
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
            }
            else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let buff = 'Players list:\n';

        for (let player of this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))) {
            // Player {name}-{playerValue}

            buff += `Player ${player.name}-${player.playerValue}\n`;
        }

        return buff.trimEnd();
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");

// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");

// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");

// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");

console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());