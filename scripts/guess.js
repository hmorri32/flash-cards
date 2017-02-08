class Guess {
  constructor({ response, question }){
    this.response = response;
    this.question = question;
  }
  correct(){
    let { answer } = this.question;
     if(answer === this.response) {
       return true
     } else {
       return false
     }
  }
  feedback(){
    if(this.correct()){
      return "Correct!"
    } else {
      return "Incorrect!!!"
    }
  }
}

export default Guess;
