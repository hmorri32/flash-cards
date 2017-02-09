import Guess from '../scripts/guess';

class Round {
  constructor(deck) {
    this.deck          = deck;
    this.guesses       = [];
    this.numberCorrect = 0;
  }

  currentCard() {
    return this.deck.cards.shift();
  }

  recordGuess(userGuess) {
    let guess = new Guess({
      response: userGuess,
      card: this.currentCard()
    });

    this.guesses.push(guess);

    if (guess.correct()) {
      this.numberCorrect += 1;
    }
  }

  // fix this thing

  percentCorrect() {
    return Math.floor(this.numberCorrect / this.guesses.length * 100) + '%';
  }
}

export default Round;
