class Guess {
  constructor({ response, card }){
    this.response = response;
    this.card = card;
  }

  correct() {
    let { answer } = this.card;
    return answer === this.response;
  }

  feedback() {
    return this.correct() ? 'Correct!' : 'Incorrect!!!';
  }
}

export default Guess;
