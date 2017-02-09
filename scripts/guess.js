class Guess {
  constructor({ response, question }){
    this.response = response;
    this.question = question;
  }
  correct() {
    let { answer } = this.question;
    return answer === this.response ? true : false;
  }
  feedback() {
    return this.correct() ? 'Correct!' : 'Incorrect!!!';
  }
}

export default Guess;
