function Guess({ response, question }){
  this.response = response;
  this.question = question;
}

Guess.prototype.correct = function(){
  let {answer} = this.question;
  return answer === this.response ? true : false;
}




export default Guess;
