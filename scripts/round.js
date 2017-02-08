import Guess from "../scripts/guess";

class Round {
  constructor(deck) {
    this.deck          = deck;
    this.guesses       = [];
    this.guessCount    = 0;
    this.numberCorrect = 0;
  }
  currentCard(){
    return this.deck.cards.shift()
  }
  recordGuess(userGuess){
    let guess = new Guess({response: userGuess, question: this.currentCard()})
    this.guesses.push(guess)
    this.guessCount ++;
  }
  countCorrect(){
    for(var i = 0; i < this.guesses.length; i++){
      if(this.guesses[i].feedback() == "Correct!"){
        this.numberCorrect += 1;
      }
    }
  }
  percentCorrect(){
    return this.numberCorrect / this.guessCount * 100 + "%";
  }
}

export default Round
