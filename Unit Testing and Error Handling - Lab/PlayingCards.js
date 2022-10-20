function createCard(face, suit) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = ['S', 'H', 'D', 'C'];

    if (validCardFaces.indexOf(face.toString()) === -1) {
        throw new Error('Error');
    }
    if (validCardSuits.indexOf(suit) === -1) {
        throw new Error('Error');
    }

    switch(suit) {
        case 'S': suit = '\u2660'; break;
        case 'H': suit = '\u2665'; break;
        case 'D': suit = '\u2666'; break;
        case 'C': suit = '\u2663'; break;
    }

    return {
        face: face,
        suit: suit,
        toString() {
            return this.face + this.suit;
        }
    }
}

console.log(createCard('A', 'S').toString());
console.log(createCard('10', 'H').toString());
console.log(createCard('1', 'C').toString());