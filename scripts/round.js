import Guess from "../scripts/guess";

class Round {
  constructor(deck) {
    this.deck          = deck;
    this.guesses       = [];
    this.numberCorrect = 0;
  }
  currentCard(){
    return this.deck.cards.shift();
  }
  recordGuess(userGuess){
    let guess = new Guess({response: userGuess, question: this.currentCard()});
    this.guesses.push(guess);

    if(this.guess === this.currentCard()){
      this.numberCorrect += 1;
    }
  }
  percentCorrect(){
    return this.numberCorrect / this.guesses.length * 100 + '%';
  }
}

export default Round;
