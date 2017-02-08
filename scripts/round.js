import Guess from "../scripts/guess";



function Round(deck) {
  this.deck = deck;
  this.guesses = [];
  this.guessCount = 0;
}

Round.prototype.currentCard = function(){
  return this.deck.cards.shift()
}

Round.prototype.recordGuess = function(userGuess) {
  let guess = new Guess({response: userGuess, question: this.currentCard()})
  this.guesses.push(guess)
  this.guessCount ++;
}

export default Round
