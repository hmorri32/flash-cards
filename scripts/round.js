import Guess from "../scripts/guess";



function Round(deck) {
  this.deck          = deck;
  this.guesses       = [];
  this.guessCount    = 0;
  this.numberCorrect = 0;
}

Round.prototype.currentCard = function(){
  return this.deck.cards.shift()
}

Round.prototype.recordGuess = function(userGuess) {
  let guess = new Guess({response: userGuess, question: this.currentCard()})
  this.guesses.push(guess)
  this.guessCount ++;
}

Round.prototype.countCorrect = function(){
  for(var i = 0; i < this.guesses.length; i++){
    if(this.guesses[i].feedback() == "Correct!"){
      this.numberCorrect += 1;
    }
  }
}

Round.prototype.percentCorrect = function(){
  return this.numberCorrect / this.guessCount * 100 + "%";

}


export default Round
