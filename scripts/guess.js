function Guess({ response, question }){
  this.response = response;
  this.question = question;
}

Guess.prototype.correct = function(){
  let {answer} = this.question;
  return response === this.response ? true : false;
}

Guess.prototype.feedback = function(){

}




export default Guess;
