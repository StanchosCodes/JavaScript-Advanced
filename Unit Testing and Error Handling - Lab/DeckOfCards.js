function printDeckOfCards(cards) {

    function createCard(face, suit) {
        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validCardSuits = ['S', 'H', 'D', 'C'];

        if (validCardFaces.indexOf(face.toString()) === -1) {
            throw new Error('Error');
        }
        if (validCardSuits.indexOf(suit) === -1) {
            throw new Error('Error');
        }

        switch (suit) {
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

    let resultArray = [];
    let incorrectCard = '';

    for(let card of cards) {
        let face = card.substring(0, card.length - 1);
        let suit = card[card.length - 1];

        try {
            resultArray.push(createCard(face, suit));
        } catch (error) {
            incorrectCard = card;
            break;
        }
    };
    
    if (resultArray.length < cards.length) {
        console.log(`Invalid card: ${incorrectCard}`);
    }
    else {
        console.log(resultArray.join(' '));
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);