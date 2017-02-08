function Guess({ response, question }){
  this.response = response;
  this.question = question;
}

Guess.prototype.correct = function(){
  let { answer } = this.question;
   if(answer === this.response) {
     return true
   } else {
     return false
   }
}

Guess.prototype.feedback = function(){
  if(this.correct()){
    return "Correct!"
  } else {
    return "Incorrect!!!"
  }
}


export default Guess;
